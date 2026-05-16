// Download curated Unsplash images + generate optimized WebP variants.
// All photos are Unsplash license (free for commercial use, no attribution required).
import sharp from 'sharp';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = (p) => resolve(root, 'public', 'images', p);
await mkdir(out(''), { recursive: true });

// Curated picks: { slot, photoId, alt }
const images = [
  // Hero (homepage / OG)
  { slot: 'hero-painting',         id: 'photo-1562259949-e8e7689d7828', alt: 'Colorful paint rollers — professional painting service' },
  // Services
  { slot: 'service-interior',      id: 'photo-1604147495798-57beb5d6af73', alt: 'Modern interior room freshly painted' },
  { slot: 'service-exterior',      id: 'photo-1525909002-1b05e0c869d8', alt: 'Painter applying paint to an exterior wall' },
  { slot: 'service-villa',         id: 'photo-1468824357306-a439d58ccb1c', alt: 'Luxury villa exterior with manicured lawn' },
  { slot: 'service-apartment',     id: 'photo-1560448204-e02f11c3d0e2', alt: 'Modern apartment living room interior' },
  { slot: 'service-commercial',    id: 'photo-1497366216548-37526070297c', alt: 'Modern office workspace interior' },
  { slot: 'service-decorative',    id: 'photo-1555181937-efe4e074a301', alt: 'Decorative textured wall finish close-up' },
  // Areas
  { slot: 'area-dubai-marina',     id: 'photo-1518684079-3c830dcef090', alt: 'Dubai Marina skyline with yacht harbour' },
  { slot: 'area-downtown-dubai',   id: 'photo-1544092683-c0c9ebb368e5', alt: 'Downtown Dubai skyline with Burj Khalifa' },
  { slot: 'area-palm-jumeirah',    id: 'photo-1682410601904-24ec1d9858e6', alt: 'Aerial view of Palm Jumeirah' },
  { slot: 'area-jumeirah',         id: 'photo-1564013799919-ab600027ffc6', alt: 'Modern villa exterior in Jumeirah' },
  { slot: 'area-business-bay',     id: 'photo-1611577810610-642f8ac05c32', alt: 'Dubai high-rise residential buildings' },
  { slot: 'area-jlt',              id: 'photo-1615747476205-991a14cd2358', alt: 'Dubai lake-front tower cluster' },
  { slot: 'area-arabian-ranches',  id: 'photo-1652429249283-e83e3ca0ee66', alt: 'Suburban villa community at dusk' },
  { slot: 'area-mirdif',           id: 'photo-1704738428819-5b19ec6d9c10', alt: 'Family villa exterior with garden' },
  { slot: 'area-jvc',              id: 'photo-1624343385944-b99336163b50', alt: 'Modern townhouse row in Dubai' },
  // Vendor portfolio (reuse across vendor cards)
  { slot: 'vendor-elite',          id: 'photo-1616137466211-f939a420be84', alt: 'Premium interior with decorative wall finish' },
  { slot: 'vendor-royal',          id: 'photo-1521587760476-6c12a4b040da', alt: 'Bright modern apartment after repaint' },
  { slot: 'vendor-sahara',         id: 'photo-1600585154340-be6161a56a0c', alt: 'Modern villa exterior freshly repainted' },
  { slot: 'vendor-crown',          id: 'photo-1557379488-c611c67dab77', alt: 'Decorative Marmorino feature wall' },
];

async function downloadOriginal(photoId, width = 1600) {
  const url = `https://images.unsplash.com/${photoId}?w=${width}&q=80&auto=format&fit=crop`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${photoId} -> HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processOne({ slot, id, alt }) {
  try {
    const buf = await downloadOriginal(id, 1600);
    // Generate three responsive sizes as WebP + a JPEG fallback at the largest size.
    // Quality kept aggressive to stay under 200 KB at the largest size for
    // strong Lighthouse / Core Web Vitals scores. `effort: 6` slows encoding
    // but yields ~20-30% better compression than the default.
    const sizes = [
      { suffix: '',     w: 1280, h: 720, q: 70 },
      { suffix: '-md',  w: 1024, h: 576, q: 72 },
      { suffix: '-sm',  w: 640,  h: 360, q: 75 },
    ];
    for (const s of sizes) {
      await sharp(buf)
        .resize({ width: s.w, height: s.h, fit: 'cover', position: 'attention' })
        .webp({ quality: s.q, effort: 6 })
        .toFile(out(`${slot}${s.suffix}.webp`));
    }
    await sharp(buf)
      .resize({ width: 1280, height: 720, fit: 'cover', position: 'attention' })
      .jpeg({ quality: 72, mozjpeg: true, progressive: true })
      .toFile(out(`${slot}.jpg`));
    return { slot, alt, status: 'ok' };
  } catch (e) {
    return { slot, alt, status: 'failed', error: e.message };
  }
}

console.log(`Downloading ${images.length} images from Unsplash...\n`);
const results = [];
for (const img of images) {
  const r = await processOne(img);
  results.push(r);
  console.log(`  ${r.status === 'ok' ? '✓' : '✗'} ${r.slot}` + (r.error ? ` — ${r.error}` : ''));
}

const ok = results.filter((r) => r.status === 'ok');
const failed = results.filter((r) => r.status !== 'ok');
console.log(`\n${ok.length}/${results.length} succeeded`);

// Emit a manifest (JSON only — helpers live in src/data/images.ts and are not overwritten)
const manifest = ok.map((r) => ({ slot: r.slot, alt: r.alt }));
await writeFile(resolve(root, 'public/images/manifest.json'), JSON.stringify(manifest, null, 2));
console.log('\n✓ Wrote public/images/manifest.json');

if (failed.length) {
  console.log('\nFailed photo IDs may have been renamed/removed. Retry with different IDs.');
  for (const f of failed) console.log(`  - ${f.slot}: ${f.error}`);
}
