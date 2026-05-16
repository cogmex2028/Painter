import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';

// Override these via env vars at build time when deploying to a subpath
// (e.g. GitHub Project Pages: SITE_URL=https://cogmex2028.github.io BASE_PATH=/Painter/)
const PROD_SITE = process.env.SITE_URL || 'https://mrpainterdubai.com';

export default defineConfig({
  site: PROD_SITE,
  // 'directory' produces `dist/foo/index.html` so /foo/ resolves correctly
  // on every static host including GitHub Pages, S3, raw Nginx and Cloudflare.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Per-URL priority tuning — search engines weight these.
      // Homepage = 1.0, key money pages = 0.9, deep pages = 0.7, legal = 0.3.
      serialize(item) {
        const url = item.url;
        if (url.endsWith('/')) {
          if (url.match(/^https?:\/\/[^/]+\/?$/)) {
            item.priority = 1.0;
            item.changefreq = 'daily';
          } else if (url.match(/\/(pricing|services|areas|about|contact)\/?$/)) {
            item.priority = 0.9;
            item.changefreq = 'weekly';
          } else if (url.includes('/services/') || url.includes('/vendors/')) {
            item.priority = 0.85;
            item.changefreq = 'weekly';
          } else if (url.includes('/areas/')) {
            item.priority = 0.8;
            item.changefreq = 'weekly';
          } else if (url.match(/\/(privacy|terms)\/?$/)) {
            item.priority = 0.3;
            item.changefreq = 'yearly';
          }
        }
        return item;
      },
    }),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/thank-you'] }],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
