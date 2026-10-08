import { readFile, readdir } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { socialImageMetadata } from '../src/utils/socialImage.mjs';
import { propertyFacts, vacationRentalPaths, verifiedSameAs } from '../src/data/propertyFacts.mjs';

const site = 'https://perla-toscana.it';
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
  .map((match) => [match[1], match[2] ?? match[3]]));
const hasType = (node, type) => [node?.['@type']].flat().includes(type);
const stable = (object) => JSON.stringify(Object.entries(object).sort(([a], [b]) => a.localeCompare(b)));

function schemaNodes(value) {
  if (!value || typeof value !== 'object') return [];
  return [value, ...Object.values(value).flatMap(schemaNodes)];
}

async function htmlFiles(root) {
  const result = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const file = join(root, entry.name);
    if (entry.isDirectory()) result.push(...await htmlFiles(file));
    else if (entry.name.endsWith('.html')) result.push(file);
  }
  return result;
}

/** Inspect generated artifacts, so checks also catch template/integration regressions. */
export async function checkSeo(root = resolve('dist'), publicRoot = root) {
  const failures = [];
  const pages = new Map();
  const images = new Set();
  let rentalCount = 0;
  let sharedIdentity;
  const fail = (route, message) => failures.push(`${route}: ${message}`);

  for (const file of await htmlFiles(root)) {
    const route = `/${relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '')}`;
    // The root is an intentionally preserved meta-refresh landing page.
    if (route === '/') continue;
    const html = await readFile(file, 'utf8');
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
    const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => attrs(m[0]));
    const links = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => attrs(m[0]));
    const values = (name) => metas.filter((m) => m.name === name || m.property === name).map((m) => m.content);
    const canonical = links.filter((link) => link.rel === 'canonical');
    const robots = values('robots');
    const schemas = [];
    for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
      try { schemas.push(...schemaNodes(JSON.parse(match[1]))); }
      catch { fail(route, 'invalid JSON-LD'); }
    }
    if (robots.some((value) => /\bnoindex\b/i.test(value))) {
      if (route !== '/404.html') fail(route, 'public page unexpectedly noindex');
      continue;
    }
    if (route === '/404.html') { fail(route, '404 must be noindex'); continue; }
    if (canonical.length !== 1 || canonical[0].href !== site + route) fail(route, 'incorrect or duplicate canonical');
    if (robots.length !== 1 || !robots[0]?.includes('max-image-preview:large')) fail(route, 'invalid robots metadata');
    if ([...html.matchAll(/<h1\b/gi)].length !== 1) fail(route, 'expected one H1');
    if ([...head.matchAll(/<title\b/gi)].length !== 1) fail(route, 'expected one title');
    for (const name of ['description', 'og:image', 'og:image:width', 'og:image:height', 'og:image:alt', 'twitter:image']) {
      if (values(name).length !== 1 || !values(name)[0]?.trim()) fail(route, `missing or duplicate ${name}`);
    }
    if (values('twitter:image')[0] !== values('og:image')[0]) fail(route, 'Twitter and OG images differ');
    try {
      const src = values('og:image')[0];
      if (!src?.startsWith(`${site}/`)) throw new Error('image must have an absolute same-site URL');
      const actual = await socialImageMetadata(src, site, publicRoot);
      images.add(src);
      if (String(actual.width) !== values('og:image:width')[0] || String(actual.height) !== values('og:image:height')[0]) {
        fail(route, `OG dimensions do not match file (${actual.width}x${actual.height})`);
      }
    } catch (error) { fail(route, `invalid OG image: ${error.message}`); }

    const alternates = {};
    for (const link of links.filter((link) => link.rel === 'alternate' && link.hreflang)) {
      if (alternates[link.hreflang]) fail(route, `duplicate hreflang ${link.hreflang}`);
      alternates[link.hreflang] = link.href;
    }
    const lang = html.match(/<html\b[^>]*lang="([^"]+)"/i)?.[1];
    if (alternates[lang] !== site + route) fail(route, 'hreflang self-reference missing');
    pages.set(route, { alternates, canonical: canonical[0]?.href, lang });

    const rentals = schemas.filter((node) => hasType(node, 'VacationRental'));
    if (vacationRentalPaths.includes(route) && rentals.length !== 1) fail(route, 'expected exactly one VacationRental');
    if (rentals.length > 1) fail(route, 'duplicate VacationRental');
    for (const rental of rentals) {
      rentalCount++;
      const accommodation = rental.containsPlace;
      if (rental['@id'] !== `${site}/#vacation-rental` || rental.name !== propertyFacts.name) fail(route, 'rental identity inconsistent');
      if (rental.url !== site + route || rental.mainEntityOfPage !== site + route) fail(route, 'rental page URL inconsistent');
      if (!hasType(rental.address, 'PostalAddress')) fail(route, 'PostalAddress missing');
      if (!hasType(accommodation, 'Accommodation') || accommodation['@id'] !== `${site}/#accommodation`
        || accommodation.additionalType !== 'EntirePlace') fail(route, 'entire-place Accommodation missing');
      if (!hasType(accommodation?.occupancy, 'QuantitativeValue') || accommodation.occupancy.value !== propertyFacts.maxGuests
        || accommodation.numberOfBedrooms !== propertyFacts.bedrooms || accommodation.numberOfBathroomsTotal !== propertyFacts.bathrooms) {
        fail(route, 'occupancy, bedrooms or bathrooms inconsistent');
      }
      const amenities = accommodation?.amenityFeature || [];
      const expectedAmenities = { ac: true, parkingType: 'Free', 'Fully equipped kitchen': true, 'Private parking spaces': 3, 'Private pool': false };
      for (const [name, value] of Object.entries(expectedAmenities)) {
        if (!amenities.some((a) => hasType(a, 'LocationFeatureSpecification') && a.name === name && a.value === value)) fail(route, `confirmed amenity missing: ${name}`);
      }
      if (amenities.some((a) => a.value === undefined)) fail(route, 'amenity without value');
      if (stable(rental.sameAs || []) !== stable(verifiedSameAs)) fail(route, 'unverified sameAs');
      if (rental.aggregateRating || rental.review) fail(route, 'rating/review requires a verified data source');
      if (!Array.isArray(rental.image) || rental.image.length < 8) fail(route, 'rental image gallery incomplete');
      for (const src of rental.image || []) {
        try { await socialImageMetadata(src, site, publicRoot); }
        catch { fail(route, `missing or invalid rental image ${src}`); }
      }
      const identity = JSON.stringify({ identifier: rental.identifier, address: rental.address, geo: rental.geo, containsPlace: {
        ...accommodation, name: undefined
      } });
      if (sharedIdentity && sharedIdentity !== identity) fail(route, 'property facts differ between pages/languages');
      sharedIdentity ||= identity;
    }
  }

  for (const route of vacationRentalPaths) if (!pages.has(route)) fail(route, 'required property page missing');
  for (const [route, page] of pages) {
    for (const [lang, href] of Object.entries(page.alternates)) {
      if (!href.startsWith(`${site}/`)) { fail(route, `external hreflang ${href}`); continue; }
      const target = pages.get(new URL(href).pathname);
      if (!target || target.canonical !== href) { fail(route, `hreflang target is missing or noncanonical: ${href}`); continue; }
      if (lang !== 'x-default' && target.lang !== lang) fail(route, `hreflang target language mismatch: ${href}`);
      if (lang !== 'x-default' && (target.alternates[page.lang] !== site + route || stable(target.alternates) !== stable(page.alternates))) {
        fail(route, `nonreciprocal hreflang group: ${href}`);
      }
    }
  }

  const xml = await readFile(join(root, 'sitemap.xml'), 'utf8');
  const sitemapRoutes = new Set();
  for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = match[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc?.startsWith(`${site}/`)) { fail('sitemap', 'invalid loc'); continue; }
    const route = new URL(loc).pathname;
    if (sitemapRoutes.has(route)) fail(route, 'duplicate sitemap loc');
    sitemapRoutes.add(route);
    const page = pages.get(route);
    if (!page || page.canonical !== loc) { fail(route, 'sitemap URL missing or noncanonical'); continue; }
    const alternates = {};
    for (const tag of match[1].matchAll(/<xhtml:link\b[^>]*>/g)) {
      const link = attrs(tag[0]);
      if (alternates[link.hreflang]) fail(route, 'duplicate sitemap hreflang');
      alternates[link.hreflang] = link.href;
    }
    if (stable(alternates) !== stable(page.alternates)) fail(route, 'HTML/sitemap hreflang mismatch');
  }
  for (const route of pages.keys()) if (!sitemapRoutes.has(route)) fail(route, 'indexable URL missing from sitemap');
  return { failures, pages: pages.size, sitemapUrls: sitemapRoutes.size, rentalCount, images: images.size };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await checkSeo(resolve(process.argv[2] || 'dist'));
  if (result.failures.length) {
    console.error(result.failures.join('\n'));
    process.exitCode = 1;
  }
  console.log(`SEO: ${result.pages} pages, ${result.sitemapUrls} sitemap URLs, ${result.rentalCount} VacationRental entities, ${result.images} OG images; ${result.failures.length} errors.`);
}
