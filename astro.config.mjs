import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nextpathou.github.io',
  base: '/agenticpath-site',
  integrations: [sitemap()],
  // Never inline stylesheets, so the shipped CSS stays one external file
  // the design flow detector can read.
  build: { inlineStylesheets: 'never' },
});
