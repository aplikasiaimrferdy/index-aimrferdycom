
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',

  site:
    process.env.SITE_URL ||
    'https://aimrferdy.com',

integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/product/search/')
    })
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },

  vite: {
    build: {
      target: 'esnext'
    }
  }
});
