# Struttura SEO/GEO e topic cluster — Perla Toscana

Data: 11 luglio 2026

## Architettura realizzata

Sono state create 22 nuove pagine bilingui, tutte integrate nel layout esistente:

- 8 guide locali in italiano e 8 in inglese: Firenze, Chianti, The Mall Firenze, Figline Valdarno, Valdarno, Arezzo, Siena, Reggello e Vallombrosa.
- 3 itinerari italiani da 1, 2 e 3 giorni.
- 3 itinerari inglesi da 1, 2 e 3 giorni.

## Collegamenti interni

- Ogni guida collega tutte le altre destinazioni e i tre itinerari.
- Ogni itinerario collega tutte le guide locali, posizione, camere e disponibilità.
- Le guide collegano inoltre Come arrivare e Dove mangiare.
- Tutte le pagine del sito espongono nel footer collegamenti persistenti alle guide principali e agli itinerari.
- La pagina Cosa fare resta l'hub editoriale principale già raggiungibile dalla navigazione.

## FAQ e comprensione AI

Ogni nuova pagina contiene FAQ visibili e corrispondenti dati strutturati `FAQPage`. Le domande coprono intenti ricorrenti: distanza, fattibilità in giornata, auto o treno, numero di tappe e scelta della base.

Ogni guida espone inoltre:

- `Article` con headline, descrizione, lingua, URL, autore e publisher associati all'entità Perla Toscana;
- `BreadcrumbList` che collega Perla Toscana, l'hub locale e la guida;
- `LodgingBusiness`/`VacationRental` con indirizzo, coordinate, capienza, servizi e profili ufficiali;
- canonical, hreflang reciproco IT/EN e `x-default`.

## Sitemap

La sitemap non è più mantenuta manualmente: viene generata dalla build a partire dalle pagine reali, include alternati hreflang e contiene tutte le 52 pagine indicizzabili.

## Verifica finale

- 54 documenti HTML generati, inclusi root tecnica e 404.
- 52 pagine indicizzabili presenti in sitemap: 52 su 52.
- Errori rilevati su H1, canonical, hreflang, JSON-LD e link interni: 0.
- Build Astro: superata.
- Design: nessun nuovo pattern visuale; sono stati riutilizzati layout, card, FAQ e link esistenti.

## Prossime azioni editoriali consigliate

1. Integrare fotografie originali specifiche per ogni destinazione, con diritti verificati.
2. Validare periodicamente distanze, parcheggi, ZTL, orari e trasporti usando fonti ufficiali.
3. Ampliare le guide che ottengono impression in Search Console con sezioni basate sulle query reali.
4. Reinviare la sitemap in Google Search Console dopo la pubblicazione.
