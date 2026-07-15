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
      it: 'Camera nei toni grigi con letto King 180 × 200 cm, materasso ortopedico, aria condizionata e Smart TV.',
      en: 'Double bedroom in shades of grey with a 180 × 200 cm King bed, orthopaedic mattress, air conditioning and Smart TV.'
    },
    images: [
      image('perla-toscana-camera-queen-size-poltrona.jpg', 'Camera King nei toni grigi con letto 180 × 200 cm e poltrona', 'Grey King bedroom with 180 × 200 cm bed and armchair', 'Vista completa della Camera King nei toni grigi.', 'Full view of the King bedroom in shades of grey.'),
      image('perla-toscana-camera-queen-size-tende.jpg', 'Camera King grigia con letto ortopedico e tende oscuranti', 'Grey King bedroom with orthopaedic bed and blackout curtains', 'Letto King ortopedico e tende oscuranti.', 'Orthopaedic King bed and blackout curtains.'),
      image('perla-toscana-camera-queen-size-smart-tv.jpg', 'Camera King con Smart TV, armadio e aria condizionata', 'King bedroom with Smart TV, wardrobe and air conditioning', 'Smart TV e dotazioni della Camera King.', 'Smart TV and amenities in the King bedroom.')
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
      image('perla-toscana-camera-king-size-vista-frontale.jpg', 'Camera matrimoniale Queen beige con letto 160 × 200 cm', 'Beige Queen bedroom with 160 × 200 cm bed', 'Vista frontale della Camera Queen nei toni beige.', 'Front view of the Queen bedroom in warm beige tones.'),
      image('perla-toscana-camera-king-size-luce-naturale.jpg', 'Camera Queen beige illuminata dalla luce naturale', 'Beige Queen bedroom filled with natural light', 'Luce naturale e spazio intorno al letto Queen.', 'Natural light and space around the Queen bed.'),
      image('perla-toscana-camera-king-size-dettaglio-letto.jpg', 'Dettaglio del letto Queen 160 × 200 cm con biancheria beige', 'Detail of the 160 × 200 cm Queen bed with beige bed linen', 'Dettagli e biancheria del letto Queen.', 'Details and bed linen of the Queen bed.'),
      image('perla-toscana-camera-king-size-tende.jpg', 'Camera matrimoniale Queen beige con tende e aria condizionata', 'Beige Queen bedroom with curtains and air conditioning', 'Tende e atmosfera rilassante nella Camera Queen.', 'Curtains and a relaxing atmosphere in the Queen bedroom.'),
      image('perla-toscana-camera-smart-tv-armadio.jpg', 'Camera Queen beige con armadio bianco e Smart TV', 'Beige Queen bedroom with white wardrobe and Smart TV', 'Armadio bianco e Smart TV nella Camera Queen.', 'White wardrobe and Smart TV in the Queen bedroom.')
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
      image('perla-toscana-letti-singoli-comodini.jpg', 'Letti singoli preparati con biancheria chiara e comodini', 'Single beds prepared with light bed linen and bedside tables', 'Letti separati pronti per l’arrivo degli ospiti.', 'Separate beds prepared for guests’ arrival.')
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
      image('perla-toscana-zona-pranzo-soggiorno.jpg', 'Zona pranzo accanto al soggiorno con tavolo', 'Dining area beside the living room with dining table', 'Zona pranzo collegata al soggiorno.', 'Dining area connected to the living room.'),
      image('perla-toscana-hero-accoglienza-tavola-3.jpg', 'Zona pranzo e tavolo nel soggiorno con angolo cottura di Perla Toscana', 'Dining area and table in the Perla Toscana living room with kitchenette', 'Zona pranzo del soggiorno con angolo cottura.', 'Dining area in the living room with kitchenette.'),
      image('perla-toscana-tavola-apparecchiata-dettaglio.jpg', 'Dettaglio del tavolo nella zona pranzo del soggiorno', 'Detail of the table in the living room dining area', 'Dettaglio della zona pranzo accanto all’angolo cottura.', 'Detail of the dining area beside the kitchenette.'),
      image('perla-toscana-tavolo-pranzo-apparecchiato.jpg', 'Tavolo e sedie nella zona pranzo del soggiorno con cucina', 'Table and chairs in the living room dining area with kitchen', 'Tavolo della zona pranzo nel soggiorno.', 'Dining table in the living room.')
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
  }
];

export const structuredDataGalleryImages = gallerySections
  .flatMap((section) => section.images.slice(0, 2))
  .map((item) => item.src);
