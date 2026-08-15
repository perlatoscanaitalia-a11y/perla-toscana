export const siteConfig = {
  name: 'Perla Toscana',
  siteUrl: 'https://perla-toscana.it',
  placeholders: {
    avaiBookUrl: 'https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=398986&lang=it',
    whatsappUrl: 'https://wa.me/393270034324',
    whatsappPhone: '+39\u00a0327\u00a0003\u00a04324',
    phone: '+39\u00a0324\u00a0863\u00a02353',
    phoneHref: 'tel:+393248632353',
    email: 'info@perla-toscana.it',
    emailHref: 'mailto:info@perla-toscana.it',
    secondaryPhone: '+39\u00a0327\u00a0003\u00a04324',
    secondaryPhoneHref: 'tel:+393270034324',
    cin: 'IT048052C2SLTACXUQ',
    cir: '048052LTN0088',
    googleMapsUrl: 'https://www.google.com/maps/place/Perla+Toscana+-+Relax+a+30+km+da+Firenze/@43.593483,11.4974367,19z/data=!3m1!4b1!4m13!1m2!2m1!1sperla+toscana!3m9!1s0x132bb0cb053b582d:0x56f94de886e10b95!5m2!4m1!1i2!8m2!3d43.593483!4d11.4986544!16s%2Fg%2F11x1p2602c',
    address: 'Via Aretina 108, 50063 Figline e Incisa Valdarno FI'
  },
  social: {
    instagramUrl: 'https://www.instagram.com/perla.toscana.italia/',
    facebookUrl: 'https://www.facebook.com/PerlaToscanaItalia',
    pinterestUrl: 'https://it.pinterest.com/perlatoscana',
    tiktokUrl: 'https://www.tiktok.com/@perlatoscana',
    whatsappUrl: 'https://wa.me/393270034324'
  },
  houseRules: {
    checkInTime: '16:00',
    checkOutTime: '10:00',
    petsAllowed: 'Animali non ammessi',
    smokingRule: 'Vietato fumare all’interno. È possibile fumare solo all’esterno o in giardino.',
    partiesRule: 'Feste ed eventi non consentiti.',
    cancellationRule: 'Disponibilità e condizioni aggiornate sono confermate durante la prenotazione diretta.'
  },
  languages: {
    it: 'Italiano',
    en: 'English',
    de: 'Deutsch'
  }
};

export function getWhatsAppLinks(lang: 'it' | 'en' | 'de') {
  const text =
    lang === 'it'
      ? 'Buongiorno, vorrei informazioni su disponibilità, camere e posti letto di Perla Toscana.'
      : lang === 'de'
        ? 'Guten Tag, ich möchte Informationen zur Verfügbarkeit, zu den Schlafzimmern und Schlafplätzen der Perla Toscana.'
        : 'Hello, I would like information about availability, bedrooms and bed setup at Perla Toscana.';
  const encodedText = encodeURIComponent(text);

  return {
    desktop: `https://wa.me/393270034324?text=${encodedText}`,
    mobile: `https://wa.me/393270034324?text=${encodedText}`
  };
}

export const services = [
  { it: 'Fino a 8 ospiti', en: 'Sleeps up to 8 guests', de: 'Für bis zu 8 Personen' },
  { it: '3 camere', en: '3 bedrooms', de: '3 Schlafzimmer' },
  { it: '1 bagno con doccia idromassaggio', en: '1 bathroom with hydromassage shower', de: '1 Bad mit Hydromassage-Dusche' },
  { it: 'Parcheggio privato gratuito fino a 3 auto', en: 'Free private parking for up to 3 cars', de: 'Kostenloser Privatparkplatz für bis zu 3 Autos' },
  { it: 'Aria condizionata in ogni camera', en: 'Air conditioning in every bedroom', de: 'Klimaanlage in jedem Schlafzimmer' },
  { it: 'Wi-Fi', en: 'Wi-Fi', de: 'WLAN' },
  { it: 'Cucina attrezzata', en: 'Equipped kitchen', de: 'Ausgestattete Küche' },
  { it: 'Smart TV in ogni camera', en: 'Smart TV in every bedroom', de: 'Smart-TV in jedem Schlafzimmer' },
  { it: 'Doccia idromassaggio', en: 'Hydromassage shower', de: 'Hydromassage-Dusche' },
  { it: 'Giardino', en: 'Garden', de: 'Garten' },
  { it: 'Casa vacanza intera', en: 'Entire holiday home', de: 'Ganzes Ferienhaus' },
  { it: 'Lenzuola, asciugamani e kit ospiti inclusi', en: 'Bed linen, towels and guest essentials included', de: 'Bettwäsche, Handtücher und Gäste-Grundausstattung inklusive' }
];

export const imageNeeds = [
  'Camere',
  'Cucina e zona giorno',
  'Bagni',
  'Esterni',
  'Parcheggio',
  'Dettagli comfort'
];
