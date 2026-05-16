// One-off: rebrand PaintHub → Mr Painter Dubai across source.
// Skips files already updated manually (site.ts, Logo.astro, SEO.astro, astro.config.mjs).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SKIP = new Set([
  'src/data/site.ts',
  'src/components/Logo.astro',
  'src/components/seo/SEO.astro',
  'astro.config.mjs',
  'scripts/rebrand.mjs',
  'package.json',
  'package-lock.json',
]);

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.astro' || e.name === '.git') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(astro|ts|tsx|js|jsx|mjs|json|md|yml|yaml|toml)$/.test(e.name)) out.push(p);
  }
  return out;
}

// Order matters: do compound replacements first.
const REPLACEMENTS = [
  // URLs / handles
  [/painthubdubai\.ae/g, 'mrpainterdubai.com'],
  [/painthubdubai\.com/g, 'mrpainterdubai.com'],
  [/painthubdubai/g, 'mrpainterdubai'],
  // Display name — keep "Hi PaintHub," and similar greeting forms intact-ish
  [/PaintHub Dubai LLC/g, 'Mr Painter Dubai LLC'],
  [/PaintHub Dubai/g, 'Mr Painter Dubai'],
  // Solo "PaintHub" — only when it's clearly the brand reference
  [/\bPaintHub\b/g, 'Mr Painter Dubai'],
  [/\bpainthub\b/g, 'mrpainterdubai'],
];

const files = walk('.');
let touchedCount = 0;
for (const f of files) {
  const rel = f.replace(/\\/g, '/').replace(/^\.\//, '');
  if (SKIP.has(rel)) continue;
  const orig = readFileSync(f, 'utf-8');
  let next = orig;
  for (const [re, sub] of REPLACEMENTS) next = next.replace(re, sub);
  if (next !== orig) {
    writeFileSync(f, next);
    touchedCount++;
    console.log(`✓ ${rel}`);
  }
}
console.log(`\nUpdated ${touchedCount} files.`);
