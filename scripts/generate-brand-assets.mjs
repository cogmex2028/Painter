import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = (p) => resolve(root, 'public', p);

async function ensureDir(file) {
  await mkdir(dirname(file), { recursive: true });
}

// Logo mark: gradient orange badge with custom "M" monogram + paint-drop accent.
// Scaled from the 64-unit Logo.astro design to a 512-unit canvas (×8).
const logoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="55%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#c2410c"/>
    </linearGradient>
    <radialGradient id="shine" cx="0.25" cy="0.15" r="0.75">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.32"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" rx="128" fill="url(#bg)"/>
  <rect width="512" height="512" rx="128" fill="url(#shine)"/>
  <path d="M96 392 L96 120 L160 120 L256 280 L352 120 L416 120 L416 392 L368 392 L368 216 L272 352 L240 352 L144 216 L144 392 Z" fill="white"/>
  <path d="M256 416 C238.4 436 238.4 460 256 472 C273.6 460 273.6 436 256 416 Z" fill="white"/>
  <ellipse cx="248" cy="440" rx="7" ry="11" fill="#fed7aa" opacity="0.65"/>
</svg>`;

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff7ed"/>
      <stop offset="100%" stop-color="#fed7aa"/>
    </linearGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#c2410c"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Soft glows -->
  <circle cx="100" cy="100" r="220" fill="#fdba74" opacity="0.4"/>
  <circle cx="1100" cy="550" r="260" fill="#fed7aa" opacity="0.6"/>

  <!-- Logo mark (88×88 badge, M monogram scaled to ~64% of badge) -->
  <rect x="72" y="72" width="88" height="88" rx="22" fill="url(#brand)"/>
  <path d="M88.5 133.4 L88.5 86.4 L99.5 86.4 L116 113.9 L132.5 86.4 L143.5 86.4 L143.5 133.4 L135.25 133.4 L135.25 103 L118.75 126.5 L113.25 126.5 L96.75 103 L96.75 133.4 Z" fill="white"/>
  <path d="M116 137.5 C112.97 140.94 112.97 145.06 116 147.13 C119.03 145.06 119.03 140.94 116 137.5 Z" fill="white"/>

  <text x="180" y="128" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="800" fill="#0f172a">Mr Painter</text>
  <text x="362" y="128" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="800" fill="#f97316">.</text>
  <text x="180" y="152" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="3" fill="#9c7e4f">DUBAI</text>

  <!-- Headline -->
  <text x="72" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="70" font-weight="800" fill="#0f172a">Dubai's top-rated</text>
  <text x="72" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="70" font-weight="800" fill="url(#accent)">painters, compared</text>
  <text x="72" y="450" font-family="system-ui, -apple-system, sans-serif" font-size="70" font-weight="800" fill="#0f172a">in 60 seconds.</text>

  <!-- Stat pills -->
  <g transform="translate(72, 510)">
    <rect width="200" height="56" rx="28" fill="white" stroke="#fed7aa" stroke-width="2"/>
    <text x="100" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">120+ painters</text>
  </g>
  <g transform="translate(288, 510)">
    <rect width="200" height="56" rx="28" fill="white" stroke="#fed7aa" stroke-width="2"/>
    <text x="100" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">★ 4.8 rating</text>
  </g>
  <g transform="translate(504, 510)">
    <rect width="220" height="56" rx="28" fill="white" stroke="#fed7aa" stroke-width="2"/>
    <text x="110" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">10.8k+ jobs done</text>
  </g>
</svg>`;

await ensureDir(pub('logo.png'));

await sharp(Buffer.from(logoSvg)).resize(512, 512).png({ quality: 90 }).toFile(pub('logo.png'));
console.log('✓ public/logo.png (512×512)');

await sharp(Buffer.from(logoSvg)).resize(192, 192).png({ quality: 90 }).toFile(pub('icon-192.png'));
console.log('✓ public/icon-192.png');

await sharp(Buffer.from(logoSvg)).resize(180, 180).png({ quality: 90 }).toFile(pub('apple-touch-icon.png'));
console.log('✓ public/apple-touch-icon.png');

await sharp(Buffer.from(ogSvg)).resize(1200, 630).jpeg({ quality: 85, mozjpeg: true }).toFile(pub('og-default.jpg'));
console.log('✓ public/og-default.jpg (1200×630)');

const manifest = {
  name: 'Mr Painter Dubai',
  short_name: 'Mr Painter',
  description: 'Compare Dubai\'s top-rated painters in 60 seconds.',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#f97316',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/logo.png', sizes: '512x512', type: 'image/png' },
    { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
  ],
};
await writeFile(pub('site.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('✓ public/site.webmanifest');
