import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nextpathou.github.io/agenticpath-site/',
  integrations: [sitemap()],
});
