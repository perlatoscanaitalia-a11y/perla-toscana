# Audit tecnico SEO — Perla Toscana

Data: 11 luglio 2026

## Esito

Audit completato su 32 pagine HTML generate (30 indicizzabili, home tecnica e pagina 404). La build Astro termina senza errori. I controlli automatici finali non rilevano canonical mancanti o duplicati, pagine senza un H1 unico, set hreflang incompleti, link interni non risolvibili o JSON-LD non valido.

## Correzioni effettuate

- Sitemap completata con 6 URL prima assenti: “Cosa fare”, “Come arrivare” e “Dove mangiare”, in italiano e inglese. Ora contiene tutte le 30 pagine indicizzabili.
- Meta robots esplicito aggiunto alle pagine pubbliche con anteprima immagini e snippet senza restrizioni; pagina 404 impostata `noindex, follow`.
- Open Graph e Twitter Card completati con titolo, descrizione, URL, sito, locale e immagine assoluta.
- `hreflang` mantenuto reciproco per italiano/inglese e `x-default` reso coerente verso la versione italiana.
- Dati strutturati `LodgingBusiness`/`VacationRental` ampliati con identificatore stabile, indirizzo strutturato, coordinate, immagine, orari, capienza, numero camere, regole su animali e fumo e profili ufficiali `sameAs`.
- Immagini della galleria dotate di dimensioni esplicite per ridurre il layout shift.
- Foto “Strada dei Setteponti” convertita in WebP (circa 246 KB contro 3,25 MB) e servita tramite `<picture>` con fallback JPEG.
- Slideshow migliorato con stato `aria-hidden` iniziale e semantica dei controlli.
- Aggiunti skip link bilingue e indicatori di focus visibili per la navigazione da tastiera.
- Redirect della radice verso `/it/` reso permanente (301).
- Aggiunte policy di sicurezza e cache immutabile annuale per immagini e asset Astro su Netlify.
- Corretto il testo accentato della pagina 404.

## Elementi verificati senza necessità di modifica

- `robots.txt` consente la scansione e dichiara la sitemap corretta.
- Canonical assoluti e coerenti con gli URL finali con slash.
- Un solo H1 per pagina; gerarchia dei contenuti basata su H2/H3.
- Alt text descrittivi sulle immagini e caricamento lazy per le immagini non LCP.
- Link interni principali e legali risolvibili in entrambe le lingue.
- FAQ in JSON-LD coerenti con le FAQ visibili.
- Attributo `lang` corretto per ciascuna versione linguistica.

## Azioni richieste al proprietario

1. Pubblicare le modifiche e inviare nuovamente `https://perla-toscana.it/sitemap.xml` in Google Search Console.
2. In Search Console, controllare Indicizzazione pagine, Core Web Vitals e Miglioramenti dopo il nuovo crawl; richiedere l'indicizzazione delle home IT/EN e delle 6 pagine aggiunte alla sitemap.
3. Verificare a livello DNS/Netlify che HTTP, HTTPS e l'eventuale `www` convergano tutti con redirect 301 su `https://perla-toscana.it`.
4. Eseguire PageSpeed Insights sulle pagine pubblicate (home, galleria e pagine lunghe). Le metriche real-user e la latenza del CDN non sono misurabili in modo affidabile dalla sola build locale.
5. Verificare che indirizzo, telefoni, coordinate, orari e profili social nei dati strutturati coincidano esattamente con Google Business Profile e con i dati legali dell'attività.
6. Valutare il self-hosting dei font Google se PageSpeed segnala ritardi o dipendenza da terze parti.
7. Aggiungere `aggregateRating` o recensioni nei dati strutturati solo se le valutazioni sono verificabili, pubblicate sul sito e conformi alle linee guida Google.

## Verifica tecnica finale

- Build: superata (`npm.cmd run build`).
- Pagine generate: 32.
- Pagine indicizzabili in sitemap: 30 su 30.
- Errori automatici su H1, canonical, hreflang, link interni e JSON-LD: 0.
- `git diff --check`: superato.
