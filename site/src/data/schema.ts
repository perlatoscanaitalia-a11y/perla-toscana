import { siteConfig } from './siteConfig';
import type { Lang } from './pages';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '');

export function lodgingSchema(lang: Lang, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'VacationRental'],
    name: 'Perla Toscana',
    url: new URL(path, siteConfig.siteUrl).toString(),
    address: siteConfig.placeholders.address,
    telephone: siteConfig.placeholders.phone,
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
