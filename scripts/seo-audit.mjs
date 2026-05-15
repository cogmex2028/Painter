// Audits all pages in dist/ for SEO health.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const decodeEntities = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'");
const pick = (html, re) => decodeEntities((html.match(re) || [, ''])[1]);
const countMatches = (html, re) => (html.match(re) || []).length;

const files = walk(root);
const results = [];

for (const file of files) {
  const html = readFileSync(file, 'utf-8');
  const rel = '/' + file.replace(/\\/g, '/').replace(/^dist\//, '').replace(/index\.html$/, '').replace(/\.html$/, '');
  const url = rel === '/' ? '/' : rel;
  const title = pick(html, /<title>([^<]+)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([^"]+)"/);
  const canon = pick(html, /<link rel="canonical" href="([^"]+)"/);
  const ogTitle = pick(html, /<meta property="og:title" content="([^"]+)"/);
  const ogImg = pick(html, /<meta property="og:image" content="([^"]+)"/);
  const robots = pick(html, /<meta name="robots" content="([^"]+)"/);
  const h1Count = countMatches(html, /<h1[\s>]/g);
  const h2Count = countMatches(html, /<h2[\s>]/g);
  const jsonLdMatches = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g) || [];
  const schemaTypes = jsonLdMatches.map((s) => {
    try {
      const j = JSON.parse(s.replace(/<script[^>]*>/, '').replace(/<\/script>/, ''));
      const arr = Array.isArray(j) ? j : [j];
      return arr.map((x) => {
        const t = x['@type'];
        return Array.isArray(t) ? t.join('+') : t;
      }).join(',');
    } catch { return 'INVALID'; }
  });

  const issues = [];
  if (!title) issues.push('NO_TITLE');
  if (title && [...title].length > 60) issues.push(`TITLE_TOO_LONG(${[...title].length})`);
  if (!desc) issues.push('NO_DESC');
  if (desc && [...desc].length > 165) issues.push(`DESC_TOO_LONG(${[...desc].length})`);
  if (desc && [...desc].length < 80) issues.push(`DESC_TOO_SHORT(${[...desc].length})`);
  if (!canon) issues.push('NO_CANONICAL');
  if (!ogTitle) issues.push('NO_OG_TITLE');
  if (!ogImg) issues.push('NO_OG_IMAGE');
  if (h1Count === 0) issues.push('NO_H1');
  if (h1Count > 1) issues.push(`MULTIPLE_H1(${h1Count})`);
  if (schemaTypes.length === 0) issues.push('NO_SCHEMA');
  if (!robots) issues.push('NO_ROBOTS');

  results.push({ url, title: [...(title || '')].length, desc: [...(desc || '')].length, h1: h1Count, h2: h2Count, schemas: schemaTypes.length, schemaTypes, issues });
}

results.sort((a, b) => a.url.localeCompare(b.url));

console.log('\n┌' + '─'.repeat(110) + '┐');
console.log('│ ' + 'URL'.padEnd(40) + 'Title'.padEnd(7) + 'Desc'.padEnd(7) + 'H1'.padEnd(5) + 'H2'.padEnd(5) + 'Schemas'.padEnd(10) + 'Issues');
console.log('├' + '─'.repeat(110) + '┤');
for (const r of results) {
  const issues = r.issues.length ? '⚠ ' + r.issues.join(' ') : '✓';
  console.log('│ ' + r.url.padEnd(40) + String(r.title).padEnd(7) + String(r.desc).padEnd(7) + String(r.h1).padEnd(5) + String(r.h2).padEnd(5) + String(r.schemas).padEnd(10) + issues);
}
console.log('└' + '─'.repeat(110) + '┘');

const withIssues = results.filter((r) => r.issues.length);
console.log(`\nTotal pages: ${results.length}`);
console.log(`Clean: ${results.length - withIssues.length}`);
console.log(`With issues: ${withIssues.length}`);
if (withIssues.length) {
  console.log('\nIssues breakdown:');
  for (const r of withIssues) console.log(`  ${r.url} → ${r.issues.join(', ')}`);
}

// Show a sample of unique schema types
const allSchemas = new Set();
results.forEach((r) => r.schemaTypes.forEach((t) => allSchemas.add(t)));
console.log(`\nUnique schema types in use: ${[...allSchemas].sort().join(' · ')}`);
