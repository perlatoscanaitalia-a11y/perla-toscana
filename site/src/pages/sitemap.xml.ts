import { pages } from '../data/pages';
import { guides } from '../data/guides';
import { siteConfig } from '../data/siteConfig';

export const prerender = true;

export function GET() {
  const allPages = [
    { path: '/it/', alternatePath: '/en/' },
    { path: '/en/', alternatePath: '/it/' },
    { path: '/it/guide/', alternatePath: '/en/guides/' },
    { path: '/en/guides/', alternatePath: '/it/guide/' },
    { path: '/guide/', alternatePath: '/en/guides/' },
    { path: '/guide/dove-dormire-vicino-the-mall-firenze/', alternatePath: '/guide/dove-dormire-vicino-the-mall-firenze/' },
    { path: '/guide/dove-fermarsi-lungo-a1-tra-roma-e-milano/', alternatePath: '/guide/dove-fermarsi-lungo-a1-tra-roma-e-milano/' },
    ...pages.it, ...pages.en, ...guides.it, ...guides.en
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => {
  if (page.path === '/guide/') {
    const loc = new URL(page.path, siteConfig.siteUrl);
    const alt = new URL(page.alternatePath, siteConfig.siteUrl);
    return `  <url>\n    <loc>${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="it" href="${loc}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${alt}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />\n  </url>`;
  }
  if (page.path.startsWith('/guide/')) {
    return `  <url>\n    <loc>${new URL(page.path, siteConfig.siteUrl)}</loc>\n    <xhtml:link rel="alternate" hreflang="it" href="${new URL(page.path, siteConfig.siteUrl)}" />\n  </url>`;
  }
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
