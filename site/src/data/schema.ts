import { siteConfig } from './siteConfig';
import type { Lang } from './pages';
import { structuredDataGalleryImages } from './galleryImages';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '');

const propertyImages = [
  '/images/perla-toscana/perla-toscana-hero-camera-principale-9.jpg',
  ...structuredDataGalleryImages
].map((src) => new URL(src, siteConfig.siteUrl).toString());

const vacationRentalIdentifier = siteConfig.placeholders.cin;

export const schemaEntityIds = {
  vacationRental: `${siteConfig.siteUrl}/#vacation-rental`,
  accommodation: `${siteConfig.siteUrl}/#accommodation`,
  organization: `${siteConfig.siteUrl}/#organization`
} as const;

// Google requires every LocationFeatureSpecification to carry an explicit
// value and supports these English feature names for VacationRental markup.
const amenityFeature = [
  { '@type': 'LocationFeatureSpecification', name: 'wifi', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'ac', value: true },
  { '@type': 'LocationFeatureSpecification', name: 'parkingType', value: 'Free' },
  { '@type': 'LocationFeatureSpecification', name: 'tv', value: true }
] as const;

const vacationRentalPaths = new Set([
  '/it/appartamento/',
  '/en/rooms-amenities/',
  '/de/'
]);

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
  if (!vacationRentalPaths.has(path)) return undefined;

  const pageUrl = new URL(path, siteConfig.siteUrl).toString();
  const vacationRental = {
    '@type': 'VacationRental',
    '@id': schemaEntityIds.vacationRental,
    // The Italian CIN is stable, property-specific and identical in every language.
    identifier: vacationRentalIdentifier,
    name: siteConfig.name,
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
    checkinTime: siteConfig.houseRules.checkInTime,
    checkoutTime: siteConfig.houseRules.checkOutTime,
    knowsLanguage: ['it-IT', 'en-GB', 'de-DE'],
    description:
      lang === 'it'
        ? 'Casa vacanza a Figline Valdarno con 3 camere, fino a 8 ospiti, parcheggio privato gratuito, Wi-Fi, aria condizionata e posizione comoda per Firenze, Chianti e The Mall Firenze.'
        : lang === 'de'
          ? 'Ferienhaus in Figline e Incisa Valdarno in der Toskana mit 3 Schlafzimmern für bis zu 8 Personen, kostenlosem Privatparkplatz, WLAN, Klimaanlage und guter Lage für Florenz und das Chianti.'
          : 'Holiday home in Figline Valdarno with 3 bedrooms, sleeps up to 8 guests, free private parking, Wi-Fi, air conditioning and a convenient location for Florence, Chianti and The Mall Firenze.',
    containsPlace: {
      '@type': 'Accommodation',
      '@id': schemaEntityIds.accommodation,
      additionalType: 'EntirePlace',
      name: lang === 'it' ? 'Intera casa vacanza Perla Toscana' : lang === 'de' ? 'Ganzes Ferienhaus Perla Toscana' : 'Entire Perla Toscana holiday home',
      occupancy: { '@type': 'QuantitativeValue', value: 8 },
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 1,
      bed: [
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'Queen' },
        { '@type': 'BedDetails', numberOfBeds: 2, typeOfBed: 'Single' },
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'Double' }
      ],
      petsAllowed: false,
      smokingAllowed: false,
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
        { '@type': 'ListItem', position: 2, name: lang === 'it' ? 'Guide locali' : lang === 'de' ? 'Toskana-Reiseführer' : 'Local guides', item: guidesUrl },
        { '@type': 'ListItem', position: 3, name: page.h1, item: url }
      ]
    }
  ];
}
