import type { PageContent } from './pages';

const commonLinks = [
  { label: 'Perla Toscana', href: '/de/' },
  { label: 'Alle Toskana-Reiseführer', href: '/de/reisefuehrer/' },
  { label: 'Mietwagen in Florenz', href: '/de/mietwagen/' }
];

export const etruskerValdarnoDe: PageContent = {
  slug: 'etrusker-valdarno-figline', path: '/de/reisefuehrer/etrusker-valdarno-figline/',
  alternatePaths: { it: '/guide/etruschi-valdarno-figline/', en: '/en/guides/etruscans-valdarno-figline/', de: '/de/reisefuehrer/etrusker-valdarno-figline/' },
  title: 'Etrusker im Valdarno: Fundorte bei Figline',
  description: 'Etrusker im Valdarno: archäologische Spuren bei Figline, La Rotta und Scampata sowie Hinweise für einen fundierten Ausflug in der Toskana.',
  eyebrow: 'Archäologie · Valdarno', h1: 'Etrusker im Valdarno und bei Figline',
  publishedAt: '2026-08-25', updatedAt: '2026-08-25',
  socialImage: '/images/places/balze-del-valdarno.webp', socialImageAlt: 'Die Balze-Landschaft im oberen Valdarno bei Figline', socialImageWidth: 1920, socialImageHeight: 1280,
  intro: '<strong>Das obere Valdarno war ein natürlicher Verbindungskorridor zwischen dem Arnotal, Fiesole und dem Gebiet von Arezzo.</strong> Rund um Figline belegen Funde und Grabungen etruskische Präsenz; sie ergeben jedoch keinen einzelnen großen Archäologiepark. Diese Seite ordnet die dokumentierten Spuren ein, ohne der Unterkunft selbst einen archäologischen Bezug zuzuschreiben.',
  sections: [
    { title: 'Was im Valdarno dokumentiert ist', body: 'Die etruskische Geschichte der Gegend erschließt sich aus einzelnen Fundplätzen, Gräbern und Objekten. Für Besucher ist deshalb die Verbindung von Landschaft, Ortsgeschichte und Museen sinnvoller als die Erwartung einer einzigen monumentalen Stätte.' },
    { title: 'La Rotta: Produktion am Arno', anchor: 'la-rotta', body: 'Bei La Rotta, südlich von Figline, wurden Spuren eines antiken Produktionsbereichs untersucht. Der Fundplatz hilft zu verstehen, wie der Flusskorridor für Handwerk, Versorgung und Austausch genutzt wurde. Zugänglichkeit und aktueller Zustand müssen vor einem Besuch bei lokalen Stellen geprüft werden.' },
    { title: 'Scampata und Funde aus Figline', anchor: 'scampata', body: 'Das Gebiet von Scampata und weitere Funde im Umfeld von Figline zeigen eine ältere Besiedlungsgeschichte, die über das mittelalterliche Stadtbild hinausreicht. Viele archäologische Zeugnisse sind nicht frei als Ausgrabungsstätte zugänglich; Fundkontext und Ausstellungsort sollten vorab verifiziert werden.' },
    { title: 'Ein sinnvoller archäologischer Ausflug', html: '<p>Beginnen Sie in Figline mit dem historischen Zentrum und verbinden Sie den Ort anschließend mit einem Museum oder einer klar zugänglichen etruskischen Stätte in der weiteren Umgebung. Arezzo und Fiesole bieten dafür einen größeren musealen Zusammenhang.</p><p>Betreten Sie keine Felder oder Grabungsbereiche ohne Genehmigung und nehmen Sie keine Objekte mit.</p>', links: [{ label: 'Figline Valdarno', href: '/de/reisefuehrer/figline-valdarno-sehenswuerdigkeiten/' }, { label: 'Arezzo', href: '/de/reisefuehrer/arezzo-sehenswuerdigkeiten/' }] },
    { title: 'Das Valdarno als Landschaft lesen', body: 'Fluss, Terrassen und die markanten Balze erklären, warum das Tal seit der Antike ein Verkehrs- und Siedlungsraum war. Perla Toscana dient hier ausschließlich als Ausgangspunkt für Ausflüge; ein archäologischer Zusammenhang mit dem Haus ist nicht dokumentiert.', links: [{ label: 'Valdarno-Reiseführer', href: '/de/reisefuehrer/valdarno-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Gibt es in Figline einen großen etruskischen Archäologiepark?', answer: 'Nein. Die Geschichte erschließt sich aus einzelnen Fundstellen und Funden; Zugang und Ausstellungsort müssen aktuell geprüft werden.' },
    { question: 'Welche Orte lassen sich mit Figline verbinden?', answer: 'Für einen größeren archäologischen Zusammenhang eignen sich je nach Öffnung Museen und zugängliche Stätten in Arezzo oder Fiesole.' },
    { question: 'Hat Perla Toscana einen etruskischen Ursprung?', answer: 'Dafür gibt es keinen dokumentierten Beleg. Die Unterkunft wird nur als Ausgangspunkt für Ausflüge genannt.' }
  ]
};

export const franziskanischeOrteDe: PageContent = {
  slug: 'franziskanische-orte-toskana-umbrien', path: '/de/reisefuehrer/franziskanische-orte-toskana-umbrien/',
  alternatePaths: { it: '/it/guide/luoghi-francescani-toscana-umbria/', en: '/en/guides/franciscan-places-tuscany-umbria/', de: '/de/reisefuehrer/franziskanische-orte-toskana-umbrien/' },
  title: 'Franziskanische Orte in Toskana und Umbrien',
  description: 'Franziskanische Orte zwischen Toskana und Umbrien: La Verna, Le Celle, Montecasale und Assisi mit Hinweisen für eine ruhige Reiseplanung.',
  eyebrow: 'Glaube, Kunst und Landschaft', h1: 'Franziskanische Orte in Toskana und Umbrien',
  publishedAt: '2026-08-25', updatedAt: '2026-08-25',
  socialImage: '/images/places/santuario-la-verna.webp', socialImageAlt: 'Heiligtum La Verna in den bewaldeten Bergen der Toskana', socialImageWidth: 1600, socialImageHeight: 1050,
  intro: '<strong>La Verna, Le Celle bei Cortona, Montecasale und Assisi verbinden franziskanische Geschichte mit stillen Landschaften.</strong> Sie liegen nicht auf einer kurzen Rundstrecke: Für einen respektvollen Besuch ist es besser, pro Tag ein Gebiet zu wählen und Gottesdienste, Öffnungszeiten und Zufahrten aktuell zu prüfen.',
  sections: [
    { title: 'La Verna', anchor: 'la-verna', body: 'Das Heiligtum La Verna liegt in einem bewaldeten Berggebiet des Casentino und ist einer der wichtigsten Orte der franziskanischen Tradition. Kirche, Kapellen und Wege verlangen Zeit und eine dem religiösen Ort angemessene Kleidung und Ruhe.' },
    { title: 'Le Celle bei Cortona', anchor: 'le-celle', body: 'Die Eremo delle Celle liegt in einem engen, grünen Tal bei Cortona. Der Ort ist klein und kontemplativ; Gruppen, Liturgie und begrenzte Räume können den Besuch beeinflussen. Cortona und die Einsiedelei lassen sich sinnvoll am selben Tag verbinden.' },
    { title: 'Montecasale und das Tibertal', anchor: 'montecasale', body: 'Montecasale bei Sansepolcro ist ein weiterer stiller franziskanischer Ort. Er passt zu einem Tag im oberen Tibertal, nicht zu einem hastigen Programm mit Assisi und La Verna zugleich.' },
    { title: 'Assisi', anchor: 'assisi', body: 'Assisi besitzt mit der Basilika San Francesco, Santa Chiara und weiteren religiösen Orten einen eigenen Schwerpunkt. Planen Sie dafür einen ganzen Tag und prüfen Sie Zufahrt, Parkregelung und liturgische Einschränkungen vor der Abfahrt.' },
    { title: 'Route ab Perla Toscana planen', html: '<p>La Verna und das Casentino bilden einen Tagesausflug; Cortona und Le Celle einen zweiten. Assisi und Umbrien sollten separat geplant werden. So bleibt Zeit für Landschaft, Kunst und Stille, statt mehrere Heiligtümer nur kurz anzufahren.</p>', links: [{ label: 'Arezzo', href: '/de/reisefuehrer/arezzo-sehenswuerdigkeiten/' }, { label: 'Trasimenischer See', href: '/de/reisefuehrer/trasimenischer-see-sehenswuerdigkeiten/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Kann man La Verna und Assisi an einem Tag besuchen?', answer: 'Das ist für einen ruhigen Besuch nicht sinnvoll. Beide Gebiete verdienen einen eigenen Tag.' },
    { question: 'Muss man Öffnungszeiten vorab prüfen?', answer: 'Ja. Religiöse Feiern, saisonale Zeiten und Zugangsregeln können den Besuch beeinflussen.' },
    { question: 'Welche Kleidung ist angemessen?', answer: 'Für Kirchen und Heiligtümer ist zurückhaltende Kleidung angemessen; vor Ort gelten die jeweils ausgeschilderten Regeln.' }
  ]
};

export const theMallUnterkunftDe: PageContent = {
  slug: 'uebernachten-nahe-the-mall-firenze', path: '/de/reisefuehrer/uebernachten-nahe-the-mall-firenze/',
  alternatePaths: { it: '/guide/dove-dormire-vicino-the-mall-firenze/', de: '/de/reisefuehrer/uebernachten-nahe-the-mall-firenze/' },
  title: 'Übernachten nahe The Mall Firenze: Orte und Unterkunft',
  description: 'Wo nahe The Mall Firenze übernachten? Vergleich von Leccio, Reggello, Incisa und Figline sowie Tipps zu Unterkunft, Auto und Einkaufstag.',
  eyebrow: 'Unterkunft und Outlet-Shopping', h1: 'Übernachten nahe The Mall Firenze',
  publishedAt: '2026-08-25', updatedAt: '2026-08-25',
  socialImage: '/images/places/the-mall-firenze.webp', socialImageAlt: 'The Mall Firenze im toskanischen Valdarno', socialImageWidth: 1280, socialImageHeight: 872,
  intro: '<strong>Für die kürzeste Anfahrt liegt Leccio am nächsten; Reggello bietet ländliche Umgebung, Incisa eine praktische Lage zur A1 und Figline mehr Alltagsangebote sowie einen Bahnhof.</strong> Die beste Wahl hängt davon ab, ob Outlet, Toskana-Ausflüge oder eine Etappe auf der Durchreise im Mittelpunkt stehen.',
  sections: [
    { title: 'Leccio: direkt beim Outlet', body: 'Leccio ist die naheliegende Wahl, wenn der Einkaufstag die absolute Priorität hat. Prüfen Sie bei jeder Unterkunft Parkplatz, Check-in-Zeit und Möglichkeiten für das Abendessen.' },
    { title: 'Reggello: Landschaft und Ruhe', body: 'Im Gemeindegebiet von Reggello finden sich ländliche Unterkünfte in den Hügeln. Die Lage kann ruhiger sein, verlangt aber meist ein Auto und eine genaue Prüfung der letzten Zufahrt.', links: [{ label: 'Reggello und Vallombrosa', href: '/de/reisefuehrer/reggello-vallombrosa/' }] },
    { title: 'Incisa: praktisch zur A1', body: 'Incisa ist für Reisende interessant, die den Outlet-Besuch mit einer Fahrt auf der A1 verbinden. Entscheidend sind die konkrete Lage, der Verkehr am Reisetag und ein sicherer Parkplatz.' },
    { title: 'Figline: mehr Dienste und Ausflüge', body: 'Figline bietet ein historisches Zentrum, Bahnhof, Geschäfte und Gastronomie. Es eignet sich besonders, wenn The Mall nur ein Programmpunkt ist und zusätzlich Florenz, Chianti oder das Valdarno besucht werden sollen.', links: [{ label: 'Figline Valdarno', href: '/de/reisefuehrer/figline-valdarno-sehenswuerdigkeiten/' }, { label: 'Chianti', href: '/de/reisefuehrer/chianti-sehenswuerdigkeiten/' }] },
    { title: 'Ferienhaus oder Hotel?', html: '<p>Ein Hotel kann für eine kurze Nacht praktisch sein. Ein Ferienhaus bietet Familien und kleinen Gruppen mehr gemeinsame Räume und eine Küche. Vergleichen Sie nicht nur den Preis, sondern Belegung, Stornierung, Parkplatz, Zufahrt und gesamte Fahrstrecke.</p><p>Perla Toscana liegt bei Figline und bietet drei Schlafzimmer, Küche, WLAN, Klimaanlage und privaten Parkplatz für bis zu drei Autos. Die Fahrtzeit zum Outlet ist verkehrsabhängig und muss für den Reisetag geprüft werden.</p>', links: [{ label: 'The Mall Firenze: Shopping-Reiseführer', href: '/de/reisefuehrer/the-mall-firenze-shopping/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Welcher Ort liegt The Mall Firenze am nächsten?', answer: 'Leccio liegt unmittelbar beim Outlet. Die beste Unterkunft hängt trotzdem von Parkplatz, Abendessen und weiteren Reiseplänen ab.' },
    { question: 'Kann man ohne Auto nahe The Mall übernachten?', answer: 'Das ist möglich, erfordert aber eine genaue Prüfung der aktuellen öffentlichen Verbindungen und des Weges zwischen Haltestelle und Unterkunft.' },
    { question: 'Ist Figline eine gute Basis für The Mall und Florenz?', answer: 'Figline kann beide Ziele mit einem längeren Toskana-Aufenthalt verbinden. Aktuelle Verkehrs- und Bahnverbindungen müssen separat geprüft werden.' }
  ]
};

export const a1ZwischenstoppDe: PageContent = {
  slug: 'zwischenstopp-a1-rom-mailand', path: '/de/reisefuehrer/zwischenstopp-a1-rom-mailand/',
  alternatePaths: { it: '/guide/dove-fermarsi-lungo-a1-tra-roma-e-milano/', de: '/de/reisefuehrer/zwischenstopp-a1-rom-mailand/' },
  title: 'Zwischenstopp an der A1 zwischen Rom und Mailand',
  description: 'Zwischenstopp an der A1 zwischen Rom und Mailand: Warum das Valdarno praktisch ist und worauf Familien und Gruppen bei der Unterkunft achten sollten.',
  eyebrow: 'Autoreise · Toskana', h1: 'Zwischenstopp an der A1 zwischen Rom und Mailand',
  publishedAt: '2026-08-25', updatedAt: '2026-08-25',
  socialImage: '/images/generated/perla-toscana-paesaggio-valdarno.jpg', socialImageAlt: 'Toskanische Landschaft im Valdarno nahe der A1', socialImageWidth: 1690, socialImageHeight: 931,
  intro: '<strong>Das Valdarno kann eine praktische Übernachtungsregion auf einer langen Fahrt zwischen Rom und Mailand sein.</strong> Rund um Incisa und Figline verbinden sich die A1-Achse, Dienstleistungen und die Möglichkeit, die Reise mit einer kurzen Pause in der Toskana zu unterbrechen.',
  sections: [
    { title: 'Warum die Fahrt teilen?', body: 'Eine Übernachtung reduziert den Druck, eine lange Strecke an einem Tag zu bewältigen. Sie schafft Spielraum für Stau, Pausen und Reisen mit Kindern. Fahrdauer und Verkehrslage sind variabel und müssen am Reisetag aktuell geprüft werden.' },
    { title: 'Warum das Valdarno?', body: 'Das Gebiet liegt am A1-Korridor zwischen Florenz und Arezzo. Incisa ist auf eine praktische Weiterfahrt ausgerichtet; Figline ergänzt Bahnhof, historisches Zentrum, Geschäfte und Gastronomie. Die konkrete Unterkunft sollte nicht nur nach Luftlinie, sondern nach Zufahrt und Parkplatz gewählt werden.', links: [{ label: 'Valdarno-Reiseführer', href: '/de/reisefuehrer/valdarno-sehenswuerdigkeiten/' }, { label: 'Figline Valdarno', href: '/de/reisefuehrer/figline-valdarno-sehenswuerdigkeiten/' }] },
    { title: 'Vor der Buchung prüfen', rules: ['Späte Anreise und verbindliche Check-in-Regeln.', 'Sicherer Parkplatz passend zur Fahrzeugzahl.', 'Letzte Zufahrt und mögliche unbefestigte Abschnitte.', 'Schlafplätze, Bad und Küche für die tatsächliche Gruppe.', 'Aktuelle Stau-, Baustellen- und Mautinformationen.'] },
    { title: 'Perla Toscana für Familien und kleine Gruppen', body: 'Perla Toscana bei Figline bietet drei Schlafzimmer, Platz für bis zu acht Gäste, Küche, WLAN, Klimaanlage und privaten Parkplatz für bis zu drei Autos. Die letzten etwa 200 Meter der Zufahrt verlaufen über eine private unbefestigte Straße. Diese Information sollte bei Fahrzeugwahl und Ankunft berücksichtigt werden.', links: commonLinks },
    { title: 'Eine kurze Pause statt vollem Besichtigungsprogramm', body: 'Wer Zeit hat, kann vor der Weiterfahrt das Zentrum von Figline besuchen oder The Mall Firenze als klar begrenzten Programmpunkt wählen. Florenz oder mehrere Orte sollten nicht in eine reine Transitnacht gepresst werden.', links: [{ label: 'The Mall Firenze', href: '/de/reisefuehrer/the-mall-firenze-shopping/' }] }
  ],
  faqs: [
    { question: 'Eignet sich das Valdarno für einen Zwischenstopp an der A1?', answer: 'Ja, besonders rund um Incisa und Figline. Entscheidend sind die konkrete Zufahrt, Check-in-Zeit und aktuelle Verkehrslage.' },
    { question: 'Was sollte eine Unterkunft für den Zwischenstopp bieten?', answer: 'Ein zur Gruppe passendes Bettangebot, klaren Check-in, sicheren Parkplatz und eine gut erklärte Zufahrt.' },
    { question: 'Ist die Zufahrt zu Perla Toscana vollständig asphaltiert?', answer: 'Nein. Die letzten etwa 200 Meter führen über eine private unbefestigte Straße.' }
  ]
};

export const figlineDe: PageContent = {
  slug: 'figline-valdarno-sehenswuerdigkeiten', path: '/de/reisefuehrer/figline-valdarno-sehenswuerdigkeiten/',
  alternatePaths: { it: '/guide/cosa-vedere-figline-valdarno/', en: '/en/guides/figline-valdarno/', de: '/de/reisefuehrer/figline-valdarno-sehenswuerdigkeiten/' },
  title: 'Figline Valdarno: Sehenswürdigkeiten und Rundgang',
  description: 'Figline Valdarno entdecken: Piazza Marsilio Ficino, Kirchen, Palazzi, Rundgang, Markt und praktische Hinweise für einen halben oder ganzen Tag.',
  eyebrow: 'Orte im Valdarno', h1: 'Figline Valdarno: Sehenswürdigkeiten und Rundgang',
  publishedAt: '2026-08-25', updatedAt: '2026-08-25',
  socialImage: '/images/places/figline-piazza-marsilio-ficino.webp', socialImageAlt: 'Piazza Marsilio Ficino im historischen Zentrum von Figline Valdarno', socialImageWidth: 1600, socialImageHeight: 1200,
  intro: '<strong>Figline Valdarno besitzt ein kompaktes historisches Zentrum, das sich gut in einem halben Tag zu Fuß erkunden lässt.</strong> Ausgangspunkt ist die Piazza Marsilio Ficino; von dort führen kurze Wege zu Kirchen, Palazzi und den Spuren der alten Stadtbefestigung.',
  sections: [
    { title: 'Piazza Marsilio Ficino', anchor: 'piazza', body: 'Der große, regelmäßig angelegte Platz ist das gesellschaftliche Zentrum von Figline. Arkaden, Cafés und historische Fassaden machen ihn zum besten Ausgangspunkt für den Rundgang. Veranstaltungen oder Markttage können die Nutzung des Platzes verändern.' },
    { title: 'Kirchen und Palazzi', anchor: 'monumente', html: '<p>Rund um das Zentrum liegen die Collegiata di Santa Maria, weitere Kirchen und historische Gebäude. Öffnungen können von Gottesdiensten und örtlichen Regelungen abhängen; Innenbesichtigungen sollten deshalb aktuell geprüft werden.</p><p>Auch kurze Abschnitte der mittelalterlichen Stadtstruktur und Palazzi erzählen von Figlines Rolle als Marktort im oberen Valdarno.</p>' },
    { title: 'Rundgang für einen halben Tag', html: '<ol><li>Start an der Piazza Marsilio Ficino.</li><li>Außen- oder Innenbesuch der Collegiata, wenn geöffnet.</li><li>Rundgang durch die Straßen des historischen Zentrums.</li><li>Pause auf dem Platz oder in einem lokalen Geschäft.</li><li>Optional eine weitere Kirche oder ein kurzer Abschnitt außerhalb des Platzes.</li></ol>' },
    { title: 'Markt, Veranstaltungen und Anreise', body: 'Figline ist ein lebendiger Ort und kein Freilichtmuseum. Wochenmarkt und Jahresveranstaltungen können attraktiv sein, aber Daten, Straßensperrungen und Programme ändern sich. Wer mit Bahn oder Auto kommt, sollte aktuelle Verbindungen und Parkregeln am Reisetag prüfen.' },
    { title: 'Was mit mehr Zeit möglich ist', body: 'Mit einem ganzen Tag lassen sich die Landschaft des Valdarno, Reggello und Vallombrosa oder die lokale etruskische Geschichte ergänzen. Wählen Sie nur eine Erweiterung, statt mehrere weit auseinanderliegende Ziele zu verbinden.', links: [{ label: 'Etrusker im Valdarno', href: '/de/reisefuehrer/etrusker-valdarno-figline/' }, { label: 'Valdarno', href: '/de/reisefuehrer/valdarno-sehenswuerdigkeiten/' }, { label: 'Reggello und Vallombrosa', href: '/de/reisefuehrer/reggello-vallombrosa/' }, ...commonLinks] }
  ],
  faqs: [
    { question: 'Wie viel Zeit braucht man für Figline Valdarno?', answer: 'Für das kompakte historische Zentrum reicht meist ein halber Tag. Mit Markt, Innenbesichtigungen oder einem Ausflug ins Valdarno lohnt ein ganzer Tag.' },
    { question: 'Was ist die wichtigste Sehenswürdigkeit?', answer: 'Die Piazza Marsilio Ficino ist der natürliche Mittelpunkt und beste Ausgangspunkt für den Rundgang.' },
    { question: 'Kann man Figline mit dem Zug erreichen?', answer: 'Figline besitzt einen Bahnhof. Fahrplan, Umstiege und mögliche Änderungen sollten für den Reisetag beim Betreiber geprüft werden.' }
  ]
};

export const guideBlockFourDe = [etruskerValdarnoDe, franziskanischeOrteDe, theMallUnterkunftDe, a1ZwischenstoppDe, figlineDe];
