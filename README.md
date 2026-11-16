# agenticpath-site

AgenticPath website, built with [Astro](https://astro.build). Static output, deployed free on GitHub Pages. Same stack as employablepm.com.

## Run locally

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production build into dist/
```

## Deploy

Push to `main` deploys via `.github/workflows/deploy.yml` (GitHub Actions, Pages).

## Structure

```
src/
  layouts/
    BaseLayout.astro # shared page shell (head, header, footer)
  pages/
    index.astro      # homepage
  styles/
    global.css       # AgenticPath design system (see identity/design-system.md in AgenticPathICM)
public/
  wordmark.png       # the mark, from identity/logo/ in AgenticPathICM
  favicon-16.png
  favicon-32.png
  favicon-64.png
```

Content comes from `product/website-source.md` in the AgenticPathICM brain repo. The design system lives in `identity/design-system.md` there. This repo holds the site only.
