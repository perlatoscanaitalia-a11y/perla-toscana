import { siteConfig } from './siteConfig';

export type Lang = 'it' | 'en';

export interface PageContent {
  slug: string;
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  showCtas?: boolean;
  showBookingCta?: boolean;
  sections: {
      title: string;
      body?: string;
      html?: string;
      variant?: 'callout';
      image?: {
        src: string;
        webpSrc?: string;
        alt: string;
        width?: number;
        height?: number;
      };
      caption?: string;
    anchor?: string;
    attractions?: {
      name: string;
      locality?: string;
      description: string;
      image?: {
        src: string;
        webpSrc?: string;
        alt: Record<Lang, string>;
        width?: number;
        height?: number;
      };
      categories?: string[];
      idealFor?: string;
      cuisine?: string;
      distance: string;
      drivingTime: string;
      phone?: string;
      phoneHref?: string;
      phoneVerified?: boolean;
      whatsapp?: string;
      whatsappHref?: string;
      whatsappVerified?: boolean;
      directionsUrl?: string;
      websiteUrl?: string;
      profileUrl?: string;
      profileLabel?: string;
      tripadvisorUrl?: string;
      rating?: string;
      ratingSource?: string;
      badges?: string[];
      note?: string;
    }[];
    note?: string;
    rules?: string[];
    links?: { label: string; href: string; external?: boolean }[];
  }[];
  faqs?: { question: string; answer: string; links?: { label: string; href: string }[] }[];
}

const it: PageContent[] = [
  {
    slug: 'appartamento',
    path: '/it/appartamento/',
    alternatePath: '/en/the-apartment/',
    title: 'Casa vacanza a Figline Valdarno | Perla Toscana vicino Firenze',
    description: 'Casa vacanza a Figline Valdarno con 3 camere, fino a 8 ospiti, Wi-Fi, aria condizionata, cucina attrezzata e parcheggio privato. Comoda per Firenze, Chianti e The Mall Firenze.',
    eyebrow: 'Appartamento',
    h1: 'Casa vacanza a Figline Valdarno per famiglie, gruppi e lavoro',
    intro: '<strong>Perla Toscana</strong> accoglie <strong>fino a 8 ospiti</strong> in una <strong>casa vacanza a Figline Valdarno</strong>, comoda per <strong>Firenze</strong>, <strong>Chianti</strong> e The Mall Firenze. È pensata per famiglie, gruppi e soggiorni di lavoro che cercano spazi pratici, comfort e una richiesta di disponibilità semplice.',
    sections: [
      {
        title: 'Spazi principali',
        body: 'La casa dispone di <strong>3 camere</strong>, 1 bagno, <strong>cucina attrezzata</strong>, <strong>Smart TV in ogni camera</strong>, <strong>Wi-Fi</strong>, aria condizionata in ogni camera, doccia idromassaggio, giardino e parcheggio privato gratuito per 3 auto.'
      },
      {
        title: 'Una base comoda in Toscana',
        body: 'La posizione a <strong>Figline Valdarno</strong> permette di organizzare giornate a <strong>Firenze</strong>, nel <strong>Chianti</strong> e al <strong>The Mall Firenze</strong> senza rinunciare alla tranquillità del rientro. È una <strong>casa vacanza vicino Firenze</strong> adatta anche a chi cerca una base pratica per shopping, città d’arte e borghi toscani.',
        links: [{ label: 'Scopri la posizione', href: '/it/posizione/' }]
      },
      {
        title: 'Servizi inclusi per gli ospiti',
        body: 'Per rendere il soggiorno più comodo, forniamo lenzuola, asciugamani, carta igienica, bagnoschiuma, asciugacapelli, coperte e cuscini supplementari. La configurazione rende <strong>Perla Toscana</strong> una casa vacanza per 8 persone in <strong>Toscana</strong> pratica e curata.'
      },
      {
        title: 'Comoda anche per soggiorni di lavoro',
        body: 'Per chi viaggia per lavoro, <strong>Perla Toscana</strong> offre camere separate, <strong>Wi-Fi</strong>, cucina attrezzata, aria condizionata e <strong>parcheggio privato gratuito</strong>. Una soluzione semplice e funzionale per <strong>trasferte</strong>, tecnici e piccoli team in zona.'
      }
    ]
  },
  {
    slug: 'camere-servizi',
    path: '/it/camere-servizi/',
    alternatePath: '/en/rooms-amenities/',
    title: 'Camere e servizi Perla Toscana | Casa vacanza fino a 8 ospiti',
    description: '3 camere, una camera con due letti singoli, divano letto nel soggiorno con angolo cottura, brandina su richiesta, Wi-Fi, Smart TV e parcheggio privato.',
    eyebrow: 'Camere e servizi',
    h1: 'Camere e servizi di Perla Toscana a Figline Valdarno',
    intro: '<strong>Perla Toscana</strong> è una <strong>casa vacanza a Figline Valdarno</strong>, vicino Firenze, con <strong>3 camere</strong> e spazi comodi per famiglie, gruppi e soggiorni di lavoro fino a 8 ospiti. Qui trovi una camera con <strong>due letti singoli</strong>, il <strong>divano letto</strong> nel soggiorno con angolo cottura, la brandina o letto pieghevole su richiesta e servizi pratici come Wi-Fi, aria condizionata, cucina attrezzata, Smart TV in ogni camera e parcheggio privato.',
    sections: [
      {
        title: 'Letti disponibili',
        body: 'La disposizione dei letti è pensata per accogliere <strong>fino a 8 ospiti</strong>. La <strong>brandina su richiesta</strong> o letto pieghevole è disponibile su richiesta.',
        rules: [
          '1 letto king size ortopedico 180 x 200 cm.',
          '1 letto queen size 160 x 200 cm.',
          '2 letti singoli.',
          '1 divano letto nel soggiorno con angolo cottura.',
          'Brandina o letto pieghevole disponibile su richiesta.'
        ]
      },
      {
        title: 'Servizi inclusi',
        body: 'Gli ospiti trovano <strong>Wi-Fi</strong>, <strong>Smart TV in ogni camera</strong>, <strong>cucina attrezzata</strong>, aria condizionata in ogni camera, doccia idromassaggio, giardino e <strong>parcheggio privato gratuito</strong> per 3 auto.',
        rules: [
          'Fino a 8 ospiti.',
          '3 camere e 1 bagno.',
          'Cucina attrezzata.',
          'TV in ogni camera.',
          'Aria condizionata in ogni camera.',
          'Parcheggio privato per 3 auto.'
        ]
      },
      {
        title: 'Dotazioni per il soggiorno',
        body: 'Per rendere il soggiorno più comodo, forniamo lenzuola, asciugamani, carta igienica, bagnoschiuma, asciugacapelli, coperte e cuscini supplementari.'
      },
      {
        title: 'Comoda anche per soggiorni di lavoro',
        body: 'Per chi viaggia per lavoro, <strong>Perla Toscana</strong> offre camere separate, <strong>Wi-Fi</strong>, cucina attrezzata, aria condizionata e parcheggio privato gratuito. Una soluzione semplice e funzionale per <strong>trasferte</strong>, <strong>tecnici e piccoli team</strong> in zona.'
      }
    ]
  },
  {
    slug: 'galleria',
    path: '/it/galleria/',
    alternatePath: '/en/gallery/',
    title: 'Galleria Perla Toscana | Foto appartamento vicino Firenze',
    description: 'Galleria fotografica di Perla Toscana: camere, cucina, bagno, giardino, parcheggio e dettagli dell’appartamento.',
    eyebrow: 'Galleria',
    h1: 'Gli spazi di Perla Toscana',
    intro: 'La galleria mostra gli ambienti principali di <strong>Perla Toscana</strong>: camere, cucina, zona giorno, bagno, giardino, parcheggio e dettagli utili per conoscere meglio la casa vacanza prima del soggiorno.',
    sections: [
      {
        title: 'Foto della casa',
        body: 'Le immagini mostrano gli ambienti principali dell’appartamento: camere, soggiorno, cucina, bagno, dettagli e spazi nei dintorni.'
      }
    ]
  },
  {
    slug: 'cosa-fare',
    path: '/it/cosa-fare/',
    alternatePath: '/en/what-to-do/',
    title: 'Cosa fare vicino Perla Toscana | Firenze, Chianti e The Mall Firenze',
    description: 'Cosa fare vicino Perla Toscana a Figline Valdarno: Firenze, Chianti, The Mall Firenze, borghi toscani, shopping e città d’arte.',
    eyebrow: 'Cosa fare',
    h1: 'Cosa fare vicino Perla Toscana',
    intro: '<strong>Perla Toscana</strong> è una base comoda per scoprire <strong>Firenze</strong>, il <strong>Chianti</strong>, <strong>The Mall Firenze</strong> e i borghi del <strong>Valdarno</strong>. Se cerchi <strong>cosa fare vicino a Perla Toscana</strong>, qui trovi idee semplici per alternare città d’arte, shopping e giornate in <strong>Toscana</strong> con un rientro tranquillo in <strong>casa vacanza vicino Firenze</strong>.',
    sections: [
      {
        title: 'Firenze e città d’arte',
        body: 'Da <strong>Perla Toscana</strong> puoi organizzare facilmente una giornata a <strong>Firenze</strong> e nelle principali città d’arte toscane. Musei, centro storico, piazze e passeggiate tra arte e architettura sono una scelta naturale per chi vuole un soggiorno vario e ben collegato. La casa vacanza vicino Firenze è comoda per tornare la sera in un contesto più tranquillo del <strong>Valdarno</strong>.',
        attractions: [
          {
            name: 'Firenze centro',
            locality: 'Firenze',
            description: 'Una giornata nel centro storico di Firenze permette di alternare musei, piazze, ponti, palazzi storici e passeggiate con calma. È una tappa ideale per chi cerca città d’arte e vuole rientrare poi in una zona più tranquilla.',
            image: {
              src: '/images/places/firenze-centro.jpg',
              width: 1280,
              height: 852,
              alt: {
                it: 'Centro storico di Firenze con vista sui luoghi simbolo della città',
                en: 'Historic centre of Florence with views of the city landmarks'
              }
            },
            categories: ['Città d’arte', 'Musei', 'Centro storico'],
            idealFor: 'Ideale per musei, piazze, passeggiate e una giornata culturale.',
            distance: 'circa 30 km',
            drivingTime: 'circa 45 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Firenze%20centro'
          }
        ]
      },
      {
        title: 'Chianti e borghi toscani',
        body: 'Il <strong>Chianti</strong> è una delle escursioni più semplici da organizzare durante il soggiorno. Borghi, colline e cantine rendono questa zona ideale per chi cerca natura, vino e paesaggi autentici in <strong>Toscana</strong>. Greve in Chianti, Radda e Castellina sono mete classiche per una mezza giornata o una giornata intera.',
        attractions: [
          {
            name: 'Greve in Chianti',
            locality: 'Chianti',
            description: 'Greve in Chianti è una base perfetta per esplorare il territorio del Chianti, tra piazze raccolte, cantine, colline e strade panoramiche. È una scelta naturale per chi vuole vivere i borghi toscani con ritmi lenti.',
            image: {
              src: '/images/places/greve-in-chianti.jpg',
              width: 1280,
              height: 777,
              alt: {
                it: 'Paesaggio e borgo di Greve in Chianti nelle colline toscane',
                en: 'Greve in Chianti landscape and village in the Tuscan hills'
              }
            },
            categories: ['Chianti', 'Borghi toscani', 'Cantine'],
            idealFor: 'Ideale per colline, vino, borghi e strade panoramiche.',
            distance: 'circa 30 km',
            drivingTime: 'circa 40 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Greve%20in%20Chianti'
          }
        ]
      },
      {
        title: 'The Mall Firenze e shopping',
        body: '<strong>The Mall Firenze</strong> è una tappa comoda per una giornata di shopping, con il vantaggio di rientrare poi in una casa vacanza più tranquilla a <strong>Figline Valdarno</strong>. La posizione è pratica anche per chi vuole combinare outlet, rientro serale e una base ben collegata tra <strong>Firenze</strong>, <strong>Chianti</strong> e <strong>Valdarno</strong>.',
        attractions: [
          {
            name: 'The Mall Firenze',
            locality: 'Leccio / Figline e Incisa Valdarno',
            description: 'The Mall Firenze è una delle destinazioni più comode per lo shopping in Toscana. Dopo una giornata tra boutique e outlet, rientrare a Perla Toscana resta semplice e piacevole.',
            image: {
              src: '/images/places/the-mall-firenze.jpg',
              webpSrc: '/images/places/the-mall-firenze.webp',
              width: 1280,
              height: 872,
              alt: {
                it: 'The Mall Firenze outlet e area shopping vicino a Figline Valdarno',
                en: 'The Mall Firenze outlet shopping area near Figline Valdarno'
              }
            },
            categories: ['Shopping', 'Outlet', 'The Mall Firenze'],
            idealFor: 'Ideale per shopping in Toscana e rientro comodo in casa vacanza.',
            distance: 'circa 18 km',
            drivingTime: 'circa 25 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Mall%20Firenze'
          }
        ]
      },
      {
        title: 'Siena',
        body: 'Una gita in giornata a <strong>Siena</strong> aggiunge centro storico, piazze, vicoli e atmosfera medievale al soggiorno. È una delle città d’arte più note della <strong>Toscana</strong> e si abbina bene a una base nel <strong>Valdarno</strong>.',
        attractions: [
          {
            name: 'Siena',
            locality: 'Siena',
            description: 'Siena è perfetta per una gita in giornata tra centro storico, piazze, vicoli e atmosfera medievale. È una delle città d’arte più note della Toscana e si abbina bene a un soggiorno nel Valdarno.',
            image: {
              src: '/images/places/siena.jpg',
              width: 1280,
              height: 628,
              alt: {
                it: 'Centro storico di Siena con i suoi edifici medievali',
                en: 'Historic centre of Siena with its medieval buildings'
              }
            },
            categories: ['Città d’arte', 'Gita in giornata', 'Centro storico'],
            idealFor: 'Ideale per arte, storia e una giornata tra le piazze di Siena.',
            distance: 'circa 70 km',
            drivingTime: 'circa 1 h 15 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Siena'
          }
        ]
      },
      {
        title: 'San Gimignano',
        body: 'Basta una giornata per vedere il borgo e le sue torri medievali, con un percorso piacevole tra centro storico e strade panoramiche. <strong>San Gimignano</strong> è una meta molto riconoscibile per chi vuole vivere i <strong>borghi toscani</strong> durante il soggiorno.',
        attractions: [
          {
            name: 'San Gimignano',
            locality: 'San Gimignano',
            description: 'San Gimignano è uno dei borghi toscani più riconoscibili, famoso per le torri medievali e il centro storico compatto. È una gita molto piacevole se vuoi aggiungere un luogo simbolico al tuo soggiorno in Toscana.',
            image: {
              src: '/images/places/san-gimignano.jpg',
              width: 1280,
              height: 899,
              alt: {
                it: 'San Gimignano con le torri medievali nel borgo toscano',
                en: 'San Gimignano with medieval towers in the Tuscan village'
              }
            },
            categories: ['Borghi toscani', 'Torri medievali', 'Gita in giornata'],
            idealFor: 'Ideale per borghi toscani, torri medievali e centro storico.',
            distance: 'circa 55 km',
            drivingTime: 'circa 1 h 10 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=San%20Gimignano'
          }
        ]
      },
      {
        title: 'Val d’Orcia',
        body: 'La <strong>Val d’Orcia</strong> merita una gita più lunga: panorami toscani, colline, borghi e strade lente da attraversare con calma. È una delle zone più iconiche per chi vuole vedere la <strong>Toscana</strong> più fotografata e tranquilla.',
        attractions: [
          {
            name: 'Val d’Orcia',
            locality: 'Val d’Orcia',
            description: 'La Val d’Orcia offre panorami toscani, strade panoramiche e borghi celebri come meta di una gita più lunga ma molto interessante. È una scelta eccellente per chi vuole vedere uno dei paesaggi più iconici della regione.',
            image: {
              src: '/images/places/val-d-orcia.jpg',
              width: 1600,
              height: 1011,
              alt: {
                it: 'Panorami della Val d’Orcia con colline e paesaggi toscani',
                en: 'Val d’Orcia landscapes with hills and Tuscan scenery'
              }
            },
            categories: ['Panorami toscani', 'Borghi', 'Gita più lunga'],
            idealFor: 'Ideale per panorami, fotografia e una giornata di campagna toscana.',
            distance: 'circa 110 km',
            drivingTime: 'circa 1 h 50 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Val%20d%27Orcia'
          }
        ]
      },
      {
        title: 'Natura, lago e percorsi in bici nel Valdarno',
        body: 'Per chi vuole alternare città d’arte, shopping e giornate più tranquille, la zona intorno a <strong>Perla Toscana</strong> offre anche spunti per passeggiate, <strong>percorsi in bici</strong>, strade panoramiche e momenti di relax nel <strong>Valdarno</strong>.',
        attractions: [
          {
            name: 'Lago di San Cipriano',
            locality: 'Valdarno',
            description: 'Un’idea semplice per chi cerca una pausa tranquilla nella natura, lontano dal traffico e dalle visite più impegnative. Prima di andare, consigliamo di verificare sempre accesso, condizioni aggiornate e indicazioni.',
            categories: ['Natura', 'Relax', 'Passeggiata', 'Lago'],
            idealFor: 'Ideale per una pausa rilassante, natura, passeggiate leggere e momenti tranquilli.',
            distance: 'circa 7 km',
            drivingTime: 'circa 12 min',
            directionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Perla%20Toscana%2C%20Via%20Aretina%20108%2C%2050063%20Figline%20e%20Incisa%20Valdarno%20FI&destination=Lago%20di%20San%20Cipriano%2C%20Cavriglia%20AR&travelmode=driving'
          },
          {
            name: 'Percorsi in bici nel Valdarno',
            locality: 'Figline Valdarno e dintorni',
            description: 'La zona del Valdarno è adatta a chi vuole scoprire il territorio in bici o e-bike, tra strade di campagna, colline, borghi e percorsi panoramici. Alcuni tratti possono essere su strada condivisa con le auto, quindi è consigliabile scegliere il percorso in base al proprio livello.',
            image: {
              src: '/images/perla-toscana/perla-toscana-sentiero-verde-valdarno.jpg',
              width: 1600,
              height: 1067,
              alt: {
                it: 'Sentiero verde nel Valdarno vicino a Perla Toscana',
                en: 'Green path in the Valdarno area near Perla Toscana'
              }
            },
            categories: ['Bici', 'E-bike', 'Valdarno', 'Natura'],
            idealFor: 'Ideale per ospiti sportivi, e-bike, cicloturismo leggero e giornate all’aperto.',
            distance: 'circa 5 km',
            drivingTime: 'circa 10 min',
            directionsUrl: 'https://www.valdarnobikeroad.it/percorsi/',
            websiteUrl: 'https://www.valdarnobikeroad.it/percorsi/'
          },
          {
            name: 'Strada dei Setteponti',
            locality: 'Valdarno / Reggello / Arezzo',
            description: 'La Strada dei Setteponti è uno degli itinerari panoramici più conosciuti del Valdarno, interessante per chi ama pedalare tra paesaggi toscani, borghi e colline. È più adatta a ospiti già abituati a percorsi in bici o e-bike.',
            image: {
              src: '/images/perla-toscana/perla-toscana-strada-setteponti.jpg',
              webpSrc: '/images/perla-toscana/perla-toscana-strada-setteponti.webp',
              width: 3200,
              height: 2134,
              alt: {
                it: 'Strada panoramica toscana nel Valdarno adatta alla Strada dei Setteponti',
                en: 'Scenic Tuscan road in the Valdarno area suited to the Strada dei Setteponti'
              }
            },
            categories: ['Bici', 'Panorami', 'Borghi', 'Toscana'],
            idealFor: 'Ideale per cicloturismo, panorami, borghi toscani e percorsi più lunghi.',
            distance: 'circa 15 km',
            drivingTime: 'circa 25 min',
            directionsUrl: 'https://www.valdarnobikeroad.it/percorsi/setteponti-pratomagno/',
            websiteUrl: 'https://www.valdarnobikeroad.it/percorsi/setteponti-pratomagno/'
          }
        ],
        note: 'Le idee sono pensate per chi cerca natura vicino Figline Valdarno, con ritmi tranquilli e uscite semplici da organizzare durante il soggiorno.'
      }
    ]
  },
  {
    slug: 'posizione',
    path: '/it/posizione/',
    alternatePath: '/en/location/',
    title: 'Perla Toscana a Figline Valdarno | Una posizione comoda tra Firenze, Chianti e The Mall Firenze',
    description: 'Perla Toscana si trova in Via Aretina 108, comoda per Firenze, Chianti e The Mall Firenze, con parcheggio privato fino a 3 auto.',
    eyebrow: 'Posizione',
    h1: 'Comoda per Firenze, Chianti e The Mall Firenze',
    intro: '<strong>Perla Toscana</strong> si trova in Via Aretina 108, a <strong>Figline Valdarno</strong>, tra <strong>Firenze</strong>, il <strong>Chianti</strong> e <strong>The Mall Firenze</strong>. Questa è la pagina da seguire per <strong>come arrivare</strong> senza dubbi e per trovare l’accesso corretto alla casa vacanza.',
    sections: [
      {
        title: 'Attenzione: per arrivare segui il link corretto',
        variant: 'callout',
        body: 'Alcuni navigatori possono indicare un accesso sbagliato alla casa. Per raggiungere correttamente <strong>Perla Toscana</strong>, ti consigliamo di seguire il <strong>punto di accesso corretto</strong> indicato qui sotto e le istruzioni finali riportate in questa pagina.',
        links: [{ label: 'Apri il punto di accesso corretto', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'Da questo punto bisogna girare a destra, prendere la strada sterrata a destra del cancello e proseguire per circa 200 metri fino alla casa.'
      },
      {
        title: 'Indirizzo',
        body: '<strong>Perla Toscana</strong> si trova in <strong>Via Aretina 108</strong>, 50063 <strong>Figline Valdarno</strong> / <strong>Figline e Incisa Valdarno</strong> (FI), Italia. Il <strong>parcheggio privato gratuito</strong> si trova direttamente davanti alla casa, con spazio fino a 3 auto.',
        links: [{ label: 'Apri su Google Maps', href: 'https://g.co/kgs/NiQTiYh', external: true }]
      },
      {
        title: 'Accesso finale alla casa',
        image: {
          src: '/images/generated/perla-toscana-paesaggio-valdarno.jpg',
          alt: 'Vista della casa e dell’accesso finale a Perla Toscana in Via Aretina 108, Figline Valdarno'
        },
        caption: 'Foto di riferimento per riconoscere l’accesso finale a Perla Toscana.',
        body: '<p>Per evitare errori del navigatore, segui il <strong>punto di accesso corretto</strong>: <a href="https://maps.app.goo.gl/foLgZVfujAXU5FkS8" target="_blank" rel="noopener noreferrer">https://maps.app.goo.gl/foLgZVfujAXU5FkS8</a></p><p>Quando arrivi a questo punto, gira a destra e prendi la <strong>strada sterrata</strong> situata a destra del cancello. Prosegui per circa <strong>200 metri</strong> fino alla fine della strada. Il <strong>parcheggio privato gratuito</strong> si trova direttamente davanti alla casa.</p>',
        links: [{ label: 'Apri il punto di accesso corretto', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }]
      },
      {
        title: 'In auto da Firenze / nord',
        body: 'Da <strong>Firenze</strong> o dall’area nord, prendi l’autostrada <strong>A1 Incisa-Reggello</strong>. Alla rotonda segui le indicazioni per <strong>Figline Valdarno</strong>, poi prosegui verso Via Aretina 108 e segui le istruzioni finali riportate in questa pagina.'
      },
      {
        title: 'In auto da Roma / sud',
        body: 'Per chi arriva da Roma o dal sud Italia, può essere comoda l’uscita <strong>A1 Valdarno</strong>, in zona Terranuova Bracciolini / San Giovanni Valdarno. Da lì prosegui verso <strong>Figline Valdarno</strong> e Via Aretina 108. Prima della partenza consigliamo di controllare il percorso aggiornato su Google Maps o sul navigatore.'
      },
      {
        title: 'In treno',
        body: 'La <strong>stazione di Figline Valdarno</strong> è il riferimento più comodo. Da <strong>Firenze Santa Maria Novella</strong> partono treni regionali per Figline Valdarno con collegamenti frequenti. Per controllare orari aggiornati e biglietti, consulta il sito ufficiale <strong>Trenitalia</strong>.',
        links: [{ label: 'Controlla gli orari su Trenitalia', href: 'https://www.trenitalia.com/it.html', external: true }],
        note: 'Dalla stazione di Figline Valdarno è consigliabile organizzare un taxi, un trasferimento locale oppure verificare gli autobus disponibili prima della partenza.'
      },
      {
        title: 'In autobus',
        body: 'Perla Toscana è servita dagli autobus di Autolinee Toscane. La fermata <strong>SR69 Deposito Gas V</strong> si trova a circa 200 metri, 2-3 minuti a piedi dalla casa, ed è collegata con Figline Valdarno, Firenze e altre località della zona.<br><br>Per chi arriva in treno, dalla stazione di Figline Valdarno è possibile raggiungere facilmente Perla Toscana in autobus oppure in taxi in pochi minuti.<br><br>Ti consigliamo di verificare sempre gli orari aggiornati prima della partenza.',
        links: [
          { label: 'Linee e orari ufficiali AT', href: 'https://www.at-bus.it/it', external: true },
          { label: 'Linea bus 353', href: 'https://www.at-bus.it/it/linee-e-orari/firenze-extraurbano-353', external: true }
        ]
      },
      {
        title: 'Taxi consigliati',
        body: 'Per arrivi senza auto, soprattutto con bagagli o in orario serale, consigliamo di organizzare il trasferimento in anticipo.',
        rules: [
          'Taxi Mike – servizio 24 ore: +39 333 259 5053.',
          'Varvarito Taxi Service: +39 338 337 6959.'
        ]
      },
      {
        title: 'Importante per il tassista',
        body: 'Mostra al tassista il <strong>punto di accesso corretto</strong> e chiedi di seguirlo esattamente, anche se il navigatore suggerisce un percorso diverso. Da questo punto il tassista deve girare a destra, prendere la <strong>strada sterrata</strong> situata a destra del cancello e proseguire per circa <strong>200 metri</strong> fino ad arrivare a <strong>Perla Toscana</strong>.',
        links: [{ label: 'Apri il punto di accesso corretto', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'Questo è l’accesso corretto alla proprietà e porta direttamente al parcheggio privato gratuito davanti alla casa.'
      },
      {
        title: 'Hai bisogno di aiuto?',
        body: 'Se durante il viaggio hai dubbi o difficoltà a trovare la struttura, puoi chiamarci o scriverci su WhatsApp al numero indicato nella prenotazione. Saremo felici di accoglierti a <strong>Perla Toscana</strong> e ti auguriamo un piacevole soggiorno.'
      }
    ]
  },
  {
    slug: 'come-arrivare',
    path: '/it/come-arrivare/',
    alternatePath: '/en/how-to-reach/',
    title: 'Come arrivare a Perla Toscana | Indicazioni, parcheggio, treno e taxi',
    description: 'Indicazioni per raggiungere Perla Toscana a Figline Valdarno: indirizzo, Google Maps, auto, treno, autobus, taxi e parcheggio privato gratuito.',
    eyebrow: 'Come arrivare',
    h1: 'Come raggiungere Perla Toscana',
    intro: 'Tutte le informazioni utili per arrivare senza difficoltà: indirizzo, Google Maps, auto, treno, autobus, taxi e accesso corretto alla proprietà.',
    sections: [
      {
        title: 'Come arrivare a Perla Toscana',
        body: '<strong>Perla Toscana</strong> si trova in Via Aretina 108, 50063 <strong>Figline e Incisa Valdarno</strong> (FI), in posizione comoda per raggiungere <strong>Firenze</strong>, il <strong>Chianti</strong> e <strong>The Mall Firenze</strong>.',
        links: [{ label: 'Apri su Google Maps', href: 'https://g.co/kgs/NiQTiYh', external: true }]
      },
      {
        title: 'Importante: segui il link corretto',
        variant: 'callout',
        body: 'Alcuni navigatori potrebbero non individuare correttamente l’accesso alla proprietà. Per arrivare senza difficoltà, consigliamo di seguire il punto Google Maps indicato qui sotto, soprattutto negli ultimi 200 metri.',
        links: [{ label: 'Apri il punto di accesso corretto', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'Quando arrivi al punto indicato, gira a destra e imbocca la strada privata sterrata. Prosegui per circa 200 metri fino in fondo alla strada. Il parcheggio privato si trova davanti alla casa.'
      },
      {
        title: 'In auto da Firenze',
        body: 'Da Firenze, prendi l’autostrada A1 in direzione Roma ed esci a Incisa-Reggello. Alla rotonda segui le indicazioni per Figline Valdarno e prosegui verso Perla Toscana.'
      },
      {
        title: 'Accesso corretto alla proprietà',
        body: 'Quando arrivi al punto indicato nel link qui sotto, gira a destra e imbocca la strada sterrata situata alla destra del cancello. Prosegui per circa 200 metri fino in fondo alla strada.',
        links: [{ label: 'Punto di accesso corretto', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'Potrai parcheggiare gratuitamente direttamente davanti alla casa. Sono disponibili 3 posti auto privati.'
      },
      {
        title: 'In treno',
        body: 'La stazione più vicina è Figline Valdarno. Da Firenze Santa Maria Novella partono treni regionali frequenti verso Figline Valdarno. Gli orari possono cambiare, quindi consigliamo di verificare sempre prima della partenza. Dalla stazione di Figline Valdarno puoi raggiungere Perla Toscana in taxi, in circa 7-10 minuti, oppure con autobus locale scendendo alla fermata SR69 Deposito Gas V, situata a circa 200 metri dalla proprietà.'
      },
      {
        title: 'In autobus',
        body: 'Perla Toscana è servita dagli autobus di Autolinee Toscane. La fermata <strong>SR69 Deposito Gas V</strong> si trova a circa 200 metri, 2-3 minuti a piedi dalla casa, ed è collegata con Figline Valdarno, Firenze e altre località della zona.<br><br>Per chi arriva in treno, dalla stazione di Figline Valdarno è possibile raggiungere facilmente Perla Toscana in autobus oppure in taxi in pochi minuti.<br><br>Ti consigliamo di verificare sempre gli orari aggiornati prima della partenza.',
        links: [
          { label: 'Linee e orari ufficiali AT', href: 'https://www.at-bus.it/it', external: true },
          { label: 'Linea bus 353', href: 'https://www.at-bus.it/it/linee-e-orari/firenze-extraurbano-353', external: true }
        ]
      },
      {
        title: 'Taxi consigliati',
        body: 'Puoi contattare questi servizi taxi per organizzare il trasferimento verso Perla Toscana.',
        rules: [
          'Taxi Mike - servizio 24 ore - telefono +39 333 259 5053.',
          'Varvarito Servizi Taxi - telefono +39 338 337 6959.'
        ],
        links: [
          { label: 'Chiama Taxi Mike', href: 'tel:+393332595053' },
          { label: 'Chiama Varvarito', href: 'tel:+393383376959' }
        ]
      },
      {
        title: 'Importante per il tassista',
        body: 'Ti consigliamo di mostrare al tassista il link del punto di accesso corretto e di chiedergli di seguirlo con attenzione, anche se il navigatore propone un percorso diverso.',
        rules: [
          'Girare a destra.',
          'Percorrere la strada sterrata situata alla destra del cancello.',
          'Proseguire per circa 200 metri fino ad arrivare direttamente a Perla Toscana.'
        ],
        links: [{ label: 'Mostra il punto di accesso corretto', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'Questo è l’accesso corretto alla proprietà e permette di arrivare comodamente fino al parcheggio privato.'
      },
      {
        title: 'Hai bisogno di aiuto?',
        body: 'Se durante il viaggio hai difficoltà o non riesci a trovare la casa, puoi chiamarci o scriverci su WhatsApp usando i pulsanti qui sotto.',
        links: [
          { label: 'WhatsApp', href: siteConfig.placeholders.whatsappUrl, external: true },
          { label: 'Chiama', href: siteConfig.placeholders.phoneHref }
        ]
      }
    ]
  },
  {
    slug: 'dove-mangiare',
    path: '/it/dove-mangiare/',
    alternatePath: '/en/where-to-eat/',
    title: 'Dove mangiare vicino Perla Toscana | Colazione, pizzerie e cucina toscana',
    description: 'Dove mangiare vicino Perla Toscana: una selezione breve di bar, pizzerie, trattorie e ristoranti a Figline Valdarno, nel Valdarno e vicino a The Mall Firenze.',
    eyebrow: 'Dove mangiare',
    h1: 'Dove mangiare vicino Perla Toscana',
    intro: 'Una selezione pratica e breve di bar, pizzerie, trattorie e ristoranti vicino a <strong>Perla Toscana</strong>, utile per colazione, pranzo veloce, cena in famiglia, soggiorni di lavoro o una serata speciale in <strong>Toscana</strong>.',
    sections: [
      {
        title: 'Scegli in base al momento',
        body: 'Vai subito alla voce che ti serve: colazione, pizza, <strong>cucina toscana</strong>, <strong>pranzo di lavoro</strong>, aperitivo o indirizzi comodi vicino a <strong>The Mall Firenze</strong>.',
        links: [
          { label: 'Colazione e bar', href: '#colazione-e-bar' },
          { label: 'Pizza e cena facile', href: '#pizza-e-cena-facile' },
          { label: 'Cucina toscana e trattorie', href: '#cucina-toscana-e-trattorie' },
          { label: 'Pranzo di lavoro', href: '#pranzo-di-lavoro' },
          { label: 'Aperitivo e serata informale', href: '#aperitivo-e-serata-informale' },
          { label: 'Vicino a The Mall Firenze', href: '#vicino-the-mall-firenze' }
        ]
      },
      {
        anchor: 'colazione-e-bar',
        title: 'Colazione e bar',
        body: 'Caffè, cappuccino, cornetti e pasticcerie a <strong>Figline Valdarno</strong>. Ideale prima di partire o per una pausa veloce vicino a <strong>Perla Toscana</strong>.',
        attractions: [
          {
            name: 'Bar Pasticceria Fabbrini',
            locality: 'Figline Valdarno',
            description: 'Pasticceria artigianale nel centro di Figline, pratica per caffè, cappuccino, paste e dolci prima di una gita.',
            categories: ['Colazione', 'Pasticceria', 'Centro storico'],
            cuisine: 'Bar e pasticceria',
            idealFor: 'Ideale per una colazione classica in centro.',
            distance: 'circa 3 km',
            drivingTime: 'circa 7 min',
            phone: '+39 055 9544400',
            phoneHref: 'tel:+390559544400',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bar%20Pasticceria%20Fabbrini%20Via%20Mazzini%2033%20Figline%20Valdarno'
          },
          {
            name: 'Saida',
            locality: 'Figline Valdarno',
            description: 'Bar pasticceria storico in Piazza Marsilio Ficino, utile per una colazione semplice nel centro di Figline.',
            categories: ['Colazione', 'Centro storico', 'Pasticceria'],
            cuisine: 'Bar pasticceria',
            idealFor: 'Ideale per una colazione semplice in centro storico.',
            distance: 'circa 3 km',
            drivingTime: 'circa 7 min',
            phone: '+39 055 9155253',
            phoneHref: 'tel:+390559155253',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Saida%20Piazza%20Marsilio%20Ficino%2055%20Figline%20Valdarno'
          }
        ]
      },
      {
        anchor: 'pizza-e-cena-facile',
        title: 'Pizza e cena facile',
        body: 'Soluzioni semplici per famiglie, gruppi e ospiti che vogliono restare in zona.',
        attractions: [
          {
            name: 'La Terrazza',
            locality: 'Figline Valdarno',
            description: 'Ristorante pizzeria pratico per una cena semplice con pizza e piatti italiani.',
            categories: ['Pizza', 'Famiglie', 'Gruppi'],
            cuisine: 'Pizza e cucina italiana',
            idealFor: 'Ideale per famiglie, gruppi e cena informale.',
            distance: 'circa 4 km',
            drivingTime: 'circa 8 min',
            phone: '+39 339 2675954',
            phoneHref: 'tel:+393392675954',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=La%20Terrazza%20ristorante%20pizzeria%20Figline%20Valdarno'
          },
          {
            name: 'Pizzeria I’ Brollo',
            locality: 'Figline Valdarno',
            description: 'Pizzeria semplice e vicina, comoda per una cena facile senza allontanarsi troppo.',
            categories: ['Pizza', 'Cena facile', 'Asporto'],
            cuisine: 'Pizza',
            idealFor: 'Ideale per pizza e cena facile.',
            distance: 'circa 3 km',
            drivingTime: 'circa 7 min',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Pizzeria%20I%20Brollo%20Figline%20Valdarno'
          },
          {
            name: 'Farm Shop Pizzeria',
            locality: 'Tenuta Il Palagio / Figline e Incisa Valdarno',
            description: 'Pizzeria e wine bar della Tenuta Il Palagio, utile per una cena semplice ma diversa dal solito, con pizza, vino e atmosfera toscana nelle colline di Figline e Incisa Valdarno.',
            categories: ['Pizza', 'Wine bar', 'Cena facile', 'Tavoli all’aperto'],
            cuisine: 'Pizza, vino e prodotti della tenuta',
            idealFor: 'Ideale per pizza, cena informale, vino locale e serata rilassata.',
            distance: 'circa 12 km',
            drivingTime: 'circa 20 min',
            phone: '+39 055 19850699',
            phoneHref: 'tel:+3905519850699',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Farm%20Shop%20Pizzeria%20Tenuta%20Il%20Palagio%20Figline%20Valdarno',
            websiteUrl: 'https://www.farmshoppizzeria.com/'
          },
          {
            name: '1950 American Diner Figline Valdarno',
            locality: 'Figline Valdarno',
            description: 'Locale in stile American diner, utile per famiglie, bambini, gruppi e ospiti che cercano una cena informale o un brunch diverso dalla cucina toscana classica. Il locale dispone anche di spazio esterno, parcheggio e area giochi per bambini.',
            categories: ['American diner', 'Hamburger', 'Famiglie', 'Bambini', 'Brunch'],
            cuisine: 'American diner, hamburger, brunch, piatti informali',
            idealFor: 'Ideale per famiglie, bambini, hamburger, brunch e cena informale.',
            distance: 'circa 5 km',
            drivingTime: 'circa 10 min',
            phone: '+39 331 31 97 788',
            phoneHref: 'tel:+393313197788',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=1950%20American%20Diner%20Figline%20Valdarno%20Via%20Francesco%20Petrarca%20171',
            websiteUrl: 'https://1950americandiner.it/figline-valdarno/',
            note: 'Orari, giorni di apertura, menu e disponibilità possono cambiare. Consigliamo di verificare sempre sul sito ufficiale o su Google Maps prima della visita.'
          }
        ]
      },
      {
        anchor: 'cucina-toscana-e-trattorie',
        title: 'Cucina toscana e trattorie',
        body: 'Indirizzi più tipici per una cena curata, semplice ma con carattere toscano.',
        attractions: [
          {
            name: 'Osteria Corte de’ Frati',
            locality: 'Figline Valdarno centro',
            description: 'Osteria raccolta nel centro storico, adatta per una cena con cucina toscana curata.',
            categories: ['Cucina toscana', 'Centro storico', 'Coppie'],
            cuisine: 'Cucina toscana e italiana',
            idealFor: 'Ideale per coppie e cena curata.',
            distance: 'circa 3 km',
            drivingTime: 'circa 7 min',
            phone: '+39 055 9152077',
            phoneHref: 'tel:+390559152077',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20Corte%20de%20Frati%20Figline%20Valdarno',
            websiteUrl: 'https://www.osteriacortedefrati.com/'
          },
          {
            name: 'Trattoria Tramaglino',
            locality: 'Figline Valdarno',
            description: 'Trattoria toscana informale, utile per carne, bistecca e una cena semplice con amici o famiglia.',
            categories: ['Trattoria toscana', 'Carne', 'Famiglie'],
            cuisine: 'Toscana, carne',
            idealFor: 'Ideale per famiglie, gruppi e cena informale.',
            distance: 'circa 4 km',
            drivingTime: 'circa 8 min',
            phone: '+39 320 3807754',
            phoneHref: 'tel:+393203807754',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Trattoria%20Tramaglino%20Figline%20Valdarno'
          }
        ]
      },
      {
        anchor: 'pranzo-di-lavoro',
        title: 'Pranzo di lavoro',
        body: 'Locali pratici per trasferte, tecnici e piccoli team. Soluzioni rapide, semplici e facili da raggiungere.',
        attractions: [
          {
            name: 'La Casavecchia',
            locality: 'Figline Valdarno',
            description: 'Ristorante toscano adatto a gruppi, lavoratori e pranzi organizzati.',
            categories: ['Pranzo di lavoro', 'Gruppi', 'Toscana'],
            cuisine: 'Cucina toscana',
            idealFor: 'Ideale per lavoratori e gruppi.',
            distance: 'circa 6 km',
            drivingTime: 'circa 12 min',
            phone: '+39 328 9444558',
            phoneHref: 'tel:+393289444558',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ristorante%20La%20Casavecchia%20Figline%20Valdarno'
          },
          {
            name: 'Osteria Il Postiglione',
            locality: 'Figline e Incisa Valdarno',
            description: 'Utile per un pranzo semplice con cucina toscana e servizio rapido.',
            categories: ['Pranzo di lavoro', 'Cucina toscana', 'Servizio rapido'],
            cuisine: 'Cucina toscana',
            idealFor: 'Ideale per un pranzo veloce di lavoro.',
            distance: 'circa 12 km',
            drivingTime: 'circa 18 min',
            phone: '+39 055 8335757',
            phoneHref: 'tel:+390558335757',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20Il%20Postiglione%20Figline%20Incisa%20Valdarno'
          }
        ]
      },
      {
        anchor: 'aperitivo-e-serata-informale',
        title: 'Aperitivo e serata informale',
        body: 'Vino, taglieri e locali tranquilli per una serata leggera vicino a <strong>Perla Toscana</strong>.',
        attractions: [
          {
            name: 'Gocce d’Uva',
            locality: 'Figline Valdarno',
            description: 'Locale da considerare per vino, aperitivo e una serata informale in zona.',
            categories: ['Aperitivo', 'Vino', 'Serata informale'],
            cuisine: 'Vino e taglieri',
            idealFor: 'Ideale per coppie e piccoli gruppi.',
            distance: 'circa 3 km',
            drivingTime: 'circa 7 min',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Gocce%20d%20Uva%20Figline%20Valdarno'
          },
          {
            name: 'Osteria Vinicolo',
            locality: 'Figline Valdarno / Valdarno',
            description: 'Una scelta rilassata per una cena semplice con cucina italiana e un bicchiere di vino.',
            categories: ['Aperitivo', 'Cena', 'Cucina italiana'],
            cuisine: 'Italiana, carne e pesce',
            idealFor: 'Ideale per una cena rilassata e vino.',
            distance: 'circa 4 km',
            drivingTime: 'circa 8 min',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20Vinicolo%20Figline%20Valdarno'
          }
        ]
      },
      {
        anchor: 'vicino-the-mall-firenze',
        title: 'Vicino a The Mall Firenze',
        body: 'Indirizzi comodi dopo una giornata di shopping a <strong>The Mall Firenze</strong> o nella zona di Leccio.',
        attractions: [
          {
            name: 'Osteria de’ Medici',
            locality: 'Incisa / Reggello',
            description: 'Cena toscana comoda dopo lo shopping, con attenzione a carne e piatti tradizionali.',
            categories: ['Vicino The Mall', 'Cucina toscana', 'Carne'],
            cuisine: 'Toscana e bistecca',
            idealFor: 'Ideale per una cena dopo lo shopping.',
            distance: 'circa 12 km',
            drivingTime: 'circa 18 min',
            phone: '+39 055 8335780',
            phoneHref: 'tel:+390558335780',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20de%20Medici%20Incisa%20Reggello',
            websiteUrl: 'https://www.osteriademedici.it/'
          },
          {
            name: 'Farm Shop Pizzeria',
            locality: 'Tenuta Il Palagio',
            description: 'Pizzeria e wine bar della tenuta, una scelta rilassata vicino a Leccio.',
            categories: ['Vicino The Mall', 'Pizza', 'Wine bar'],
            cuisine: 'Pizza, vino e prodotti della tenuta',
            idealFor: 'Ideale per una cena semplice dopo lo shopping.',
            distance: 'circa 12 km',
            drivingTime: 'circa 20 min',
            phone: '+39 055 19850699',
            phoneHref: 'tel:+3905519850699',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Farm%20Shop%20Pizzeria%20Tenuta%20Il%20Palagio%20Figline%20Valdarno',
            websiteUrl: 'https://www.farmshoppizzeria.com/'
          }
        ]
      },
      {
        title: 'Avviso utile',
        body: 'Orari, giorni di apertura, menu e disponibilità possono cambiare. Consigliamo di verificare sempre direttamente con il locale prima della visita.'
      }
    ]
  },
  {
    slug: 'prenota',
    path: '/it/prenota/',
    alternatePath: '/en/book/',
    title: 'Verifica disponibilità Perla Toscana | Appartamento vicino Firenze',
    description: 'Verifica la disponibilità di Perla Toscana: controlla le date, contatta via WhatsApp o chiama per informazioni sull’appartamento.',
    eyebrow: 'Disponibilità',
    h1: 'Verifica disponibilità per Perla Toscana',
    intro: 'Prima di prenotare, chiamaci o scrivici. Ti aiuteremo a verificare la disponibilità, conoscere la migliore tariffa disponibile e scegliere la configurazione dei letti più adatta. Possiamo anche rispondere alle tue domande sulla casa, sui servizi e sulla zona.',
    sections: [
      {
        title: 'Come funziona',
        body: 'Puoi chiamarci o scriverci su WhatsApp per verificare disponibilità, prezzo e configurazione dei letti. Se preferisci procedere online, puoi utilizzare il nostro sistema di prenotazione sicuro.',
        links: [{ label: 'Come arrivare a Perla Toscana', href: '/it/come-arrivare/' }]
      },
      {
        title: 'Prima di confermare',
        body: 'Controlla date, numero di ospiti, configurazione letti, regole della casa e servizi inclusi. Disponibilità e condizioni aggiornate vengono confermate durante la richiesta.'
      },
      {
        title: 'Soggiorni di lavoro',
        body: 'Se organizzi una <strong>trasferta</strong> aziendale o un soggiorno per un piccolo team in zona, scrivici su WhatsApp: possiamo aiutarti a verificare configurazione letti, <strong>parcheggio privato gratuito</strong> e dettagli pratici prima della prenotazione.'
      },
      {
        title: 'Prenotazione diretta',
        body: 'Prenotando direttamente dal sito ufficiale di Perla Toscana puoi trovare tariffe più convenienti rispetto ai principali portali e parlare direttamente con noi prima del soggiorno. Per ricevere assistenza, chiamaci o scrivici su WhatsApp prima di confermare.'
      },
      {
        title: 'Per ricevere una risposta più rapida',
        body: 'Quando ci scrivi per verificare disponibilità o prezzi, indicaci:',
        rules: [
          'date del soggiorno',
          'numero di ospiti',
          'presenza di bambini',
          'motivo del viaggio, se utile',
          'eventuali esigenze particolari'
        ]
      }
    ],
    faqs: [
      { question: 'Dove verifico disponibilità e condizioni?', answer: 'Puoi usare il pulsante di disponibilità e controllare le informazioni aggiornate al momento della richiesta.' },
      { question: 'Posso parlare con qualcuno prima di prenotare?', answer: 'Sì. Puoi usare WhatsApp o chiamare il numero principale indicato nel sito.' }
    ]
  },
  {
    slug: 'regole-informazioni',
    path: '/it/regole-informazioni/',
    alternatePath: '/en/house-rules-info/',
    title: 'FAQ Perla Toscana | Regole, servizi e informazioni utili',
    description: 'FAQ e informazioni utili su Perla Toscana a Figline Valdarno: posizione, camere, parcheggio, Wi-Fi, regole, check-in e disponibilità.',
    eyebrow: 'Regole e informazioni',
    h1: 'Regole della casa e informazioni utili',
    intro: 'Risposte rapide per conoscere meglio <strong>Perla Toscana</strong>, organizzare l’arrivo e capire servizi, regole, posizione e disponibilità prima del soggiorno.',
    sections: [
      {
        title: 'Regole principali',
        body: 'Le regole valgono per tutti gli ospiti durante il soggiorno.',
        rules: [
          'Check-in dalle 16:00.',
          'Check-out entro le 10:00.',
          'Animali non ammessi.',
          'Feste ed eventi non consentiti.',
          'Vietato fumare all’interno.',
          'È possibile fumare solo all’esterno o in giardino.',
          'Tenere le zanzariere abbassate la sera e la notte.'
        ]
      },
      {
        title: 'Informazioni struttura',
        body: `CIN: ${siteConfig.placeholders.cin}. CIR: ${siteConfig.placeholders.cir}. Indirizzo: ${siteConfig.placeholders.address}.`,
        links: [{ label: 'Come arrivare', href: '/it/come-arrivare/' }]
      }
    ],
    faqs: [
      { question: 'Dove si trova Perla Toscana?', answer: '<strong>Perla Toscana</strong> si trova in Via Aretina 108, a <strong>Figline e Incisa Valdarno</strong>, in <strong>Toscana</strong>. La posizione è comoda per raggiungere <strong>Firenze</strong>, il Chianti, The Mall Firenze e diverse mete del Valdarno.', links: [{ label: 'Posizione', href: '/it/posizione/' }] },
      { question: 'Perla Toscana è una casa vacanza vicino Firenze?', answer: 'Sì, <strong>Perla Toscana</strong> è una <strong>casa vacanza vicino Firenze</strong>, pensata per chi vuole visitare la città e rientrare in una zona più tranquilla. <strong>Firenze</strong> centro è raggiungibile in auto in circa 45 minuti, in base al traffico.', links: [{ label: 'Posizione', href: '/it/posizione/' }] },
      { question: 'Quanto dista Perla Toscana da The Mall Firenze?', answer: '<strong>The Mall Firenze</strong> si trova a circa 18 km da <strong>Perla Toscana</strong> ed è raggiungibile in auto in circa 25 minuti. La casa è una soluzione comoda per chi cerca un soggiorno vicino all’outlet e al Chianti.', links: [{ label: 'Posizione', href: '/it/posizione/' }] },
      { question: 'Quanti ospiti può accogliere Perla Toscana?', answer: '<strong>Perla Toscana</strong> può accogliere <strong>fino a 8 ospiti</strong>. La casa dispone di <strong>3 camere</strong>, un <strong>divano letto</strong> e una brandina o letto pieghevole disponibile su richiesta.', links: [{ label: 'Camere', href: '/it/camere-servizi/' }] },
      { question: 'Quante camere ci sono?', answer: 'La casa dispone di 3 camere: una camera con letto king size ortopedico 180 × 200 cm, una camera con letto queen size 160 × 200 cm e una camera con 2 letti singoli. Inoltre sono disponibili un divano letto nel soggiorno con angolo cottura e una brandina o letto pieghevole su richiesta.', links: [{ label: 'Camere', href: '/it/camere-servizi/' }, { label: 'Galleria', href: '/it/galleria/' }] },
      { question: 'C’è il parcheggio privato?', answer: 'Sì, <strong>Perla Toscana</strong> dispone di <strong>parcheggio privato gratuito</strong> davanti alla casa, con spazio fino a 3 auto. Questo rende più semplice organizzare spostamenti verso Firenze, Chianti, The Mall Firenze e altre mete in Toscana.' },
      { question: 'Serve l’auto per soggiornare a Perla Toscana?', answer: 'L’auto è consigliata, soprattutto per visitare Firenze, il Chianti, The Mall Firenze, Siena, San Gimignano e la Val d’Orcia con maggiore libertà. È possibile arrivare anche in treno fino a Figline Valdarno e poi proseguire in taxi o autobus locale.', links: [{ label: 'Come arrivare', href: '/it/come-arrivare/' }] },
      { question: 'Come si arriva a Perla Toscana?', answer: 'Perla Toscana si trova in Via Aretina 108, a Figline e Incisa Valdarno. È importante seguire il punto di accesso corretto indicato nella pagina “Come arrivare”, soprattutto per gli ultimi 200 metri di strada privata.', links: [{ label: 'Come arrivare', href: '/it/come-arrivare/' }] },
      { question: 'C’è una strada privata per arrivare alla casa?', answer: 'Sì, per raggiungere Perla Toscana bisogna percorrere una strada privata sterrata di circa 200 metri. Il parcheggio si trova davanti alla casa.', links: [{ label: 'Come arrivare', href: '/it/come-arrivare/' }] },
      { question: 'La casa ha aria condizionata?', answer: 'Sì, <strong>Perla Toscana</strong> dispone di <strong>aria condizionata</strong> in ogni camera. Questo rende il soggiorno più confortevole anche nei mesi estivi.' },
      { question: 'C’è il Wi-Fi?', answer: 'Sì, la casa dispone di <strong>Wi-Fi</strong>. È una soluzione adatta anche per chi viaggia per lavoro, <strong>tecnici e piccoli team</strong> in zona.' },
      { question: 'C’è la TV nelle camere?', answer: 'Sì, è presente una <strong>Smart TV in ogni camera</strong>. Gli ospiti possono guardare <strong>Netflix e altri servizi streaming</strong> accedendo con le proprie credenziali personali.' },
      { question: 'La cucina è attrezzata?', answer: 'Sì, Perla Toscana dispone di cucina attrezzata. Gli ospiti possono usarla per preparare pasti in autonomia durante il soggiorno.' },
      { question: 'La casa è adatta alle famiglie?', answer: 'Sì, <strong>Perla Toscana</strong> è adatta a <strong>famiglie</strong>, coppie e piccoli gruppi. Gli spazi separati, le <strong>3 camere</strong>, la cucina attrezzata e il parcheggio privato rendono il soggiorno pratico.', links: [{ label: 'Camere', href: '/it/camere-servizi/' }] },
      { question: 'La casa è adatta a soggiorni di lavoro?', answer: 'Sì, <strong>Perla Toscana</strong> è comoda anche per <strong>soggiorni di lavoro</strong>, trasferte, tecnici e piccoli team. Offre camere separate, Wi-Fi, cucina attrezzata, aria condizionata e parcheggio privato.' },
      { question: 'Gli animali sono ammessi?', answer: 'No, gli animali non sono ammessi. Questa regola aiuta a mantenere la casa ordinata e adatta a tutti gli ospiti.' },
      { question: 'Si può fumare?', answer: 'Non è consentito fumare all’interno della casa. È possibile fumare solo all’esterno o in giardino, rispettando gli spazi e la pulizia della struttura.' },
      { question: 'Sono consentite feste o eventi?', answer: 'No, feste ed eventi non sono consentiti. Perla Toscana è pensata per soggiorni tranquilli e rispettosi della casa e del vicinato.' },
      { question: 'A che ora sono check-in e check-out?', answer: 'Il check-in è disponibile dalle 16:00 e il check-out deve essere effettuato entro le 10:00. Per esigenze particolari è possibile contattarci prima dell’arrivo.' },
      { question: 'Quali servizi sono inclusi?', answer: 'Sono inclusi lenzuola, asciugamani, carta igienica, bagnoschiuma, asciugacapelli, coperte e cuscini supplementari. La casa dispone anche di Wi-Fi, aria condizionata, cucina attrezzata e parcheggio privato.', links: [{ label: 'Camere', href: '/it/camere-servizi/' }] },
      { question: 'Cosa si può visitare da Perla Toscana?', answer: 'Da Perla Toscana si possono visitare facilmente Firenze, il Chianti, The Mall Firenze, Greve in Chianti, Siena, San Gimignano e la Val d’Orcia. La posizione è comoda per organizzare gite giornaliere in Toscana.', links: [{ label: 'Cosa fare', href: '/it/cosa-fare/' }] },
      { question: 'Perla Toscana è vicina al Chianti?', answer: 'Sì, Perla Toscana è in una posizione comoda per visitare il Chianti. Greve in Chianti dista circa 30 km ed è raggiungibile in auto in circa 40 minuti.', links: [{ label: 'Cosa fare', href: '/it/cosa-fare/' }] },
      { question: 'Perla Toscana è comoda per visitare la Val d’Orcia?', answer: 'Sì, la Val d’Orcia è raggiungibile per una gita in giornata. Dista circa 110 km da Perla Toscana ed è raggiungibile in auto in circa 1 ora e 50 minuti, a seconda del traffico e del percorso.', links: [{ label: 'Cosa fare', href: '/it/cosa-fare/' }] },
      { question: 'Come posso verificare disponibilità o prenotare?', answer: 'Gli ospiti possono controllare la disponibilità usando il pulsante “Verifica disponibilità” oppure contattarci direttamente su WhatsApp. WhatsApp è il modo più semplice per ricevere informazioni rapide sul soggiorno.', links: [{ label: 'Verifica disponibilità', href: '/it/prenota/' }] },
      { question: 'Qual è il numero WhatsApp di Perla Toscana?', answer: 'Il numero WhatsApp di Perla Toscana è +39 327 003 4324. Gli ospiti possono usarlo per richieste di disponibilità, informazioni sull’arrivo e domande sul soggiorno.' }
    ]
  },
  {
    slug: 'contatti',
    path: '/it/contatti/',
    alternatePath: '/en/contact/',
    title: 'Contatta Perla Toscana | Telefono e WhatsApp',
    description: 'Contatta Perla Toscana tramite telefono o WhatsApp. Appartamento a Figline Valdarno vicino a Firenze, Chianti e The Mall Firenze.',
    eyebrow: 'Contatti',
    h1: 'Contatta Perla Toscana',
    intro: 'Per informazioni su soggiorno, disponibilità, arrivo o servizi, puoi usare telefono o WhatsApp.',
    sections: [
      {
        title: 'Canali disponibili',
        body: `WhatsApp: ${siteConfig.placeholders.whatsappPhone}. Numero principale: ${siteConfig.placeholders.phone}.`
      },
      {
        title: 'Informazioni utili',
        body: 'Se ci scrivi, indicalo in modo chiaro: date, numero di ospiti e eventuali esigenze particolari.'
      }
    ]
  },
  {
    slug: 'privacy-policy',
    path: '/it/privacy-policy/',
    alternatePath: '/en/privacy-policy/',
    title: 'Privacy Policy | Perla Toscana',
    description: 'Informativa privacy di Perla Toscana, inclusi contatti, prenotazioni e uso facoltativo di Google Analytics 4.',
    eyebrow: 'Privacy',
    h1: 'Privacy Policy',
    intro: 'Questa informativa spiega come vengono trattati i dati inviati attraverso i canali di contatto e prenotazione di Perla Toscana e, previo consenso, i dati analitici del sito.',
    showCtas: false,
    sections: [
      { title: 'Titolare del trattamento', body: `Il titolare del trattamento è Roberto Castiglioni, titolare di Perla Toscana, con sede operativa in ${siteConfig.placeholders.address}. Contatti: telefono ${siteConfig.placeholders.phone}; WhatsApp ${siteConfig.placeholders.whatsappPhone}.` },
      { title: 'Dati raccolti', body: 'Possono essere trattati i dati forniti volontariamente tramite telefono, WhatsApp, richiesta di disponibilità o sistema di prenotazione, come nome, cognome, recapito telefonico, indirizzo email se comunicato, date del soggiorno, numero di ospiti e informazioni necessarie a gestire la prenotazione.' },
      { title: 'Finalità del trattamento', body: 'I dati sono utilizzati per rispondere alle richieste, gestire disponibilità e prenotazioni, comunicare con gli ospiti, adempiere agli obblighi amministrativi, fiscali e di pubblica sicurezza e migliorare il servizio.' },
      { title: 'Google Analytics 4 facoltativo', body: 'Solo dopo il consenso, il sito usa Google Analytics 4 con Measurement ID G-6FTELCM9C9 per raccogliere informazioni aggregate come visualizzazioni di pagina, dispositivo, area geografica approssimativa e interazioni. Il consenso può essere rifiutato o modificato in qualsiasi momento tramite “Gestisci cookie” nel footer.' },
      { title: 'Base giuridica', body: 'Il trattamento dei dati di contatto e prenotazione si basa su misure precontrattuali o contrattuali richieste dall’utente, sull’adempimento di obblighi di legge e, quando applicabile, sul legittimo interesse del titolare. Il trattamento dei dati analitici si basa esclusivamente sul consenso.' },
      { title: 'Canali e fornitori esterni', body: 'Alcuni dati possono essere trattati tramite servizi esterni utilizzati per comunicazioni, prenotazioni, pagamenti, hosting e analisi del sito. I fornitori trattano i dati secondo i rispettivi termini e informative privacy; Google opera come fornitore di Google Analytics 4.' },
      { title: 'WhatsApp e telefono', body: 'Le comunicazioni tramite WhatsApp o telefono sono gestite attraverso i relativi servizi e possono comportare un trattamento dei dati secondo le condizioni applicate dai rispettivi fornitori.' },
      { title: 'Conservazione dei dati', body: 'I dati sono conservati per il tempo necessario a gestire la richiesta o la prenotazione e, quando applicabile, per i periodi previsti dagli obblighi amministrativi, fiscali o legali. I dati analitici seguono le impostazioni di conservazione configurate nella proprietà Google Analytics.' },
      { title: 'Diritti dell’interessato', body: `L’interessato può richiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilità nei casi previsti dalla legge contattando il titolare ai recapiti indicati: ${siteConfig.placeholders.phone} oppure ${siteConfig.placeholders.whatsappPhone}.` },
      { title: 'Reclamo', body: 'L’interessato ha il diritto di proporre reclamo al Garante per la protezione dei dati personali o all’autorità di controllo competente.' },
      { title: 'Cookie e preferenze', body: 'Il sito utilizza memorizzazione tecnica e cookie analitici facoltativi solo dopo il consenso. Advertising, remarketing, pixel di profilazione e tracciamento social non sono attivati. Le preferenze possono essere modificate tramite “Gestisci cookie” nel footer.' }
    ]
  },
  {
    slug: 'cookie-policy',
    path: '/it/cookie-policy/',
    alternatePath: '/en/cookie-policy/',
    title: 'Cookie Policy | Perla Toscana',
    description: 'Cookie Policy di Perla Toscana: cookie tecnici e Google Analytics 4 attivato solo dopo consenso.',
    eyebrow: 'Cookie',
    h1: 'Cookie Policy',
    intro: 'Informazioni sui cookie tecnici e sull’uso facoltativo di Google Analytics 4.',
    showCtas: false,
    sections: [
      { title: 'Memorizzazione tecnica', body: 'Il sito usa localStorage per ricordare la preferenza relativa agli analytics e rispettare la scelta dell’utente.' },
      { title: 'Google Analytics 4', body: 'Google Analytics 4 (Measurement ID G-6FTELCM9C9) viene caricato esclusivamente dopo il consenso. Può impostare cookie come _ga e _ga_* per distinguere le visite e misurare visualizzazioni e interazioni. Advertising, remarketing e personalizzazione degli annunci restano disattivati.' },
      { title: 'Gestione del consenso', body: 'Puoi accettare o rifiutare gli analytics dal banner e modificare la scelta tramite “Gestisci cookie” nel footer. Senza consenso il tag Google Analytics non viene caricato e non viene inviata alcuna pageview a GA4.' }
    ]
  },
  {
    slug: 'termini-condizioni',
    path: '/it/termini-condizioni/',
    alternatePath: '/en/terms-and-conditions/',
    title: 'Termini e condizioni | Perla Toscana',
    description: 'Termini e condizioni del sito Perla Toscana.',
    eyebrow: 'Termini',
    h1: 'Termini e condizioni',
    intro: 'Termini di utilizzo del sito e informazioni generali.',
    showCtas: false,
    sections: [
      { title: 'Uso del sito', body: 'L’uso del sito implica l’accettazione delle condizioni indicate in questa pagina.' }
    ]
  },
  {
    slug: 'informazioni-legali',
    path: '/it/informazioni-legali/',
    alternatePath: '/en/legal-information/',
    title: 'Informazioni legali | Perla Toscana',
    description: 'Informazioni legali del sito Perla Toscana.',
    eyebrow: 'Informazioni legali',
    h1: 'Informazioni legali',
    intro: `CIN: ${siteConfig.placeholders.cin}. CIR: ${siteConfig.placeholders.cir}.`,
    showCtas: false,
    sections: [
      { title: 'Sede e contatti', body: `Indirizzo: ${siteConfig.placeholders.address}.` }
    ]
  }
];

const en: PageContent[] = [
  {
    slug: 'the-apartment',
    path: '/en/the-apartment/',
    alternatePath: '/it/appartamento/',
    title: 'Holiday home near Florence | Perla Toscana apartment',
    description: 'Holiday home near Florence for up to 8 guests in Figline Valdarno, with 3 bedrooms, Wi-Fi, air conditioning, equipped kitchen and private parking.',
    eyebrow: 'The apartment',
    h1: 'An elegant apartment for a calmer stay in Tuscany',
    intro: '<strong>Perla Toscana</strong> is a refined <strong>holiday home in Figline Valdarno</strong> that <strong>sleeps up to 8 guests</strong>, convenient for <strong>Florence</strong>, <strong>Chianti</strong> and The Mall Firenze. It is designed for families, groups and business stays looking for comfort, practical spaces and a simple availability request.',
    sections: [
      {
        title: 'Main spaces',
        body: 'The apartment has <strong>3 bedrooms</strong>, 1 bathroom, <strong>equipped kitchen</strong>, <strong>Smart TV in every bedroom</strong>, <strong>Wi-Fi</strong>, air conditioning in every bedroom, hydromassage shower, garden and private parking for 3 cars.'
      },
      {
        title: 'A convenient Tuscan base',
        body: 'The location in <strong>Figline Valdarno</strong> makes it easy to plan days in <strong>Florence</strong>, <strong>Chianti</strong> and <strong>The Mall Firenze</strong> while returning to a quieter setting. It is a <strong>holiday home near Florence</strong> for guests who want a calm base outside the busiest areas.',
        links: [{ label: 'Explore the location', href: '/en/location/' }]
      },
      {
        title: 'Included amenities for guests',
        body: 'To make your stay more comfortable, we provide bed linen, towels, toilet paper, shower gel, hair dryer, extra blankets and additional pillows. The layout makes <strong>Perla Toscana</strong> a practical holiday home in <strong>Tuscany</strong> for up to 8 guests.'
      },
      {
        title: 'Also convenient for business stays',
        body: 'For guests travelling for work, <strong>Perla Toscana</strong> offers comfortable spaces, separate bedrooms, <strong>Wi-Fi</strong>, an equipped kitchen, air conditioning and private parking. A simple and practical solution for <strong>business stays</strong>, technicians and small teams in the area.'
      }
    ]
  },
  {
    slug: 'rooms-amenities',
    path: '/en/rooms-amenities/',
    alternatePath: '/it/camere-servizi/',
    title: 'Rooms and amenities Perla Toscana | Apartment for up to 8 guests',
    description: 'Rooms, beds and amenities at Perla Toscana: up to 8 guests, 3 bedrooms, equipped kitchen, Wi-Fi, TV in every bedroom, garden and private parking.',
    eyebrow: 'Rooms & amenities',
    h1: 'Comfortable bedrooms and practical amenities near Florence',
    intro: '<strong>Perla Toscana</strong> is a <strong>holiday home in Figline Valdarno</strong>, near Florence, with <strong>3 bedrooms</strong> and comfortable spaces for families, groups and business stays up to 8 guests. Practical amenities such as <strong>Wi-Fi</strong>, air conditioning, an equipped kitchen, Smart TV in every bedroom and private parking make the stay simple and comfortable.',
    sections: [
      {
        title: 'Beds available',
        body: 'The bed setup is designed for <strong>sleeps up to 8 guests</strong>. A <strong>folding bed on request</strong> is available.',
        rules: [
          '1 orthopedic king-size bed, 180 x 200 cm.',
          '1 queen-size bed, 160 x 200 cm.',
          '2 single beds.',
          '1 sofa bed.',
          'Folding bed available on request.'
        ]
      },
      {
        title: 'Included amenities',
        body: 'Guests have <strong>Wi-Fi</strong>, <strong>Smart TV in every bedroom</strong>, <strong>equipped kitchen</strong>, air conditioning in every bedroom, hydromassage shower, garden and <strong>free private parking</strong> for 3 cars.',
        rules: [
          'Up to 8 guests.',
          '3 bedrooms and 1 bathroom.',
          'Equipped kitchen.',
          'TV in every bedroom.',
          'Air conditioning in every bedroom.',
          'Private parking for 3 cars.'
        ]
      },
      {
        title: 'Included amenities for guests',
        body: 'To make your stay more comfortable, we provide bed linen, towels, toilet paper, shower gel, hair dryer, extra blankets and additional pillows.'
      },
      {
        title: 'Also convenient for business stays',
        body: 'For guests travelling for work, <strong>Perla Toscana</strong> offers comfortable spaces, separate bedrooms, <strong>Wi-Fi</strong>, an equipped kitchen, air conditioning and private parking. A simple and practical solution for <strong>business stays</strong>, <strong>technicians and small teams</strong> in the area.'
      }
    ]
  },
  {
    slug: 'gallery',
    path: '/en/gallery/',
    alternatePath: '/it/galleria/',
    title: 'Perla Toscana Gallery | Apartment photos near Florence',
    description: 'Photo gallery for Perla Toscana: bedrooms, kitchen, bathroom, garden, parking and apartment details.',
    eyebrow: 'Gallery',
    h1: 'The spaces of Perla Toscana',
    intro: 'The gallery presents the main spaces at <strong>Perla Toscana</strong>: bedrooms, kitchen, living area, bathroom, garden, parking and useful details to help guests choose with confidence.',
    sections: [{ title: 'House photos', body: 'Images show the main apartment spaces: bedrooms, living area, kitchen, bathroom, details and nearby surroundings.' }]
  },
  {
    slug: 'what-to-do',
    path: '/en/what-to-do/',
    alternatePath: '/it/cosa-fare/',
    title: 'What to do near Perla Toscana | Florence, Chianti and The Mall Firenze',
    description: 'What to do near Perla Toscana in Figline Valdarno: Florence, Chianti, The Mall Firenze, Tuscan villages, shopping and art cities.',
    eyebrow: 'What to do',
    h1: 'What to do near Perla Toscana',
    intro: '<strong>Perla Toscana</strong> is a convenient base for exploring <strong>Florence</strong>, <strong>Chianti</strong>, <strong>The Mall Firenze</strong> and the villages of the <strong>Valdarno</strong>. If you are looking for <strong>what to do near Perla Toscana</strong>, here you will find simple ideas for combining art cities, shopping and days in <strong>Tuscany</strong> with a calm return to a <strong>holiday home near Florence</strong>.',
    sections: [
      {
        title: 'Florence and art cities',
        body: 'From <strong>Perla Toscana</strong>, you can easily plan a day in <strong>Florence</strong> and in the main art cities of Tuscany. Museums, the historic centre, squares and walks among art and architecture are a natural choice for guests who want a varied and well-connected stay. The holiday home near Florence is convenient for returning in the evening to a quieter area of the <strong>Valdarno</strong> after visiting the city centre and its landmarks.',
        attractions: [
          {
            name: 'Florence city centre',
            locality: 'Florence',
            description: 'A day in the historic centre of Florence lets you combine museums, squares, bridges, historic buildings and relaxed walks. It is an ideal stop for guests looking for art cities and a quieter return afterwards.',
            image: {
              src: '/images/places/firenze-centro.jpg',
              width: 1280,
              height: 852,
              alt: {
                it: 'Centro storico di Firenze con vista sui luoghi simbolo della città',
                en: 'Historic centre of Florence with views of the city landmarks'
              }
            },
            categories: ['Art cities', 'Museums', 'Historic centre'],
            idealFor: 'Ideal for museums, squares, walks and a cultural day out.',
            distance: 'approx. 30 km',
            drivingTime: 'approx. 45 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Firenze%20centro'
          }
        ]
      },
      {
        title: 'Chianti and Tuscan villages',
        body: '<strong>Chianti</strong> is one of the easiest excursions to organise during your stay. Villages, hills and wineries make this area ideal for guests looking for nature, wine and authentic <strong>Tuscany</strong>. Greve in Chianti, Radda and Castellina are classic half-day or full-day stops.',
        attractions: [
          {
            name: 'Greve in Chianti',
            locality: 'Chianti',
            description: 'Greve in Chianti is a perfect base for exploring the Chianti area, with compact squares, wineries, hills and scenic roads. It is a natural choice for guests who want to enjoy Tuscan villages at an easy pace.',
            image: {
              src: '/images/places/greve-in-chianti.jpg',
              width: 1280,
              height: 777,
              alt: {
                it: 'Paesaggio e borgo di Greve in Chianti nelle colline toscane',
                en: 'Greve in Chianti landscape and village in the Tuscan hills'
              }
            },
            categories: ['Chianti', 'Tuscan villages', 'Wineries'],
            idealFor: 'Ideal for hills, wine, villages and scenic roads.',
            distance: 'approx. 30 km',
            drivingTime: 'approx. 40 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Greve%20in%20Chianti'
          }
        ]
      },
      {
        title: 'The Mall Firenze and shopping',
        body: '<strong>The Mall Firenze</strong> is an easy stop for a shopping day, with the advantage of returning afterwards to a quieter holiday home in <strong>Figline Valdarno</strong>. The location is also practical for guests who want to combine outlet shopping, evening return and a base well placed between <strong>Florence</strong>, <strong>Chianti</strong> and the <strong>Valdarno</strong> area.',
        attractions: [
          {
            name: 'The Mall Firenze',
            locality: 'Leccio / Figline e Incisa Valdarno',
            description: 'The Mall Firenze is one of the most convenient destinations for shopping in Tuscany. After a day among boutiques and outlets, returning to Perla Toscana stays simple and comfortable.',
            image: {
              src: '/images/places/the-mall-firenze.jpg',
              webpSrc: '/images/places/the-mall-firenze.webp',
              width: 1280,
              height: 872,
              alt: {
                it: 'The Mall Firenze outlet e area shopping vicino a Figline Valdarno',
                en: 'The Mall Firenze outlet shopping area near Figline Valdarno'
              }
            },
            categories: ['Shopping', 'Outlet', 'The Mall Firenze'],
            idealFor: 'Ideal for shopping in Tuscany and an easy return to the holiday home.',
            distance: 'approx. 18 km',
            drivingTime: 'approx. 25 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Mall%20Firenze'
          }
        ]
      },
      {
        title: 'Siena',
        body: 'A day trip to <strong>Siena</strong> adds a historic centre, squares, narrow streets and a medieval atmosphere to the stay. It is one of the best-known art cities in <strong>Tuscany</strong> and works well from a base in the <strong>Valdarno</strong>.',
        attractions: [
          {
            name: 'Siena',
            locality: 'Siena',
            description: 'Siena is ideal for a day trip with a historic centre, squares, narrow streets and a medieval atmosphere. It is one of the best-known art cities in Tuscany and fits naturally into a stay in the Valdarno area.',
            image: {
              src: '/images/places/siena.jpg',
              width: 1280,
              height: 628,
              alt: {
                it: 'Centro storico di Siena con i suoi edifici medievali',
                en: 'Historic centre of Siena with its medieval buildings'
              }
            },
            categories: ['Art cities', 'Day trip', 'Historic centre'],
            idealFor: 'Ideal for art, history and a day around Siena’s squares.',
            distance: 'approx. 70 km',
            drivingTime: 'approx. 1 h 15 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Siena'
          }
        ]
      },
      {
        title: 'San Gimignano',
        body: 'It only takes a day to visit the town and its medieval towers, with a pleasant route through the historic centre and scenic roads. <strong>San Gimignano</strong> is a highly recognisable stop for guests who want to enjoy <strong>Tuscan villages</strong> during their stay.',
        attractions: [
          {
            name: 'San Gimignano',
            locality: 'San Gimignano',
            description: 'San Gimignano is one of the most recognisable Tuscan villages, famous for its medieval towers and compact historic centre. It is a very pleasant stop if you want to add a symbolic place to your stay in Tuscany.',
            image: {
              src: '/images/places/san-gimignano.jpg',
              width: 1280,
              height: 899,
              alt: {
                it: 'San Gimignano con le torri medievali nel borgo toscano',
                en: 'San Gimignano with medieval towers in the Tuscan village'
              }
            },
            categories: ['Tuscan villages', 'Medieval towers', 'Day trip'],
            idealFor: 'Ideal for Tuscan villages, medieval towers and historic centres.',
            distance: 'approx. 55 km',
            drivingTime: 'approx. 1 h 10 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=San%20Gimignano'
          }
        ]
      },
      {
        title: 'Val d’Orcia',
        body: 'The <strong>Val d’Orcia</strong> deserves a longer day trip: Tuscan panoramas, hills, villages and quiet roads to enjoy at a slow pace. It is one of the most iconic areas for guests who want to see the most photographed and peaceful side of <strong>Tuscany</strong>.',
        attractions: [
          {
            name: 'Val d’Orcia',
            locality: 'Val d’Orcia',
            description: 'The Val d’Orcia offers Tuscan panoramas, scenic roads and well-known villages as the destination for a longer but very rewarding day trip. It is an excellent choice for guests who want to see one of the region’s most iconic landscapes.',
            image: {
              src: '/images/places/val-d-orcia.jpg',
              width: 1600,
              height: 1011,
              alt: {
                it: 'Panorami della Val d’Orcia con colline e paesaggi toscani',
                en: 'Val d’Orcia landscapes with hills and Tuscan scenery'
              }
            },
            categories: ['Tuscan panoramas', 'Villages', 'Longer day trip'],
            idealFor: 'Ideal for scenery, photography and a day in the Tuscan countryside.',
            distance: 'approx. 110 km',
            drivingTime: 'approx. 1 h 50 min',
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Val%20d%27Orcia'
          }
        ]
      },
      {
        title: 'Nature, lake and bike routes in the Valdarno area',
        body: 'Around <strong>Perla Toscana</strong>, guests can alternate walks, hills, quiet days and scenic routes in the <strong>Valdarno</strong>. It is a practical choice for staying close to the house while still enjoying nature, a lake stop or an easy ride outdoors.',
        attractions: [
          {
            name: 'Lago di San Cipriano',
            locality: 'Valdarno',
            description: 'A simple idea for guests looking for a quiet break in nature, away from traffic and busier sightseeing days. Before visiting, we recommend checking access, current conditions and directions.',
            categories: ['Nature', 'Relax', 'Walks', 'Lake'],
            idealFor: 'a relaxing break, nature, light walks and quiet moments.',
            distance: 'approx. 7 km',
            drivingTime: 'approx. 12 min',
            directionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Perla%20Toscana%2C%20Via%20Aretina%20108%2C%2050063%20Figline%20e%20Incisa%20Valdarno%20FI&destination=Lago%20di%20San%20Cipriano%2C%20Cavriglia%20AR&travelmode=driving'
          },
          {
            name: 'Bike routes in the Valdarno area',
            locality: 'Figline Valdarno and surroundings',
            description: 'The Valdarno area is interesting for guests who want to explore by bike or e-bike, with country roads, hills, villages and scenic routes. Some sections may be shared with cars, so it is best to choose the route according to your level.',
            image: {
              src: '/images/perla-toscana/perla-toscana-sentiero-verde-valdarno.jpg',
              width: 1600,
              height: 1067,
              alt: {
                it: 'Sentiero verde nel Valdarno vicino a Perla Toscana',
                en: 'Green path in the Valdarno area near Perla Toscana'
              }
            },
            categories: ['Bike', 'E-bike', 'Valdarno', 'Nature'],
            idealFor: 'active guests, e-bikes, light cycling and outdoor days.',
            distance: 'approx. 5 km',
            drivingTime: 'approx. 10 min',
            directionsUrl: 'https://www.valdarnobikeroad.it/percorsi/',
            websiteUrl: 'https://www.valdarnobikeroad.it/percorsi/'
          },
          {
            name: 'Strada dei Setteponti',
            locality: 'Valdarno / Reggello / Arezzo',
            description: 'The Strada dei Setteponti is one of the best-known scenic routes in the Valdarno area, interesting for guests who enjoy cycling through Tuscan landscapes, villages and hills. It is better suited to guests already used to cycling or e-bike routes.',
            image: {
              src: '/images/perla-toscana/perla-toscana-strada-setteponti.jpg',
              webpSrc: '/images/perla-toscana/perla-toscana-strada-setteponti.webp',
              width: 3200,
              height: 2134,
              alt: {
                it: 'Strada panoramica toscana nel Valdarno adatta alla Strada dei Setteponti',
                en: 'Scenic Tuscan road in the Valdarno area suited to the Strada dei Setteponti'
              }
            },
            categories: ['Bike', 'Scenic views', 'Villages', 'Tuscany'],
            idealFor: 'cycling, scenic views, Tuscan villages and longer routes.',
            distance: 'approx. 15 km',
            drivingTime: 'approx. 25 min',
            directionsUrl: 'https://www.valdarnobikeroad.it/percorsi/setteponti-pratomagno/',
            websiteUrl: 'https://www.valdarnobikeroad.it/percorsi/setteponti-pratomagno/'
          }
        ],
        note: 'Distances and driving times are indicative and start from Perla Toscana, Figline Valdarno.'
      }
    ]
  },
  {
    slug: 'location',
    path: '/en/location/',
    alternatePath: '/it/posizione/',
    title: 'Perla Toscana in Figline Valdarno | A convenient location between Florence, Chianti and The Mall Firenze',
    description: 'Perla Toscana is located at Via Aretina 108, convenient for Florence, Chianti and The Mall Firenze, with private parking for up to 3 cars.',
    eyebrow: 'Location',
    h1: 'Convenient for Florence, Chianti and The Mall Firenze',
    intro: '<strong>Perla Toscana</strong> is located at Via Aretina 108, in <strong>Figline Valdarno</strong>, between <strong>Florence</strong>, <strong>Chianti</strong> and <strong>The Mall Firenze</strong>. This page explains how to get here and how to reach the correct access point without confusion.',
    sections: [
      {
        title: 'Important: please follow the correct Google Maps link',
        variant: 'callout',
        body: 'Some navigation apps may show the wrong final access to the house. To reach <strong>Perla Toscana</strong> correctly, please follow the <strong>correct access point</strong> below and the final instructions on this page.',
        links: [{ label: 'Open the correct access point', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'From this point, turn right, take the unpaved road to the right of the gate and continue for about 200 meters until you reach the house.'
      },
      {
        title: 'Address',
        body: `<strong>Perla Toscana</strong> is located at <strong>Via Aretina 108</strong>, 50063 <strong>Figline Valdarno</strong> / <strong>Figline e Incisa Valdarno</strong> (FI), Italy. <strong>Free private parking</strong> is available directly in front of the house, with space for up to 3 cars.`,
        links: [{ label: 'Open in Google Maps', href: 'https://g.co/kgs/NiQTiYh', external: true }]
      },
      {
        title: 'Final access to the house',
        image: {
          src: '/images/generated/perla-toscana-paesaggio-valdarno.jpg',
          alt: 'View of the house and final access to Perla Toscana in Via Aretina 108, Figline Valdarno'
        },
        caption: 'Reference photo to help you recognize the final access to Perla Toscana.',
        body: '<p>To avoid navigation errors, please follow the <strong>correct access point</strong>: <a href="https://maps.app.goo.gl/foLgZVfujAXU5FkS8" target="_blank" rel="noopener noreferrer">https://maps.app.goo.gl/foLgZVfujAXU5FkS8</a></p><p>When you reach this point, turn right and take the <strong>unpaved road</strong> located to the right of the gate. Continue for about <strong>200 meters</strong> until the end of the road. <strong>Free private parking</strong> is available directly in front of the house.</p>',
        links: [{ label: 'Open the correct access point', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }]
      },
      {
        title: 'By car from Florence / north',
        body: 'From <strong>Florence</strong> or the northern area, take the <strong>A1 Incisa-Reggello</strong> exit. At the roundabout, follow the signs for <strong>Figline Valdarno</strong>, then continue towards Via Aretina 108 and follow the final instructions on this page.'
      },
      {
        title: 'By car from Rome / south',
        body: 'For guests arriving from Rome or southern Italy, the <strong>A1 Valdarno</strong> exit, near Terranuova Bracciolini / San Giovanni Valdarno, may be the most convenient. From there, continue towards <strong>Figline Valdarno</strong> and Via Aretina 108. Before travelling, we still recommend checking the updated route on Google Maps or on your navigation app.'
      },
      {
        title: 'By train',
        body: 'The <strong>Figline Valdarno station</strong> is the reference station. Regional trains run from <strong>Florence Santa Maria Novella</strong> to Figline Valdarno with frequent connections. To check updated timetables and tickets, please use the official <strong>Trenitalia</strong> website.',
        links: [{ label: 'Check train times on Trenitalia', href: 'https://www.trenitalia.com/en.html', external: true }],
        note: 'From Figline Valdarno station, we recommend arranging a taxi, a local transfer or checking available buses before travelling.'
      },
      {
        title: 'By bus',
        body: 'Perla Toscana is served by Autolinee Toscane local buses. The <strong>SR69 Deposito Gas V</strong> bus stop is about 200 metres, a 2-3 minute walk from the house, with connections to Figline Valdarno, Florence and other nearby towns.<br><br>If you arrive by train, Perla Toscana can be reached easily from Figline Valdarno railway station by bus or by taxi in just a few minutes.<br><br>We recommend checking the latest timetables before travelling.',
        links: [
          { label: 'Official AT lines and timetables', href: 'https://www.at-bus.it/it', external: true },
          { label: 'Bus line 353', href: 'https://www.at-bus.it/it/linee-e-orari/firenze-extraurbano-353', external: true }
        ]
      },
      {
        title: 'Recommended taxi services',
        body: 'For arrivals without a car, especially with luggage or in the evening, we recommend arranging the transfer in advance.',
        rules: [
          'Taxi Mike – 24-hour service: +39 333 259 5053.',
          'Varvarito Taxi Service: +39 338 337 6959.'
        ]
      },
      {
        title: 'Important for the taxi driver',
        body: 'Show the driver the <strong>correct access point</strong> and ask them to follow it exactly, even if the navigation app suggests a different route. From this point the driver must turn right, take the <strong>unpaved road</strong> to the right of the gate and continue for about <strong>200 meters</strong> until reaching <strong>Perla Toscana</strong>.',
        links: [{ label: 'Open the correct access point', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'This is the correct access to the property and leads directly to the free private parking in front of the house.'
      },
      {
        title: 'Need assistance?',
        body: 'If you have doubts or difficulty finding the property during the journey, you can call us or send us a WhatsApp message using the number provided in your booking. We will be happy to welcome you to <strong>Perla Toscana</strong> and wish you a pleasant stay.'
      }
    ]
  },
  {
    slug: 'how-to-reach',
    path: '/en/how-to-reach/',
    alternatePath: '/it/come-arrivare/',
    title: 'How to reach Perla Toscana | Directions, parking, train and taxi',
    description: 'How to reach Perla Toscana in Figline Valdarno: address, Google Maps, car access, train, bus, taxi and free private parking.',
    eyebrow: 'How to reach us',
    h1: 'How to reach Perla Toscana',
    intro: 'All the useful information to arrive without difficulty: address, Google Maps, car, train, bus, taxi and the correct access to the property.',
    sections: [
      {
        title: 'How to reach Perla Toscana',
        body: '<strong>Perla Toscana</strong> is located at Via Aretina 108, 50063 <strong>Figline e Incisa Valdarno</strong> (FI), in a convenient position for reaching <strong>Florence</strong>, <strong>Chianti</strong> and <strong>The Mall Firenze</strong>.',
        links: [{ label: 'Open in Google Maps', href: 'https://g.co/kgs/NiQTiYh', external: true }]
      },
      {
        title: 'Important: follow the correct link',
        variant: 'callout',
        body: 'Some navigation apps may not identify the property access correctly. To arrive without difficulty, we recommend following the Google Maps access point below, especially for the last 200 metres.',
        links: [{ label: 'Open the correct access point', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'When you reach the indicated point, turn right and take the private unpaved road. Continue for about 200 metres until the end of the road. Private parking is available in front of the house.'
      },
      {
        title: 'By car from Florence',
        body: 'From Florence, take the A1 motorway towards Rome and exit at Incisa-Reggello. At the roundabout, follow signs for Figline Valdarno and continue towards Perla Toscana.'
      },
      {
        title: 'Correct access to the property',
        body: 'When you reach the point shown in the link below, turn right and take the unpaved road located to the right of the gate. Continue for about 200 metres until the end of the road.',
        links: [{ label: 'Correct access point', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'You can park free of charge directly in front of the house. Three private parking spaces are available.'
      },
      {
        title: 'By train',
        body: 'The nearest station is Figline Valdarno. Frequent regional trains run from Firenze Santa Maria Novella to Figline Valdarno. Timetables may change, so we recommend checking before departure. From Figline Valdarno station you can reach Perla Toscana by taxi in about 7-10 minutes, or by local bus getting off at the SR69 Deposito Gas V stop, about 200 metres from the property.'
      },
      {
        title: 'By bus',
        body: 'Perla Toscana is served by Autolinee Toscane local buses. The <strong>SR69 Deposito Gas V</strong> bus stop is about 200 metres, a 2-3 minute walk from the house, with connections to Figline Valdarno, Florence and other nearby towns.<br><br>If you arrive by train, Perla Toscana can be reached easily from Figline Valdarno railway station by bus or by taxi in just a few minutes.<br><br>We recommend checking the latest timetables before travelling.',
        links: [
          { label: 'Official AT lines and timetables', href: 'https://www.at-bus.it/it', external: true },
          { label: 'Bus line 353', href: 'https://www.at-bus.it/it/linee-e-orari/firenze-extraurbano-353', external: true }
        ]
      },
      {
        title: 'Recommended taxis',
        body: 'You can contact these taxi services to arrange your transfer to Perla Toscana.',
        rules: [
          'Taxi Mike - 24-hour service - phone +39 333 259 5053.',
          'Varvarito Servizi Taxi - phone +39 338 337 6959.'
        ],
        links: [
          { label: 'Call Taxi Mike', href: 'tel:+393332595053' },
          { label: 'Call Varvarito', href: 'tel:+393383376959' }
        ]
      },
      {
        title: 'Important for the taxi driver',
        body: 'We recommend showing the taxi driver the correct access point link and asking them to follow it carefully, even if the navigation app suggests a different route.',
        rules: [
          'Turn right.',
          'Take the unpaved road located to the right of the gate.',
          'Continue for about 200 metres until you arrive directly at Perla Toscana.'
        ],
        links: [{ label: 'Show the correct access point', href: 'https://maps.app.goo.gl/foLgZVfujAXU5FkS8', external: true }],
        note: 'This is the correct access to the property and allows you to reach the private parking area comfortably.'
      },
      {
        title: 'Need help?',
        body: 'If you have trouble during the journey or cannot find the house, you can call us or message us on WhatsApp using the contacts shown in your booking.',
        links: [
          { label: 'WhatsApp', href: siteConfig.placeholders.whatsappUrl, external: true },
          { label: 'Call', href: siteConfig.placeholders.phoneHref }
        ]
      }
    ]
  },
  {
    slug: 'where-to-eat',
    path: '/en/where-to-eat/',
    alternatePath: '/it/dove-mangiare/',
    title: 'Where to eat near Perla Toscana | Breakfast, pizza and Tuscan food',
    description: 'Where to eat near Perla Toscana: a short selection of cafés, pizzerias, trattorias and restaurants in Figline Valdarno, the Valdarno area and near The Mall Firenze.',
    eyebrow: 'Where to eat',
    h1: 'Where to eat near Perla Toscana',
    intro: 'A practical and short selection of cafés, pizzerias, trattorias and restaurants near <strong>Perla Toscana</strong>, useful for breakfast, a quick lunch, family dinners, business stays or a special evening in <strong>Tuscany</strong>.',
    sections: [
      {
        title: 'Choose based on the moment',
        body: 'Go straight to what you need: breakfast, pizza, <strong>Tuscan food</strong>, <strong>business lunch</strong>, aperitivo or a place near <strong>The Mall Firenze</strong>.',
        links: [
          { label: 'Breakfast and cafés', href: '#breakfast-and-cafes' },
          { label: 'Pizza and easy dinner', href: '#pizza-and-easy-dinner' },
          { label: 'Tuscan restaurants and trattorias', href: '#tuscan-restaurants-and-trattorias' },
          { label: 'Business lunch', href: '#business-lunch' },
          { label: 'Aperitivo and informal evening', href: '#aperitivo-and-informal-evening' },
          { label: 'Near The Mall Firenze', href: '#near-the-mall-firenze' }
        ]
      },
      {
        anchor: 'breakfast-and-cafes',
        title: 'Breakfast and cafés',
        body: 'Coffee, cappuccino, pastries and bakeries in <strong>Figline Valdarno</strong>. Ideal before heading out or for a quick stop near <strong>Perla Toscana</strong>.',
        attractions: [
          {
            name: 'Bar Pasticceria Fabbrini',
            locality: 'Figline Valdarno',
            description: 'An artisan pastry shop in the centre of Figline, useful for coffee, cappuccino and pastries before a day trip.',
            categories: ['Breakfast', 'Pastry shop', 'Historic centre'],
            cuisine: 'Bar and pastry shop',
            idealFor: 'Ideal for a classic breakfast in town.',
            distance: 'approx. 3 km',
            drivingTime: 'approx. 7 min',
            phone: '+39 055 9544400',
            phoneHref: 'tel:+390559544400',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bar%20Pasticceria%20Fabbrini%20Via%20Mazzini%2033%20Figline%20Valdarno'
          },
          {
            name: 'Saida',
            locality: 'Figline Valdarno',
            description: 'Historic bar pastry shop in Piazza Marsilio Ficino, useful for a simple breakfast in the centre.',
            categories: ['Breakfast', 'Historic centre', 'Pastry shop'],
            cuisine: 'Bar pastry shop',
            idealFor: 'Ideal for a simple breakfast in the historic centre.',
            distance: 'approx. 3 km',
            drivingTime: 'approx. 7 min',
            phone: '+39 055 9155253',
            phoneHref: 'tel:+390559155253',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Saida%20Piazza%20Marsilio%20Ficino%2055%20Figline%20Valdarno'
          }
        ]
      },
      {
        anchor: 'pizza-and-easy-dinner',
        title: 'Pizza and easy dinner',
        body: 'Simple choices for families, groups and guests who want to stay nearby.',
        attractions: [
          {
            name: 'La Terrazza',
            locality: 'Figline Valdarno',
            description: 'Practical pizzeria for an easy dinner with pizza and Italian dishes.',
            categories: ['Pizza', 'Families', 'Groups'],
            cuisine: 'Pizza and Italian food',
            idealFor: 'Ideal for families, groups and a casual dinner.',
            distance: 'approx. 4 km',
            drivingTime: 'approx. 8 min',
            phone: '+39 339 2675954',
            phoneHref: 'tel:+393392675954',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=La%20Terrazza%20ristorante%20pizzeria%20Figline%20Valdarno'
          },
          {
            name: 'Pizzeria I’ Brollo',
            locality: 'Figline Valdarno',
            description: 'A simple and nearby pizzeria for an easy dinner without going far.',
            categories: ['Pizza', 'Easy dinner', 'Takeaway'],
            cuisine: 'Pizza',
            idealFor: 'Ideal for pizza and an easy dinner.',
            distance: 'approx. 3 km',
            drivingTime: 'approx. 7 min',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Pizzeria%20I%20Brollo%20Figline%20Valdarno'
          },
          {
            name: '1950 American Diner Figline Valdarno',
            locality: 'Tenuta Il Palagio / Figline e Incisa Valdarno',
            description: 'A pizzeria and wine bar at Tenuta Il Palagio, useful for an easy dinner with a different atmosphere, pizza, wine and a Tuscan countryside setting in the hills of Figline e Incisa Valdarno.',
            categories: ['Pizza', 'Wine bar', 'Easy dinner', 'Outdoor tables'],
            cuisine: 'Pizza, wine and estate products',
            idealFor: 'Ideal for pizza, informal dinner, local wine and a relaxed evening.',
            distance: 'approx. 5 km',
            drivingTime: 'approx. 10 min',
            phone: '+39 331 31 97 788',
            phoneHref: 'tel:+393313197788',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=1950%20American%20Diner%20Figline%20Valdarno%20Via%20Francesco%20Petrarca%20171',
            websiteUrl: 'https://1950americandiner.it/figline-valdarno/',
            note: 'Opening days, times, menu and availability may change. We recommend checking the official website or Google Maps before visiting.'
          }
        ]
      },
      {
        anchor: 'tuscan-restaurants-and-trattorias',
        title: 'Tuscan restaurants and trattorias',
        body: 'More local choices for a nicer dinner with Tuscan character.',
        attractions: [
          {
            name: 'Osteria Corte de’ Frati',
            locality: 'Figline Valdarno centre',
            description: 'A compact osteria in the historic centre, suitable for a more curated Tuscan dinner.',
            categories: ['Tuscan food', 'Historic centre', 'Couples'],
            cuisine: 'Tuscan and Italian food',
            idealFor: 'Ideal for couples and a refined dinner.',
            distance: 'approx. 3 km',
            drivingTime: 'approx. 7 min',
            phone: '+39 055 9152077',
            phoneHref: 'tel:+390559152077',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20Corte%20de%20Frati%20Figline%20Valdarno',
            websiteUrl: 'https://www.osteriacortedefrati.com/'
          },
          {
            name: 'Trattoria Tramaglino',
            locality: 'Figline Valdarno',
            description: 'Informal Tuscan trattoria useful for meat dishes and a simple dinner with friends or family.',
            categories: ['Tuscan trattoria', 'Meat', 'Families'],
            cuisine: 'Tuscan food and meat dishes',
            idealFor: 'Ideal for families, groups and a casual dinner.',
            distance: 'approx. 4 km',
            drivingTime: 'approx. 8 min',
            phone: '+39 320 3807754',
            phoneHref: 'tel:+393203807754',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Trattoria%20Tramaglino%20Figline%20Valdarno'
          }
        ]
      },
      {
        anchor: 'business-lunch',
        title: 'Business lunch',
        body: 'Practical spots for business stays, technicians and small teams. Quick, simple and easy to reach.',
        attractions: [
          {
            name: 'La Casavecchia',
            locality: 'Figline Valdarno',
            description: 'Tuscan restaurant suitable for groups, workers and organised lunches.',
            categories: ['Business lunch', 'Groups', 'Tuscan food'],
            cuisine: 'Tuscan food',
            idealFor: 'Ideal for workers and groups.',
            distance: 'approx. 6 km',
            drivingTime: 'approx. 12 min',
            phone: '+39 328 9444558',
            phoneHref: 'tel:+393289444558',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ristorante%20La%20Casavecchia%20Figline%20Valdarno'
          },
          {
            name: 'Osteria Il Postiglione',
            locality: 'Figline e Incisa Valdarno',
            description: 'Useful for a simple lunch with Tuscan food and quick service.',
            categories: ['Business lunch', 'Tuscan food', 'Quick service'],
            cuisine: 'Tuscan food',
            idealFor: 'Ideal for a quick business lunch.',
            distance: 'approx. 12 km',
            drivingTime: 'approx. 18 min',
            phone: '+39 055 8335757',
            phoneHref: 'tel:+390558335757',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20Il%20Postiglione%20Figline%20Incisa%20Valdarno'
          }
        ]
      },
      {
        anchor: 'aperitivo-and-informal-evening',
        title: 'Aperitivo and informal evening',
        body: 'Wine, small plates and calm places for a relaxed evening near <strong>Perla Toscana</strong>.',
        attractions: [
          {
            name: 'Gocce d’Uva',
            locality: 'Figline Valdarno',
            description: 'A place to consider for wine, aperitivo and an informal evening nearby.',
            categories: ['Aperitivo', 'Wine', 'Informal evening'],
            cuisine: 'Wine and small plates',
            idealFor: 'Ideal for couples and small groups.',
            distance: 'approx. 3 km',
            drivingTime: 'approx. 7 min',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Gocce%20d%20Uva%20Figline%20Valdarno'
          },
          {
            name: 'Osteria Vinicolo',
            locality: 'Figline Valdarno / Valdarno',
            description: 'A relaxed choice for an easy dinner with Italian food and a glass of wine.',
            categories: ['Aperitivo', 'Dinner', 'Italian food'],
            cuisine: 'Italian food, meat and fish',
            idealFor: 'Ideal for a relaxed dinner and wine.',
            distance: 'approx. 4 km',
            drivingTime: 'approx. 8 min',
            phoneVerified: false,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20Vinicolo%20Figline%20Valdarno'
          }
        ]
      },
      {
        anchor: 'near-the-mall-firenze',
        title: 'Near The Mall Firenze',
        body: 'Convenient options after shopping at <strong>The Mall Firenze</strong> or in the Leccio area.',
        attractions: [
          {
            name: 'Osteria de’ Medici',
            locality: 'Incisa / Reggello',
            description: 'Tuscan dinner that works well after a day of shopping.',
            categories: ['Near The Mall', 'Tuscan food', 'Meat'],
            cuisine: 'Tuscan food and bistecca',
            idealFor: 'Ideal for dinner after shopping.',
            distance: 'approx. 12 km',
            drivingTime: 'approx. 18 min',
            phone: '+39 055 8335780',
            phoneHref: 'tel:+390558335780',
            phoneVerified: true,
            directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Osteria%20de%20Medici%20Incisa%20Reggello',
            websiteUrl: 'https://www.osteriademedici.it/'
          }
        ]
      },
      {
        title: 'Useful note',
        body: 'Opening hours, menus and availability may change. We recommend checking directly with the venue before visiting.'
      }
    ]
  },
  {
    slug: 'book',
    path: '/en/book/',
    alternatePath: '/it/prenota/',
    title: 'Check availability for Perla Toscana | Apartment near Florence',
    description: 'Check availability for Perla Toscana: review available dates, message on WhatsApp or call for apartment information.',
    eyebrow: 'Availability',
    h1: 'Check availability for Perla Toscana',
    intro: 'Before booking, call us or send us a WhatsApp message. We can help you check availability, find the best available rate and choose the most suitable bed configuration. We can also answer your questions about the house, its services and the surrounding area.',
    sections: [
      {
        title: 'How it works',
        body: 'You can call us or send us a WhatsApp message to check availability, price and bed configuration. If you prefer to proceed online, you can use our secure booking system.',
        links: [{ label: 'How to reach Perla Toscana', href: '/en/how-to-reach/' }]
      },
      {
        title: 'Before confirming',
        body: 'Check dates, number of guests, bed setup, house rules and included amenities. Updated availability and conditions are confirmed during the request.'
      },
      {
        title: 'Work stays',
        body: 'If you are planning a <strong>business stay</strong> or a stay for a small team working in the area, message us on WhatsApp: we can help you check the bed setup, <strong>free private parking</strong> and practical details before booking.'
      },
      {
        title: 'Direct booking',
        body: 'By booking directly through the official Perla Toscana website, you may find better rates than on major booking platforms and speak directly with us before your stay. For assistance, call us or send us a WhatsApp message before confirming.'
      },
      {
        title: 'To receive a faster reply',
        body: 'When you contact us to check availability or prices, please include:',
        rules: [
          'stay dates',
          'number of guests',
          'children, if any',
          'reason for travel, if useful',
          'any special requests'
        ]
      }
    ],
    faqs: [
      { question: 'Where can I check availability and conditions?', answer: 'Use the availability button and check the updated information when sending your request.' },
      { question: 'Can I speak with someone before booking?', answer: 'Yes. You can use WhatsApp or call the main number shown on the website.' }
    ]
  },
  {
    slug: 'house-rules-info',
    path: '/en/house-rules-info/',
    alternatePath: '/it/regole-informazioni/',
    title: 'Perla Toscana FAQ | Rules, amenities and useful information',
    description: 'FAQ and useful information about Perla Toscana in Figline Valdarno: location, bedrooms, parking, Wi-Fi, rules, check-in and availability.',
    eyebrow: 'House rules & info',
    h1: 'House rules and useful information',
    intro: 'Quick answers to understand <strong>Perla Toscana</strong>, plan your arrival and check amenities, rules, location and availability before your stay.',
    sections: [
      {
        title: 'Main rules',
        body: 'These rules apply to all guests during the stay.',
        rules: [
          'Check-in from 16:00.',
          'Check-out by 10:00.',
          'Pets are not allowed.',
          'Parties and events are not allowed.',
          'Smoking is not allowed inside.',
          'Smoking is allowed only outside or in the garden.',
          'Keep mosquito screens lowered in the evening and at night.'
        ]
      },
      {
        title: 'Property information',
        body: `CIN: ${siteConfig.placeholders.cin}. CIR: ${siteConfig.placeholders.cir}. Address: ${siteConfig.placeholders.address}.`,
        links: [{ label: 'How to reach us', href: '/en/how-to-reach/' }]
      }
    ],
    faqs: [
      { question: 'Where is Perla Toscana located?', answer: '<strong>Perla Toscana</strong> is located at Via Aretina 108, in <strong>Figline e Incisa Valdarno</strong>, <strong>Tuscany</strong>. The location is convenient for reaching <strong>Florence</strong>, Chianti, The Mall Firenze and several destinations in the Valdarno area.', links: [{ label: 'Location', href: '/en/location/' }] },
      { question: 'Is Perla Toscana a holiday home near Florence?', answer: 'Yes, <strong>Perla Toscana</strong> is a <strong>holiday home near Florence</strong>, ideal for guests who want to visit the city and return to a quieter area. <strong>Florence</strong> city centre is about 45 minutes away by car, depending on traffic.', links: [{ label: 'Location', href: '/en/location/' }] },
      { question: 'How far is Perla Toscana from The Mall Firenze?', answer: 'The Mall Firenze is about 18 km from Perla Toscana and can be reached by car in about 25 minutes. The house is a convenient option for guests looking for accommodation near the outlet and Chianti.', links: [{ label: 'Location', href: '/en/location/' }] },
      { question: 'How many guests can Perla Toscana accommodate?', answer: '<strong>Perla Toscana</strong> <strong>sleeps up to 8 guests</strong>. The house has <strong>3 bedrooms</strong>, a <strong>sofa bed</strong> and a folding bed available on request.', links: [{ label: 'Rooms', href: '/en/rooms-amenities/' }] },
      { question: 'How many bedrooms are there?', answer: 'The house has 3 bedrooms: one bedroom with an orthopedic king size bed 180 × 200 cm, one bedroom with a queen size bed 160 × 200 cm and one bedroom with 2 single beds. A sofa bed is also available in the living area with kitchenette, and a folding bed is available on request.', links: [{ label: 'Rooms', href: '/en/rooms-amenities/' }, { label: 'Gallery', href: '/en/gallery/' }] },
      { question: 'Is private parking available?', answer: 'Yes, <strong>Perla Toscana</strong> offers <strong>free private parking</strong> in front of the house, with space for up to 3 cars. This makes it easier to explore Florence, Chianti, The Mall Firenze and other Tuscan destinations by car.' },
      { question: 'Do I need a car to stay at Perla Toscana?', answer: 'A car is recommended, especially for visiting Florence, Chianti, The Mall Firenze, Siena, San Gimignano and the Val d’Orcia with more freedom. Guests can also arrive by train to Figline Valdarno and continue by taxi or local bus.', links: [{ label: 'How to reach us', href: '/en/how-to-reach/' }] },
      { question: 'How do I reach Perla Toscana?', answer: 'Perla Toscana is located at Via Aretina 108, in Figline e Incisa Valdarno. We recommend following the correct access point shown on the “How to get there” page, especially for the last 200 metres of private road.', links: [{ label: 'How to reach us', href: '/en/how-to-reach/' }] },
      { question: 'Is there a private road to reach the house?', answer: 'Yes, guests reach Perla Toscana through a private unpaved road of about 200 metres. Private parking is available in front of the house.', links: [{ label: 'How to reach us', href: '/en/how-to-reach/' }] },
      { question: 'Does the house have air conditioning?', answer: 'Yes, <strong>Perla Toscana</strong> has <strong>air conditioning</strong> in every bedroom. This makes the stay more comfortable during the summer months.' },
      { question: 'Is Wi-Fi available?', answer: 'Yes, <strong>Wi-Fi</strong> is available. The house is also suitable for <strong>business stays</strong>, <strong>technicians and small teams</strong> working in the area.' },
      { question: 'Is there a TV in the bedrooms?', answer: 'Yes, there is a <strong>Smart TV in every bedroom</strong>. Guests can watch <strong>Netflix and other streaming services</strong> by signing in with their own personal accounts.' },
      { question: 'Is the kitchen equipped?', answer: 'Yes, Perla Toscana has an equipped kitchen. Guests can use it to prepare meals during their stay.' },
      { question: 'Is the house suitable for families?', answer: 'Yes, <strong>Perla Toscana</strong> is suitable for <strong>families</strong>, couples and small groups. Separate bedrooms, an equipped kitchen and private parking make the stay practical and comfortable.', links: [{ label: 'Rooms', href: '/en/rooms-amenities/' }] },
      { question: 'Is Perla Toscana suitable for business stays?', answer: 'Yes, <strong>Perla Toscana</strong> is also convenient for <strong>business stays</strong>, technicians and small teams. It offers separate bedrooms, Wi-Fi, an equipped kitchen, air conditioning and private parking.' },
      { question: 'Are pets allowed?', answer: 'No, pets are not allowed. This rule helps keep the house clean and comfortable for all guests.' },
      { question: 'Is smoking allowed?', answer: 'Smoking is not allowed inside the house. Guests may smoke only outside or in the garden, respecting the property and its cleanliness.' },
      { question: 'Are parties or events allowed?', answer: 'No, parties and events are not allowed. Perla Toscana is designed for quiet and respectful stays.' },
      { question: 'What are the check-in and check-out times?', answer: 'Check-in is available from 4:00 PM and check-out is by 10:00 AM. For special needs, guests can contact us before arrival.' },
      { question: 'What amenities are included?', answer: 'Bed linen, towels, toilet paper, shower gel, hair dryer, extra blankets and pillows are included. The house also offers Wi-Fi, air conditioning, an equipped kitchen and private parking.', links: [{ label: 'Rooms', href: '/en/rooms-amenities/' }] },
      { question: 'What can I visit from Perla Toscana?', answer: 'From Perla Toscana, guests can easily visit Florence, Chianti, The Mall Firenze, Greve in Chianti, Siena, San Gimignano and the Val d’Orcia. The location is convenient for day trips in Tuscany.', links: [{ label: 'Things to do', href: '/en/what-to-do/' }] },
      { question: 'Is Perla Toscana close to Chianti?', answer: 'Yes, Perla Toscana is in a convenient position for visiting Chianti. Greve in Chianti is about 30 km away and can be reached by car in about 40 minutes.', links: [{ label: 'Things to do', href: '/en/what-to-do/' }] },
      { question: 'Is Perla Toscana convenient for visiting Val d’Orcia?', answer: 'Yes, Val d’Orcia can be visited as a day trip. It is about 110 km from Perla Toscana and can be reached by car in about 1 hour and 50 minutes, depending on traffic and route.', links: [{ label: 'Things to do', href: '/en/what-to-do/' }] },
      { question: 'How can I check availability or book?', answer: 'Guests can check availability using the “Check availability” button or contact us directly on WhatsApp. WhatsApp is the easiest way to receive quick information about the stay.', links: [{ label: 'Check availability', href: '/en/book/' }] },
      { question: 'What is Perla Toscana’s WhatsApp number?', answer: 'Perla Toscana’s WhatsApp number is +39 327 003 4324. Guests can use it for availability requests, arrival information and questions about the stay.' }
    ]
  },
  {
    slug: 'contact',
    path: '/en/contact/',
    alternatePath: '/it/contatti/',
    title: 'Contact Perla Toscana | Phone and WhatsApp',
    description: 'Contact Perla Toscana by phone or WhatsApp. Apartment in Figline Valdarno near Florence, Chianti and The Mall Firenze.',
    eyebrow: 'Contact',
    h1: 'Contact Perla Toscana',
    intro: 'For information about your stay, availability, arrival or amenities, you can use phone or WhatsApp.',
    sections: [
      {
        title: 'Available channels',
        body: `WhatsApp: ${siteConfig.placeholders.whatsappPhone}. Main phone number: ${siteConfig.placeholders.phone}.`
      },
      {
        title: 'Property details',
        body: `${siteConfig.name}, ${siteConfig.placeholders.address}. CIN: ${siteConfig.placeholders.cin}. CIR: ${siteConfig.placeholders.cir}.`
      }
    ]
  },
  {
    slug: 'privacy-policy',
    path: '/en/privacy-policy/',
    alternatePath: '/it/privacy-policy/',
    title: 'Privacy Policy | Perla Toscana',
    description: 'Privacy Policy for Perla Toscana, including contact, booking and optional Google Analytics 4 processing.',
    eyebrow: 'Privacy',
    h1: 'Privacy Policy',
    intro: 'This page explains how we handle data sent through Perla Toscana contact and booking channels.',
    sections: [
      {
        title: 'Data controller',
        body: `The data controller is Roberto Castiglioni, owner of Perla Toscana, with operational address at ${siteConfig.placeholders.address}. Contact details: telephone ${siteConfig.placeholders.phone}; WhatsApp ${siteConfig.placeholders.whatsappPhone}.`
      },
      {
        title: 'Data collected',
        body: 'We may process data voluntarily provided by users via phone, WhatsApp, availability request or booking system, such as name, surname, phone number, email address if provided, stay dates, number of guests and information needed to manage the booking.'
      },
      {
        title: 'Purpose of processing',
        body: 'Data is used to respond to requests, manage availability and bookings, communicate with guests, comply with administrative, tax and public security obligations, and improve the service provided.'
      },
      {
        title: 'Optional Google Analytics 4',
        body: 'Only after consent, this website uses Google Analytics 4 with Measurement ID G-6FTELCM9C9 to collect aggregated information such as page views, device, approximate geographic area and interactions. Consent can be refused or changed at any time through “Manage cookies” in the footer.'
      },
      {
        title: 'Legal basis',
        body: 'Contact and booking data is processed on the basis of pre-contractual or contractual measures requested by the user, compliance with legal obligations and, where applicable, the legitimate interest of the controller. Analytics data is processed exclusively on the basis of consent.'
      },
      {
        title: 'External channels and providers',
        body: 'Some data may be processed through external services used for communication, booking, payment, website hosting, analytics or technical tools. Each provider processes data according to its own terms and privacy policies.'
      },
      {
        title: 'WhatsApp and phone',
        body: 'Communications via WhatsApp or phone are managed through the respective services and may involve data processing according to the terms applied by the relevant providers.'
      },
      {
        title: 'Data retention',
        body: 'Data is kept for the time necessary to manage the request or booking and, where applicable, for the periods required by administrative, tax or legal obligations. Analytics data follows the retention settings configured in the Google Analytics property.'
      },
      {
        title: 'Data subject rights',
        body: `Users may request access, rectification, deletion, restriction of processing, objection and data portability where provided by applicable law by contacting the controller at ${siteConfig.placeholders.phone} or ${siteConfig.placeholders.whatsappPhone}.`
      },
      {
        title: 'Complaint',
        body: 'Users have the right to lodge a complaint with the competent data protection supervisory authority.'
      },
      {
        title: 'Cookies',
        body: 'The website uses technical storage and optional analytics cookies only after consent. Advertising, remarketing, profiling pixels and social tracking are not enabled.'
      }
    ]
  },
  {
    slug: 'cookie-policy',
    path: '/en/cookie-policy/',
    alternatePath: '/it/cookie-policy/',
    title: 'Cookie Policy | Perla Toscana',
    description: 'Cookie Policy for Perla Toscana, covering technical storage and consent-based Google Analytics 4.',
    eyebrow: 'Cookies',
    h1: 'Cookie Policy',
    intro: 'This website uses technical storage and optional Google Analytics 4 only after consent.',
    sections: [
      { title: 'Technical storage', body: 'The site uses localStorage to remember the analytics preference and retain the visitor’s choice.' },
      { title: 'Google Analytics 4', body: 'Google Analytics 4 (Measurement ID G-6FTELCM9C9) is loaded only after consent. It may set cookies such as _ga and _ga_* to distinguish visits and measure page views and interactions. Advertising, remarketing and ad personalisation remain disabled.' },
      { title: 'Managing consent', body: 'You can accept or reject analytics in the banner and later change your choice through “Manage cookies” in the footer. Without consent, the Google Analytics tag is not loaded and no GA4 pageview is sent.' }
    ]
  },
  {
    slug: 'terms-and-conditions',
    path: '/en/terms-and-conditions/',
    alternatePath: '/it/termini-condizioni/',
    title: 'Terms and Conditions | Perla Toscana',
    description: 'Terms and conditions for the Perla Toscana website.',
    eyebrow: 'Terms',
    h1: 'Terms and Conditions',
    intro: 'Informational page covering booking conditions, cancellation terms and responsibilities.',
    sections: [{ title: 'Bookings', body: 'Availability, conditions, payment and confirmation are managed during the request process. In some cases, payment at the property may be available by prior agreement with the host. Payment methods are confirmed during the booking process or by direct contact.' }]
  },
  {
    slug: 'legal-information',
    path: '/en/legal-information/',
    alternatePath: '/it/informazioni-legali/',
    title: 'Legal Information and CIN | Perla Toscana',
    description: 'Legal information, CIN, CIR and property details for Perla Toscana.',
    eyebrow: 'Legal information',
    h1: 'Legal Information / CIN',
    intro: `CIN: ${siteConfig.placeholders.cin}. CIR: ${siteConfig.placeholders.cir}. Address: ${siteConfig.placeholders.address}.`,
    sections: [{ title: 'Property details', body: `${siteConfig.name}, ${siteConfig.placeholders.address}. Phone: ${siteConfig.placeholders.phone}. Additional number: ${siteConfig.placeholders.secondaryPhone}.` }]
  }
];

export const pages = { it, en };

export function getPage(lang: Lang, slug: string) {
  return pages[lang].find((page) => page.slug === slug);
}




