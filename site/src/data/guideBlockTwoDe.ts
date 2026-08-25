import type { PageContent } from './pages';

const commonLinks = [
  { label: 'Perla Toscana', href: '/de/' },
  { label: 'Alle Toskana-Reiseführer', href: '/de/reisefuehrer/' },
  { label: 'Mietwagen in Florenz', href: '/de/mietwagen/' }
];

export const chiantiDe: PageContent = {
  slug: 'chianti-sehenswuerdigkeiten', path: '/de/reisefuehrer/chianti-sehenswuerdigkeiten/',
  alternatePaths: { it: '/it/guide/chianti/', en: '/en/guides/chianti/', de: '/de/reisefuehrer/chianti-sehenswuerdigkeiten/' },
  title: 'Chianti: Sehenswürdigkeiten, Orte und Tagesroute',
  description: 'Chianti-Reiseführer mit Greve, Montefioralle, Panzano, Panoramastraßen, Weingütern und einer entspannten Tagesroute ab Figline Valdarno.',
  eyebrow: 'Reiseführer · Chianti', h1: 'Chianti: Sehenswürdigkeiten, Dörfer und Tagesroute',
  publishedAt: '2026-07-11', updatedAt: '2026-08-25',
  socialImage: '/images/places/greve-in-chianti.jpg', socialImageAlt: 'Greve in Chianti zwischen Weinbergen und Hügeln', socialImageWidth: 1280, socialImageHeight: 777,
  intro: '<strong>Das Chianti eignet sich ab Perla Toscana für einen ruhigen Tagesausflug</strong>: Wählen Sie Greve, Montefioralle und Panzano statt zu viele Orte und Weingüter einzuplanen. Die Region liegt zwischen Florenz und Siena; ihr Reiz entsteht aus Dörfern, Weinlandschaft und kurvigen Landstraßen.',
  sections: [
    { title: 'Was man im Chianti sehen sollte', anchor: 'sehenswuerdigkeiten', html: '<p><strong>Greve in Chianti</strong> ist ein praktischer Ausgangspunkt mit Piazza Matteotti. Das kleine <strong>Montefioralle</strong> lässt sich zu Fuß erkunden. <strong>Panzano</strong> ergänzt die Route mit Ortskern und Blicken über die Hügel.</p><p>Für einen Tag genügen diese drei Ziele. Radda, Castellina oder Gaiole gehören besser in eine zweite Route.</p>' },
    { title: 'Eine realistische Tagesroute', anchor: 'route', html: '<ol><li>Vormittag in Greve und auf der Piazza Matteotti.</li><li>Spaziergang durch Montefioralle.</li><li>Mittagessen in der Gegend.</li><li>Nachmittag in Panzano oder bei einem vorab gebuchten Weingut.</li><li>Rückfahrt ohne zusätzliche weite Schleife.</li></ol><p>Greve wird in den bestehenden Reiseinformationen als ungefähr 40 Autominuten von Perla Toscana angegeben. Verkehr und gewählte Straße können die Fahrzeit verändern.</p>' },
    { title: 'Weingüter und Verkostungen', anchor: 'wein', body: 'Besuche bei Weingütern sollten direkt beim Betrieb reserviert werden. Vorher Dauer, Sprache, Preis und angebotene Leistungen klären. Wer fährt, verzichtet auf Alkohol; alternativ ist eine organisierte Tour sinnvoll.' },
    { title: 'Straßen und praktische Hinweise', anchor: 'planung', rules: ['Nur wenige Stationen für einen Tag wählen.', 'Auf schmalen, hügeligen Straßen defensiv fahren.', 'Nicht auf Fahrbahnen oder privaten Zufahrten für Fotos halten.', 'Öffnungszeiten und Verkostungen direkt beim Anbieter prüfen.', 'ZTL und lokale Beschilderung haben Vorrang vor dem Navigationsgerät.'] },
    { title: 'Weitere Ausflüge ab Perla Toscana', body: 'Das Chianti lässt sich an einem eigenen Tag mit einer Unterkunft in Figline e Incisa Valdarno verbinden. Florenz, San Gimignano und Siena sollten separate Tagesprogramme erhalten.', links: [{ label: 'Florenz-Reiseführer', href: '/de/reisefuehrer/florenz-sehenswuerdigkeiten/' }, { label: 'San Gimignano', href: '/de/reisefuehrer/san-gimignano-sehenswuerdigkeiten/' }, { label: 'Siena', href: '/de/reisefuehrer/siena-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Welche Orte sollte man an einem Tag im Chianti besuchen?', answer: 'Greve, Montefioralle und Panzano bilden eine gut verbundene Route. Weitere Orte sollten auf einen zweiten Tag verteilt werden.' },
    { question: 'Muss man eine Weinprobe reservieren?', answer: 'Ja, eine direkte Reservierung ist sinnvoll. Dauer, Preis, Sprache und Verfügbarkeit sollten beim Weingut bestätigt werden.' },
    { question: 'Braucht man für das Chianti ein Auto?', answer: 'Ein Auto ist für Dörfer und ländliche Weingüter am flexibelsten. Wer verkosten möchte, sollte eine Tour oder einen Fahrer einplanen.' }
  ]
};

export const sienaDe: PageContent = {
  slug: 'siena-sehenswuerdigkeiten', path: '/de/reisefuehrer/siena-sehenswuerdigkeiten/',
  alternatePaths: { it: '/it/guide/siena/', en: '/en/guides/siena/', de: '/de/reisefuehrer/siena-sehenswuerdigkeiten/' },
  title: 'Siena: Sehenswürdigkeiten und Tagesroute',
  description: 'Siena-Reiseführer mit Piazza del Campo, Dom, Contraden, ZTL, praktischer Tagesroute und Planung ab Perla Toscana im Valdarno.',
  eyebrow: 'Städtereise · Siena', h1: 'Siena: Sehenswürdigkeiten und praktische Tagesplanung',
  publishedAt: '2026-07-11', updatedAt: '2026-08-25',
  socialImage: '/images/places/siena.jpg', socialImageAlt: 'Historisches Zentrum von Siena in der Toskana', socialImageWidth: 1280, socialImageHeight: 628,
  intro: '<strong>Für einen Tag in Siena konzentrieren Sie sich auf Piazza del Campo, Dom und die mittelalterlichen Straßen.</strong> Der historische Kern wird zu Fuß erkundet. Von Perla Toscana ist Siena ein eigenständiger Tagesausflug, der nicht mit mehreren entfernten Orten kombiniert werden sollte.',
  sections: [
    { title: 'Die wichtigsten Sehenswürdigkeiten', html: '<p>Beginnen Sie an der <strong>Piazza del Campo</strong> mit Palazzo Pubblico und Torre del Mangia. Gehen Sie danach zum <strong>Dom von Siena</strong> und durch die Straßen der Contraden.</p><p>Wählen Sie bei einem Tagesbesuch höchstens einen längeren Innenbesuch. Eintritt, Reservierung und Zugänglichkeit müssen vorab offiziell geprüft werden.</p>' },
    { title: 'Tagesroute zu Fuß', anchor: 'route', html: '<ol><li>Vom Parkplatz außerhalb des Zentrums zu Fuß in die Altstadt.</li><li>Piazza del Campo und Palazzo Pubblico von außen oder als gebuchter Besuch.</li><li>Domkomplex als wichtigste Innenbesichtigung.</li><li>Langsamer Rundgang durch die Contraden.</li><li>Rückweg mit Zeitreserve.</li></ol>' },
    { title: 'Anreise, ZTL und Parken', anchor: 'anreise', body: 'Die bestehenden Projektinformationen nennen ungefähr 1 Stunde 10 Minuten mit dem Auto ab Perla Toscana. Die tatsächliche Dauer hängt von Verkehr und Route ab. Wählen Sie vor der Abfahrt einen ausgeschilderten Parkplatz außerhalb der ZTL und folgen Sie vor Ort der Beschilderung.' },
    { title: 'Palio und stark besuchte Tage', anchor: 'palio', body: 'Der Palio ist eng mit den Contraden und der Piazza del Campo verbunden. An Veranstaltungstagen und in der Hochsaison sind Zugang, Verkehr und Besucherführung besonders. Termine und Regeln müssen über offizielle Stellen geprüft und weit im Voraus eingeplant werden.' },
    { title: 'Siena ab Figline Valdarno planen', body: 'Perla Toscana liegt in Figline e Incisa Valdarno. Siena erhält am besten einen ganzen Tag; Florenz, Chianti und San Gimignano lassen sich an anderen Tagen von derselben Basis besuchen.', links: [{ label: 'Chianti', href: '/de/reisefuehrer/chianti-sehenswuerdigkeiten/' }, { label: 'San Gimignano', href: '/de/reisefuehrer/san-gimignano-sehenswuerdigkeiten/' }, { label: 'Florenz', href: '/de/reisefuehrer/florenz-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Kann man Siena an einem Tag besuchen?', answer: 'Ja. Piazza del Campo, Dom und ein Rundgang durch die Contraden ergeben ein realistisches Tagesprogramm.' },
    { question: 'Darf man mit dem Auto in die Altstadt von Siena fahren?', answer: 'Der historische Kern ist verkehrsbeschränkt. Nutzen Sie ausgeschilderte Parkplätze außerhalb der ZTL und beachten Sie die aktuelle Beschilderung.' },
    { question: 'Was sollte man in Siena vorab buchen?', answer: 'Prüfen Sie insbesondere den Domkomplex sowie Palazzo Pubblico und Torre del Mangia. Verfügbarkeit und Regeln können sich ändern.' }
  ]
};

export const arezzoDe: PageContent = {
  slug: 'arezzo-sehenswuerdigkeiten', path: '/de/reisefuehrer/arezzo-sehenswuerdigkeiten/',
  alternatePaths: { it: '/it/guide/arezzo/', en: '/en/guides/arezzo/', de: '/de/reisefuehrer/arezzo-sehenswuerdigkeiten/' },
  title: 'Arezzo: Sehenswürdigkeiten und Tagesausflug',
  description: 'Arezzo-Reiseführer mit Piazza Grande, Piero della Francesca, Altstadt, Antiquitätenmarkt sowie Anreise ab Figline Valdarno.',
  eyebrow: 'Städtereise · Arezzo', h1: 'Arezzo: Sehenswürdigkeiten und Tagesroute',
  publishedAt: '2026-07-11', updatedAt: '2026-08-25',
  socialImage: '/images/places/arezzo-piazza-grande.webp', socialImageAlt: 'Piazza Grande im historischen Zentrum von Arezzo', socialImageWidth: 1280, socialImageHeight: 853,
  intro: '<strong>Arezzo verbindet Piazza Grande, mittelalterliche Straßen und die Kunst Piero della Francescas in einem gut planbaren Tagesausflug.</strong> Ab Figline Valdarno sind sowohl Auto als auch Bahn möglich; im Zentrum sollte ein klarer Rundgang mit einer reservierten Hauptbesichtigung genügen.',
  sections: [
    { title: 'Was man in Arezzo sehen sollte', html: '<p>Die wichtigsten Stationen sind <strong>Piazza Grande</strong>, die Basilika San Francesco, der Dom und die Straßen der Oberstadt. Die Fresken der Leggenda della Vera Croce von Piero della Francesca sind ein Hauptgrund für den Besuch.</p>' },
    { title: 'Eine sinnvolle Route', anchor: 'route', html: '<ol><li>Basilika San Francesco mit vorab geprüftem Eintritt.</li><li>Spaziergang durch die Altstadt.</li><li>Piazza Grande und ihre Architektur.</li><li>Dom und obere Stadt, wenn Zeit und Kondition reichen.</li><li>Rückweg durch die Straßen der Antiquitätenhändler.</li></ol>' },
    { title: 'Anreise ab Perla Toscana', anchor: 'anreise', body: 'Die vorhandenen Projektinformationen nennen etwa 45–55 Autominuten oder eine Bahnverbindung ab Figline. Fahrpläne, Fahrzeiten, Parkmöglichkeiten und ZTL-Regeln sind für den konkreten Tag zu prüfen.' },
    { title: 'Fresken und Antiquitätenmarkt', anchor: 'veranstaltungen', body: 'Für die Fresken Piero della Francescas sollte die aktuelle Reservierungsregel vorab geprüft werden. Auch der Kalender der Fiera Antiquaria ist variabel: Wer gezielt wegen des Marktes anreist, bestätigt den Termin über offizielle Kanäle.' },
    { title: 'Weitere Ziele von derselben Basis', body: 'Arezzo sollte als eigener Stadtbesuch geplant werden. An anderen Tagen bieten sich Florenz, Chianti, Reggello und Vallombrosa oder die Val d’Orcia an.', links: [{ label: 'Florenz', href: '/de/reisefuehrer/florenz-sehenswuerdigkeiten/' }, { label: 'Reggello und Vallombrosa', href: '/de/reisefuehrer/reggello-vallombrosa/' }, { label: 'Val d’Orcia', href: '/de/reisefuehrer/val-dorcia-sehenswuerdigkeiten-route/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Kann man Arezzo als Tagesausflug ab Figline besuchen?', answer: 'Ja. Auto und Bahn sind möglich; aktuelle Verbindungen, Parkplätze und ZTL-Regeln sollten am Reisetag geprüft werden.' },
    { question: 'Was ist die wichtigste Kunstsehenswürdigkeit in Arezzo?', answer: 'Die Fresken der Leggenda della Vera Croce von Piero della Francesca in der Basilika San Francesco. Die Besuchsregeln sollten vorab bestätigt werden.' },
    { question: 'Wann findet der Antiquitätenmarkt statt?', answer: 'Der Veranstaltungskalender kann sich ändern. Prüfen Sie den bestätigten Termin bei den offiziellen lokalen Stellen.' }
  ]
};

export const reggelloVallombrosaDe: PageContent = {
  slug: 'reggello-vallombrosa', path: '/de/reisefuehrer/reggello-vallombrosa/',
  alternatePaths: { it: '/it/guide/reggello-vallombrosa/', en: '/en/guides/reggello-vallombrosa/', de: '/de/reisefuehrer/reggello-vallombrosa/' },
  title: 'Reggello und Vallombrosa: Abtei, Wald und Ausflug',
  description: 'Reiseführer für Reggello und Vallombrosa mit Abtei, Wald, Wanderwegen, Pratomagno-Landschaft und praktischer Planung ab Perla Toscana.',
  eyebrow: 'Natur und Kultur · Valdarno', h1: 'Reggello und Vallombrosa: Abtei, Wald und Tagesausflug',
  publishedAt: '2026-07-11', updatedAt: '2026-08-25',
  socialImage: '/images/places/abbazia-vallombrosa.webp', socialImageAlt: 'Abtei Vallombrosa im bewaldeten Pratomagno', socialImageWidth: 1280, socialImageHeight: 960,
  intro: '<strong>Reggello und Vallombrosa sind eine passende Kombination für Natur, Abtei und eine ruhigere Seite der Toskana.</strong> Von Perla Toscana lässt sich Reggello mit dem Waldgebiet von Vallombrosa verbinden, ohne den Tag mit weit entfernten Stationen zu überladen.',
  sections: [
    { title: 'Was man in Reggello und Vallombrosa sieht', body: 'Reggello bietet einen lokalen Ortskern und Zugang zur Landschaft am Pratomagno. Vallombrosa ist für die Abtei, den historischen Wald und Wanderwege bekannt. Der Ausflug lebt von der Verbindung aus Kultur und Natur.' },
    { title: 'Vorschlag für einen Tag', anchor: 'route', html: '<ol><li>Kurzer Aufenthalt im Gebiet von Reggello.</li><li>Weiterfahrt nach Vallombrosa.</li><li>Besuch der Abtei, sofern sie geöffnet ist.</li><li>Spaziergang oder Wanderung passend zu Wetter, Ausrüstung und Wegzustand.</li><li>Rückfahrt mit Zeitreserve auf den Bergstraßen.</li></ol>' },
    { title: 'Entfernung und Anreise', anchor: 'anreise', body: 'Die bestehenden Projektangaben nennen je nach gewählter Station ungefähr 25–45 Autominuten ab Perla Toscana. Das ist kein garantierter Live-Wert. Route, Verkehr und Bedingungen sind vor der Abfahrt zu kontrollieren.' },
    { title: 'Wald, Wege und Abtei', anchor: 'planung', rules: ['Wetter und Wegzustand vor der Wanderung prüfen.', 'Feste Schuhe und zur Jahreszeit passende Kleidung tragen.', 'Öffnungszeiten und religiöse Feiern der Abtei respektieren.', 'Nur markierte und freigegebene Wege nutzen.', 'Bei Nebel, Sturm oder Eis das Programm verkürzen oder verschieben.'] },
    { title: 'Mit weiteren Zielen verbinden', body: 'Vallombrosa eignet sich für einen eigenen Naturtag oder zusammen mit Reggello. The Mall Firenze und das Chianti können an anderen Tagen besucht werden, damit Wanderung und Abtei nicht unter Zeitdruck geraten.', links: [{ label: 'Chianti', href: '/de/reisefuehrer/chianti-sehenswuerdigkeiten/' }, { label: 'Florenz', href: '/de/reisefuehrer/florenz-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Kann man Reggello und Vallombrosa an einem Tag verbinden?', answer: 'Ja. Ein kurzer Aufenthalt in Reggello und anschließend Abtei und Wald von Vallombrosa ergeben eine logische Route.' },
    { question: 'Braucht man für Vallombrosa Wanderschuhe?', answer: 'Für Waldwege sind feste Schuhe sinnvoll. Strecke, Wetter und Wegzustand sollten vorab geprüft werden.' },
    { question: 'Ist die Abtei Vallombrosa immer geöffnet?', answer: 'Nicht voraussetzen. Aktuelle Öffnungszeiten, Gottesdienste und Zugänglichkeit müssen vor der Fahrt bestätigt werden.' }
  ]
};

export const pienzaDe: PageContent = {
  slug: 'pienza-sehenswuerdigkeiten', path: '/de/reisefuehrer/pienza-sehenswuerdigkeiten/',
  alternatePaths: { it: '/it/guide/cosa-vedere-a-pienza/', en: '/en/guides/what-to-see-in-pienza/', de: '/de/reisefuehrer/pienza-sehenswuerdigkeiten/' },
  title: 'Pienza: Sehenswürdigkeiten und Rundgang',
  description: 'Pienza-Reiseführer mit Piazza Pio II, Dom, Palazzo Piccolomini, Panoramablick, Pecorino und einer realistischen Tagesplanung.',
  eyebrow: 'Reiseführer · Val d’Orcia', h1: 'Pienza: Sehenswürdigkeiten und Rundgang für einen Tag',
  publishedAt: '2026-07-26', updatedAt: '2026-08-25',
  socialImage: '/images/places/pienza-piazza-pio-ii.webp', socialImageAlt: 'Piazza Pio II im Renaissancezentrum von Pienza', socialImageWidth: 1920, socialImageHeight: 1079,
  intro: '<strong>Pienza ist kompakt und lässt sich gut zu Fuß erkunden.</strong> Piazza Pio II, Dom, Palazzo Piccolomini, Corso Rossellino und die Aussicht auf die Val d’Orcia bilden den Kern. Planen Sie für einen Tag nur eine weitere Station in der Umgebung ein.',
  sections: [
    { title: 'Warum Pienza besonders ist', anchor: 'geschichte', html: '<p>Das frühere Corsignano wurde im 15. Jahrhundert im Auftrag von Papst Pius II. durch Bernardo Rossellino umgestaltet. Piazza Pio II verbindet religiöse, zivile und familiäre Bauten in einem Renaissance-Ensemble. Das historische Zentrum gehört seit 1996 zum UNESCO-Welterbe.</p>', links: [{ label: 'Offizieller UNESCO-Eintrag', href: 'https://whc.unesco.org/en/list/789', external: true }] },
    { title: 'Rundgang durch das Zentrum', anchor: 'rundgang', html: '<ol><li>Corso Rossellino bis Piazza Pio II.</li><li>Dom und Palazzo Comunale von außen.</li><li>Palazzo Piccolomini oder ein anderer vorab geprüfter Innenbesuch.</li><li>Via dell’Amore und Via del Bacio.</li><li>Panoramaweg an der südlichen Stadtmauer.</li><li>Zeit für eine Pecorino-Verkostung in einer lokalen Bottega.</li></ol>' },
    { title: 'Anreise und Parken', anchor: 'anreise', body: 'Die vorhandene Projektquelle nennt ungefähr 96 km und rund 95 Autominuten ab Perla Toscana bei regulären Bedingungen. Nutzen Sie ausgeschilderte Parkplätze außerhalb der Mauern. Route, ZTL, Verfügbarkeit und Gebühren müssen aktuell geprüft werden.' },
    { title: 'Pecorino und Aussicht auf die Val d’Orcia', anchor: 'pecorino', body: 'Pecorino di Pienza wird in unterschiedlichen Reifestufen angeboten. Fragen Sie nach Herkunft, Milch, Reifung und Aufbewahrung. Die öffentlichen Aussichtspunkte liegen am südlichen Rand des Zentrums; Felder und private Zufahrten dürfen für Fotos nicht betreten werden.' },
    { title: 'Was man mit Pienza verbinden kann', anchor: 'umgebung', body: 'Für einen ausgeglichenen Tag wählen Sie nur Monticchiello, Bagno Vignoni, San Quirico d’Orcia oder Montepulciano als Ergänzung. Wer mehrere Orte sehen möchte, sollte einen zweiten Tag für die Val d’Orcia einplanen.', links: [{ label: 'Val-d’Orcia-Reiseführer', href: '/de/reisefuehrer/val-dorcia-sehenswuerdigkeiten-route/' }, { label: 'Bagni San Filippo', href: '/de/reisefuehrer/bagni-san-filippo-thermalquellen/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Wie lange braucht man für Pienza?', answer: 'Für den historischen Kern sind drei bis vier Stunden sinnvoll. Ein ganzer Tag erlaubt Mittagessen und eine einzige Station in der Umgebung.' },
    { question: 'Wo sollte man in Pienza parken?', answer: 'Auf ausgeschilderten Flächen außerhalb der Stadtmauern. Positionen, Gebühren und Regeln können sich ändern und müssen vor Ort geprüft werden.' },
    { question: 'Was sollte man in Pienza sehen?', answer: 'Piazza Pio II, Dom, Palazzo Piccolomini, Corso Rossellino, Via dell’Amore, Via del Bacio und den Panoramaweg über der Val d’Orcia.' }
  ]
};

export const guideBlockTwoDe = [chiantiDe, sienaDe, arezzoDe, reggelloVallombrosaDe, pienzaDe];
