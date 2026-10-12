#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(fileURLToPath(new URL('..', import.meta.url)));
const outDir = join(rootDir, 'out');

console.log('🔍 Running static export validation on:', outDir);

if (!existsSync(outDir)) {
  console.error('❌ Error: out/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const errors = [];
const checkedPages = [];

// Recursive file collector
function getFilesRecursively(dir) {
  let results = [];
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

const allFiles = getFilesRecursively(outDir);

// Check sitemap.xml and robots.txt
const sitemapPath = join(outDir, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  errors.push('Missing out/sitemap.xml');
} else {
  console.log('  ✔ out/sitemap.xml exists');
}

const robotsPath = join(outDir, 'robots.txt');
if (!existsSync(robotsPath)) {
  errors.push('Missing out/robots.txt');
} else {
  console.log('  ✔ out/robots.txt exists');
}

// Check 404.html contains noindex (handle both 404.html and 404/index.html with trailingSlash)
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

// Check no .jpg under out/images
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
    console.log('  ✔ No .jpg files found under out/images');
  }
} else {
  console.log('  ✔ out/images directory not present or empty');
}

// Expected canonical URL mapper
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

// Filter HTML files excluding 404 pages and _not-found/**
const htmlFiles = allFiles.filter((file) => {
  if (!file.endsWith('.html')) return false;
  const rel = relative(outDir, file).replace(/\\/g, '/');
  if (rel === '404.html' || rel.startsWith('404/')) return false;
  if (rel.startsWith('_not-found/') || rel === '_not-found.html') return false;
  return true;
});

const seenCanonicals = new Map();

for (const file of htmlFiles) {
  const relPath = relative(outDir, file).replace(/\\/g, '/');
  const content = readFileSync(file, 'utf8');
  const pageErrors = [];

  // (a) Exactly one <link rel="canonical" href="...">
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
    } else {
      // (b) Unique across pages
      if (seenCanonicals.has(href)) {
        pageErrors.push(
          `Duplicate canonical href "${href}" already defined in ${seenCanonicals.get(href)}`
        );
      } else {
        seenCanonicals.set(href, relPath);
      }
    }
  }

  // (c) Exactly one <h1>
  const h1Matches = content.match(/<h1\b[^>]*>/gi) || [];
  if (h1Matches.length === 0) {
    pageErrors.push('Missing <h1> heading');
  } else if (h1Matches.length > 1) {
    pageErrors.push(`Found multiple (${h1Matches.length}) <h1> headings`);
  }

  // (d) Meta description exists
  const metaTags = content.match(/<meta\b[^>]*>/gi) || [];
  const hasMetaDesc = metaTags.some(
    (tag) =>
      /\bname\s*=\s*["']description["']/i.test(tag) &&
      /\bcontent\s*=\s*["'][^"']+["']/i.test(tag)
  );
  if (!hasMetaDesc) {
    pageErrors.push('Missing or empty <meta name="description"> tag');
  }

  // (e) <html lang="en-CA">
  const htmlTagMatch = content.match(/<html\b[^>]*>/i);
  if (!htmlTagMatch || !/\blang\s*=\s*["']en-CA["']/i.test(htmlTagMatch[0])) {
    const actualLang = htmlTagMatch ? htmlTagMatch[0] : 'None';
    pageErrors.push(`<html lang="en-CA"> missing or invalid (found: ${actualLang})`);
  }

  if (pageErrors.length > 0) {
    errors.push(`Page "${relPath}":\n  - ${pageErrors.join('\n  - ')}`);
  } else {
    checkedPages.push(relPath);
  }
}

console.log(`\n📄 Scanned ${htmlFiles.length} HTML pages successfully.`);

if (errors.length > 0) {
  console.error('\n❌ Export verification failed with errors:');
  for (const err of errors) {
    console.error(`\n${err}`);
  }
  process.exit(1);
}

console.log('✅ All static export assertions passed successfully!\n');
process.exit(0);
