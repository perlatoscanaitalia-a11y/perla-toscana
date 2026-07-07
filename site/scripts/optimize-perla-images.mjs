import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = path.resolve(process.cwd(), '..');
const sourceDir = path.join(projectRoot, 'FOTO PERLA TOSCANA');
const outputDir = path.join(process.cwd(), 'public', 'images', 'perla-toscana');

const images = [
  ['1.jpg', 'perla-toscana-camera-king-size-tende.jpg'],
  ['2.jpg', 'perla-toscana-camera-king-size-vista-frontale.jpg'],
  ['3.jpg', 'perla-toscana-tavola-apparecchiata-dettaglio.jpg'],
  ['4.jpg', 'perla-toscana-camera-king-size-luce-naturale.jpg'],
  ['5.jpg', 'perla-toscana-camera-queen-size-poltrona.jpg'],
  ['6.jpg', 'perla-toscana-cucina-zona-pranzo.jpg'],
  ['7.jpg', 'perla-toscana-camera-king-size-dettaglio-letto.jpg'],
  ['8.jpg', 'perla-toscana-camera-queen-size-tende.jpg'],
  ['9.jpg', 'perla-toscana-camera-queen-size-smart-tv.jpg'],
  ['10.jpg', 'perla-toscana-camera-due-letti-singoli.jpg'],
  ['11.jpg', 'perla-toscana-letti-singoli-comodini.jpg'],
  ['12.jpg', 'perla-toscana-camera-letti-singoli-armadio.jpg'],
  ['13.jpg', 'perla-toscana-zona-pranzo-soggiorno.jpg'],
  ['14.jpg', 'perla-toscana-tavolo-pranzo-apparecchiato.jpg'],
  ['15.jpg', 'perla-toscana-soggiorno-divano.jpg'],
  ['16.jpg', 'perla-toscana-cucina-attrezzata.jpg'],
  ['17.jpg', 'perla-toscana-bagno-specchio-luminoso.jpg'],
  ['18.jpg', 'perla-toscana-bagno-lavabo-design.jpg'],
  ['19.jpg', 'perla-toscana-bagno-sanitari.jpg'],
  ['20.jpg', 'perla-toscana-doccia-idromassaggio.jpg'],
  ['21.jpg', 'perla-toscana-camera-smart-tv-armadio.jpg'],
  ['22.jpg', 'perla-toscana-sentiero-verde-valdarno.jpg']
];

await fs.mkdir(outputDir, { recursive: true });

for (const [sourceName, outputName] of images) {
  const source = path.join(sourceDir, sourceName);
  const output = path.join(outputDir, outputName);

  await sharp(source, { failOn: 'none' })
    .rotate()
    .resize({ width: 1600, height: 1200, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);
}

console.log(`Optimized ${images.length} Perla Toscana images into ${outputDir}`);
