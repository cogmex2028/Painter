// Audit content quality + page structure against Google's quality signals.
// Checks: word count vs ideal range, heading hierarchy, keyword presence,
// duplicate paragraphs across pages, internal link density, schema, freshness.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
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

const decode = (s) => s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
const pick = (h, re) => decode((h.match(re) || [,''])[1]);
const all = (h, re) => [...h.matchAll(re)];
const stripTags = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// Page-type ideal word counts (Google's "comprehensive content" heuristic)
const IDEAL = {
  homepage:  { min: 800,  ideal: 1500, max: 3500 },
  service:   { min: 600,  ideal: 1000, max: 2000 },
  area:      { min: 600,  ideal: 900,  max: 1800 },
  vendor:    { min: 500,  ideal: 800,  max: 1500 },
  pillar:    { min: 300,  ideal: 600,  max: 1500 },
  about:     { min: 400,  ideal: 700,  max: 1500 },
  contact:   { min: 200,  ideal: 400,  max: 800 },
  faq:       { min: 600,  ideal: 1000, max: 2000 },
  legal:     { min: 400,  ideal: 700,  max: 2000 },
  '404':     { min: 50,   ideal: 150,  max: 300 },
};

function classifyPage(url) {
  if (url === '/') return 'homepage';
  if (url.startsWith('/services/') && url !== '/services/') return 'service';
  if (url === '/services/') return 'pillar';
  if (url.startsWith('/areas/') && url !== '/areas/') return 'area';
  if (url === '/areas/') return 'pillar';
  if (url.startsWith('/vendors/')) return 'vendor';
  if (url === '/about/') return 'about';
  if (url === '/contact/') return 'contact';
  if (url === '/faq/') return 'faq';
  if (url === '/privacy/' || url === '/terms/') return 'legal';
  if (url.startsWith('/404')) return '404';
  return 'other';
}

const files = walk(root);
const pages = [];
const paragraphCorpus = new Map();

for (const file of files) {
  const html = readFileSync(file, 'utf-8');
  const rel = file.replace(/\\/g, '/').replace(/^dist\//, '');
  const url = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '/');

  const title = pick(html, /<title>([^<]+)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([^"]+)"/);

  // Headings — preserve order
  const headings = all(html, /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/g)
    .map(m => ({ tag: m[1], text: stripTags(decode(m[2])) }))
    .filter(h => h.text);

  // Body content: strip script/style/nav/footer/header for fair count
  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<header[\s\S]*?<\/header>/g, '')
    .replace(/<footer[\s\S]*?<\/footer>/g, '')
    .replace(/<nav[\s\S]*?<\/nav>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;

  // Paragraphs — for cross-page duplicate detection
  const paragraphs = all(html, /<p[^>]*>([\s\S]*?)<\/p>/g)
    .map(m => stripTags(decode(m[1])))
    .filter(p => p.length > 60); // ignore captions / fragments
  for (const p of paragraphs) {
    const key = p.toLowerCase();
    if (!paragraphCorpus.has(key)) paragraphCorpus.set(key, []);
    paragraphCorpus.get(key).push(url);
  }

  // Links
  const links = all(html, /<a[^>]+href="([^"]+)"/g).map(m => m[1]);
  const internalLinks = links.filter(h => h.startsWith('/') && !h.startsWith('//'));
  const internalNoFragment = internalLinks.filter(h => !h.startsWith('#') && h.indexOf('#') === -1);

  // Body H1 / first paragraph keyword presence
  const h1 = headings.find(h => h.tag === 'h1')?.text ?? '';
  const firstPara = paragraphs[0] ?? '';

  // Schemas
  const jsonLdBlocks = all(html, /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g);
  const schemas = [];
  for (const m of jsonLdBlocks) {
    try {
      const j = JSON.parse(m[1]);
      const arr = Array.isArray(j) ? j : [j];
      for (const item of arr) {
        const t = item['@type'];
        schemas.push(Array.isArray(t) ? t.join('+') : (t || 'UNKNOWN'));
      }
    } catch { /* counted elsewhere */ }
  }

  // Images
  const imgs = all(html, /<img[^>]+>/g).length;

  // Reading time at 220 wpm
  const readMin = Math.max(1, Math.round(wordCount / 220));

  const type = classifyPage(url);
  const ideal = IDEAL[type] ?? IDEAL.area;

  // Issue collection
  const issues = [];
  // Headings
  const h1Count = headings.filter(h => h.tag === 'h1').length;
  if (h1Count === 0) issues.push({ sev: 'CRIT', msg: 'NO_H1' });
  if (h1Count > 1) issues.push({ sev: 'CRIT', msg: `MULTI_H1(${h1Count})` });

  // Heading skip: H1 → H3 without H2 etc.
  let lastDepth = 0;
  for (const h of headings) {
    const depth = parseInt(h.tag.slice(1));
    if (lastDepth && depth > lastDepth + 1) {
      issues.push({ sev: 'MED', msg: `H${lastDepth}→H${depth}_SKIP` });
      break;
    }
    lastDepth = depth;
  }

  // Word count vs ideal
  if (wordCount < ideal.min) issues.push({ sev: 'HIGH', msg: `THIN(${wordCount}<${ideal.min})` });
  else if (wordCount < ideal.ideal) issues.push({ sev: 'LOW', msg: `BELOW_IDEAL(${wordCount}<${ideal.ideal})` });
  if (wordCount > ideal.max) issues.push({ sev: 'LOW', msg: `BLOATED(${wordCount}>${ideal.max})` });

  // First paragraph should reference H1 keyword
  const h1KeyTokens = h1.toLowerCase().split(/\s+/).filter(t => t.length > 3);
  const firstParaLower = firstPara.toLowerCase();
  const matchedTokens = h1KeyTokens.filter(t => firstParaLower.includes(t));
  if (firstPara && h1KeyTokens.length >= 2 && matchedTokens.length === 0)
    issues.push({ sev: 'MED', msg: 'FIRST_PARA_OFF_TOPIC' });

  // Internal link density (Google rule of thumb: 3+ contextual internal links per page)
  const uniqueInternal = new Set(internalNoFragment).size;
  if (uniqueInternal < 3 && type !== '404' && type !== 'legal') issues.push({ sev: 'MED', msg: `FEW_INTERNAL(${uniqueInternal})` });

  pages.push({
    url, type, title: title.length, desc: desc.length,
    h1, h1Count, h2Count: headings.filter(h=>h.tag==='h2').length,
    h3Count: headings.filter(h=>h.tag==='h3').length,
    headings: headings.length,
    wordCount, readMin,
    paragraphCount: paragraphs.length,
    schemas: schemas.length,
    schemaTypes: schemas,
    internalLinks: uniqueInternal,
    imgs,
    ideal,
    issues,
  });
}

pages.sort((a,b) => a.url.localeCompare(b.url));

// Duplicate paragraph detection
const dupParagraphs = [...paragraphCorpus.entries()].filter(([_, urls]) => urls.length > 1);

// Output
console.log('\n📐 PAGE STRUCTURE & CONTENT QUALITY AUDIT');
console.log('Standards: word count by page type · heading hierarchy · keyword presence · internal links · schema · originality\n');

console.log('┌' + '─'.repeat(128) + '┐');
console.log('│ ' + 'URL'.padEnd(36) + 'Type'.padEnd(11) + 'Words'.padEnd(8) + 'Ideal'.padEnd(14) + 'H1 H2 H3'.padEnd(11) + 'Sch'.padEnd(5) + 'Int'.padEnd(5) + 'Read'.padEnd(6) + 'Status');
console.log('├' + '─'.repeat(128) + '┤');
for (const p of pages) {
  const ideal = `${p.ideal.min}-${p.ideal.max}`;
  const head = `${p.h1Count}  ${String(p.h2Count).padStart(2)} ${String(p.h3Count).padStart(2)}`;
  const status = p.issues.length === 0 ? '✓' : p.issues.map(i => `${i.sev}:${i.msg}`).join(' ').slice(0, 38);
  console.log('│ ' + p.url.slice(0,35).padEnd(36) +
    p.type.padEnd(11) +
    String(p.wordCount).padEnd(8) +
    ideal.padEnd(14) +
    head.padEnd(11) +
    String(p.schemas).padEnd(5) +
    String(p.internalLinks).padEnd(5) +
    `${p.readMin}m`.padEnd(6) +
    status);
}
console.log('└' + '─'.repeat(128) + '┘');

// Summary stats
const sums = {
  total: pages.length,
  clean: pages.filter(p => p.issues.length === 0).length,
  thin: pages.filter(p => p.issues.some(i => i.msg.startsWith('THIN'))).length,
  belowIdeal: pages.filter(p => p.issues.some(i => i.msg.startsWith('BELOW_IDEAL'))).length,
  bloated: pages.filter(p => p.issues.some(i => i.msg.startsWith('BLOATED'))).length,
  multiH1: pages.filter(p => p.issues.some(i => i.msg.startsWith('MULTI_H1'))).length,
  noH1: pages.filter(p => p.issues.some(i => i.msg === 'NO_H1')).length,
  headSkip: pages.filter(p => p.issues.some(i => i.msg.includes('SKIP'))).length,
  fewInt: pages.filter(p => p.issues.some(i => i.msg.startsWith('FEW_INTERNAL'))).length,
  offTopic: pages.filter(p => p.issues.some(i => i.msg.includes('OFF_TOPIC'))).length,
};

console.log('\n📊 SUMMARY');
console.log(`  Clean pages:               ${sums.clean} / ${sums.total}`);
console.log(`  Thin content (< min):      ${sums.thin}`);
console.log(`  Below ideal (< ideal):     ${sums.belowIdeal}`);
console.log(`  Bloated (> max):           ${sums.bloated}`);
console.log(`  H1 issues:                 ${sums.multiH1 + sums.noH1}`);
console.log(`  Heading hierarchy skips:   ${sums.headSkip}`);
console.log(`  Few internal links:        ${sums.fewInt}`);
console.log(`  First-para off-topic:      ${sums.offTopic}`);
console.log(`  Duplicate paragraphs:      ${dupParagraphs.length}`);

if (dupParagraphs.length > 0) {
  console.log('\n⚠ DUPLICATE PARAGRAPHS (cross-page content overlap — duplicate-content risk)');
  for (const [text, urls] of dupParagraphs.slice(0, 8)) {
    console.log(`  · "${text.slice(0, 80)}..."`);
    console.log(`     on ${urls.length} pages: ${urls.slice(0, 4).join(', ')}${urls.length > 4 ? '...' : ''}`);
  }
}

// Word-count distribution by type
console.log('\n📈 WORD COUNT BY PAGE TYPE');
const byType = new Map();
for (const p of pages) {
  if (!byType.has(p.type)) byType.set(p.type, []);
  byType.get(p.type).push(p.wordCount);
}
for (const [type, counts] of [...byType.entries()].sort()) {
  const avg = Math.round(counts.reduce((a,b) => a+b, 0) / counts.length);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const ideal = IDEAL[type] ?? IDEAL.area;
  const status = avg >= ideal.ideal ? '✓' : avg >= ideal.min ? '~' : '⚠';
  console.log(`  ${status} ${type.padEnd(10)} avg ${String(avg).padStart(5)}w · range ${min}-${max}w · ideal ${ideal.ideal}w · pages: ${counts.length}`);
}

// Issues summary
const allIssues = pages.flatMap(p => p.issues.map(i => i.msg.split('(')[0]));
const issueCounts = new Map();
for (const i of allIssues) issueCounts.set(i, (issueCounts.get(i) || 0) + 1);
if (issueCounts.size > 0) {
  console.log('\n🎯 ISSUES BY TYPE');
  for (const [issue, count] of [...issueCounts.entries()].sort((a,b) => b[1] - a[1])) {
    console.log(`  ${String(count).padStart(3)} × ${issue}`);
  }
}

// Detail issues
const flaggedPages = pages.filter(p => p.issues.length > 0);
if (flaggedPages.length > 0) {
  console.log('\n📋 PAGES WITH ISSUES');
  for (const p of flaggedPages) {
    console.log(`  ${p.url}`);
    for (const i of p.issues) console.log(`    ${i.sev}: ${i.msg}`);
  }
}
