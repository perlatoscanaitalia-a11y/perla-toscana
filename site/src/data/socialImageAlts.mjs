// Descriptions follow the existing image subjects; generated scenes are labelled as illustrations.
const descriptions = {
  '/images/perla-toscana/perla-toscana-hero-camera-principale-9.jpg': [
    'Camera matrimoniale di Perla Toscana a Figline Valdarno',
    'Double bedroom at Perla Toscana in Figline Valdarno',
    'Doppelzimmer der Perla Toscana in Figline Valdarno'
  ],
  '/images/perla-toscana/perla-toscana-camera-queen-size-poltrona.jpg': [
    'Camera con letto matrimoniale e poltrona a Perla Toscana',
    'Double bedroom with an armchair at Perla Toscana',
    'Doppelzimmer mit Sessel in der Perla Toscana'
  ],
  '/images/perla-toscana/perla-toscana-strada-setteponti.webp': [
    'Strada dei Setteponti nel Valdarno', 'Setteponti road in Valdarno', 'Setteponti-Straße im Valdarno'
  ],
  '/images/perla-toscana/perla-toscana-tavolo-pranzo-apparecchiato.jpg': [
    'Tavolo da pranzo apparecchiato a Perla Toscana', 'Dining table set at Perla Toscana', 'Gedeckter Esstisch in der Perla Toscana'
  ],
  '/images/generated/perla-toscana-paesaggio-valdarno.jpg': [
    'Illustrazione del paesaggio del Valdarno', 'Illustration of the Valdarno landscape', 'Illustration der Landschaft des Valdarno'
  ],
  '/images/places/autostrada-a1-valdarno.webp': [
    'Autostrada A1 nel Valdarno', 'A1 motorway in Valdarno', 'Autobahn A1 im Valdarno'
  ],
  '/images/places/firenze-centro.jpg': [
    'Centro storico di Firenze', 'Historic centre of Florence', 'Historische Altstadt von Florenz'
  ],
  '/images/places/the-mall-firenze.webp': [
    'The Mall Firenze in Toscana', 'The Mall Firenze in Tuscany', 'The Mall Firenze in der Toskana'
  ],
  '/images/places/arezzo-piazza-grande.webp': [
    'Piazza Grande ad Arezzo', 'Piazza Grande in Arezzo', 'Piazza Grande in Arezzo'
  ],
  '/images/places/greve-in-chianti.jpg': [
    'Greve in Chianti in Toscana', 'Greve in Chianti, Tuscany', 'Greve in Chianti in der Toskana'
  ],
  '/images/places/figline-piazza-marsilio-ficino.webp': [
    'Piazza Marsilio Ficino a Figline Valdarno', 'Piazza Marsilio Ficino in Figline Valdarno', 'Piazza Marsilio Ficino in Figline Valdarno'
  ],
  '/images/places/abbazia-vallombrosa.webp': [
    'Abbazia di Vallombrosa', 'Vallombrosa Abbey', 'Abtei Vallombrosa'
  ],
  '/images/places/san-galgano/san-galgano-abbey-exterior.webp': [
    'Esterno dell’Abbazia di San Galgano', 'Exterior of San Galgano Abbey', 'Außenansicht der Abtei San Galgano'
  ],
  '/images/places/siena.jpg': [
    'Veduta di Siena in Toscana', 'View of Siena in Tuscany', 'Ansicht von Siena in der Toskana'
  ],
  '/images/places/balze-del-valdarno.webp': [
    'Le Balze del Valdarno in Toscana', 'The Balze formations in Valdarno, Tuscany', 'Die Balze-Felsformationen im Valdarno, Toskana'
  ],
  '/images/places/pienza-piazza-pio-ii.webp': [
    'Piazza Pio II a Pienza', 'Piazza Pio II in Pienza', 'Piazza Pio II in Pienza'
  ],
  '/images/places/pienza-val-d-orcia-panorama.webp': [
    'Panorama di Pienza e della Val d’Orcia', 'Panorama of Pienza and Val d’Orcia', 'Panorama von Pienza und dem Val d’Orcia'
  ],
  '/images/places/montefioralle-chianti-panorama.webp': [
    'Montefioralle e il paesaggio del Chianti', 'Montefioralle and the Chianti landscape', 'Montefioralle und die Landschaft des Chianti'
  ]
};

export function socialImageAlt(src, lang) {
  const index = { it: 0, en: 1, de: 2 }[lang];
  const alt = descriptions[new URL(src, 'https://perla-toscana.it').pathname]?.[index];
  if (!alt) throw new Error(`Provide a descriptive socialImageAlt for ${src} (${lang})`);
  return alt;
}
