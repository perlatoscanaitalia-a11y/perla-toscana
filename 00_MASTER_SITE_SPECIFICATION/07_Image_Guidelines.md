# Perla Toscana - Image Guidelines

## Image Sizes

Recommended export sizes:

- Hero desktop: 1920px wide.
- Hero mobile: 900px wide.
- Gallery large: 1400px wide.
- Gallery thumbnail: 600px wide.
- Card images: 800px wide.
- Open Graph image: 1200x630px.

Use responsive image sizes in the frontend.

## Optimization

Rules:

- Convert photos to WebP.
- Keep JPG fallback only if needed.
- Compress images without visible quality loss.
- Avoid uploading original camera files directly.
- Strip unnecessary metadata unless needed.

Target:

- Hero images ideally under 350KB when possible.
- Gallery images ideally under 250KB when possible.
- Thumbnails ideally under 100KB.

## Naming Convention

Use:

`perla-toscana-[subject]-[detail].webp`

Examples:

- `perla-toscana-camera-memory-foam.webp`
- `perla-toscana-cucina-lavazza.webp`
- `perla-toscana-doccia-idromassaggio.webp`
- `perla-toscana-parcheggio-privato.webp`

## WebP

All primary images should be delivered as WebP.

Use `picture` or responsive image handling if fallback formats are needed.

## Lazy Loading

Rules:

- Do not lazy-load the first hero image if it is the LCP image.
- Lazy-load below-the-fold gallery and article images.
- Use width and height attributes or aspect-ratio containers to prevent layout shift.

## Responsive Images

Use appropriate sizes for:

- Mobile.
- Tablet.
- Desktop.
- Large desktop.

Avoid serving 1920px images to small mobile screens.

## Alt Text

Alt text should describe the image truthfully.

Good:

- `Camera matrimoniale con materasso memory foam a Perla Toscana`

Bad:

- `best holiday home Florence Chianti The Mall Tuscany apartment booking`

## Image Quality Rules

- Use bright, clear images.
- Keep vertical lines straight where possible.
- Avoid extreme wide-angle distortion.
- Do not use dark overlays that hide property details.
- Do not show unfinished spaces.
- Do not promote the garden until ready.
