import { pages } from '../data/pages';
import { guides } from '../data/guides';
import { siteConfig } from '../data/siteConfig';
import { lakeTrasimenoPage } from '../data/guideLakeTrasimeno';
import { lakeTrasimenoPageEn } from '../data/guideLakeTrasimenoEn';
import { brunelloPage } from '../data/guideBrunello';
import { brunelloPageEn } from '../data/guideBrunelloEn';
import { sanGimignanoPage } from '../data/guideSanGimignano';
import { sanGimignanoPageEn } from '../data/guideSanGimignanoEn';
import { viaFrancigenaPage } from '../data/guideViaFrancigena';
import { viaFrancigenaPageEn } from '../data/guideViaFrancigenaEn';
import { valDorciaPage } from '../data/guideValDorcia';
import { valDorciaPageEn } from '../data/guideValDorciaEn';
import { bagniSanFilippoPage, bagniSanFilippoPageEn } from '../data/guideBagniSanFilippo';
import { hiddenVillagesDe } from '../data/guideHiddenVillages';
import { guideBlockOneDe } from '../data/guideBlockOneDe';
import { guideBlockTwoDe } from '../data/guideBlockTwoDe';
import { guideBlockThreeDe } from '../data/guideBlockThreeDe';
import { guideBlockFourDe } from '../data/guideBlockFourDe';
import { itineraryBlockFiveDe } from '../data/itineraryBlockFiveDe';

export const prerender = true;

export function GET() {
  const allPages = [
    { path: '/it/', alternatePath: '/en/' },
    { path: '/en/', alternatePath: '/it/' },
    { path: '/de/', alternatePath: '/it/' },
    { path: '/de/reisefuehrer/', alternatePaths: { it: '/it/guide/', en: '/en/guides/', de: '/de/reisefuehrer/' } },
    { path: '/it/casa-vacanze-vicino-firenze/' },
    { path: '/it/noleggio-auto/', alternatePaths: { it: '/it/noleggio-auto/', en: '/en/car-rental/', de: '/de/mietwagen/' } },
    { path: '/en/car-rental/', alternatePaths: { it: '/it/noleggio-auto/', en: '/en/car-rental/', de: '/de/mietwagen/' } },
    { path: '/de/mietwagen/', alternatePaths: { it: '/it/noleggio-auto/', en: '/en/car-rental/', de: '/de/mietwagen/' } },
    { path: '/it/guide/', alternatePath: '/en/guides/' },
    { path: '/en/guides/', alternatePath: '/it/guide/' },
    { path: '/guide/', alternatePath: '/en/guides/' },
    { path: '/guide/dove-dormire-vicino-the-mall-firenze/', alternatePaths: { it: '/guide/dove-dormire-vicino-the-mall-firenze/', de: '/de/reisefuehrer/uebernachten-nahe-the-mall-firenze/' } },
    { path: '/guide/dove-fermarsi-lungo-a1-tra-roma-e-milano/', alternatePaths: { it: '/guide/dove-fermarsi-lungo-a1-tra-roma-e-milano/', de: '/de/reisefuehrer/zwischenstopp-a1-rom-mailand/' } },
    { path: '/guide/cosa-vedere-figline-valdarno/', alternatePaths: { it: '/guide/cosa-vedere-figline-valdarno/', en: '/en/guides/figline-valdarno/', de: '/de/reisefuehrer/figline-valdarno-sehenswuerdigkeiten/' } },
    { path: '/guide/etruschi-valdarno-figline/', alternatePaths: { it: '/guide/etruschi-valdarno-figline/', en: '/en/guides/etruscans-valdarno-figline/', de: '/de/reisefuehrer/etrusker-valdarno-figline/' } },
    { path: '/en/guides/etruscans-valdarno-figline/', alternatePaths: { it: '/guide/etruschi-valdarno-figline/', en: '/en/guides/etruscans-valdarno-figline/', de: '/de/reisefuehrer/etrusker-valdarno-figline/' } },
    lakeTrasimenoPage,
    lakeTrasimenoPageEn,
    brunelloPage,
    brunelloPageEn,
    sanGimignanoPage,
    sanGimignanoPageEn,
    viaFrancigenaPage,
    viaFrancigenaPageEn,
    valDorciaPage,
    valDorciaPageEn,
    bagniSanFilippoPage,
    bagniSanFilippoPageEn,
    hiddenVillagesDe,
    ...guideBlockOneDe,
    ...guideBlockTwoDe,
    ...guideBlockThreeDe,
    ...guideBlockFourDe,
    ...itineraryBlockFiveDe,
    ...pages.it, ...pages.en, ...guides.it, ...guides.en
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => {
  const alternatePath = page.alternatePath ?? page.path;
  if ('slug' in page && ['borghi-toscani-poco-conosciuti', 'hidden-villages-tuscany', 'geheimtipps-toskana-doerfer'].includes(page.slug ?? '')) {
    const paths = { it: '/guide/borghi-toscani-poco-conosciuti/', en: '/en/guides/hidden-villages-tuscany/', de: '/de/reisefuehrer/geheimtipps-toskana-doerfer/' };
    const loc = new URL(page.path, siteConfig.siteUrl);
    return `  <url>\n    <loc>${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="it" href="${new URL(paths.it, siteConfig.siteUrl)}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${new URL(paths.en, siteConfig.siteUrl)}" />\n    <xhtml:link rel="alternate" hreflang="de" href="${new URL(paths.de, siteConfig.siteUrl)}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(paths.it, siteConfig.siteUrl)}" />\n  </url>`;
  }
  if (['/it/', '/en/', '/de/'].includes(page.path)) {
    const loc = new URL(page.path, siteConfig.siteUrl);
    return `  <url>\n    <loc>${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="it" href="${new URL('/it/', siteConfig.siteUrl)}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${new URL('/en/', siteConfig.siteUrl)}" />\n    <xhtml:link rel="alternate" hreflang="de" href="${new URL('/de/', siteConfig.siteUrl)}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL('/it/', siteConfig.siteUrl)}" />\n  </url>`;
  }
  if (page.path === '/guide/') {
    const loc = new URL(page.path, siteConfig.siteUrl);
    const alt = new URL(alternatePath, siteConfig.siteUrl);
    return `  <url>\n    <loc>${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="it" href="${loc}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${alt}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />\n  </url>`;
  }
  if (page.path === '/guide/cosa-vedere-figline-valdarno/') {
    const loc = new URL(page.path, siteConfig.siteUrl);
    const paths = { it: '/guide/cosa-vedere-figline-valdarno/', en: '/en/guides/figline-valdarno/', de: '/de/reisefuehrer/figline-valdarno-sehenswuerdigkeiten/' };
    return `  <url>\n    <loc>${loc}</loc>\n${Object.entries(paths).map(([code, href]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${new URL(href, siteConfig.siteUrl)}" />`).join('\n')}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(paths.it, siteConfig.siteUrl)}" />\n  </url>`;
  }
  if ('alternatePaths' in page && page.alternatePaths) {
    const loc = new URL(page.path, siteConfig.siteUrl);
    return `  <url>\n    <loc>${loc}</loc>\n${Object.entries(page.alternatePaths).map(([code, href]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${new URL(href, siteConfig.siteUrl)}" />`).join('\n')}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(page.alternatePaths.it ?? page.path, siteConfig.siteUrl)}" />\n  </url>`;
  }
  if (page.path.startsWith('/guide/') && page.alternatePath?.startsWith('/en/')) {
    const loc = new URL(page.path, siteConfig.siteUrl);
    const alt = new URL(page.alternatePath, siteConfig.siteUrl);
    return `  <url>\n    <loc>${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="it" href="${loc}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${alt}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />\n  </url>`;
  }
  if (page.path.startsWith('/guide/')) {
    return `  <url>\n    <loc>${new URL(page.path, siteConfig.siteUrl)}</loc>\n    <xhtml:link rel="alternate" hreflang="it" href="${new URL(page.path, siteConfig.siteUrl)}" />\n  </url>`;
  }
  if (!page.alternatePath) {
    const loc = new URL(page.path, siteConfig.siteUrl);
    const lang = page.path.startsWith('/it/') ? 'it' : page.path.startsWith('/de/') ? 'de' : 'en';
    return `  <url>\n    <loc>${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />\n  </url>`;
  }
  const lang = page.path.startsWith('/it/') ? 'it' : 'en';
  const alternateLang = lang === 'it' ? 'en' : 'it';
  const loc = new URL(page.path, siteConfig.siteUrl);
  const alt = new URL(alternatePath, siteConfig.siteUrl);
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
