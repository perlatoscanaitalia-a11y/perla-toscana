import type { Lang, PageContent } from './pages';

type Destination = {
  itSlug: string; enSlug: string; itName: string; enName: string;
  focusIt: string; focusEn: string; timeIt: string; timeEn: string;
  planIt: string; planEn: string; usefulIt: string; usefulEn: string;
};

const destinations: Destination[] = [
  { itSlug: 'firenze', enSlug: 'florence', itName: 'Firenze', enName: 'Florence', focusIt: 'Duomo, Uffizi, Ponte Vecchio, Oltrarno e Piazzale Michelangelo', focusEn: 'the Duomo, Uffizi, Ponte Vecchio, Oltrarno and Piazzale Michelangelo', timeIt: 'circa 45 minuti in auto, in base al traffico', timeEn: 'about 45 minutes by car, depending on traffic', planIt: 'Parcheggia fuori dalla ZTL o raggiungi il centro in treno da Figline Valdarno. Dedica la mattina al centro monumentale, il pomeriggio all’Oltrarno e chiudi con il panorama da Piazzale Michelangelo.', planEn: 'Park outside the ZTL or take the train from Figline Valdarno. Spend the morning in the monumental centre, the afternoon in Oltrarno and finish with the view from Piazzale Michelangelo.', usefulIt: 'Prenota in anticipo Uffizi e Accademia; controlla sempre ZTL, parcheggi e orari ferroviari ufficiali.', usefulEn: 'Book the Uffizi and Accademia in advance; always check official ZTL, parking and train information.' },
  { itSlug: 'chianti', enSlug: 'chianti', itName: 'Chianti', enName: 'Chianti', focusIt: 'Greve, Panzano, borghi, strade panoramiche e cantine', focusEn: 'Greve, Panzano, villages, scenic roads and wineries', timeIt: 'Greve in Chianti è a circa 40 minuti in auto', timeEn: 'Greve in Chianti is about 40 minutes away by car', planIt: 'Segui un itinerario lento tra Greve, Montefioralle e Panzano, lasciando tempo per un pranzo tipico e una degustazione prenotata. Chi guida deve evitare alcol.', planEn: 'Follow a slow route through Greve, Montefioralle and Panzano, allowing time for a typical lunch and a pre-booked tasting. The driver should avoid alcohol.', usefulIt: 'Le strade sono collinari e spesso strette: programma poche tappe e verifica direttamente disponibilità e orari delle cantine.', usefulEn: 'Roads are hilly and often narrow: plan only a few stops and confirm winery opening times and availability directly.' },
  { itSlug: 'the-mall-firenze', enSlug: 'the-mall-firenze', itName: 'The Mall Firenze', enName: 'The Mall Firenze', focusIt: 'shopping, servizi dell’outlet e abbinamenti con Reggello e Chianti', focusEn: 'shopping, outlet services and combinations with Reggello and Chianti', timeIt: 'circa 25 minuti in auto', timeEn: 'about 25 minutes by car', planIt: 'Arriva all’apertura per una visita più tranquilla. Dopo lo shopping puoi proseguire verso Reggello, l’Abbazia di Vallombrosa o una tappa nel Chianti.', planEn: 'Arrive at opening time for a quieter visit. After shopping, continue towards Reggello, Vallombrosa Abbey or a Chianti stop.', usefulIt: 'Controlla sul sito ufficiale orari, marchi, servizi e navette: possono cambiare durante l’anno.', usefulEn: 'Check the official website for current opening hours, brands, services and shuttles, as they may change during the year.' },
  { itSlug: 'figline-valdarno', enSlug: 'figline-valdarno', itName: 'Figline Valdarno', enName: 'Figline Valdarno', focusIt: 'centro storico, Piazza Marsilio Ficino, stazione, mercati e servizi', focusEn: 'historic centre, Piazza Marsilio Ficino, station, markets and local services', timeIt: 'pochi minuti dalla casa', timeEn: 'a few minutes from the house', planIt: 'Passeggia nel centro storico, usa la stazione come accesso pratico a Firenze e completa la giornata con negozi e ristoranti locali.', planEn: 'Walk through the historic centre, use the station as a practical gateway to Florence and complete the day with local shops and restaurants.', usefulIt: 'È il riferimento più pratico per treni, spesa, farmacia e servizi quotidiani durante il soggiorno.', usefulEn: 'It is the most practical base for trains, groceries, pharmacies and everyday services during your stay.' },
  { itSlug: 'valdarno', enSlug: 'valdarno', itName: 'Valdarno', enName: 'Valdarno', focusIt: 'borghi, Balze, sentieri, pievi e paesaggi tra Firenze e Arezzo', focusEn: 'villages, the Balze, trails, parish churches and landscapes between Florence and Arezzo', timeIt: 'le prime tappe sono raggiungibili in 10–30 minuti', timeEn: 'the nearest stops are 10–30 minutes away', planIt: 'Combina Figline, le Balze del Valdarno e un borgo come Loro Ciuffenna o Castelfranco di Sopra. Scegli scarpe adatte se prevedi sentieri.', planEn: 'Combine Figline, the Balze del Valdarno and a village such as Loro Ciuffenna or Castelfranco di Sopra. Wear suitable shoes for trails.', usefulIt: 'Il Valdarno è ideale per alternare giornate famose a esperienze meno affollate e più locali.', usefulEn: 'Valdarno is ideal for alternating famous destinations with quieter, more local experiences.' },
  { itSlug: 'arezzo', enSlug: 'arezzo', itName: 'Arezzo', enName: 'Arezzo', focusIt: 'Piazza Grande, Basilica di San Francesco, centro storico e antiquariato', focusEn: 'Piazza Grande, Basilica di San Francesco, historic centre and antiques', timeIt: 'circa 45–55 minuti in auto o collegamento ferroviario da Figline', timeEn: 'about 45–55 minutes by car or by train from Figline', planIt: 'Dedica la mattina alla Basilica di San Francesco e al centro storico, poi raggiungi Piazza Grande e le vie dell’antiquariato.', planEn: 'Spend the morning at the Basilica di San Francesco and historic centre, then explore Piazza Grande and the antiques streets.', usefulIt: 'Verifica la prenotazione per gli affreschi di Piero della Francesca e il calendario della Fiera Antiquaria.', usefulEn: 'Check booking requirements for Piero della Francesca’s frescoes and the Antiques Fair calendar.' },
  { itSlug: 'siena', enSlug: 'siena', itName: 'Siena', enName: 'Siena', focusIt: 'Piazza del Campo, Duomo, Contrade e centro medievale', focusEn: 'Piazza del Campo, the Duomo, Contrade and medieval centre', timeIt: 'circa 1 ora e 10 minuti in auto', timeEn: 'about 1 hour 10 minutes by car', planIt: 'Parcheggia fuori dal centro, entra a piedi da una delle porte e collega Piazza del Campo, Duomo e vie delle Contrade senza sovraccaricare la giornata.', planEn: 'Park outside the centre, enter on foot through one of the gates and connect Piazza del Campo, the Duomo and Contrade streets at an unhurried pace.', usefulIt: 'Nei giorni del Palio e in alta stagione prenota e pianifica con largo anticipo.', usefulEn: 'During the Palio and high season, book and plan well in advance.' },
  { itSlug: 'reggello-vallombrosa', enSlug: 'reggello-vallombrosa', itName: 'Reggello e Vallombrosa', enName: 'Reggello and Vallombrosa', focusIt: 'abbazia, foresta, sentieri, pievi e paesaggio del Pratomagno', focusEn: 'abbey, forest, trails, parish churches and Pratomagno scenery', timeIt: 'circa 25–45 minuti secondo la tappa', timeEn: 'about 25–45 minutes depending on the stop', planIt: 'Abbina il centro di Reggello alla foresta e all’Abbazia di Vallombrosa. È una giornata adatta a chi cerca natura e temperature più fresche.', planEn: 'Combine Reggello with Vallombrosa forest and abbey. It is a good day for nature and cooler temperatures.', usefulIt: 'Controlla meteo, condizioni dei sentieri e orari dell’abbazia prima di partire.', usefulEn: 'Check weather, trail conditions and abbey opening hours before leaving.' }
];

const clusterLinks = (lang: Lang, current: string) => destinations
  .filter((d) => (lang === 'it' ? d.itSlug : d.enSlug) !== current)
  .map((d) => ({ label: lang === 'it' ? d.itName : d.enName, href: `/${lang}/${lang === 'it' ? 'guide' : 'guides'}/${lang === 'it' ? d.itSlug : d.enSlug}/` }));

function destinationPage(d: Destination, lang: Lang): PageContent {
  const it = lang === 'it'; const slug = it ? d.itSlug : d.enSlug; const name = it ? d.itName : d.enName;
  return {
    slug, path: `/${lang}/${it ? 'guide' : 'guides'}/${slug}/`,
    alternatePath: `/${it ? 'en/guides' : 'it/guide'}/${it ? d.enSlug : d.itSlug}/`,
    title: it ? `${name}: cosa vedere e itinerario da Perla Toscana` : `${name}: what to see and itinerary from Perla Toscana`,
    description: it ? `Guida a ${name} da Perla Toscana: cosa vedere, tempi di viaggio, itinerario, consigli pratici e come inserirla in un soggiorno nel Valdarno.` : `Guide to ${name} from Perla Toscana: what to see, travel time, itinerary, practical advice and how to include it in a Valdarno stay.`,
    eyebrow: it ? 'Guida locale' : 'Local guide',
    h1: it ? `${name}: guida pratica da Perla Toscana` : `${name}: practical guide from Perla Toscana`,
    intro: it ? `<strong>Perla Toscana</strong>, a Figline Valdarno, è una base pratica per visitare <strong>${name}</strong>. Questa guida collega distanze, priorità, trasporti e tappe utili per organizzare una giornata senza perdere tempo.` : `<strong>Perla Toscana</strong> in Figline Valdarno is a practical base for visiting <strong>${name}</strong>. This guide connects distances, priorities, transport and useful stops for an efficient day trip.`,
    sections: [
      { title: it ? `Perché visitare ${name}` : `Why visit ${name}`, body: it ? `${name} è una tappa utile per chi cerca ${d.focusIt}. Da Perla Toscana il tempo indicativo è ${d.timeIt}.` : `${name} is a useful destination for travellers interested in ${d.focusEn}. From Perla Toscana, the indicative travel time is ${d.timeEn}.` },
      { title: it ? 'Itinerario consigliato' : 'Suggested itinerary', body: it ? d.planIt : d.planEn },
      { title: it ? 'Consigli pratici' : 'Practical advice', body: it ? d.usefulIt : d.usefulEn, links: [{ label: it ? 'Come arrivare a Perla Toscana' : 'How to reach Perla Toscana', href: it ? '/it/come-arrivare/' : '/en/how-to-reach/' }, { label: it ? 'Dove mangiare in zona' : 'Where to eat nearby', href: it ? '/it/dove-mangiare/' : '/en/where-to-eat/' }] },
      ...(d.itSlug === 'the-mall-firenze' ? [{
        title: it ? 'Marchi presenti a The Mall Firenze' : 'Brands at The Mall Firenze',
        variant: 'callout' as const,
        body: it
          ? 'Tra i principali negozi presenti a The Mall Firenze trovi Gucci, Armani, Balenciaga, Burberry, Bottega Veneta, Celine, Alexander McQueen, Saint Laurent, Valentino Garavani, Versace, Zegna, Loro Piana, Tom Ford, Tod’s, Alberta Ferretti, Balmain, Marni e Corneliani. Boutique e disponibilità possono variare: consulta sempre l’elenco ufficiale aggiornato prima della visita.'
          : 'The principal stores at The Mall Firenze include Gucci, Armani, Balenciaga, Burberry, Bottega Veneta, Celine, Alexander McQueen, Saint Laurent, Valentino Garavani, Versace, Zegna, Loro Piana, Tom Ford, Tod’s, Alberta Ferretti, Balmain, Marni and Corneliani. Boutiques and availability may change, so always check the current official list before visiting.',
        rules: it ? [
          'Borse e pelletteria: Gucci, Bottega Veneta, Saint Laurent, Celine.',
          'Moda uomo e donna: Armani, Burberry, Valentino Garavani, Versace.',
          'Calzature e accessori: Tod’s, Tom Ford, Balenciaga.',
          'Lusso classico: Loro Piana, Zegna, Corneliani.'
        ] : [
          'Bags and leather goods: Gucci, Bottega Veneta, Saint Laurent, Celine.',
          'Women’s and men’s fashion: Armani, Burberry, Valentino Garavani, Versace.',
          'Footwear and accessories: Tod’s, Tom Ford, Balenciaga.',
          'Classic luxury: Loro Piana, Zegna, Corneliani.'
        ],
        links: [{
          label: it ? 'Consulta tutti i marchi sul sito ufficiale' : 'View all brands on the official website',
          href: it ? 'https://firenze.themall.it/it/marchi' : 'https://firenze.themall.it/en/brands',
          external: true
        }]
      }] : []),
      { title: it ? 'Continua a esplorare' : 'Keep exploring', body: it ? 'Collega questa tappa alle altre guide locali e agli itinerari costruiti dalla stessa base.' : 'Connect this stop with the other local guides and itineraries built from the same base.', links: [...clusterLinks(lang, slug), { label: it ? 'Itinerario di 1 giorno' : '1-day itinerary', href: it ? '/it/itinerari/1-giorno/' : '/en/itineraries/1-day/' }, { label: it ? 'Itinerario di 2 giorni' : '2-day itinerary', href: it ? '/it/itinerari/2-giorni/' : '/en/itineraries/2-days/' }, { label: it ? 'Itinerario di 3 giorni' : '3-day itinerary', href: it ? '/it/itinerari/3-giorni/' : '/en/itineraries/3-days/' }] }
    ],
    faqs: [
      { question: it ? `Quanto dista ${name} da Perla Toscana?` : `How far is ${name} from Perla Toscana?`, answer: it ? `Il tempo indicativo è ${d.timeIt}. I tempi possono cambiare per traffico, stagione e percorso.` : `The indicative travel time is ${d.timeEn}. Times may change with traffic, season and route.` },
      { question: it ? `Si può visitare ${name} in giornata?` : `Can ${name} be visited as a day trip?`, answer: it ? `Sì. ${name} può essere organizzata come gita in giornata da Perla Toscana, scegliendo poche priorità e verificando in anticipo orari e prenotazioni.` : `Yes. ${name} works as a day trip from Perla Toscana when you choose a few priorities and check opening times and reservations in advance.` },
      { question: it ? `Serve l’auto per andare a ${name}?` : `Do I need a car to reach ${name}?`, answer: it ? 'L’auto offre maggiore flessibilità; per alcune città è utile anche il treno da Figline Valdarno. La scelta dipende da ZTL, parcheggi e programma.' : 'A car offers more flexibility; for some cities, the train from Figline Valdarno is also useful. The best choice depends on ZTL restrictions, parking and your plan.' }
    ]
  };
}

function itineraryPage(days: 1 | 2 | 3, lang: Lang): PageContent {
  const it = lang === 'it';
  const slug = it ? `${days}-${days === 1 ? 'giorno' : 'giorni'}` : `${days}-${days === 1 ? 'day' : 'days'}`;
  const alternateSlug = it ? `${days}-${days === 1 ? 'day' : 'days'}` : `${days}-${days === 1 ? 'giorno' : 'giorni'}`;
  const dayPlans = it
    ? ['Figline Valdarno e Firenze: treno o auto fino a un parcheggio fuori ZTL, centro storico e rientro nel Valdarno.', 'Chianti e The Mall Firenze: scegli shopping al mattino e una sola area del Chianti nel pomeriggio, oppure inverti le tappe.', 'Arezzo oppure Siena: dedica l’intera giornata a una città, senza aggiungere deviazioni che rendano il programma troppo denso.']
    : ['Figline Valdarno and Florence: train or drive to parking outside the ZTL, explore the historic centre and return to Valdarno.', 'Chianti and The Mall Firenze: choose shopping in the morning and one Chianti area in the afternoon, or reverse the stops.', 'Arezzo or Siena: dedicate the full day to one city without adding detours that make the schedule too dense.'];
  return {
    slug, path: `/${lang}/${it ? 'itinerari' : 'itineraries'}/${slug}/`, alternatePath: `/${it ? 'en/itineraries' : 'it/itinerari'}/${alternateSlug}/`,
    title: it ? `Itinerario di ${days} ${days === 1 ? 'giorno' : 'giorni'} in Toscana da Perla Toscana` : `${days}-day Tuscany itinerary from Perla Toscana`,
    description: it ? `Itinerario di ${days} ${days === 1 ? 'giorno' : 'giorni'} da Figline Valdarno con Firenze, Chianti, The Mall Firenze, Valdarno, Arezzo o Siena.` : `${days}-day itinerary from Figline Valdarno covering Florence, Chianti, The Mall Firenze, Valdarno, Arezzo or Siena.`,
    eyebrow: it ? 'Itinerario' : 'Itinerary', h1: it ? `Cosa vedere in Toscana in ${days} ${days === 1 ? 'giorno' : 'giorni'}` : `What to see in Tuscany in ${days} day${days > 1 ? 's' : ''}`,
    intro: it ? `Un itinerario realistico con base a <strong>Perla Toscana</strong>: poche tappe ben collegate, tempi sostenibili e alternative per meteo, traffico e interessi diversi.` : `A realistic itinerary based at <strong>Perla Toscana</strong>: a few well-connected stops, manageable timing and alternatives for weather, traffic and different interests.`,
    sections: [
      ...dayPlans.slice(0, days).map((body, i) => ({ title: it ? `Giorno ${i + 1}` : `Day ${i + 1}`, body })),
      { title: it ? 'Come adattare il programma' : 'How to adapt the plan', body: it ? 'Con bambini o in alta stagione riduci le tappe. In caso di pioggia privilegia musei, centri storici e shopping. Per natura e borghi scegli Valdarno, Reggello e Vallombrosa.' : 'With children or in high season, reduce the number of stops. In rain, prioritise museums, historic centres and shopping. For nature and villages, choose Valdarno, Reggello and Vallombrosa.', links: destinations.map(d => ({ label: it ? d.itName : d.enName, href: `/${lang}/${it ? 'guide' : 'guides'}/${it ? d.itSlug : d.enSlug}/` })) },
      { title: it ? 'Organizza la base' : 'Plan your base', body: it ? 'Verifica accesso, parcheggio, camere e disponibilità prima di definire le giornate.' : 'Check access, parking, bedrooms and availability before finalising each day.', links: [{ label: it ? 'Posizione' : 'Location', href: it ? '/it/posizione/' : '/en/location/' }, { label: it ? 'Camere e servizi' : 'Rooms and amenities', href: it ? '/it/camere-servizi/' : '/en/rooms-amenities/' }, { label: it ? 'Verifica disponibilità' : 'Check availability', href: it ? '/it/prenota/' : '/en/book/' }] }
    ],
    faqs: [
      { question: it ? `Qual è la base migliore per questo itinerario di ${days} ${days === 1 ? 'giorno' : 'giorni'}?` : `What is a practical base for this ${days}-day itinerary?`, answer: it ? 'Figline Valdarno permette di collegare Firenze, Chianti, Valdarno, The Mall Firenze, Arezzo e Siena riducendo i cambi di alloggio.' : 'Figline Valdarno connects Florence, Chianti, Valdarno, The Mall Firenze, Arezzo and Siena while reducing accommodation changes.' },
      { question: it ? 'È meglio auto o treno?' : 'Is a car or train better?', answer: it ? 'Il treno è pratico per Firenze e Arezzo; l’auto è più flessibile per Chianti, borghi, Valdarno e Siena. Valuta ZTL e parcheggi.' : 'The train is practical for Florence and Arezzo; a car is more flexible for Chianti, villages, Valdarno and Siena. Consider ZTL restrictions and parking.' },
      { question: it ? 'Quante tappe conviene fare ogni giorno?' : 'How many stops should I plan each day?', answer: it ? 'Una città principale oppure due aree vicine. Programmi troppo densi aumentano traffico, parcheggi e tempi morti.' : 'One main city or two nearby areas. Overloaded plans increase traffic, parking time and delays.' }
    ]
  };
}

export const guides = {
  it: [...destinations.map(d => destinationPage(d, 'it')), ...([1, 2, 3] as const).map(d => itineraryPage(d, 'it'))],
  en: [...destinations.map(d => destinationPage(d, 'en')), ...([1, 2, 3] as const).map(d => itineraryPage(d, 'en'))]
};
