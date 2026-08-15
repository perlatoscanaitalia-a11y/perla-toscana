import { siteConfig } from './siteConfig';
import type { Lang } from './pages';
import { structuredDataGalleryImages } from './galleryImages';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '');

const propertyImages = structuredDataGalleryImages.map((src) => new URL(src, siteConfig.siteUrl).toString());

const amenityFeature = [
  { name: 'wifi', value: true },
  { name: 'ac', value: true },
  { name: 'kitchen', value: true },
  { name: 'parkingType', value: 'Free' },
  { name: 'tv', value: true },
  { name: 'petsAllowed', value: false },
  { name: 'smokingAllowed', value: false }
].map(({ name, value }) => ({ '@type': 'LocationFeatureSpecification', name, value }));

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
  const vacationRentalId = `${siteConfig.siteUrl}/#vacation-rental`;
  const accommodationId = `${siteConfig.siteUrl}/#accommodation`;

  const vacationRental = {
    '@type': 'VacationRental',
    '@id': vacationRentalId,
    identifier: siteConfig.placeholders.cin,
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
      '@id': accommodationId,
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

export function guideSchema(lang: Lang, page: { path: string; h1: string; description: string; publishedAt?: string; updatedAt?: string; socialImage?: string }) {
  const url = new URL(page.path, siteConfig.siteUrl).toString();
  const guidesUrl = new URL(lang === 'it' ? '/guide/' : '/en/guides/', siteConfig.siteUrl).toString();
  const entityId = `${siteConfig.siteUrl}/#vacation-rental`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.description,
      inLanguage: lang === 'it' ? 'it-IT' : 'en',
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(page.socialImage ? { image: new URL(page.socialImage, siteConfig.siteUrl).toString() } : {}),
      ...(page.publishedAt ? { datePublished: page.publishedAt } : {}),
      ...(page.updatedAt ? { dateModified: page.updatedAt } : {}),
      about: ['Tuscany', 'Figline e Incisa Valdarno', 'Valdarno', 'Florence', 'Chianti'],
      author: { '@type': 'Organization', '@id': entityId, name: siteConfig.name },
      publisher: { '@type': 'Organization', '@id': entityId, name: siteConfig.name }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Perla Toscana', item: `${siteConfig.siteUrl}/${lang}/` },
        { '@type': 'ListItem', position: 2, name: lang === 'it' ? 'Guide locali' : 'Local guides', item: guidesUrl },
        { '@type': 'ListItem', position: 3, name: page.h1, item: url }
      ]
    }
  ];
}
