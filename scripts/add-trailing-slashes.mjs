// One-off cleanup: append trailing slash to internal URL references in source.
// Run once with `node scripts/add-trailing-slashes.mjs` after switching the
// build to `trailingSlash: 'always'`.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'src';

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(astro|ts|tsx|js|jsx|mjs)$/.test(e.name)) out.push(p);
  }
  return out;
}

const SEGMENTS = ['services', 'areas', 'vendors', 'about', 'contact', 'faq', 'privacy', 'terms'];

// Patterns we touch:
//   href="/about"           -> href="/about/"
//   href="/services"        -> href="/services/"
//   href={`/services/${x}`} -> href={`/services/${x}/`}
//   `${site.url}/services/${x}` -> `${site.url}/services/${x}/`
//   '${site.url}/contact'   -> '${site.url}/contact/'
function process(file, src) {
  let out = src;

  // href="/segment" (not /segment/, not /segment#anchor, not /segment?query)
  for (const seg of SEGMENTS) {
    const re = new RegExp(`href="\\/${seg}"`, 'g');
    out = out.replace(re, `href="/${seg}/"`);
  }

  // href={`/segment/${slug}`}  -- template-literal style for dynamic routes
  for (const seg of ['services', 'areas', 'vendors']) {
    const re = new RegExp('href=\\{`/(' + seg + ')/\\$\\{([^}]+)\\}`\\}', 'g');
    out = out.replace(re, 'href={`/$1/${$2}/`}');
  }

  // `${site.url}/segment/${slug}` or `${siteUrl}/segment/${slug}` (and trailing chars: # or end)
  for (const seg of ['services', 'areas', 'vendors']) {
    const re = new RegExp('(\\$\\{[a-zA-Z0-9_.]*[Uu]rl\\})/(' + seg + ')/\\$\\{([^}]+)\\}', 'g');
    out = out.replace(re, '$1/$2/${$3}/');
    // ${site.url}/services/${slug}#fragment — preserve fragment
    const reFrag = new RegExp('(\\$\\{[a-zA-Z0-9_.]*[Uu]rl\\})/(' + seg + ')/\\$\\{([^}]+)\\}/#', 'g');
    out = out.replace(reFrag, '$1/$2/${$3}/#');
  }

  // `${siteUrl}/segment` (no slug) at end of template -- close with `/` before backtick
  for (const seg of SEGMENTS) {
    const re = new RegExp('(\\$\\{[a-zA-Z0-9_.]*[Uu]rl\\})/(' + seg + ')`', 'g');
    out = out.replace(re, '$1/$2/`');
  }

  return out;
}

const files = walk(SRC);
let touched = 0;
for (const f of files) {
  const orig = readFileSync(f, 'utf-8');
  const next = process(f, orig);
  if (next !== orig) {
    writeFileSync(f, next);
    touched++;
    console.log(`✓ ${f.replace(/\\/g, '/')}`);
  }
}
console.log(`\nTouched ${touched} files`);
