// Post-build: alias /sitemap.xml to the same content as /sitemap-0.xml so
// crawlers and tools that expect the standard /sitemap.xml URL find it.
// (@astrojs/sitemap only emits /sitemap-index.xml + /sitemap-N.xml by design.)
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';

const src = 'dist/sitemap-0.xml';
const dst = 'dist/sitemap.xml';

if (!existsSync(src)) {
  console.error(`✗ ${src} not found — astro build did not run or failed.`);
  process.exit(1);
}

copyFileSync(src, dst);
console.log(`✓ Copied ${src} → ${dst} (so /sitemap.xml resolves)`);

// Also update robots.txt to advertise both URLs — gives Google two paths to
// discover the sitemap, which guards against transient fetch failures.
const robotsPath = 'dist/robots.txt';
const extraSitemap = 'Sitemap: https://mrpainterdubai.com/sitemap.xml';

if (existsSync(robotsPath)) {
  const current = readFileSync(robotsPath, 'utf-8');
  if (!current.includes(extraSitemap)) {
    const next = current.trimEnd() + '\n' + extraSitemap + '\n';
    writeFileSync(robotsPath, next);
    console.log('✓ Added /sitemap.xml reference to robots.txt');
  } else {
    console.log('· robots.txt already references /sitemap.xml');
  }
}
