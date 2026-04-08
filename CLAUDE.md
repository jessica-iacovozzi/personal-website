# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

```bash
npx serve .
```

This serves the static site locally. No build step is required — files are deployed as-is to GitHub Pages.

## Deployment

Pushing to `master` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which deploys the entire repo root to GitHub Pages. There is no build step.

## Architecture

Vanilla HTML/CSS/JS portfolio with no frameworks, build tools, or dependencies.

**File structure:**
- `index.html` — English version
- `fr/index.html` — French version (paths to assets use `../` prefix)
- `assets/css/style.css` — All styles (single file, ~480 lines)
- `assets/js/main.js` — All JavaScript (single file, ~66 lines)

**Localization:** Two separate HTML files share the same CSS and JS. Language-specific content is hardcoded in each HTML file. hreflang tags link the two versions for SEO. The language toggle in the nav is a plain `<a>` link between the two files.

**JavaScript modules** (all in `main.js`):
1. Custom cursor — mouse tracking with `requestAnimationFrame` easing
2. Scroll reveal — `IntersectionObserver` adds `.visible` to `.reveal` elements
3. Nav blur — adds `.scrolled` to nav when `scrollY > 40`
4. Hamburger menu — toggles `.open`, manages `aria-expanded`, locks body scroll

**CSS conventions:**
- Section delimiters use `/* ── NAME ── */` comments
- CSS custom properties defined in `:root`
- Reveal animations use `.reveal` + `.reveal-delay-1` through `.reveal-delay-4` classes
- Responsive breakpoints: `900px` (tablet) and `600px` (mobile)

## Content Updates

When updating content, **both** `index.html` (EN) and `fr/index.html` (FR) must be updated. The two files are structurally identical — same class names, same element order — with translated text.
