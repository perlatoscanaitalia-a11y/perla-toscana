import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { checkSeo } from './check-seo.mjs';

async function copyHtml(source, target) {
  await mkdir(target, { recursive: true });
  for (const entry of await readdir(source, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      // Only page directories are needed: image bytes are validated against public/.
      if (!['images', '_astro'].includes(entry.name)) await copyHtml(join(source, entry.name), join(target, entry.name));
    } else if (entry.name.endsWith('.html') || entry.name === 'sitemap.xml') {
      await writeFile(join(target, entry.name), await readFile(join(source, entry.name)));
    }
  }
}

test('SEO gate validates generated output and rejects technical regressions', async (t) => {
  const fixture = await mkdtemp(join(tmpdir(), 'perla-seo-'));
  const publicRoot = resolve('public');
  try {
    await copyHtml(resolve('dist'), fixture);
    await t.test('valid generated site passes', async () => {
      const result = await checkSeo(fixture, publicRoot);
      assert.deepEqual(result.failures, []);
      assert.equal(result.rentalCount, 7);
    });
    const cases = [
      ['missing property schema', 'en/index.html', (html) => html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/, ''), /expected exactly one VacationRental/],
      ['inconsistent capacity', 'en/index.html', (html) => html.replace('"value":8', '"value":9'), /occupancy, bedrooms or bathrooms inconsistent/],
      ['unverified social identity', 'en/index.html', (html) => html.replace(/"sameAs":\[[^\]]*\]/, '"sameAs":["https://example.com/unverified"]'), /unverified sameAs/],
      ['nonreciprocal archive hreflang', 'en/guides/index.html', (html) => html.replace('hreflang="it" href="https://perla-toscana.it/it/guide/"', 'hreflang="it" href="https://perla-toscana.it/guide/"'), /nonreciprocal hreflang group/],
      ['wrong canonical', 'en/index.html', (html) => html.replace('rel="canonical" href="https://perla-toscana.it/en/"', 'rel="canonical" href="https://perla-toscana.it/it/"'), /incorrect or duplicate canonical/],
      ['incorrect image dimensions', 'en/index.html', (html) => html.replace('property="og:image:width" content="1800"', 'property="og:image:width" content="1"'), /OG dimensions do not match file/],
      ['missing image metadata', 'en/index.html', (html) => html.replace(/<meta property="og:image:height"[^>]*>/, ''), /missing or duplicate og:image:height/],
      ['missing image file', 'en/index.html', (html) => html.replace('property="og:image" content="https://perla-toscana.it/images/perla-toscana/perla-toscana-hero-camera-principale-9.jpg"', 'property="og:image" content="https://perla-toscana.it/images/missing-seo-image.jpg"'), /invalid OG image/],
      ['sitemap disagrees with HTML', 'sitemap.xml', (xml) => xml.replace(/<xhtml:link[^>]*hreflang="en"[^>]*\/>/, ''), /HTML\/sitemap hreflang mismatch/]
    ];
    for (const [name, route, mutate, expected] of cases) {
      await t.test(name, async () => {
        const file = join(fixture, route);
        const original = await readFile(file, 'utf8');
        const changed = mutate(original);
        assert.notEqual(changed, original, 'fixture mutation must apply');
        await writeFile(file, changed);
        try {
          const result = await checkSeo(fixture, publicRoot);
          assert.ok(result.failures.some((message) => expected.test(message)), result.failures.join('\n'));
        } finally { await writeFile(file, original); }
      });
    }
  } finally {
    const rel = relative(resolve(tmpdir()), resolve(fixture));
    assert.ok(!rel.startsWith('..') && !isAbsolute(rel) && rel.startsWith('perla-seo-'));
    await rm(fixture, { recursive: true });
  }
});
