import type { PageContent } from './pages';

const commonLinks = [
  { label: 'Perla Toscana', href: '/de/' },
  { label: 'Alle Toskana-Reiseführer', href: '/de/reisefuehrer/' },
  { label: 'Mietwagen in Florenz', href: '/de/mietwagen/' }
];

export const viaFrancigenaDe: PageContent = {
  slug: 'via-francigena-toskana-etappen-route', path: '/de/reisefuehrer/via-francigena-toskana-etappen-route/',
  alternatePaths: { it: '/guide/via-francigena-toscana-tappe-itinerario/', en: '/en/guides/via-francigena-tuscany-stages-itinerary/', de: '/de/reisefuehrer/via-francigena-toskana-etappen-route/' },
  title: 'Via Francigena Toskana: Etappen und Route',
  description: 'Via Francigena in der Toskana: 16 Etappen, offizielle Route, Planung zu Fuß oder per Rad und Sehenswürdigkeiten zwischen Cisa-Pass und Val d’Orcia.',
  eyebrow: 'Fernwanderweg · Toskana', h1: 'Via Francigena in der Toskana: Etappen, Route und Planung',
  publishedAt: '2026-08-04', updatedAt: '2026-08-25',
  socialImage: '/images/places/san-gimignano.webp', socialImageAlt: 'San Gimignano an der Via Francigena in der Toskana', socialImageWidth: 1280, socialImageHeight: 899,
  intro: '<strong>Die Via Francigena durchquert die Toskana auf einer offiziellen Route von etwa 394 Kilometern in 16 Etappen.</strong> Sie führt vom Cisa-Pass durch Lunigiana, Lucca, Val d’Elsa, Siena und Val d’Orcia bis zur Grenze zum Latium. Wander- und Radroute sind nicht überall identisch.',
  sections: [
    { title: 'Route und Landschaften', anchor: 'route', html: '<p>Die Strecke beginnt im Apennin, durchquert Pontremoli und Lunigiana, erreicht Pietrasanta und Lucca und führt über San Miniato, Gambassi Terme und San Gimignano nach Siena. Danach folgen Crete Senesi, San Quirico d’Orcia und Radicofani.</p><p>Die Angaben von 394 Kilometern und 16 Etappen stammen aus dem offiziellen regionalen Reiseweg. Für die konkrete Reise muss immer die aktuelle GPS-Spur heruntergeladen werden.</p>', links: [{ label: 'Offizielle Route von Visit Tuscany', href: 'https://www.visittuscany.com/en/itineraries/via-francigena-toscana/', external: true }] },
    { title: 'Etappen sinnvoll auswählen', anchor: 'etappen', body: 'Nicht jede Etappe ist für einen spontanen Spaziergang geeignet. Länge, Höhenmeter, Hitze, Wasserstellen und Untergrund sind wichtiger als die reine Kilometerzahl. Für einen einzelnen Tag eignen sich kürzere Abschnitte nahe eines Ortes mit sicherer Rückfahrt.' },
    { title: 'Zu Fuß und mit dem Fahrrad', anchor: 'wandern-rad', html: '<p>Wanderer folgen der markierten Fußroute. Radfahrende nutzen die offizielle Radroute, weil einzelne Wanderabschnitte zu steil, schmal oder technisch sind.</p><ul><li>Aktuelle Spur und bekannte kritische Stellen prüfen.</li><li>Wasser, Sonnenschutz und Notfallreserve mitnehmen.</li><li>Unterkunft und Rücktransport vorab sichern.</li><li>Bei Bahnmitnahme aktuelle Fahrradregeln kontrollieren.</li></ul>', links: [{ label: 'Offizielle Radroute der Region Toskana', href: 'https://www.regione.toscana.it/-/itinerario-ciclabile-della-via-francigena', external: true }] },
    { title: 'Siena und Val d’Orcia', anchor: 'suedliche-toskana', body: 'Südlich von Siena verläuft die Francigena durch die Crete Senesi nach San Quirico d’Orcia und weiter über Vignoni und Bagno Vignoni nach Radicofani. Lange, offene Abschnitte verlangen eine realistische Planung und ausreichend Wasser.', links: [{ label: 'Siena', href: '/de/reisefuehrer/siena-sehenswuerdigkeiten/' }, { label: 'Val d’Orcia', href: '/de/reisefuehrer/val-dorcia-sehenswuerdigkeiten-route/' }] },
    { title: 'Perla Toscana als Basis', body: 'Perla Toscana ist keine Unterkunft direkt am Fernwanderweg. Sie kann als Basis für einzelne Ausflüge nach San Gimignano, Siena oder in die Val d’Orcia dienen; eine mehrtägige Wanderung erfordert dagegen Unterkünfte entlang der Etappen.', links: [{ label: 'San Gimignano', href: '/de/reisefuehrer/san-gimignano-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Wie lang ist die Via Francigena in der Toskana?', answer: 'Der offizielle regionale Reiseweg wird mit etwa 394 Kilometern und 16 Etappen angegeben. Die aktuelle GPS-Spur ist für die Planung maßgeblich.' },
    { question: 'Kann man die Via Francigena in der Toskana mit dem Fahrrad fahren?', answer: 'Ja, aber auf der offiziellen Radroute. Sie weicht dort ab, wo der Wanderweg zu steil, schmal oder technisch ist.' },
    { question: 'Kann man nur eine einzelne Etappe gehen?', answer: 'Ja. Wählen Sie eine Etappe passend zu Kondition, Wetter und Rücktransport und prüfen Sie die aktuelle Wegsituation.' }
  ]
};

export const trasimenoDe: PageContent = {
  slug: 'trasimenischer-see-sehenswuerdigkeiten', path: '/de/reisefuehrer/trasimenischer-see-sehenswuerdigkeiten/',
  alternatePaths: { it: '/lago-trasimeno-cosa-vedere/', en: '/en/guides/lake-trasimeno-what-to-see/', de: '/de/reisefuehrer/trasimenischer-see-sehenswuerdigkeiten/' },
  title: 'Trasimenischer See: Sehenswürdigkeiten und Orte',
  description: 'Reiseführer für den Trasimenischen See mit Castiglione del Lago, Passignano, Tuoro, Inseln, Fähren und Tagesplanung ab der Toskana.',
  eyebrow: 'Umbrien und Toskana', h1: 'Trasimenischer See: Sehenswürdigkeiten, Orte und Inseln',
  publishedAt: '2026-07-31', updatedAt: '2026-08-25',
  socialImage: '/images/places/lago-trasimeno/lago-trasimeno-panorama.webp', socialImageAlt: 'Panorama des Trasimenischen Sees bei Castiglione del Lago', socialImageWidth: 1600, socialImageHeight: 1200,
  intro: '<strong>Für einen Tagesausflug zum Trasimenischen See wählen Sie Castiglione del Lago, einen zweiten Uferort und höchstens eine Insel.</strong> Fährverbindungen sind saisonal und können sich ändern; Fahrplan und Abfahrtshafen müssen vor der Fahrt offiziell bestätigt werden.',
  sections: [
    { title: 'Die wichtigsten Orte', html: '<p><strong>Castiglione del Lago</strong> ist von der Toskana aus ein logischer erster Halt mit Altstadt, Palazzo della Corgna und Rocca del Leone. <strong>Passignano</strong> bietet Uferpromenade und Fährverbindungen. <strong>Tuoro</strong> verbindet See und Geschichte der Schlacht am Trasimenischen See. <strong>San Feliciano</strong> ist für Hafen und Fischereimuseum bekannt.</p>' },
    { title: 'Isola Maggiore und Isola Polvese', anchor: 'inseln', body: 'Isola Maggiore besitzt ein bewohntes Dorf, Kirchen und Wege. Isola Polvese ist ein Naturgebiet mit historischen Anlagen. Nicht beide Inseln in einen kurzen Tag pressen. Verbindungen, Kapazitäten und saisonale Einschränkungen immer beim Betreiber prüfen.', links: [{ label: 'Offizielle Fahrplaninformationen', href: 'https://www.fsbusitalia.it/it/umbria/orari-linee-umbria/orari-servizi-navigazione-umbria.html', external: true }] },
    { title: 'Route für einen Tag', anchor: 'route', html: '<ol><li>Früher Start nach Castiglione del Lago.</li><li>Altstadt und Rocca-Bereich.</li><li>Mittagessen am See.</li><li>Je nach bestätigtem Fahrplan eine Insel oder Passignano.</li><li>Rückfahrt ohne zusätzliche komplette Seeumrundung.</li></ol>' },
    { title: 'Anreise ab Perla Toscana', anchor: 'anreise', body: 'Die bestehenden Projektangaben nennen ungefähr 85 Kilometer und rund 1 Stunde 10 bis 25 Minuten bis Castiglione del Lago. Das sind Planungswerte, keine garantierten Live-Fahrzeiten. Verkehr, Route und Parkplatzsuche müssen aktuell berücksichtigt werden.' },
    { title: 'Toskana und Umbrien verbinden', body: 'Der See verdient einen eigenen Tag. Arezzo und Valdarno liegen als separate Ausflüge nahe, während Pienza und Val d’Orcia besser nicht in denselben Tag gelegt werden.', links: [{ label: 'Arezzo', href: '/de/reisefuehrer/arezzo-sehenswuerdigkeiten/' }, { label: 'Valdarno', href: '/de/reisefuehrer/valdarno-sehenswuerdigkeiten/' }, { label: 'Pienza', href: '/de/reisefuehrer/pienza-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Was sollte man am Trasimenischen See an einem Tag sehen?', answer: 'Castiglione del Lago, einen zweiten Uferort und je nach bestätigtem Fahrplan eine Insel.' },
    { question: 'Fahren die Fähren das ganze Jahr?', answer: 'Verbindungen sind saisonal und können geändert oder eingeschränkt werden. Prüfen Sie den offiziellen Fahrplan für den Reisetag.' },
    { question: 'Kann man den See als Tagesausflug ab Perla Toscana besuchen?', answer: 'Ja. Planen Sie einen ganzen Tag und nur wenige Stationen, damit Fähre und Rückfahrt nicht unter Zeitdruck geraten.' }
  ]
};

export const brunelloDe: PageContent = {
  slug: 'brunello-di-montalcino-weingueter-jahrgaenge-preise', path: '/de/reisefuehrer/brunello-di-montalcino-weingueter-jahrgaenge-preise/',
  alternatePaths: { it: '/guide/brunello-di-montalcino-cantine-prezzi/', en: '/en/guides/brunello-di-montalcino-wineries-vintages-prices/', de: '/de/reisefuehrer/brunello-di-montalcino-weingueter-jahrgaenge-preise/' },
  title: 'Brunello di Montalcino: Weingüter, Jahrgänge, Preise',
  description: 'Brunello-di-Montalcino-Reiseführer zu DOCG-Regeln, Sangiovese, Jahrgängen, Preisbereichen, Weingutsbesuchen und sicherer Tagesplanung.',
  eyebrow: 'Wein und Herkunft · Montalcino', h1: 'Brunello di Montalcino: Weingüter, Jahrgänge und Preise',
  publishedAt: '2026-08-03', updatedAt: '2026-08-25',
  socialImage: '/images/places/montalcino/vigneti-brunello.webp', socialImageAlt: 'Brunello-Weinberge in den Hügeln von Montalcino', socialImageWidth: 1600, socialImageHeight: 1067,
  intro: '<strong>Brunello di Montalcino DOCG entsteht ausschließlich im Gemeindegebiet von Montalcino aus Sangiovese.</strong> Bei der Auswahl einer Flasche sind Produzent, Jahrgang, Lagerung und Herkunft wichtiger als eine einfache Rangliste. Weingutsbesuche müssen reserviert werden; wer fährt, trinkt nicht.',
  sections: [
    { title: 'Brunello in Kürze', anchor: 'regeln', html: '<ul><li>100 % Sangiovese aus dem zugelassenen Gebiet von Montalcino.</li><li>Mindestens zwei Jahre Reifung im Holz.</li><li>Brunello kommt ab dem fünften Jahr nach der Ernte auf den Markt, Riserva ab dem sechsten.</li><li>Rosso di Montalcino ist eine eigene, jünger erscheinende DOC.</li></ul>', links: [{ label: 'Offizielle Regeln des Brunello-Konsortiums', href: 'https://www.consorziobrunellodimontalcino.it/it/586/il-brunello', external: true }] },
    { title: 'Jahrgänge richtig bewerten', anchor: 'jahrgaenge', body: 'Häufig gesuchte moderne Jahrgänge sind 2010, 2015, 2016 und 2019; auch 2020 erhielt viel Aufmerksamkeit. Eine allgemeine Jahrgangsbewertung ersetzt aber nicht Produzent, einzelne Flasche und Lagergeschichte. Aktuelle Tabellen des Konsortiums dienen nur als Orientierung.', links: [{ label: 'Jahrgangsbewertungen des Konsortiums', href: 'https://www.consorziobrunellodimontalcino.it/it/583/vini', external: true }] },
    { title: 'Preise einordnen', anchor: 'preise', html: '<p>Die italienische und englische Quellseite dokumentiert am 31. Juli 2026 beobachtete Onlinepreise: ungefähr 30–45 Euro im zugänglichen Bereich, 45–80 Euro im mittleren Bereich und deutlich mehr für Riserva, Einzellagen oder Sammlerweine.</p><p>Diese Werte sind <strong>datierte Marktbeobachtungen</strong>, keine aktuellen Angebote und keine garantierten Preise im Weingut oder Restaurant. Flaschengröße, Jahrgang, Lagerung und Anbieter müssen verglichen werden.</p>' },
    { title: 'Weingüter besuchen', anchor: 'weingueter', rules: ['Besuch direkt beim Weingut reservieren.', 'Dauer, Sprache, Preis und enthaltene Weine bestätigen.', 'Höchstens ein bis zwei Betriebe pro Tag planen.', 'Nicht ohne Erlaubnis durch Weinberge fahren oder gehen.', 'Fahrer bleibt alkoholfrei oder es wird ein Transfer organisiert.'] },
    { title: 'Montalcino als Tagesausflug', body: 'Montalcino und ein reserviertes Weingut füllen einen Tag. Pienza oder weitere Orte der Val d’Orcia sollten nur bei einem sehr reduzierten Programm ergänzt oder besser auf einen zweiten Tag verschoben werden.', links: [{ label: 'Pienza', href: '/de/reisefuehrer/pienza-sehenswuerdigkeiten/' }, { label: 'Val d’Orcia', href: '/de/reisefuehrer/val-dorcia-sehenswuerdigkeiten-route/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Aus welcher Rebsorte wird Brunello hergestellt?', answer: 'Brunello di Montalcino DOCG wird zu 100 Prozent aus Sangiovese aus dem zugelassenen Gemeindegebiet von Montalcino erzeugt.' },
    { question: 'Was kostet eine Flasche Brunello?', answer: 'Am 31. Juli 2026 lagen beobachtete Onlinepreise oft bei etwa 30 bis 80 Euro; Riserva und Sammlerweine kosten mehr. Aktuelle Angebote müssen neu geprüft werden.' },
    { question: 'Muss man Weingutsbesuche reservieren?', answer: 'Ja. Sprache, Dauer, Preis und Verfügbarkeit sollten direkt beim Betrieb bestätigt werden.' }
  ]
};

export const theMallDe: PageContent = {
  slug: 'the-mall-firenze-shopping', path: '/de/reisefuehrer/the-mall-firenze-shopping/',
  alternatePaths: { it: '/it/guide/the-mall-firenze/', en: '/en/guides/the-mall-firenze/', de: '/de/reisefuehrer/the-mall-firenze-shopping/' },
  title: 'The Mall Firenze: Shopping, Anreise und Tipps',
  description: 'Praktischer Reiseführer für The Mall Firenze in Leccio mit Anreise, Shoppingplanung, Services und Ausflügen nach Reggello oder ins Chianti.',
  eyebrow: 'Shopping · Valdarno', h1: 'The Mall Firenze: Shopping und praktische Planung',
  publishedAt: '2026-07-11', updatedAt: '2026-08-25',
  socialImage: '/images/places/the-mall-firenze.webp', socialImageAlt: 'The Mall Firenze in Leccio bei Reggello', socialImageWidth: 1280, socialImageHeight: 872,
  intro: '<strong>The Mall Firenze ist ein Luxus-Outlet in Leccio im Gemeindegebiet von Reggello, nicht im Zentrum von Florenz.</strong> Von Perla Toscana ist es als eigener Shoppingtermin oder zusammen mit einer nahen Station in Reggello planbar. Marken, Öffnungszeiten, Shuttle und Services müssen vorab offiziell geprüft werden.',
  sections: [
    { title: 'Besuch sinnvoll vorbereiten', body: 'Erstellen Sie vor der Fahrt eine kurze Liste prioritärer Boutiquen und vergleichen Sie die aktuelle Markenübersicht auf der offiziellen Website. Kollektionen, Größen und Rabatte sind nicht garantiert und können sich laufend ändern.' },
    { title: 'Anreise ab Perla Toscana', anchor: 'anreise', body: 'Die bestehenden Projektinformationen nennen ungefähr 25 Autominuten. Das ist ein Planungswert. Verkehr, gewählte Route, Parkplätze und aktuelle Shuttle-Angebote müssen am Besuchstag geprüft werden.' },
    { title: 'Boutiquen und Services', anchor: 'marken', body: 'Zum dokumentierten Angebot gehören internationale Luxusmarken aus Mode, Lederwaren, Schuhen und Accessoires. Da Geschäfte und Services wechseln können, ist ausschließlich das aktuelle offizielle Verzeichnis verbindlich.', links: [{ label: 'Aktuelle Marken auf der offiziellen Website', href: 'https://firenze.themall.it/en/brands', external: true }] },
    { title: 'Praktische Einkaufstipps', rules: ['Budget und Prioritäten vorab festlegen.', 'Rückgabe, Garantie und Tax-Free-Regeln vor dem Kauf klären.', 'Belege und Produktunterlagen aufbewahren.', 'Keine Verfügbarkeit bestimmter Modelle voraussetzen.', 'Öffnungszeiten und Sondertage offiziell kontrollieren.'] },
    { title: 'Was lässt sich verbinden?', body: 'Reggello oder ein kurzer lokaler Halt passt besser als eine dichte Rundreise. Vallombrosa und das Chianti verdienen mehr Zeit und können als eigene Tage von Perla Toscana geplant werden.', links: [{ label: 'Reggello und Vallombrosa', href: '/de/reisefuehrer/reggello-vallombrosa/' }, { label: 'Chianti', href: '/de/reisefuehrer/chianti-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Wo liegt The Mall Firenze?', answer: 'In Leccio im Gemeindegebiet von Reggello, außerhalb des Florentiner Stadtzentrums.' },
    { question: 'Welche Marken gibt es im Outlet?', answer: 'Das Angebot umfasst internationale Luxusmarken, kann sich aber ändern. Prüfen Sie das aktuelle offizielle Markenverzeichnis.' },
    { question: 'Kann man The Mall mit einem weiteren Ausflug verbinden?', answer: 'Ja, am ehesten mit einer nahen Station in Reggello. Für Vallombrosa oder das Chianti ist ein eigener, weniger dichter Tag angenehmer.' }
  ]
};

export const valdarnoDe: PageContent = {
  slug: 'valdarno-sehenswuerdigkeiten', path: '/de/reisefuehrer/valdarno-sehenswuerdigkeiten/',
  alternatePaths: { it: '/it/guide/valdarno/', en: '/en/guides/valdarno/', de: '/de/reisefuehrer/valdarno-sehenswuerdigkeiten/' },
  title: 'Valdarno: Sehenswürdigkeiten, Dörfer und Balze',
  description: 'Valdarno-Reiseführer mit Balze, Dörfern, Wegen, romanischen Kirchen und Ausflügen zwischen Florenz und Arezzo ab Perla Toscana.',
  eyebrow: 'Lokaler Reiseführer · Valdarno', h1: 'Valdarno: Sehenswürdigkeiten, Balze und Dörfer',
  publishedAt: '2026-07-11', updatedAt: '2026-08-25',
  socialImage: '/images/places/balze-del-valdarno.webp', socialImageAlt: 'Die Balze-Felsformationen im oberen Valdarno', socialImageWidth: 1920, socialImageHeight: 1280,
  intro: '<strong>Das obere Valdarno ist die unmittelbare Landschaft rund um Perla Toscana zwischen Florenz und Arezzo.</strong> Für einen entspannten Tag verbinden Sie Figline mit den Balze und einem Dorf wie Castelfranco di Sopra oder Loro Ciuffenna, statt mehrere entfernte Regionen anzufahren.',
  sections: [
    { title: 'Was man im Valdarno sehen sollte', html: '<p>Die <strong>Balze del Valdarno</strong> sind markante Erosionsformen aus Sand, Ton und Kies. Dazu kommen historische Orte, romanische Kirchen, Wege am Pratomagno und lokale Zentren wie Figline e Incisa Valdarno.</p>' },
    { title: 'Route für einen Tag', anchor: 'route', html: '<ol><li>Figline Valdarno und Piazza Marsilio Ficino.</li><li>Ein öffentlicher Aussichtspunkt oder freigegebener Weg bei den Balze.</li><li>Ein Dorf: Castelfranco di Sopra oder Loro Ciuffenna.</li><li>Rückkehr ohne zusätzliche Fernziele.</li></ol>' },
    { title: 'Natur und Wege', anchor: 'natur', rules: ['Nur markierte und zugängliche Wege verwenden.', 'Wetter und Wegzustand vorab prüfen.', 'Feste Schuhe für unebenen Untergrund tragen.', 'Keine privaten Felder oder instabilen Böschungen betreten.', 'Bei Hitze ausreichend Wasser und Schattenpausen einplanen.'] },
    { title: 'Nahe Ziele ab Perla Toscana', body: 'Die ersten Stationen werden in den bestehenden Projektinformationen mit ungefähr 10 bis 30 Minuten angegeben. Der konkrete Wert hängt vom Ziel und von der Route ab. Das Valdarno eignet sich besonders für ruhigere Tage zwischen größeren Städteausflügen.' },
    { title: 'Weitere Reiseführer', body: 'Reggello und Vallombrosa erweitern den Naturtag; Arezzo und Chianti sind sinnvolle eigenständige Ausflüge. The Mall Firenze liegt ebenfalls im weiteren Gebiet von Reggello.', links: [{ label: 'Reggello und Vallombrosa', href: '/de/reisefuehrer/reggello-vallombrosa/' }, { label: 'Arezzo', href: '/de/reisefuehrer/arezzo-sehenswuerdigkeiten/' }, { label: 'Chianti', href: '/de/reisefuehrer/chianti-sehenswuerdigkeiten/' }, { label: 'The Mall Firenze', href: '/de/reisefuehrer/the-mall-firenze-shopping/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Was sind die Balze del Valdarno?', answer: 'Markante Erosionsformationen aus Sand, Ton und Kies. Sie sollten nur von öffentlichen Aussichtspunkten oder freigegebenen Wegen betrachtet werden.' },
    { question: 'Welche Orte kann man an einem Tag verbinden?', answer: 'Figline, die Balze und ein Dorf wie Castelfranco di Sopra oder Loro Ciuffenna ergeben eine realistische Route.' },
    { question: 'Ist das Valdarno für einen ruhigen Urlaubstag geeignet?', answer: 'Ja. Viele Ziele liegen näher an Perla Toscana als Florenz, Siena oder die Val d’Orcia und eignen sich für einen weniger dichten Tag.' }
  ]
};

export const guideBlockThreeDe = [viaFrancigenaDe, trasimenoDe, brunelloDe, theMallDe, valdarnoDe];
