// Comprehensive SEO audit across the built site
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const SITE = 'https://painthubdubai.ae';

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const pick = (html, re) => decode((html.match(re) || [, ''])[1]);
const count = (html, re) => (html.match(re) || []).length;
const all = (html, re) => [...html.matchAll(re)];

const files = walk(root);
const pages = [];
const allTitles = new Map();
const allDescs = new Map();

console.log('\n🔎 Auditing ' + files.length + ' pages...\n');

for (const file of files) {
  const html = readFileSync(file, 'utf-8');
  const rel = file.replace(/\\/g, '/').replace(/^dist\//, '');
  const url = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');

  // Basic meta
  const title = pick(html, /<title>([^<]+)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([^"]+)"/);
  const canonical = pick(html, /<link rel="canonical" href="([^"]+)"/);
  const robots = pick(html, /<meta name="robots" content="([^"]+)"/);
  const lang = pick(html, /<html [^>]*lang="([^"]+)"/);
  const viewport = pick(html, /<meta name="viewport" content="([^"]+)"/);
  const ogTitle = pick(html, /<meta property="og:title" content="([^"]+)"/);
  const ogDesc = pick(html, /<meta property="og:description" content="([^"]+)"/);
  const ogImage = pick(html, /<meta property="og:image" content="([^"]+)"/);
  const ogUrl = pick(html, /<meta property="og:url" content="([^"]+)"/);
  const twitterCard = pick(html, /<meta name="twitter:card" content="([^"]+)"/);
  const geoRegion = pick(html, /<meta name="geo.region" content="([^"]+)"/);

  // Headings
  const h1s = all(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g).map((m) => decode(m[1].replace(/<[^>]+>/g, '').trim()));
  const h2s = all(html, /<h2[^>]*>([\s\S]*?)<\/h2>/g).map((m) => decode(m[1].replace(/<[^>]+>/g, '').trim()));
  const h3s = count(html, /<h3[\s>]/g);

  // Schemas (parse and collect types)
  const jsonLdBlocks = all(html, /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g);
  const schemas = [];
  let invalidSchemas = 0;
  for (const m of jsonLdBlocks) {
    try {
      const j = JSON.parse(m[1]);
      const arr = Array.isArray(j) ? j : [j];
      for (const item of arr) {
        const t = item['@type'];
        schemas.push(Array.isArray(t) ? t.join('+') : (t || 'UNKNOWN'));
      }
    } catch {
      invalidSchemas++;
    }
  }

  // Links
  const linkMatches = all(html, /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g);
  const links = linkMatches.map((m) => ({
    href: m[1],
    text: m[2].replace(/<[^>]+>/g, '').trim(),
  }));
  const internalLinks = links.filter((l) => l.href.startsWith('/') && !l.href.startsWith('//'));
  const externalLinks = links.filter((l) => l.href.startsWith('http') && !l.href.includes('painthubdubai.ae'));
  const opaqueAnchors = links.filter((l) => /^(click here|read more|here|learn more)$/i.test(l.text));
  const emptyAnchors = links.filter((l) => !l.text);
  const externalNoRel = externalLinks.filter((l) => {
    const fullTag = (html.match(new RegExp(`<a[^>]+href="${l.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`)) || [''])[0];
    return l.href.startsWith('http') && !/rel=/.test(fullTag) && !l.href.includes('wa.me') && !l.href.startsWith('mailto:') && !l.href.startsWith('tel:');
  });

  // Images
  const imgs = all(html, /<img[^>]+>/g);
  const imgsNoAlt = imgs.filter((m) => !/\salt=/i.test(m[0]));
  const imgsNoDim = imgs.filter((m) => !/\swidth=/i.test(m[0]) || !/\sheight=/i.test(m[0]));

  // SVGs without aria-hidden or aria-label
  const svgs = all(html, /<svg[^>]*>/g);
  const svgsNoLabel = svgs.filter((m) => !/aria-hidden|aria-label/.test(m[0]));

  // Content (text-only) length
  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = bodyText.split(/\s+/).length;

  // Track duplicates
  if (allTitles.has(title)) allTitles.get(title).push(url); else allTitles.set(title, [url]);
  if (allDescs.has(desc)) allDescs.get(desc).push(url); else allDescs.set(desc, [url]);

  // Issues
  const issues = [];
  // Critical
  if (!title) issues.push({ sev: 'CRIT', code: 'NO_TITLE' });
  if (!desc) issues.push({ sev: 'CRIT', code: 'NO_DESC' });
  if (!canonical) issues.push({ sev: 'CRIT', code: 'NO_CANONICAL' });
  if (h1s.length === 0) issues.push({ sev: 'CRIT', code: 'NO_H1' });
  if (h1s.length > 1) issues.push({ sev: 'CRIT', code: `MULTIPLE_H1(${h1s.length})` });
  if (invalidSchemas > 0) issues.push({ sev: 'CRIT', code: `INVALID_JSONLD(${invalidSchemas})` });
  if (!lang) issues.push({ sev: 'CRIT', code: 'NO_LANG' });
  if (!viewport) issues.push({ sev: 'CRIT', code: 'NO_VIEWPORT' });

  // High
  if (title && title.length > 60) issues.push({ sev: 'HIGH', code: `TITLE_LONG(${title.length})` });
  if (desc && desc.length > 165) issues.push({ sev: 'HIGH', code: `DESC_LONG(${desc.length})` });
  if (desc && desc.length < 70) issues.push({ sev: 'HIGH', code: `DESC_SHORT(${desc.length})` });
  if (!ogImage) issues.push({ sev: 'HIGH', code: 'NO_OG_IMAGE' });
  if (canonical && ogUrl && canonical !== ogUrl) issues.push({ sev: 'HIGH', code: 'CANONICAL_OG_MISMATCH' });
  if (schemas.length === 0 && !url.startsWith('/404')) issues.push({ sev: 'HIGH', code: 'NO_SCHEMA' });
  if (canonical && !canonical.startsWith(SITE)) issues.push({ sev: 'HIGH', code: 'CANONICAL_WRONG_DOMAIN' });
  if (opaqueAnchors.length) issues.push({ sev: 'HIGH', code: `OPAQUE_ANCHORS(${opaqueAnchors.length})` });

  // Medium
  if (!ogTitle) issues.push({ sev: 'MED', code: 'NO_OG_TITLE' });
  if (!twitterCard) issues.push({ sev: 'MED', code: 'NO_TWITTER_CARD' });
  if (!robots) issues.push({ sev: 'MED', code: 'NO_ROBOTS_META' });
  if (svgsNoLabel.length > 0) issues.push({ sev: 'MED', code: `SVG_NO_LABEL(${svgsNoLabel.length})` });
  if (imgsNoAlt.length > 0) issues.push({ sev: 'MED', code: `IMG_NO_ALT(${imgsNoAlt.length})` });
  if (imgsNoDim.length > 0) issues.push({ sev: 'MED', code: `IMG_NO_DIM(${imgsNoDim.length})` });
  if (externalNoRel.length > 0) issues.push({ sev: 'MED', code: `EXT_NO_REL(${externalNoRel.length})` });
  if (wordCount < 300 && !url.startsWith('/404')) issues.push({ sev: 'MED', code: `THIN_CONTENT(${wordCount}w)` });
  if (emptyAnchors.length > 0) issues.push({ sev: 'MED', code: `EMPTY_ANCHORS(${emptyAnchors.length})` });
  if (!geoRegion) issues.push({ sev: 'LOW', code: 'NO_GEO' });

  pages.push({
    url, title, desc, canonical, ogUrl, ogImage,
    h1: h1s[0], h2Count: h2s.length, h3Count: h3s,
    schemas, schemaCount: schemas.length,
    internalLinkCount: internalLinks.length,
    externalLinkCount: externalLinks.length,
    wordCount,
    issues,
  });
}

pages.sort((a, b) => a.url.localeCompare(b.url));

// Print page-by-page table
console.log('PAGE TABLE');
console.log('┌' + '─'.repeat(120) + '┐');
console.log('│ ' + 'URL'.padEnd(38) + 'Title'.padEnd(6) + 'Desc'.padEnd(6) + 'H1'.padEnd(4) + 'H2'.padEnd(4) + 'Sch'.padEnd(5) + 'Words'.padEnd(7) + 'Issues');
console.log('├' + '─'.repeat(120) + '┤');
for (const p of pages) {
  const issuesStr = p.issues.length === 0 ? '✓' : p.issues.map((i) => `${i.sev}:${i.code}`).join(' ');
  console.log('│ ' + p.url.slice(0, 37).padEnd(38) +
    String(p.title.length).padEnd(6) +
    String(p.desc.length).padEnd(6) +
    String(p.h1 ? 1 : 0).padEnd(4) +
    String(p.h2Count).padEnd(4) +
    String(p.schemaCount).padEnd(5) +
    String(p.wordCount).padEnd(7) +
    issuesStr.slice(0, 60));
}
console.log('└' + '─'.repeat(120) + '┘');

// Duplicate detection
console.log('\n📋 DUPLICATE TITLE / DESCRIPTION CHECK');
const dupTitles = [...allTitles.entries()].filter(([_, urls]) => urls.length > 1);
const dupDescs = [...allDescs.entries()].filter(([_, urls]) => urls.length > 1);
if (dupTitles.length === 0) console.log('  ✓ No duplicate titles');
else dupTitles.forEach(([t, urls]) => console.log(`  ⚠ Duplicate title "${t}" on: ${urls.join(', ')}`));
if (dupDescs.length === 0) console.log('  ✓ No duplicate descriptions');
else dupDescs.forEach(([d, urls]) => console.log(`  ⚠ Duplicate description on: ${urls.join(', ')}`));

// Schema coverage
console.log('\n🧬 SCHEMA TYPE COVERAGE');
const schemaTypes = new Map();
for (const p of pages) for (const t of p.schemas) schemaTypes.set(t, (schemaTypes.get(t) || 0) + 1);
[...schemaTypes.entries()].sort((a, b) => b[1] - a[1]).forEach(([t, n]) => console.log(`  ${String(n).padStart(3)} × ${t}`));

// Internal link health
console.log('\n🔗 INTERNAL LINK GRAPH');
let totalInternal = 0, totalExternal = 0;
const linkTargets = new Set();
for (const file of files) {
  const html = readFileSync(file, 'utf-8');
  const matches = all(html, /href="([^"]+)"/g);
  for (const m of matches) {
    if (m[1].startsWith('/') && !m[1].startsWith('//')) {
      totalInternal++;
      linkTargets.add(m[1].split('#')[0]);
    } else if (m[1].startsWith('http')) {
      totalExternal++;
    }
  }
}
console.log(`  Total internal links: ${totalInternal}`);
console.log(`  Total external links: ${totalExternal}`);
console.log(`  Unique internal targets: ${linkTargets.size}`);

// Check internal targets resolve (deep-link sanity)
const brokenInternal = [];
for (const target of linkTargets) {
  if (target === '/' || target.startsWith('/api/') || target.startsWith('/sitemap') || target.startsWith('/rss')) continue;
  const candidates = [
    `dist${target}.html`,
    `dist${target}/index.html`,
    `dist${target}`,
  ];
  const found = candidates.some((c) => existsSync(c) && statSync(c).isFile());
  if (!found) brokenInternal.push(target);
}
if (brokenInternal.length === 0) console.log('  ✓ All internal links resolve to built pages');
else { console.log('  ⚠ Broken internal targets:'); brokenInternal.forEach((t) => console.log(`    - ${t}`)); }

// Sitemap check
console.log('\n🗺  SITEMAP & ROBOTS');
const sitemapIdx = 'dist/sitemap-index.xml';
const sitemap0 = 'dist/sitemap-0.xml';
const robotsTxt = 'dist/robots.txt';
[sitemapIdx, sitemap0, robotsTxt].forEach((f) => {
  if (existsSync(f)) {
    const sz = statSync(f).size;
    console.log(`  ✓ ${f.replace('dist/', '/')} (${sz} bytes)`);
    if (f.endsWith('.xml')) {
      const c = readFileSync(f, 'utf-8');
      const urls = (c.match(/<loc>/g) || []).length;
      console.log(`     contains ${urls} URLs`);
    }
  } else console.log(`  ⚠ MISSING: ${f}`);
});

// Public asset check
console.log('\n🖼  KEY PUBLIC ASSETS');
['og-default.jpg', 'logo.png', 'favicon.svg', 'apple-touch-icon.png', 'icon-192.png', 'site.webmanifest'].forEach((f) => {
  const p = `dist/${f}`;
  if (existsSync(p)) console.log(`  ✓ /${f} (${statSync(p).size} bytes)`);
  else console.log(`  ⚠ MISSING: /${f}`);
});

// Issue summary
console.log('\n🎯 ISSUE SUMMARY');
const sevCount = { CRIT: 0, HIGH: 0, MED: 0, LOW: 0 };
const codeCount = new Map();
for (const p of pages) for (const i of p.issues) {
  sevCount[i.sev]++;
  codeCount.set(i.code.split('(')[0], (codeCount.get(i.code.split('(')[0]) || 0) + 1);
}
console.log(`  Critical: ${sevCount.CRIT}`);
console.log(`  High:     ${sevCount.HIGH}`);
console.log(`  Medium:   ${sevCount.MED}`);
console.log(`  Low:      ${sevCount.LOW}`);
console.log('\n  Top issues by code:');
[...codeCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([c, n]) => console.log(`    ${String(n).padStart(3)} × ${c}`));

const cleanCount = pages.filter((p) => p.issues.length === 0).length;
console.log(`\n  ✓ Clean pages: ${cleanCount} / ${pages.length}`);
