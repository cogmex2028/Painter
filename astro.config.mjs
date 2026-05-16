import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';

// Override these via env vars at build time when deploying to a subpath
// (e.g. GitHub Project Pages: SITE_URL=https://cogmex2028.github.io BASE_PATH=/Painter/)
const PROD_SITE = process.env.SITE_URL || 'https://painthubdubai.ae';

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
    }),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/thank-you'] }],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
