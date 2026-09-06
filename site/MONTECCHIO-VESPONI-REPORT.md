# Guida al Castello di Montecchio Vesponi — consegna

Data: 6 settembre 2026. Le tre guide sono integrate nel sito locale. **Nessun commit, push o deploy**, come richiesto. Gli URL seguenti sono quelli predisposti per la pubblicazione, non una dichiarazione di disponibilità online.

## URL, title e description

### Italiano
- URL: https://perla-toscana.it/it/guide/castello-montecchio-vesponi/
- Title: Castello di Montecchio Vesponi: visita e come arrivare
- Description: Guida al Castello di Montecchio Vesponi: storia, visita, panorama e percorso da Figline Valdarno. Itinerario con Castiglion Fiorentino e Cortona.

### Inglese
- URL: https://perla-toscana.it/en/guides/montecchio-vesponi-castle/
- Title: Montecchio Vesponi Castle: Visiting Guide and Day Trip
- Description: Explore Montecchio Vesponi Castle near Cortona: history, access, views and driving from Figline Valdarno, with a Castiglion Fiorentino day trip.

### Tedesco
- URL: https://perla-toscana.it/de/reisefuehrer/burg-montecchio-vesponi/
- Title: Burg Montecchio Vesponi: Besichtigung und Anreise
- Description: Montecchio Vesponi bei Cortona entdecken: Geschichte, Besichtigung, Aussicht und Anreise ab Figline Valdarno mit Ausflug nach Castiglion Fiorentino.

## File creati
- `src/data/guideMontecchioVesponi.ts`: contenuti e metadati IT/EN/DE.
- `src/components/MontecchioVesponiGuide.astro`: riuso di BaseLayout e PageContent, schema specifico e controllo dimensioni immagine durante la build. Correzione della larghezza minima a 320px limitata alle nuove guide.
- `src/pages/it/guide/castello-montecchio-vesponi.astro`
- `src/pages/en/guides/montecchio-vesponi-castle.astro`
- `src/pages/de/reisefuehrer/burg-montecchio-vesponi.astro`
- `public/images/places/montecchio-vesponi/castello-montecchio-vesponi.webp`
- `public/images/places/montecchio-vesponi/CREDITS.md`
- `scripts/check-montecchio.mjs`: controllo delle tre pagine generate.
- `MONTECCHIO-VESPONI-REPORT.md`: questo rapporto.

## File modificati per integrazione
- `src/components/GuideArchive.astro`: aggiunta schede IT/EN con foto pertinente.
- `src/components/RootGuideArchive.astro`: aggiunta scheda nell’archivio italiano principale.
- `src/pages/de/reisefuehrer/index.astro`: aggiunta scheda DE.
- `src/pages/sitemap.xml.ts`: aggiunta dei tre URL e relativi alternate.

Nessun contenuto di altre guide è stato modificato. Header, footer e navigazione riutilizzano i componenti esistenti. La modifica preesistente a `BookingPage.astro` e gli altri file locali estranei non fanno parte del lavoro e sono stati lasciati intatti.

## Keyword ed entità
- IT: Castello di Montecchio Vesponi, borghi e castelli in Toscana, architettura medievale, cosa vedere vicino Cortona, cosa vedere tra Arezzo e Cortona, Valdichiana, come arrivare da Figline Valdarno.
- EN: Montecchio Vesponi Castle, castles near Cortona, medieval fortress, day trip, driving from Figline Valdarno, Valdichiana.
- DE: Burg Montecchio Vesponi, Burgen in der Toskana, Besichtigung, Anreise, Ausflugsziele bei Cortona, Tagesausflug ab Figline Valdarno.
- Entità esplicite: Toscana/Tuscany/Toskana, provincia di Arezzo, Castiglion Fiorentino, Montecchio Vesponi, Cortona, Arezzo, Valdichiana, Val di Chio, Figline e Incisa Valdarno.

## Link editoriali interni
| Tema | IT | EN | DE |
| --- | --- | --- | --- |
| Arezzo | `/it/guide/arezzo/` | `/en/guides/arezzo/` | `/de/reisefuehrer/arezzo-sehenswuerdigkeiten/` |
| Cortona e luoghi francescani | `/it/guide/luoghi-francescani-toscana-umbria/` | `/en/guides/franciscan-places-tuscany-umbria/` | `/de/reisefuehrer/franziskanische-orte-toskana-umbrien/` |
| Valdarno | `/it/guide/valdarno/` | `/en/guides/valdarno/` | `/de/reisefuehrer/valdarno-sehenswuerdigkeiten/` |
| Itinerari e guide | `/it/itinerari/3-giorni/` | `/en/itineraries/3-days/` | `/de/reisefuehrer/` |

Non è stato inventato un URL per una guida autonoma a Cortona. Restano inoltre i collegamenti standard già presenti nei componenti condivisi del sito.

## SEO tecnico e fotografia
- Un solo canonical per lingua, hreflang IT/EN/DE reciproci e x-default italiano.
- Open Graph di tipo article e Twitter summary_large_image con la stessa fotografia, 1600 × 1200 reali, e alt OG localizzato.
- Robots con max-image-preview:large e direttive preesistenti, senza duplicazioni.
- JSON-LD: **Article**, **BreadcrumbList**, **FAQPage**, con 7 domande coerenti con le FAQ visibili. Article usa la stessa immagine, entità pertinenti e fonti.
- Fotografia reale di Pigellino, scattata nel 2007, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Castello_di_Montecchio_dal_Bigurro_-_panoramio.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Crediti, licenza e trasformazioni sono dichiarati nelle tre pagine.
- File statico pubblico accessibile dopo il deploy. La predisposizione tecnica non garantisce una thumbnail Google né risultati FAQ arricchiti.

## Dati verificati e limiti
- Google Maps, dalla posizione esatta di Perla Toscana riconosciuta sulla mappa: **62,3 km / 54 minuti via A1/E35**, pedaggi; alternativa **59,7 km / 1 h 11 min via SR69 e SR71**.
- Dal castello a Cortona: **10,5 km / 18 minuti via SR71**.
- Rilevazioni del 6 settembre 2026. I tempi restano variabili e non includono parcheggio e cammino. Il navigatore segnala tratti privati o soggetti a limitazioni: avviso riportato nel testo.
- Storia e architettura: [Visit Tuscany](https://www.visittuscany.com/it/attrazioni/montecchio-vesponis-castle/) e [Discover Arezzo](https://www.discoverarezzo.com/itinerari-suggeriti/borghi-e-castelli/il-castello-di-montecchio-vesponi/). Il testo distingue le nove torricelle storiche dalle otto superstiti indicate da Discover Arezzo e cita i restauri ottocenteschi.
- Visite: [Visit Valdichiana Aretina](https://www.visitvaldichiana.it/esplora/castello-di-montecchio-vesponi/) e [Associazione InCastro](https://associazioneincastro.jimdofree.com/).
- **Non confermati**: calendario corrente delle aperture, tariffe, disponibilità e costo del parcheggio, accesso senza barriere, salita sulla torre, percorso libero completo intorno alle mura. Nessun dato è stato inventato; si rimanda agli organizzatori.
- Non sono stati riutilizzati orari o prezzi di eventi passati come condizioni ordinarie di visita.

## Verifiche
- `npm run build`: build completa, 123 pagine.
- `node scripts/check-montecchio.mjs`: canonical, hreflang, title/description, robots, OG/Twitter, dimensioni reali, JSON-LD, link locali, ancore e sitemap.
- Browser: controllo visivo desktop e mobile, passaggio IT → EN → DE → IT, apertura FAQ. Controllo del formato stretto a 320px con correzione circoscritta alle nuove pagine.
- `git diff --check`: nessun errore di whitespace.
- Nessuna verifica di deploy o delle nuove URL pubbliche: pubblicazione esclusa dalla richiesta.
