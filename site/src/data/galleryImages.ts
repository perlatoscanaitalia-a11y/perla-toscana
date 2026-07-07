import type { Lang } from './pages';

export interface GalleryImage {
  src: string;
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
}

const basePath = '/images/perla-toscana/';

export const galleryImages: GalleryImage[] = [
  {
    src: `${basePath}perla-toscana-camera-king-size-tende.jpg`,
    alt: {
      it: 'Camera matrimoniale luminosa con letto king size e tende eleganti a Perla Toscana',
      en: 'Bright double bedroom with king-size bed and elegant curtains at Perla Toscana'
    },
    caption: {
      it: 'Camera queen size con tessuti caldi e luce naturale.',
      en: 'Queen-size bedroom with warm textiles and natural light.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-king-size-vista-frontale.jpg`,
    alt: {
      it: 'Letto king size preparato per gli ospiti nell appartamento Perla Toscana',
      en: 'King-size bed prepared for guests in the Perla Toscana apartment'
    },
    caption: {
      it: 'Letto queen size preparato per un soggiorno rilassante.',
      en: 'Queen-size bed prepared for a relaxing stay.'
    }
  },
  {
    src: `${basePath}perla-toscana-tavola-apparecchiata-dettaglio.jpg`,
    alt: {
      it: 'Dettaglio della tavola apparecchiata con frutta fresca nella casa vacanza',
      en: 'Detail of the dining table set with fresh fruit in the holiday apartment'
    },
    caption: {
      it: 'Dettagli di accoglienza nella zona pranzo.',
      en: 'Welcoming details in the dining area.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-king-size-luce-naturale.jpg`,
    alt: {
      it: 'Camera matrimoniale con letto king size e luce naturale vicino Firenze',
      en: 'Double bedroom with king-size bed and natural light near Florence'
    },
    caption: {
      it: 'Spazi ampi e luminosi per riposare con calma.',
      en: 'Bright, generous spaces for a calm rest.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-queen-size-poltrona.jpg`,
    alt: {
      it: 'Camera con letto matrimoniale, poltrona e aria condizionata a Figline Valdarno',
      en: 'Bedroom with double bed, armchair and air conditioning in Figline Valdarno'
    },
    caption: {
      it: 'Camera matrimoniale con angolo relax e aria condizionata.',
      en: 'Double bedroom with a relaxing corner and air conditioning.'
    }
  },
  {
    src: `${basePath}perla-toscana-cucina-zona-pranzo.jpg`,
    alt: {
      it: 'Cucina attrezzata con zona pranzo dell appartamento Perla Toscana',
      en: 'Equipped kitchen with dining area in the Perla Toscana apartment'
    },
    caption: {
      it: 'Cucina attrezzata e tavolo per condividere i momenti in casa.',
      en: 'Equipped kitchen and table for shared moments at home.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-king-size-dettaglio-letto.jpg`,
    alt: {
      it: 'Dettaglio del letto matrimoniale preparato per il soggiorno in Toscana',
      en: 'Detail of the double bed prepared for a stay in Tuscany'
    },
    caption: {
      it: 'Biancheria curata e dettagli pensati per gli ospiti.',
      en: 'Thoughtful linen and guest-ready details.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-queen-size-tende.jpg`,
    alt: {
      it: 'Camera matrimoniale con letto queen size e tende oscuranti',
      en: 'Double bedroom with queen-size bed and blackout curtains'
    },
    caption: {
      it: 'Camera king size con tende oscuranti e atmosfera tranquilla.',
      en: 'King-size bedroom with blackout curtains and a quiet atmosphere.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-queen-size-smart-tv.jpg`,
    alt: {
      it: 'Camera matrimoniale con smart TV e arredi moderni',
      en: 'Double bedroom with smart TV and modern furnishings'
    },
    caption: {
      it: 'Camera con smart TV, armadio e arredi essenziali.',
      en: 'Bedroom with smart TV, wardrobe and practical furnishings.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-due-letti-singoli.jpg`,
    alt: {
      it: 'Camera con due letti singoli e comodino centrale per famiglie e gruppi',
      en: 'Bedroom with two single beds and a central bedside table for families and groups'
    },
    caption: {
      it: 'Due letti singoli per famiglie, amici o piccoli gruppi.',
      en: 'Two single beds for families, friends or small groups.'
    }
  },
  {
    src: `${basePath}perla-toscana-letti-singoli-comodini.jpg`,
    alt: {
      it: 'Letti singoli preparati con biancheria chiara nell appartamento',
      en: 'Single beds prepared with light bed linen in the apartment'
    },
    caption: {
      it: 'Letti singoli ordinati e pronti all arrivo.',
      en: 'Neatly prepared single beds ready for arrival.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-letti-singoli-armadio.jpg`,
    alt: {
      it: 'Camera con letti singoli, armadio e aria condizionata',
      en: 'Bedroom with single beds, wardrobe and air conditioning'
    },
    caption: {
      it: 'Camera con letti singoli, armadio e comfort pratici.',
      en: 'Twin bedroom with wardrobe and practical comforts.'
    }
  },
  {
    src: `${basePath}perla-toscana-zona-pranzo-soggiorno.jpg`,
    alt: {
      it: 'Zona pranzo e soggiorno con tavolo apparecchiato a Perla Toscana',
      en: 'Dining and living area with set table at Perla Toscana'
    },
    caption: {
      it: 'Zona pranzo accogliente accanto al soggiorno.',
      en: 'Welcoming dining area next to the living room.'
    }
  },
  {
    src: `${basePath}perla-toscana-tavolo-pranzo-apparecchiato.jpg`,
    alt: {
      it: 'Tavolo da pranzo apparecchiato per gli ospiti della casa vacanza',
      en: 'Dining table set for guests of the holiday apartment'
    },
    caption: {
      it: 'Tavola apparecchiata per vivere la casa con naturalezza.',
      en: 'A set table for easy moments at home.'
    }
  },
  {
    src: `${basePath}perla-toscana-soggiorno-divano.jpg`,
    alt: {
      it: 'Soggiorno con divano, TV e dettagli decorativi',
      en: 'Living area with sofa, TV and decorative details'
    },
    caption: {
      it: 'Soggiorno con divano e dettagli decorativi.',
      en: 'Living area with sofa and decorative details.'
    }
  },
  {
    src: `${basePath}perla-toscana-cucina-attrezzata.jpg`,
    alt: {
      it: 'Cucina attrezzata con forno, microonde e frigorifero',
      en: 'Equipped kitchen with oven, microwave and refrigerator'
    },
    caption: {
      it: 'Cucina completa per soggiorni brevi o piu lunghi.',
      en: 'Complete kitchen for short or longer stays.'
    }
  },
  {
    src: `${basePath}perla-toscana-bagno-specchio-luminoso.jpg`,
    alt: {
      it: 'Bagno moderno con lavabo e specchio retroilluminato',
      en: 'Modern bathroom with washbasin and backlit mirror'
    },
    caption: {
      it: 'Bagno moderno con specchio luminoso e finiture curate.',
      en: 'Modern bathroom with a bright mirror and refined finishes.'
    }
  },
  {
    src: `${basePath}perla-toscana-bagno-lavabo-design.jpg`,
    alt: {
      it: 'Lavabo del bagno con finiture eleganti',
      en: 'Bathroom washbasin with elegant finishes'
    },
    caption: {
      it: 'Dettaglio lavabo con materiali e colori eleganti.',
      en: 'Washbasin detail with elegant materials and colors.'
    }
  },
  {
    src: `${basePath}perla-toscana-bagno-sanitari.jpg`,
    alt: {
      it: 'Bagno con sanitari moderni e rivestimenti decorativi',
      en: 'Bathroom with modern fixtures and decorative wall tiles'
    },
    caption: {
      it: 'Bagno funzionale con rivestimenti decorativi.',
      en: 'Functional bathroom with decorative wall tiles.'
    }
  },
  {
    src: `${basePath}perla-toscana-doccia-idromassaggio.jpg`,
    alt: {
      it: 'Doccia idromassaggio con pannello multifunzione',
      en: 'Hydromassage shower with multifunction panel'
    },
    caption: {
      it: 'Doccia idromassaggio per un momento di benessere.',
      en: 'Hydromassage shower for a moment of wellbeing.'
    }
  },
  {
    src: `${basePath}perla-toscana-camera-smart-tv-armadio.jpg`,
    alt: {
      it: 'Camera con smart TV, armadio e aria condizionata',
      en: 'Bedroom with smart TV, wardrobe and air conditioning'
    },
    caption: {
      it: 'Camera con smart TV, armadio e aria condizionata.',
      en: 'Bedroom with smart TV, wardrobe and air conditioning.'
    }
  },
  {
    src: `${basePath}perla-toscana-sentiero-verde-valdarno.jpg`,
    alt: {
      it: 'Sentiero nel verde del Valdarno vicino a Perla Toscana',
      en: 'Green walking path in Valdarno near Perla Toscana'
    },
    caption: {
      it: 'Strada privata di accesso alla casa, di circa 200 metri.',
      en: 'Private access road to the house, about 200 metres long.'
    }
  }
];
