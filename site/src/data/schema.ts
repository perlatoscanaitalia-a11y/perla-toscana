import { siteConfig } from './siteConfig';
import type { Lang } from './pages';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '');

export function lodgingSchema(lang: Lang, path: string) {
  const entityId = `${siteConfig.siteUrl}/#lodging`;
  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'VacationRental'],
    '@id': entityId,
    name: 'Perla Toscana',
    url: new URL(path, siteConfig.siteUrl).toString(),
    image: `${siteConfig.siteUrl}/images/perla-toscana/perla-toscana-hero-camera-principale-9.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Aretina 108',
      postalCode: '50063',
      addressLocality: 'Figline e Incisa Valdarno',
      addressRegion: 'FI',
      addressCountry: 'IT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.593483,
      longitude: 11.4986544
    },
    telephone: siteConfig.placeholders.phone,
    checkinTime: siteConfig.houseRules.checkInTime,
    checkoutTime: siteConfig.houseRules.checkOutTime,
    petsAllowed: false,
    smokingAllowed: false,
    numberOfRooms: 3,
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: 8
    },
    sameAs: [
      siteConfig.social.instagramUrl,
      siteConfig.social.facebookUrl,
      siteConfig.social.pinterestUrl,
      siteConfig.social.tiktokUrl,
      siteConfig.placeholders.googleMapsUrl
    ],
    description:
      lang === 'it'
        ? 'Casa vacanza a Figline Valdarno con 3 camere, fino a 8 ospiti, parcheggio privato gratuito, Wi-Fi, aria condizionata e posizione comoda per Firenze, Chianti e The Mall Firenze.'
        : 'Holiday home in Figline Valdarno with 3 bedrooms, sleeps up to 8 guests, free private parking, Wi-Fi, air conditioning and a convenient location for Florence, Chianti and The Mall Firenze.',
    amenityFeature: [
      lang === 'it' ? 'Parcheggio privato gratuito per 3 auto' : 'Free private parking for 3 cars',
      'Wi-Fi',
      lang === 'it' ? 'Aria condizionata in ogni camera' : 'Air conditioning in every bedroom',
      lang === 'it' ? 'Cucina attrezzata' : 'Equipped kitchen',
      lang === 'it' ? 'Smart TV in ogni camera' : 'Smart TV in every bedroom',
      lang === 'it' ? 'Doccia idromassaggio' : 'Hydromassage shower',
      lang === 'it' ? 'Giardino' : 'Garden'
    ].map((name) => ({ '@type': 'LocationFeatureSpecification', name }))
  };
}

export function faqSchema(items?: { question: string; answer: string }[]) {
  if (!items?.length) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.answer)
      }
    }))
  };
}

export function guideSchema(lang: Lang, page: { path: string; h1: string; description: string }) {
  const url = new URL(page.path, siteConfig.siteUrl).toString();
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.description,
      inLanguage: lang,
      url,
      mainEntityOfPage: url,
      about: ['Tuscany', 'Figline e Incisa Valdarno', 'Valdarno', 'Florence', 'Chianti'],
      author: { '@type': 'Organization', '@id': `${siteConfig.siteUrl}/#lodging`, name: siteConfig.name },
      publisher: { '@type': 'Organization', '@id': `${siteConfig.siteUrl}/#lodging`, name: siteConfig.name }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Perla Toscana', item: `${siteConfig.siteUrl}/${lang}/` },
        { '@type': 'ListItem', position: 2, name: lang === 'it' ? 'Guide locali' : 'Local guides', item: `${siteConfig.siteUrl}/${lang}/${lang === 'it' ? 'cosa-fare' : 'what-to-do'}/` },
        { '@type': 'ListItem', position: 3, name: page.h1, item: url }
      ]
    }
  ];
}
