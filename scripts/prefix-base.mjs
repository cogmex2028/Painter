// Post-build script: rewrite root-relative paths in built HTML so the site
// works under a subpath (e.g. /Painter/ on GitHub Project Pages).
//
// Usage: BASE_PATH=/Painter/ node scripts/prefix-base.mjs
//
// Skips: external URLs, mailto:, tel:, wa.me, anchors (#...), data:, javascript:
// and paths that already start with the base.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = (process.env.BASE_PATH || '/').replace(/\/+$/, '/').replace(/^\/*/, '/');
if (BASE === '/') {
  console.log('No BASE_PATH set (or root). Nothing to prefix.');
  process.exit(0);
}

const ROOT = 'dist';
const ATTR_RE = /(href|src|action|content)="(\/[^"#?]*)(["#?])/g;
const SRCSET_RE = /(srcset)="([^"]+)"/g;
const META_OG_RE = /(<meta\s+(?:property|name)="(?:og:url|twitter:url|canonical)"\s+content=")(\/[^"]*)(")/g;
const JSONLD_PATH_RE = /"(\/[^"]*)"/g;

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.html') || e.name.endsWith('.xml')) out.push(p);
  }
  return out;
}

const baseNoTrailing = BASE.replace(/\/$/, '');

function prefixOne(path) {
  // Already prefixed?
  if (path === BASE || path.startsWith(BASE)) return path;
  if (path === baseNoTrailing || path.startsWith(baseNoTrailing + '/')) return path;
  // Skip protocol-relative & root-only oddities
  if (path.startsWith('//')) return path;
  return baseNoTrailing + path;
}

function rewriteHtml(html) {
  // href / src / action / content with absolute paths
  html = html.replace(ATTR_RE, (_m, attr, p, tail) => `${attr}="${prefixOne(p)}${tail}`);
  // srcset entries
  html = html.replace(SRCSET_RE, (_m, attr, val) => {
    const rewritten = val
      .split(',')
      .map((s) => {
        const trimmed = s.trim();
        const [url, ...rest] = trimmed.split(/\s+/);
        if (!url.startsWith('/') || url.startsWith('//')) return trimmed;
        return [prefixOne(url), ...rest].join(' ');
      })
      .join(', ');
    return `${attr}="${rewritten}"`;
  });
  return html;
}

function rewriteXml(xml) {
  // sitemap <loc>https://site.tld/foo</loc> entries get site host already; just leave as-is
  return xml;
}

const files = walk(ROOT);
let touched = 0;
for (const file of files) {
  const orig = readFileSync(file, 'utf-8');
  const next = file.endsWith('.html') ? rewriteHtml(orig) : rewriteXml(orig);
  if (next !== orig) {
    writeFileSync(file, next);
    touched++;
  }
}
console.log(`Prefixed ${touched} files with base ${BASE}`);
