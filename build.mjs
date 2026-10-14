// Builds a single self-contained index.html (every image in assets/ embedded as a data URI),
// so the game works when opened directly or uploaded to any static host.
// Usage: node build.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const TYPES = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg' };
const dir = new URL('.', import.meta.url);
let out = readFileSync(new URL('game.src.html', dir), 'utf8');
for (const f of readdirSync(new URL('assets/', dir))) {
  const type = TYPES[f.split('.').pop().toLowerCase()];
  if (!type) continue;
  const img = readFileSync(new URL(`assets/${f}`, dir)).toString('base64');
  out = out.replaceAll(`assets/${f}`, `data:${type};base64,${img}`);
}
writeFileSync(new URL('index.html', dir), out);
console.log(`index.html written (${(out.length / 1024).toFixed(0)} KB)`);
