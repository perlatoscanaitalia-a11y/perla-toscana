import type { Lang } from './pages';

export interface GalleryImage {
  src: string;
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
}

export interface GallerySection {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  images: GalleryImage[];
}

const basePath = '/images/perla-toscana/';
const image = (
  file: string,
  itAlt: string,
  enAlt: string,
  itCaption: string,
  enCaption: string
): GalleryImage => ({
  src: `${basePath}${file}`,
  alt: { it: itAlt, en: enAlt },
  caption: { it: itCaption, en: enCaption }
});

export const gallerySections: GallerySection[] = [
  {
    id: 'camera-king',
    title: { it: 'Camera King con materasso ortopedico', en: 'King Bedroom with Orthopaedic Mattress' },
    description: {
      it: 'Camera matrimoniale nei toni del grigio con letto King 180 × 200 cm, materasso ortopedico, aria condizionata e Smart TV.',
      en: 'Double bedroom in shades of grey with a 180 × 200 cm King bed, orthopaedic mattress, air conditioning and Smart TV.'
    },
    images: [
      image('perla-toscana-camera-king-size-vista-frontale.jpg', 'Camera King con letto 180 × 200 cm e materasso ortopedico a Perla Toscana', 'Front view of the King bedroom with 180 × 200 cm orthopaedic bed at Perla Toscana', 'Vista completa della Camera King nei toni del grigio.', 'Full view of the King bedroom in shades of grey.'),
      image('perla-toscana-camera-king-size-luce-naturale.jpg', 'Camera King illuminata dalla luce naturale con aria condizionata', 'King bedroom with natural light and air conditioning', 'Luce naturale e spazio intorno al letto King.', 'Natural light and generous space around the King bed.'),
      image('perla-toscana-camera-king-size-dettaglio-letto.jpg', 'Dettaglio del letto King ortopedico preparato per gli ospiti', 'Detail of the orthopaedic King bed prepared for guests', 'Biancheria e dettagli del letto King 180 × 200 cm.', 'Bed linen and details of the 180 × 200 cm King bed.'),
      image('perla-toscana-camera-king-size-tende.jpg', 'Camera King grigia con tende e letto matrimoniale', 'Grey King bedroom with curtains and double bed', 'Tende e atmosfera rilassante nella Camera King.', 'Curtains and a relaxing atmosphere in the King bedroom.')
    ]
  },
  {
    id: 'camera-queen',
    title: { it: 'Camera matrimoniale Queen', en: 'Queen Bedroom' },
    description: {
      it: 'Camera nei toni beige con letto matrimoniale Queen 160 × 200 cm, aria condizionata e Smart TV.',
      en: 'Bedroom in warm beige tones with a 160 × 200 cm Queen bed, air conditioning and Smart TV.'
    },
    images: [
      image('perla-toscana-camera-queen-size-poltrona.jpg', 'Camera matrimoniale Queen beige con letto 160 × 200 cm e poltrona', 'Beige Queen bedroom with 160 × 200 cm bed and armchair', 'Camera Queen con poltrona e toni beige.', 'Queen bedroom with an armchair and warm beige tones.'),
      image('perla-toscana-camera-queen-size-smart-tv.jpg', 'Camera Queen con Smart TV e arredi moderni', 'Queen bedroom with Smart TV and modern furnishings', 'Smart TV e comfort della Camera Queen.', 'Smart TV and practical comforts in the Queen bedroom.'),
      image('perla-toscana-camera-queen-size-tende.jpg', 'Letto Queen 160 × 200 cm con tende oscuranti beige', '160 × 200 cm Queen bed with beige blackout curtains', 'Tende oscuranti e luce soffusa nella Camera Queen.', 'Blackout curtains and soft light in the Queen bedroom.')
    ]
  },
  {
    id: 'camera-doppia',
    title: { it: 'Camera con due letti singoli e cabina armadio', en: 'Twin Bedroom with Spacious Walk-in Wardrobe' },
    description: {
      it: 'Camera con due letti singoli, ampia cabina armadio, aria condizionata e Smart TV. Ideale per bambini, ragazzi o ospiti che preferiscono letti separati.',
      en: 'Bedroom with two single beds, a spacious walk-in wardrobe, air conditioning and Smart TV. Ideal for children, teenagers or guests who prefer separate beds.'
    },
    images: [
      image('perla-toscana-camera-due-letti-singoli.jpg', 'Camera doppia con due letti singoli e comodino centrale', 'Twin bedroom with two single beds and central bedside table', 'I due letti singoli della camera doppia.', 'The two separate beds in the twin bedroom.'),
      image('perla-toscana-camera-letti-singoli-armadio.jpg', 'Camera doppia con due letti singoli e ampia cabina armadio', 'Twin bedroom with two single beds and spacious walk-in wardrobe', 'Cabina armadio e spazio contenitivo della camera doppia.', 'Walk-in wardrobe and storage space in the twin bedroom.'),
      image('perla-toscana-letti-singoli-comodini.jpg', 'Letti singoli preparati con biancheria chiara e comodini', 'Single beds prepared with light bed linen and bedside tables', 'Letti separati pronti per l’arrivo degli ospiti.', 'Separate beds prepared for guests’ arrival.'),
      image('perla-toscana-camera-smart-tv-armadio.jpg', 'Smart TV, armadio e aria condizionata nella camera doppia', 'Smart TV, wardrobe and air conditioning in the twin bedroom', 'Smart TV e dotazioni della camera doppia.', 'Smart TV and amenities in the twin bedroom.')
    ]
  },
  {
    id: 'soggiorno-cucina',
    title: { it: 'Soggiorno con angolo cottura e divano letto', en: 'Living Room with Kitchenette and Sofa Bed' },
    description: {
      it: 'Zona giorno con cucina attrezzata, tavolo da pranzo e divano letto. Uno spazio pratico per mangiare, rilassarsi e ospitare fino a due persone aggiuntive.',
      en: 'Living area with an equipped kitchenette, dining table and sofa bed. A practical space for eating, relaxing and accommodating up to two additional guests.'
    },
    images: [
      image('perla-toscana-soggiorno-cucina-figline-valdarno.jpg', 'Soggiorno con angolo cottura e divano letto', 'Living room with kitchenette and sofa bed', 'Vista d’insieme del soggiorno con angolo cottura.', 'Full view of the living room with kitchenette.'),
      image('perla-toscana-soggiorno-divano.jpg', 'Divano letto nella zona giorno di Perla Toscana', 'Sofa bed in the Perla Toscana living area', 'Divano letto per il relax e due posti aggiuntivi.', 'Sofa bed for relaxing and two additional sleeping places.'),
      image('perla-toscana-cucina-attrezzata.jpg', 'Cucina attrezzata con forno, microonde e frigorifero', 'Equipped kitchenette with oven, microwave and refrigerator', 'Elettrodomestici e dotazioni dell’angolo cottura.', 'Appliances and equipment in the kitchenette.'),
      image('perla-toscana-cucina-zona-pranzo.jpg', 'Angolo cottura con tavolo da pranzo nella zona giorno', 'Kitchenette with dining table in the living area', 'Cucina e tavolo da pranzo nello stesso ambiente.', 'Kitchenette and dining table in one practical space.'),
      image('perla-toscana-zona-pranzo-soggiorno.jpg', 'Zona pranzo accanto al soggiorno con tavolo apparecchiato', 'Dining area beside the living room with a set table', 'Zona pranzo collegata al soggiorno.', 'Dining area connected to the living room.')
    ]
  },
  {
    id: 'bagno',
    title: { it: 'Bagno con doccia idromassaggio', en: 'Bathroom with Hydromassage Shower' },
    description: {
      it: 'Bagno attrezzato con doccia idromassaggio, asciugamani e servizi essenziali per il soggiorno.',
      en: 'Equipped bathroom with a hydromassage shower, towels and essential amenities for the stay.'
    },
    images: [
      image('perla-toscana-doccia-idromassaggio.jpg', 'Bagno con doccia idromassaggio e pannello multifunzione', 'Bathroom with hydromassage shower and multifunction panel', 'Doccia idromassaggio con comandi multifunzione.', 'Hydromassage shower with multifunction controls.'),
      image('perla-toscana-bagno-specchio-luminoso.jpg', 'Bagno con lavabo e specchio retroilluminato', 'Bathroom with washbasin and backlit mirror', 'Specchio luminoso e zona lavabo.', 'Backlit mirror and washbasin area.'),
      image('perla-toscana-bagno-lavabo-design.jpg', 'Lavabo di design con asciugamani per gli ospiti', 'Designer washbasin with towels for guests', 'Lavabo e asciugamani preparati per il soggiorno.', 'Washbasin and towels prepared for the stay.'),
      image('perla-toscana-bagno-sanitari.jpg', 'Sanitari moderni e rivestimenti decorativi del bagno', 'Modern bathroom fixtures and decorative wall tiles', 'Sanitari e finiture del bagno.', 'Bathroom fixtures and decorative finishes.')
    ]
  },
  {
    id: 'accoglienza',
    title: { it: 'Accoglienza e dettagli della casa', en: 'Welcome Details' },
    description: {
      it: 'Dettagli preparati per gli ospiti, tavola apparecchiata e piccoli omaggi di benvenuto.',
      en: 'Details prepared for guests, a set dining table and small welcome gifts.'
    },
    images: [
      image('perla-toscana-hero-accoglienza-tavola-3.jpg', 'Tavola apparecchiata e accoglienza a Perla Toscana', 'Set dining table and welcome details at Perla Toscana', 'La tavola preparata per accogliere gli ospiti.', 'The dining table prepared to welcome guests.'),
      image('perla-toscana-tavola-apparecchiata-dettaglio.jpg', 'Dettaglio della tavola con frutta e omaggi di benvenuto', 'Detail of the table with fruit and welcome gifts', 'Piccoli omaggi e dettagli sulla tavola.', 'Small welcome gifts and details on the table.'),
      image('perla-toscana-tavolo-pranzo-apparecchiato.jpg', 'Tavolo da pranzo apparecchiato nella zona giorno', 'Dining table set in the living area', 'Tavolo da pranzo pronto per gli ospiti.', 'Dining table ready for guests.')
    ]
  }
];

export const structuredDataGalleryImages = gallerySections
  .flatMap((section) => section.images.slice(0, 2))
  .map((item) => item.src);
