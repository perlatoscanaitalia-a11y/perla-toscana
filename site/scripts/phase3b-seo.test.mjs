import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const site = 'https://perla-toscana.it';
const readPage = (route) => readFile(join('dist', route, 'index.html'), 'utf8');
const jsonLd = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .flatMap((match) => JSON.parse(match[1])).flatMap((node) => node['@graph'] || node);

async function collectPages(dir = 'dist') {
  const result = new Map();
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory() && !['images', '_astro'].includes(entry.name)) {
      for (const [route, html] of await collectPages(file)) result.set(route, html);
    } else if (entry.name === 'index.html') {
      const route = '/' + relative('dist', dir).replaceAll('\\', '/') + '/';
      result.set(route.replace('//', '/'), await readFile(file, 'utf8'));
    }
  }
  return result;
}

test('all sitemap pages are reachable through HTML links from the language homes', async () => {
  const pages = await collectPages();
  const seen = new Set(['/it/', '/en/', '/de/']);
  const pending = [...seen];
  while (pending.length) {
    const route = pending.pop();
    for (const match of (pages.get(route) || '').matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
      const target = new URL(match[1].replaceAll('&amp;', '&'), site + route);
      if (target.origin === site && pages.has(target.pathname) && !seen.has(target.pathname)) {
        seen.add(target.pathname);
        pending.push(target.pathname);
      }
    }
  }
  const xml = await readFile('dist/sitemap.xml', 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    assert.ok(seen.has(new URL(match[1]).pathname), `Orphan page: ${match[1]}`);
  }
});

test('legacy Figline fallback directs to the canonical guide without becoming indexable', async () => {
  const html = await readPage('/it/guide/figline-valdarno/');
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.match(html, /rel="canonical" href="https:\/\/perla-toscana.it\/guide\/cosa-vedere-figline-valdarno\/"/);
  assert.match(html, /http-equiv="refresh" content="0; url=\/guide\/cosa-vedere-figline-valdarno\/"/);
  assert.match(html, /<a href="\/guide\/cosa-vedere-figline-valdarno\/">/);
  assert.doesNotMatch(html, /hreflang=|application\/ld\+json/);
  assert.doesNotMatch(await readFile('dist/sitemap.xml', 'utf8'), /<loc>https:\/\/perla-toscana.it\/it\/guide\/figline-valdarno\/<\/loc>/);
  assert.match(await readPage('/guide/cosa-vedere-figline-valdarno/'), /name="robots" content="index, follow/);
});

test('A1 has one breadcrumb schema matching the existing visible trail', async () => {
  const route = '/guide/dove-fermarsi-lungo-a1-tra-roma-e-milano/';
  const html = await readPage(route);
  const crumbs = jsonLd(html).filter((node) => node['@type'] === 'BreadcrumbList');
  assert.equal(crumbs.length, 1);
  const visible = html.match(/<nav class="breadcrumb"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(visible);
  assert.deepEqual(crumbs[0].itemListElement.map(({ position, item, name }) => ({ position, item, name })), [
    { position: 1, item: site + '/it/', name: 'Home' },
    { position: 2, item: site + '/guide/', name: 'Guide' },
    { position: 3, item: site + route, name: 'Sosta lungo la A1' }
  ]);
  assert.match(visible, /href="\/it\/"/);
  assert.match(visible, /href="\/guide\/"/);
  assert.match(visible, /Sosta lungo la A1/);
});

test('Figline EN visible revision date and BlogPosting use the documented revision', async () => {
  const html = await readPage('/en/guides/figline-valdarno/');
  const article = jsonLd(html).find((node) => node['@type'] === 'BlogPosting');
  assert.equal(article.datePublished, '2026-07-23');
  assert.equal(article.dateModified, '2026-08-06');
  assert.match(html, /<time\b[^>]*datetime="2026-08-06"[^>]*>Updated 6 August 2026<\/time>/);
});

test('German footer local guide links stay in German', async () => {
  const footer = (await readPage('/de/')).match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1];
  assert.ok(footer);
  for (const slug of ['florenz-sehenswuerdigkeiten', 'chianti-sehenswuerdigkeiten', 'figline-valdarno-sehenswuerdigkeiten']) {
    assert.ok(footer.includes(`href="/de/reisefuehrer/${slug}/"`));
    await readPage(`/de/reisefuehrer/${slug}/`);
  }
  assert.doesNotMatch(footer, /href="\/en\/guides\/(?:florence|chianti|figline-valdarno)\/"/);
});

test('Etruscan guides provide contextual house and booking links in their article', async () => {
  for (const [route, house, booking] of [
    ['/guide/etruschi-valdarno-figline/', '/it/appartamento/', '/it/prenota/'],
    ['/en/guides/etruscans-valdarno-figline/', '/en/the-apartment/', '/en/book/']
  ]) {
    const main = (await readPage(route)).match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main.includes(`href="${house}"`));
    assert.ok(main.includes(`href="${booking}"`));
    await readPage(house);
    await readPage(booking);
  }
});
