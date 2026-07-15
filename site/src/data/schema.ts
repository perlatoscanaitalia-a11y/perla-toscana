import { siteConfig } from './siteConfig';
import type { Lang } from './pages';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '');

const propertyImages = [
  'perla-toscana-camera-king-size-vista-frontale.jpg',
  'perla-toscana-camera-queen-size-smart-tv.jpg',
  'perla-toscana-camera-due-letti-singoli.jpg',
  'perla-toscana-hero-bagno-elegante-17.jpg',
  'perla-toscana-doccia-idromassaggio.jpg',
  'perla-toscana-hero-cucina-attrezzata-16.jpg',
  'perla-toscana-hero-soggiorno-13.jpg',
  'perla-toscana-zona-pranzo-soggiorno.jpg',
  'perla-toscana-soggiorno-divano.jpg',
  'perla-toscana-tavolo-pranzo-apparecchiato.jpg'
].map((file) => `${siteConfig.siteUrl}/images/perla-toscana/${file}`);

const amenityFeature = [
  { name: 'wifi', value: true },
  { name: 'internetType', value: 'Free' },
  { name: 'parkingType', value: 'Free' },
  { name: 'privateParking', value: true },
  { name: 'ovenStove', value: true },
  { name: 'equippedKitchen', value: true },
  { name: 'ac', value: true },
  { name: 'tv', value: true },
  { name: 'smartTv', value: true },
  { name: 'hydromassageShower', value: true },
  { name: 'garden', value: true },
  { name: 'bedLinen', value: true },
  { name: 'towels', value: true },
  { name: 'hairDryer', value: true },
  { name: 'petsAllowed', value: false },
  { name: 'smokingAllowed', value: false },
  { name: 'licenseNum', value: `Italy CIN: ${siteConfig.placeholders.cin}` }
].map(({ name, value }) => ({ '@type': 'LocationFeatureSpecification', name, value }));

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

export function lodgingSchema(lang: Lang, path: string) {
  const pageUrl = new URL(path, siteConfig.siteUrl).toString();
  const lodgingId = `${siteConfig.siteUrl}/#lodging`;
  const vacationRentalId = `${siteConfig.siteUrl}/#vacation-rental`;
  const isHomePage = path === `/${lang}/`;
  const roomNames =
    lang === 'it'
      ? ['Camera King', 'Camera Queen', 'Camera doppia', 'Cucina', 'Bagno', 'Soggiorno']
      : ['King bedroom', 'Queen bedroom', 'Twin bedroom', 'Kitchen', 'Bathroom', 'Living room'];

  const vacationRental = {
    '@type': 'VacationRental',
    '@id': vacationRentalId,
    identifier: siteConfig.placeholders.cin,
    name: siteConfig.name,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    brand: { '@type': 'Brand', name: siteConfig.name },
    provider: { '@id': lodgingId },
    image: propertyImages,
    address,
    geo,
    latitude: geo.latitude,
    longitude: geo.longitude,
    telephone: siteConfig.placeholders.phone,
    checkinTime: siteConfig.houseRules.checkInTime,
    checkoutTime: siteConfig.houseRules.checkOutTime,
    knowsLanguage: ['it', 'en'],
    description:
      lang === 'it'
        ? 'Casa vacanza a Figline Valdarno con 3 camere, fino a 8 ospiti, parcheggio privato gratuito, Wi-Fi, aria condizionata e posizione comoda per Firenze, Chianti e The Mall Firenze.'
        : 'Holiday home in Figline Valdarno with 3 bedrooms, sleeps up to 8 guests, free private parking, Wi-Fi, air conditioning and a convenient location for Florence, Chianti and The Mall Firenze.',
    containsPlace: {
      '@type': 'Accommodation',
      additionalType: 'EntirePlace',
      name: lang === 'it' ? 'Intera casa vacanza Perla Toscana' : 'Entire Perla Toscana holiday home',
      occupancy: { '@type': 'QuantitativeValue', value: 8 },
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 1,
      numberOfRooms: 6,
      bed: [
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'Queen' },
        { '@type': 'BedDetails', numberOfBeds: 2, typeOfBed: 'Single' },
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'Double' }
      ],
      petsAllowed: false,
      smokingAllowed: false,
      amenityFeature,
      containsPlace: roomNames.map((name) => ({ '@type': 'Room', name }))
    },
    ...(isHomePage
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 5,
            ratingCount: 6,
            reviewCount: 6,
            bestRating: 5,
            worstRating: 1
          }
        }
      : {})
  };

  const lodgingBusiness = {
    '@type': 'LodgingBusiness',
    '@id': lodgingId,
    identifier: siteConfig.placeholders.cin,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: propertyImages,
    address,
    geo,
    telephone: siteConfig.placeholders.phone,
    checkinTime: siteConfig.houseRules.checkInTime,
    checkoutTime: siteConfig.houseRules.checkOutTime,
    petsAllowed: false,
    smokingAllowed: false,
    containsPlace: { '@id': vacationRentalId },
    sameAs: [
      siteConfig.social.instagramUrl,
      siteConfig.social.facebookUrl,
      siteConfig.social.pinterestUrl,
      siteConfig.social.tiktokUrl,
      siteConfig.placeholders.googleMapsUrl
    ]
  };

  return { '@context': 'https://schema.org', '@graph': [vacationRental, lodgingBusiness] };
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
