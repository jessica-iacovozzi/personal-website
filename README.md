# Portfolio

## Stack

Vanilla HTML, CSS, and JavaScript — no build tools, no frameworks.

- Bilingual: English (`/`) and French (`/fr/`)
- Deployed via GitHub Actions to GitHub Pages

## Structure

```
portfolio-v2/
├── index.html              # English version
├── fr/
│   └── index.html          # French version
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   └── js/
│       └── main.js         # Custom cursor, scroll reveal, nav blur
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions CI/CD to GitHub Pages
```

## Features

- Custom animated CSS cursor with hover states
- Scroll-reveal animations using `IntersectionObserver`
- Infinite-scroll skill marquee
- Blurred frosted-glass nav on scroll
- Fully responsive (breakpoints at 600px and 900px)
- `hreflang` alternate links for EN/FR SEO

## Local Development

No build step required — open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
```

## Deployment

Pushes to `master` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which deploys the site to GitHub Pages.

## Contact

- Email: iacovozzi.jessica@gmail.com
- LinkedIn: [jessica-iacovozzi](https://linkedin.com/in/jessica-iacovozzi)
- GitHub: [jessica-iacovozzi](https://github.com/jessica-iacovozzi)
