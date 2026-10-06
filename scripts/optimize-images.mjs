// Usage: node scripts/optimize-images.mjs
// Source photos live in scripts/originals (not shipped). Output goes to public/images.
//  - work photos  -> public/images/work/<name>.webp   (max 1600px on the long side, q80)
//  - avatars      -> public/images/avatars/<name>.webp (160x160 cover, q78)
//  - backgrounds  -> public/images/backgrounds/<name>.webp (max 1600px, q70)
import { mkdir, readdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const originals = join(root, 'scripts', 'originals');
const publicImages = join(root, 'public', 'images');

const WORK = [
  'deck-before',
  'deck-boards',
  'deck-finished',
  'deck-frame-painting',
  'deck-staining',
  'door-before-after',
  'bench-before',
  'bench-after',
  'shed-before',
  'shed-after',
];
const BACKGROUNDS = ['services-bg'];

async function ensure(dir) {
  await mkdir(dir, { recursive: true });
}

async function find(dir, name) {
  const files = await readdir(dir);
  const hit = files.find((f) => parse(f).name === name);
  if (!hit) throw new Error(`Missing original: ${name} in ${dir}`);
  return join(dir, hit);
}

const report = [];

async function convert(input, output, pipeline) {
  const info = await pipeline(sharp(input).rotate()).toFile(output);
  report.push(`${parse(output).base.padEnd(28)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}

await ensure(join(publicImages, 'work'));
await ensure(join(publicImages, 'avatars'));
await ensure(join(publicImages, 'backgrounds'));

for (const name of WORK) {
  await convert(await find(originals, name), join(publicImages, 'work', `${name}.webp`), (s) =>
    s.resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80, effort: 5 }),
  );
}

for (const name of BACKGROUNDS) {
  await convert(await find(originals, name), join(publicImages, 'backgrounds', `${name}.webp`), (s) =>
    s.resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 70, effort: 5 }),
  );
}

const avatarDir = join(originals, 'avatars');
for (const file of await readdir(avatarDir)) {
  const { name } = parse(file);
  await convert(join(avatarDir, file), join(publicImages, 'avatars', `${name}.webp`), (s) =>
    s.resize(160, 160, { fit: 'cover', position: 'attention' }).webp({ quality: 78, effort: 5 }),
  );
}

console.log(report.join('\n'));
