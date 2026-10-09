# Redirect Perla Toscana su GitHub Pages — fase 3B

Stato: preparazione locale del 9 ottobre 2026. Nessuna configurazione esterna,
modifica DNS, modifica hosting o pubblicazione eseguita.

## Limite dell'hosting attuale

GitHub Pages pubblica file statici; il workflow esistente carica `site/dist`.
Non c'è un server applicativo del progetto su cui configurare risposte 301.
Le regole di `netlify.toml` non vengono eseguite da GitHub Pages.
Un meta refresh HTML, un redirect JavaScript o un canonical non cambiano
il codice della risposta HTTP in 301.

Fonte: [GitHub — What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
La conseguenza per le regole di redirect personalizzate è dedotta dal modello
di pubblicazione statico e confermata dal comportamento HTTP rilevato nell'audit.

## Soluzione locale compatibile con Pages

| Richiesta | File locale | Comportamento dopo una futura pubblicazione |
|---|---|---|
| `/` | `src/pages/index.astro`, conservato | HTTP 200, meta refresh e link HTML verso `/it/`, come prima |
| `/it/guide/figline-valdarno/` | `src/pages/it/guide/figline-valdarno.astro` | HTTP 200, meta refresh e link HTML verso `/guide/cosa-vedere-figline-valdarno/` |

La vecchia guida è una pagina tecnica `noindex, follow`, con canonical verso
la destinazione, senza hreflang o JSON-LD e senza inserimento nella sitemap.
Non duplica il contenuto della guida e non viene collegata dalla navigazione.
Il controllo SEO ammette soltanto questa specifica eccezione e ne verifica
destinazione, canonical, robots e link di fallback. Le altre pagine pubbliche
restano soggette ai controlli SEO e immagini esistenti.

La pagina statica evita il 404 della vecchia URL dopo la pubblicazione,
ma non sostituisce il consolidamento tramite HTTP 301. La root resta invariata:
aggiungere altro HTML non soddisferebbe il requisito di un redirect HTTP.
Non usare `Astro.redirect(..., 301)` come prova del codice HTTP quando l'output
viene distribuito come semplici file statici su Pages.

## Alternativa con veri 301, conservando GitHub Pages come origine

Un reverse proxy/CDN davanti al dominio può emettere il 301 prima di raggiungere
Pages. Esempio: Cloudflare Single Redirects. È una configurazione esterna futura,
non installata, e richiede approvazione specifica per DNS/proxy e controllo TLS.
Non migra i file o la pubblicazione da GitHub Pages.

Fonte: [Cloudflare — Create a redirect rule](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/).

Preparare due regole **esatte**, senza wildcard sul resto del sito:

1. Espressione:
   `(http.host eq "perla-toscana.it" and http.request.uri.path eq "/")`
   Destinazione statica: `https://perla-toscana.it/it/`
   Status: **301**. Preserve query string: **attivo**.
2. Espressione:
   `(http.host eq "perla-toscana.it" and http.request.uri.path in {"/it/guide/figline-valdarno" "/it/guide/figline-valdarno/"})`
   Destinazione statica: `https://perla-toscana.it/guide/cosa-vedere-figline-valdarno/`
   Status: **301**. Preserve query string: **attivo**.

Prima dell'attivazione verificare DNS attuali, eventuale proxy già presente,
record di posta, certificato del dominio su GitHub Pages e TLS del proxy.
Non cambiare nameserver o record nell'ambito della fase 3B.
Se un proxy esistente offre già regole equivalenti, usarlo invece di introdurre
un altro servizio. Una modifica DNS da sola non configura redirect per path.

Un cambio di hosting con regole server-side è un'altra possibilità tecnica,
ma è fuori dallo scope e non viene proposto come modifica da eseguire qui.

## Collaudo dopo eventuale autorizzazione esterna/pubblicazione

- GET e HEAD su `/`: 301, `Location: https://perla-toscana.it/it/`.
- GET e HEAD sulle due forme della vecchia guida: 301, Location canonica.
- Destinazioni finali: 200, canonical e hreflang invariati.
- Parametri di campagna conservati, nessun loop o catena evitabile.
- Home EN/DE, altre guide, immagini, sitemap, robots e URL inesistente di controllo
  mantengono il comportamento precedente.
- Se si pubblica soltanto la soluzione statica senza proxy, attestare **200**
  e meta refresh, mai dichiarare che i 301 sono stati realizzati.

Rollback futuro delle regole esterne: disattivare soltanto le due nuove regole.
Il fallback statico continua a funzionare. Nessun reset o cancellazione delle
modifiche locali è necessario.
