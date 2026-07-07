# Perla Toscana - Website Architecture

## URL Structure

Approved language roots:

- `/it/`
- `/en/`
- `/de/`
- `/fr/`
- `/nl/`

Initial implementation:

- Italian: `/it/`
- English: `/en/`

Future prepared languages:

- German: `/de/`
- French: `/fr/`
- Dutch: `/nl/`

Do not publish empty or machine-translated language versions.

## Core Sections

Recommended URL groups:

- `/it/` homepage
- `/en/` homepage
- `/it/prenotazione-diretta/`
- `/en/direct-booking/`
- `/it/contatti-posizione/`
- `/it/posizione/`
- `/it/servizi/`
- `/it/galleria/`
- `/it/recensioni/`
- `/it/faq-regole-casa/`
- `/it/guida/`
- `/en/guide/`
- `/it/luoghi/`
- `/it/regole-casa/`
- `/it/informazioni/`

## Navigation

Primary navigation should include:

- Home
- Prenota / Book Direct
- Posizione / Location
- Firenze / Florence
- Chianti
- The Mall Firenze
- Servizi / Services
- Galleria / Gallery
- Contatti / Contact

Persistent actions:

- Prenota / Book Direct
- WhatsApp

Language selector:

- IT
- EN
- DE
- FR
- NL

Only activate a language link when the target page exists.

## Menus

Desktop menu:

- Keep it clear and compact.
- Prioritize booking and location.

Mobile menu:

- Must expose Book Direct and WhatsApp immediately.
- Avoid burying contact or booking actions inside long menus.

Footer menu:

- Home
- Book Direct
- Location
- Services
- Gallery
- Reviews
- FAQ
- Contact
- CIN/CIR
- Privacy/Cookie
- Language links

## Breadcrumbs

Use breadcrumbs on all pages except the homepage.

Examples:

- Home > Servizi > Parcheggio privato gratuito
- Home > Guida > Un giorno a Firenze
- Home > Luoghi > The Mall Firenze

Breadcrumbs must match the visible page hierarchy and structured data.

## Page Hierarchy

Tier 1:

- Homepage IT/EN
- Book Direct
- Location

Tier 2 money pages:

- Florence
- Chianti
- The Mall Firenze
- Figline e Incisa Valdarno
- Parking
- 8 guests
- Family accommodation
- Group accommodation
- Services
- Gallery
- Reviews

Tier 3 authority pages:

- Travel guides
- Attraction pages
- Seasonal content
- Day-trip guides

Tier 4 support pages:

- House rules
- Accessibility/practical information
- FAQ sections
- Micro-amenity anchors

## Content Clusters

Primary clusters:

- Stay near Florence
- Stay near Chianti
- Stay near The Mall Firenze
- Figline e Incisa Valdarno / Valdarno
- Tuscany by car and private parking
- Family accommodation
- Group accommodation up to 8 guests
- Self-catering comfort
- Direct booking and trust
- Tuscany itineraries
- Logistics and arrival
- Public transport to Florence
- Guest Information Hub
- Seasonal Tuscany

## Guest Information Hub Architecture

Create a dedicated guest information hub:

- `/en/guest-information/`

Child pages:

- `/en/guest-information/public-transport/`
- `/en/guest-information/taxi-private-transfers/`
- `/en/guest-information/airports/`
- `/en/guest-information/railway-connections/`
- `/en/guest-information/supermarkets-nearby/`
- `/en/guest-information/pharmacies/`
- `/en/guest-information/medical-assistance/`
- `/en/guest-information/emergency-numbers/`
- `/en/guest-information/ev-charging-stations/`
- `/en/guest-information/petrol-stations/`
- `/en/guest-information/restaurants-nearby/`
- `/en/guest-information/food-drinks-nearby/`
- `/en/guest-information/wine-tours-private-drivers/`
- `/en/guest-information/arrival-guide/`

The hub must link naturally to:

- Homepage.
- Location.
- FAQ.
- Book Direct.
- Arrival Guide.
- Family pages.
- Florence pages.
- Chianti pages.

Food & Drinks Nearby must also receive links from:

- Homepage.
- Arrival Guide.
- Guest Information Hub.
- Family Accommodation.
- FAQ.
- Kitchen/self-catering page.

Dynamic-information rule:

- Do not publish fixed prices, schedules, opening hours or availability for third-party providers unless verified and maintainable.
- For taxi companies, private transfers, restaurants, wine tours and private drivers, tell visitors to contact providers directly for current prices and availability.

## Public Transport Architecture

Create a dedicated public transport guide:

- `/en/guest-information/public-transport/`

This page must explain:

- The approximately 200 m walk from Perla Toscana to SR69 Deposito Gas.
- Bus stop IDs: FIV074 and FIV075.
- Bus connection to Figline Valdarno railway station.
- Train connection from Figline Valdarno to Florence Santa Maria Novella.
- Why this helps guests visit Florence without city parking stress.
- Why this helps international guests arriving by train or plane.

Do not publish fixed timetables. Link to the official Autolinee Toscane website for current schedules:

<https://www.at-bus.it/>

Transport diagram:

```text
Perla Toscana
↓ 200 m walk
SR69 Deposito Gas bus stop
↓ Bus
Figline Valdarno railway station
↓ Train
Florence Santa Maria Novella
```

Pages that must include a transport information section:

- Homepage
- Location page
- FAQ
- Arrival Guide
- Florence landing page where relevant

## Internal Linking Philosophy

Every authority article must link to at least one commercial landing page.

Every commercial landing page must link to:

- Book Direct
- WhatsApp/contact
- Location
- Relevant services
- Relevant guides
- Relevant attractions
- FAQs

No page should be isolated.

Internal links must be contextual and useful. Avoid generic repeated anchors only saying "click here".

## Multilingual Architecture

Rules:

- `/it/` is the primary language version.
- `/en/` is the first full international version.
- `/de/`, `/fr/`, `/nl/` are prepared for future localized expansion.
- Use hreflang only for equivalent pages.
- Do not hreflang a page to a language version that does not exist.
- Self-canonical every localized page.
