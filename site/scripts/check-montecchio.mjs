import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const root = join(process.cwd(), 'dist');
const domain = 'https://perla-toscana.it';
const paths = { it: '/it/guide/castello-montecchio-vesponi/', en: '/en/guides/montecchio-vesponi-castle/', de: '/de/reisefuehrer/burg-montecchio-vesponi/' };
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
for (const [lang, path] of Object.entries(paths)) {
  const html = await readFile(join(root, path, 'index.html'), 'utf8');
  const tags = [...html.matchAll(/<(meta|link)\b[^>]*>/g)].map(match => Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(attr => [attr[1], attr[2]])));
  const one = (key, value) => {
    const found = tags.filter(tag => tag[key] === value);
    assert.equal(found.length, 1, `${lang}: duplicate/missing ${value}`);
    return found[0];
  };
  assert.equal(one('rel', 'canonical').href, domain + path);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal((html.match(/<title>/g) || []).length, 1);
  assert(one('name', 'description').content.length > 100);
  assert(one('name', 'robots').content.includes('max-image-preview:large'));
  assert(!one('name', 'robots').content.includes('noindex'));
  for (const [code, translatedPath] of Object.entries(paths)) {
    assert.equal(one('hreflang', code).href, domain + translatedPath);
    if (code !== lang) assert(html.includes(`href="${translatedPath}"`), 'Missing language navigation');
  }
  assert.equal(one('hreflang', 'x-default').href, domain + paths.it);
  const imageUrl = one('property', 'og:image').content;
  assert.equal(one('name', 'twitter:image').content, imageUrl);
  assert.equal(one('name', 'twitter:card').content, 'summary_large_image');
  assert(one('property', 'og:image:alt').content.includes('Montecchio'));
  const metadata = await sharp(join(root, new URL(imageUrl).pathname)).metadata();
  assert.equal(Number(one('property', 'og:image:width').content), metadata.width);
  assert.equal(Number(one('property', 'og:image:height').content), metadata.height);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1]));
  for (const type of ['Article', 'BreadcrumbList', 'FAQPage']) assert.equal(schemas.filter(item => item['@type'] === type).length, 1, `Missing/duplicate ${type}`);
  const article = schemas.find(item => item['@type'] === 'Article');
  assert.equal(article.image, imageUrl);
  assert.equal(article.url, domain + path);
  const faq = schemas.find(item => item['@type'] === 'FAQPage');
  assert.equal(faq.mainEntity.length, 7);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const target = match[1];
    await access(join(root, target, target.endsWith('/') ? 'index.html' : ''));
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(html.includes(`id="${match[1]}"`), `Broken anchor ${match[1]}`);
  assert(sitemap.includes(domain + path));
  console.log(`${lang}: canonical, hreflang, navigation, SEO, image ${metadata.width}x${metadata.height}, Article/BreadcrumbList/FAQPage, local links and sitemap OK`);
  console.log(html.match(/<title>(.*?)<\/title>/)?.[1]);
  console.log(one('name', 'description').content);
}
