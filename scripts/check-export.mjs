import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(fileURLToPath(new URL('..', import.meta.url)));
const outDir = join(rootDir, 'out');

console.log('🔍 Running comprehensive static export & codebase verification on:', outDir);

if (!existsSync(outDir)) {
  console.error('❌ Error: out/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const errors = [];

function getFilesRecursively(dir) {
  let results = [];
  if (!existsSync(dir)) return results;
  const list = readdirSync(dir);
  for (const file of list) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function hasCodeComments(source, ext) {
  if (ext === '.css') {
    return /\/\*[\s\S]*?\*\//.test(source);
  }
  const strippedStrings = source
    .replace(/`(?:\\[\s\S]|[^`\\])*`/g, '""')
    .replace(/'(?:\\.|[^'\\])*'/g, '""')
    .replace(/"(?:\\.|[^"\\])*"/g, '""');

  if (/\/\*[\s\S]*?\*\//.test(strippedStrings)) {
    return true;
  }
  const lines = strippedStrings.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || /(?:^|\s)\/\/(?![/])/.test(line)) {
      return true;
    }
  }
  return false;
}

const sourceFilesToCheck = [
  ...getFilesRecursively(join(rootDir, 'app')),
  ...getFilesRecursively(join(rootDir, 'src')),
  ...getFilesRecursively(join(rootDir, 'scripts')),
  join(rootDir, 'next.config.ts'),
  join(rootDir, 'eslint.config.mjs'),
  join(rootDir, 'postcss.config.mjs'),
  join(rootDir, 'lighthouserc.js'),
].filter((f) => /\.(ts|tsx|css|mjs|js)$/.test(f));

const filesWithComments = [];
for (const file of sourceFilesToCheck) {
  const ext = file.slice(file.lastIndexOf('.'));
  const content = readFileSync(file, 'utf8');
  if (hasCodeComments(content, ext)) {
    filesWithComments.push(relative(rootDir, file).replace(/\\/g, '/'));
  }
}

if (filesWithComments.length > 0) {
  errors.push(`Found code comments in ${filesWithComments.length} file(s): ${filesWithComments.join(', ')}`);
} else {
  console.log(`  ✔ Zero code comments across ${sourceFilesToCheck.length} source/config files`);
}

const allSourceContent = [
  ...getFilesRecursively(join(rootDir, 'app')),
  ...getFilesRecursively(join(rootDir, 'src')),
]
  .filter((f) => /\.(ts|tsx|css)$/.test(f))
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n');

const publicImages = getFilesRecursively(join(rootDir, 'public', 'images'));
const unusedImages = [];
for (const imgPath of publicImages) {
  const webPath = '/' + relative(join(rootDir, 'public'), imgPath).replace(/\\/g, '/');
  if (!allSourceContent.includes(webPath)) {
    unusedImages.push(webPath);
  }
}

if (unusedImages.length > 0) {
  errors.push(`Found ${unusedImages.length} unused image(s) in public/images: ${unusedImages.join(', ')}`);
} else {
  console.log(`  ✔ All ${publicImages.length} images in public/images are actively used`);
}

const requiredOutAssets = [
  'index.html',
  'about/index.html',
  'book/index.html',
  'services/handyman/index.html',
  'services/painting/index.html',
  'privacy/index.html',
  'terms/index.html',
  'sitemap.xml',
  'robots.txt',
  'manifest.webmanifest',
  'apple-icon.png',
  'icon.svg',
  'og/og-default.jpg',
];

for (const reqFile of requiredOutAssets) {
  const full = join(outDir, reqFile);
  if (!existsSync(full)) {
    errors.push(`Missing required build artifact: out/${reqFile}`);
  }
}
console.log(`  ✔ All ${requiredOutAssets.length} required build artifacts exist in out/`);

const notFoundPath = existsSync(join(outDir, '404.html'))
  ? join(outDir, '404.html')
  : existsSync(join(outDir, '404', 'index.html'))
  ? join(outDir, '404', 'index.html')
  : null;

if (!notFoundPath) {
  errors.push('Missing out/404.html (or out/404/index.html)');
} else {
  const content404 = readFileSync(notFoundPath, 'utf8');
  if (!/\bnoindex\b/i.test(content404)) {
    errors.push('404 page does not contain "noindex"');
  } else {
    console.log(`  ✔ ${relative(outDir, notFoundPath)} contains noindex directive`);
  }
}

const imagesDir = join(outDir, 'images');
if (existsSync(imagesDir)) {
  const imageFiles = getFilesRecursively(imagesDir);
  const jpgFiles = imageFiles.filter((f) => /\.jpg$/i.test(f));
  if (jpgFiles.length > 0) {
    errors.push(
      `Found ${jpgFiles.length} .jpg file(s) under out/images: ${jpgFiles
        .map((f) => relative(outDir, f))
        .join(', ')}`
    );
  } else {
    console.log('  ✔ Zero legacy .jpg files under out/images');
  }
}

function getExpectedCanonical(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  if (normalized === 'index.html') {
    return 'https://brightnestpro.ca/';
  }
  if (normalized.endsWith('/index.html')) {
    const route = normalized.slice(0, -'index.html'.length);
    return `https://brightnestpro.ca/${route}`;
  }
  if (normalized.endsWith('.html')) {
    const route = normalized.slice(0, -'.html'.length);
    return `https://brightnestpro.ca/${route}/`;
  }
  return `https://brightnestpro.ca/${normalized}`;
}

function getRouteFromRelPath(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  if (normalized === 'index.html') return '/';
  if (normalized.endsWith('/index.html')) {
    return '/' + normalized.slice(0, -'index.html'.length);
  }
  return '/' + normalized;
}

const allFiles = getFilesRecursively(outDir);
const htmlFiles = allFiles.filter((file) => {
  if (!file.endsWith('.html')) return false;
  const rel = relative(outDir, file).replace(/\\/g, '/');
  if (rel === '404.html' || rel.startsWith('404/')) return false;
  if (rel.startsWith('_not-found/') || rel === '_not-found.html') return false;
  return true;
});

const seenCanonicals = new Map();
const seenTitles = new Map();
const seenDescriptions = new Map();
const pageHtmlByRoute = new Map();
const incomingLinksCount = new Map();

for (const file of htmlFiles) {
  const relPath = relative(outDir, file).replace(/\\/g, '/');
  const route = getRouteFromRelPath(relPath);
  const content = readFileSync(file, 'utf8');
  pageHtmlByRoute.set(route, content);
  if (!incomingLinksCount.has(route)) {
    incomingLinksCount.set(route, 0);
  }
}

let totalJsonLdBlocks = 0;
let totalInternalLinksChecked = 0;
let totalImagesChecked = 0;

for (const file of htmlFiles) {
  const relPath = relative(outDir, file).replace(/\\/g, '/');
  const currentRoute = getRouteFromRelPath(relPath);
  const content = pageHtmlByRoute.get(currentRoute);
  const pageErrors = [];

  const linkTags = content.match(/<link\b[^>]*>/gi) || [];
  const canonicalHrefs = [];
  for (const tag of linkTags) {
    if (/\brel\s*=\s*["']canonical["']/i.test(tag)) {
      const match = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i);
      canonicalHrefs.push(match ? match[1] : null);
    }
  }

  const expectedCanonical = getExpectedCanonical(relPath);

  if (canonicalHrefs.length === 0) {
    pageErrors.push(`Missing <link rel="canonical"> (expected: ${expectedCanonical})`);
  } else if (canonicalHrefs.length > 1) {
    pageErrors.push(
      `Found multiple (${canonicalHrefs.length}) canonical links: ${canonicalHrefs.join(', ')}`
    );
  } else {
    const href = canonicalHrefs[0];
    if (href !== expectedCanonical) {
      pageErrors.push(`Canonical href mismatch: found "${href}", expected "${expectedCanonical}"`);
    } else if (seenCanonicals.has(href)) {
      pageErrors.push(
        `Duplicate canonical href "${href}" already defined in ${seenCanonicals.get(href)}`
      );
    } else {
      seenCanonicals.set(href, relPath);
    }
  }

  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    pageErrors.push('Missing or empty <title>');
  } else {
    const title = titleMatch[1].trim();
    if (seenTitles.has(title)) {
      pageErrors.push(`Duplicate <title> "${title}" also used in ${seenTitles.get(title)}`);
    } else {
      seenTitles.set(title, relPath);
    }
  }

  const h1Matches = content.match(/<h1\b[^>]*>/gi) || [];
  if (h1Matches.length === 0) {
    pageErrors.push('Missing <h1> heading');
  } else if (h1Matches.length > 1) {
    pageErrors.push(`Found multiple (${h1Matches.length}) <h1> headings`);
  }

  if (!/\bid\s*=\s*["']main-content["']/i.test(content)) {
    pageErrors.push('Missing id="main-content" landmark target for skip-link');
  }

  const metaTags = content.match(/<meta\b[^>]*>/gi) || [];
  let descContent = null;
  for (const tag of metaTags) {
    if (/\bname\s*=\s*["']description["']/i.test(tag)) {
      const m = tag.match(/\bcontent\s*=\s*["']([^"']+)["']/i);
      if (m && m[1].trim()) descContent = m[1].trim();
    }
  }
  if (!descContent) {
    pageErrors.push('Missing or empty <meta name="description"> tag');
  } else if (seenDescriptions.has(descContent)) {
    pageErrors.push(`Duplicate meta description also used in ${seenDescriptions.get(descContent)}`);
  } else {
    seenDescriptions.set(descContent, relPath);
  }

  const htmlTagMatch = content.match(/<html\b[^>]*>/i);
  if (!htmlTagMatch || !/\blang\s*=\s*["']en-CA["']/i.test(htmlTagMatch[0])) {
    const actualLang = htmlTagMatch ? htmlTagMatch[0] : 'None';
    pageErrors.push(`<html lang="en-CA"> missing or invalid (found: ${actualLang})`);
  }

  const jsonLdRegex = /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonLdMatch;
  let pageJsonLdCount = 0;
  while ((jsonLdMatch = jsonLdRegex.exec(content)) !== null) {
    pageJsonLdCount++;
    totalJsonLdBlocks++;
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      if (parsed['@context'] !== 'https://schema.org') {
        pageErrors.push(`JSON-LD block #${pageJsonLdCount} has invalid @context: ${parsed['@context']}`);
      }
    } catch (e) {
      pageErrors.push(`Invalid JSON-LD block #${pageJsonLdCount}: ${e.message}`);
    }
  }
  if (pageJsonLdCount === 0) {
    pageErrors.push('No JSON-LD structured data found on page');
  }

  const imgTags = content.match(/<img\b[^>]*>/gi) || [];
  for (const imgTag of imgTags) {
    const srcMatch = imgTag.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
    if (srcMatch && srcMatch[1].startsWith('/')) {
      totalImagesChecked++;
      const cleanSrc = srcMatch[1].split('?')[0];
      const diskPath = join(outDir, cleanSrc);
      if (!existsSync(diskPath)) {
        pageErrors.push(`Broken image src="${srcMatch[1]}" (missing out${cleanSrc})`);
      }
    }
  }

  const anchorTags = content.match(/<a\b[^>]*>/gi) || [];
  for (const aTag of anchorTags) {
    const hrefMatch = aTag.match(/\bhref\s*=\s*["']([^"']+)["']/i);
    if (!hrefMatch) continue;
    const rawHref = hrefMatch[1];
    if (rawHref.startsWith('tel:') || rawHref.startsWith('mailto:') || rawHref.startsWith('http://') || rawHref.startsWith('https://')) {
      continue;
    }
    totalInternalLinksChecked++;

    if (rawHref.startsWith('#')) {
      const targetId = rawHref.slice(1);
      if (targetId && !new RegExp(`\\bid\\s*=\\s*["']${targetId}["']`, 'i').test(content)) {
        pageErrors.push(`Broken same-page anchor href="${rawHref}" (id="${targetId}" not found on ${relPath})`);
      }
      continue;
    }

    if (rawHref.startsWith('/')) {
      const [pathPart, hashPart] = rawHref.split('#');
      const cleanPath = pathPart.split('?')[0];
      const normalizedRoute = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;

      if (!pageHtmlByRoute.has(normalizedRoute)) {
        pageErrors.push(`Broken internal link href="${rawHref}" (route "${normalizedRoute}" not found in out/)`);
      } else {
        if (normalizedRoute !== currentRoute) {
          incomingLinksCount.set(normalizedRoute, (incomingLinksCount.get(normalizedRoute) || 0) + 1);
        }
        if (hashPart) {
          const targetHtml = pageHtmlByRoute.get(normalizedRoute);
          if (!new RegExp(`\\bid\\s*=\\s*["']${hashPart}["']`, 'i').test(targetHtml)) {
            pageErrors.push(`Broken hash link href="${rawHref}" (id="${hashPart}" not found on route "${normalizedRoute}")`);
          }
        }
      }
    }
  }

  if (pageErrors.length > 0) {
    errors.push(`Page "${relPath}":\n  - ${pageErrors.join('\n  - ')}`);
  }
}

for (const [route, count] of incomingLinksCount.entries()) {
  if (route !== '/' && count === 0) {
    errors.push(`Orphan page detected: route "${route}" has 0 incoming internal links from other pages`);
  }
}

const sitemapContent = readFileSync(join(outDir, 'sitemap.xml'), 'utf8');
for (const canonicalUrl of seenCanonicals.keys()) {
  if (!sitemapContent.includes(`<loc>${canonicalUrl}</loc>`)) {
    errors.push(`Canonical URL missing from sitemap.xml: ${canonicalUrl}`);
  }
}

console.log(`  ✔ Validated ${htmlFiles.length} indexable HTML pages (titles, descriptions, canonicals, H1s, landmarks)`);
console.log(`  ✔ Validated ${totalJsonLdBlocks} JSON-LD structured data blocks`);
console.log(`  ✔ Validated ${totalInternalLinksChecked} internal links & hash anchors (0 orphan pages)`);
console.log(`  ✔ Validated ${totalImagesChecked} HTML <img> references`);

if (errors.length > 0) {
  console.error('\n❌ Verification failed with errors:');
  for (const err of errors) {
    console.error(`\n${err}`);
  }
  process.exit(1);
}

console.log('\n✅ All static export, SEO, accessibility, link, asset & zero-comment assertions passed!\n');
process.exit(0);
