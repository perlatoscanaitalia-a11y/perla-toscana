import { pages } from '../data/pages';
import { guides } from '../data/guides';
import { siteConfig } from '../data/siteConfig';

export const prerender = true;

export function GET() {
  const allPages = [
    { path: '/it/', alternatePath: '/en/' },
    { path: '/en/', alternatePath: '/it/' },
    ...pages.it, ...pages.en, ...guides.it, ...guides.en
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => {
  const lang = page.path.startsWith('/it/') ? 'it' : 'en';
  const alternateLang = lang === 'it' ? 'en' : 'it';
  const loc = new URL(page.path, siteConfig.siteUrl);
  const alt = new URL(page.alternatePath, siteConfig.siteUrl);
  const italian = lang === 'it' ? loc : alt;
  return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${alt}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${italian}" />
  </url>`;
}).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
