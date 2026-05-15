import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://painthubdubai.ae',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/thank-you'] }],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
