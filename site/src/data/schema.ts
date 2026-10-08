import { siteConfig } from './siteConfig';
import type { Lang } from './pages';
import { structuredDataGalleryImages } from './galleryImages';
import { propertyFacts, vacationRentalPaths, verifiedSameAs } from './propertyFacts.mjs';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '');

const propertyImages = [
  '/images/perla-toscana/perla-toscana-hero-camera-principale-9.jpg',
  ...structuredDataGalleryImages
].map((src) => new URL(src, siteConfig.siteUrl).toString());

export const schemaEntityIds = {
  vacationRental: `${siteConfig.siteUrl}/#vacation-rental`,
  accommodation: `${siteConfig.siteUrl}/#accommodation`,
  organization: `${siteConfig.siteUrl}/#organization`
} as const;

// Only confirmed amenities; general Schema.org names need not imply Google support.
const amenityFeature = [
  { '@type': 'LocationFeatureSpecification', name: 'ac', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'parkingType', value: 'Free' },
  { '@type': 'LocationFeatureSpecification', name: 'Fully equipped kitchen', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'Private parking spaces', value: propertyFacts.parkingSpaces },
  { '@type': 'LocationFeatureSpecification', name: 'Private pool', value: false }
] as const;

const address = {
  '@type': 'PostalAddress',
  streetAddress: 'Via Aretina 108',
  postalCode: '50063',
  addressLocality: 'Figline e Incisa Valdarno',
  addressRegion: 'FI',
  addressCountry: 'IT'
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: 43.593483,
  longitude: 11.4986544
};

export function lodgingSchema(lang: Lang | 'de', path: string) {
  if (!vacationRentalPaths.includes(path)) return undefined;

  const pageUrl = new URL(path, siteConfig.siteUrl).toString();
  const vacationRental = {
    '@type': 'VacationRental',
    '@id': schemaEntityIds.vacationRental,
    // The Italian CIN is stable, property-specific and identical in every language.
    identifier: siteConfig.placeholders.cin,
    name: propertyFacts.name,
    additionalType: 'House',
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    image: propertyImages,
    address,
    geo,
    latitude: geo.latitude,
    longitude: geo.longitude,
    email: siteConfig.placeholders.email,
    telephone: siteConfig.placeholders.phone,
    ...(verifiedSameAs.length ? { sameAs: verifiedSameAs } : {}),
    description:
      lang === 'it'
        ? 'Intera casa vacanze a Figline e Incisa Valdarno, Toscana, vicino a Firenze: 3 camere, fino a 8 ospiti, 1 bagno, cucina attrezzata, aria condizionata in ogni camera e parcheggio privato gratuito per 3 auto. Nessuna piscina privata.'
        : lang === 'de'
          ? 'Ganzes Ferienhaus in Figline e Incisa Valdarno, Toskana, nahe Florenz: 3 Schlafzimmer für bis zu 8 Gäste, 1 Bad, ausgestattete Küche, Klimaanlage in jedem Schlafzimmer und kostenloser Privatparkplatz für 3 Autos. Kein privater Pool.'
          : 'Entire holiday home near Florence in Figline e Incisa Valdarno, Tuscany: 3 bedrooms for up to 8 guests, 1 bathroom, a fully equipped kitchen, air conditioning in every bedroom and free private parking for 3 cars. No private pool.',
    containsPlace: {
      '@type': 'Accommodation',
      '@id': schemaEntityIds.accommodation,
      additionalType: 'EntirePlace',
      name: lang === 'it' ? 'Intera casa vacanza Perla Toscana' : lang === 'de' ? 'Ganzes Ferienhaus Perla Toscana' : 'Entire Perla Toscana holiday home',
      occupancy: { '@type': 'QuantitativeValue', value: propertyFacts.maxGuests },
      numberOfBedrooms: propertyFacts.bedrooms,
      numberOfBathroomsTotal: propertyFacts.bathrooms,
      amenityFeature
    }
  };

  return { '@context': 'https://schema.org', ...vacationRental };
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

export function guideSchema(lang: Lang | 'de', page: { path: string; h1: string; description: string; publishedAt?: string; updatedAt?: string; socialImage?: string }) {
  const url = new URL(page.path, siteConfig.siteUrl).toString();
  const isGermanItinerary = lang === 'de' && page.path.includes('/de/reiseplaene/');
  const guidesUrl = new URL(lang === 'it' ? '/guide/' : lang === 'de' ? '/de/reisefuehrer/' : '/en/guides/', siteConfig.siteUrl).toString();
  // Keep the publisher identity separate from the lodging entity. Reusing the
  // VacationRental @id here can make consumers merge an Organization stub with
  // the rental and report the required lodging properties as missing.
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.description,
      inLanguage: lang === 'it' ? 'it-IT' : lang === 'de' ? 'de-DE' : 'en',
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(page.socialImage ? { image: new URL(page.socialImage, siteConfig.siteUrl).toString() } : {}),
      ...(page.publishedAt ? { datePublished: page.publishedAt } : {}),
      ...(page.updatedAt ? { dateModified: page.updatedAt } : {}),
      about: ['Tuscany', 'Figline e Incisa Valdarno', 'Valdarno', 'Florence', 'Chianti'],
      author: { '@type': 'Organization', '@id': schemaEntityIds.organization, name: siteConfig.name },
      publisher: { '@type': 'Organization', '@id': schemaEntityIds.organization, name: siteConfig.name }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Perla Toscana', item: `${siteConfig.siteUrl}/${lang}/` },
        { '@type': 'ListItem', position: 2, name: lang === 'it' ? 'Guide locali' : isGermanItinerary ? 'Toskana-Reisepläne' : lang === 'de' ? 'Toskana-Reiseführer' : 'Local guides', item: guidesUrl },
        { '@type': 'ListItem', position: 3, name: page.h1, item: url }
      ]
    }
  ];
}
