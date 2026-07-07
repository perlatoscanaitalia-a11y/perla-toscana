# Perla Toscana - Performance Checklist

## Core Web Vitals

Targets:

- LCP under 2.5s.
- CLS under 0.1.
- INP under 200ms.

Rules:

- Optimize hero image.
- Preload only critical assets.
- Avoid layout shifts from images, fonts and sticky CTAs.
- Keep JavaScript minimal.

## Lighthouse

Target scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Any lower score must have a documented reason.

## Accessibility

Rules:

- Semantic HTML.
- Proper heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient color contrast.
- Alt text for meaningful images.
- Form labels and error messages.
- Buttons must have accessible names.

## Mobile Optimization

Rules:

- Design mobile-first.
- Sticky booking/WhatsApp actions must not cover content.
- Text must never overflow containers.
- Tap targets at least 44px.
- Menus must be easy to close.
- Forms must be simple on mobile.

## SEO Performance

Rules:

- Server-render or statically render important content.
- Avoid hiding important text behind scripts.
- Use clean canonical URLs.
- Generate sitemap.
- Add structured data.
- Use optimized internal linking.

## Fonts

Rules:

- Load only required font weights.
- Use font-display swap or equivalent.
- Avoid excessive font variants.

## JavaScript

Rules:

- Keep interactions lightweight.
- Avoid large libraries unless necessary.
- Gallery/lightbox must not harm LCP.
- Map embeds should load only when needed or below the fold.

## CSS

Rules:

- Avoid unused CSS.
- Keep critical layout stable.
- Use responsive constraints.
- Do not rely on viewport-scaled font sizes.

## Images

Rules:

- Use WebP.
- Use responsive sizes.
- Lazy-load below fold.
- Reserve image dimensions.

## Forms

Rules:

- Must be fast and reliable.
- Show success and error states.
- Prevent duplicate submissions.
- Make WhatsApp fallback visible.
