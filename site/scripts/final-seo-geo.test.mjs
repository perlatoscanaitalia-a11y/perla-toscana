import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

async function htmlPages(dir = 'dist') {
  const pages = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) pages.push(...await htmlPages(path));
    else if (entry.name.endsWith('.html')) pages.push(path);
  }
  return pages;
}

test('all rendered AvaiBook links preserve the property and use the page language', async () => {
  const languages = new Set();
  for (const path of await htmlPages()) {
    const route = relative('dist', path).replaceAll('\\', '/');
    const lang = route.startsWith('de/') ? 'de' : route.startsWith('en/') ? 'en' : 'it';
    const html = await readFile(path, 'utf8');
    for (const match of html.matchAll(/href="([^"]*avaibook\.com[^"]*)"/g)) {
      const url = new URL(match[1].replaceAll('&amp;', '&'));
      assert.equal(url.origin, 'https://www.avaibook.com', route);
      assert.equal(url.pathname, '/reservas/nueva_reserva.php', route);
      assert.deepEqual([...url.searchParams.keys()].sort(), ['cod_alojamiento', 'lang'], route);
      assert.equal(url.searchParams.get('cod_alojamiento'), '398986', route);
      assert.equal(url.searchParams.get('lang'), lang, route);
      languages.add(lang);
    }
  }
  assert.deepEqual([...languages].sort(), ['de', 'en', 'it']);
});

test('each existing Airbnb testimonial links to the confirmed listing', async () => {
  for (const lang of ['it', 'en']) {
    const html = await readFile(`dist/${lang}/index.html`, 'utf8');
    const cards = [...html.matchAll(/<article class="guest-review-card"[^>]*>([\s\S]*?)<\/article>/g)];
    assert.equal(cards.length, 6);
    for (const [, card] of cards) {
      assert.match(card, /href="https:\/\/www\.airbnb\.it\/rooms\/1321967839226753505"/);
      assert.doesNotMatch(card, /aggregateRating|reviewCount|<time\b/);
    }
  }
});

test('archives do not attach unsupported single driving estimates to guide destinations', async () => {
  for (const route of ['guide', 'it/guide', 'en/guides']) {
    const html = await readFile(`dist/${route}/index.html`, 'utf8');
    const details = [...html.matchAll(/<div class="card-details"[^>]*>([\s\S]*?)<\/div>/g)];
    assert.ok(details.length > 0, route);
    for (const [, detail] of details) assert.doesNotMatch(detail, /\d+(?:\.\d+)? km\s*•\s*\d+ min/, route);
  }
});
