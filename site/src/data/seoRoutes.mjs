export const guideArchivePaths = {
  it: '/it/guide/',
  en: '/en/guides/',
  de: '/de/reisefuehrer/'
};

const homePaths = { it: '/it/', en: '/en/', de: '/de/' };
const hiddenVillagePaths = {
  it: '/guide/borghi-toscani-poco-conosciuti/',
  en: '/en/guides/hidden-villages-tuscany/',
  de: '/de/reisefuehrer/geheimtipps-toskana-doerfer/'
};

export const languageForPath = (path) => path.startsWith('/de/') ? 'de'
  : path.startsWith('/en/') ? 'en' : 'it';

/** The HTML head and XML sitemap must use the same language relationships. */
export function seoAlternates(path, alternatePath, alternatePaths) {
  const lang = languageForPath(path);
  // This editorial archive has a different selection from /it/guide/.
  // Preserve its URL and self canonical without claiming a second EN translation.
  if (path === '/guide/') return { it: path };
  const sharedGroup = [homePaths, guideArchivePaths, hiddenVillagePaths]
    .find((group) => Object.values(group).includes(path));
  const paths = sharedGroup || (alternatePaths && Object.values(alternatePaths).some(Boolean)
    ? alternatePaths
    : alternatePath
      ? { [lang]: path, [languageForPath(alternatePath)]: alternatePath }
      : { [lang]: path });
  const result = Object.fromEntries(Object.entries(paths).filter(([, value]) => Boolean(value)));
  if (Object.keys(result).length > 1) result['x-default'] = result.it || path;
  return result;
}
