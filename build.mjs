// Builds a single self-contained index.html (every assets/*.png embedded as a data URI),
// so the game works when opened directly or uploaded to any static host.
// Usage: node build.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const dir = new URL('.', import.meta.url);
let out = readFileSync(new URL('game.src.html', dir), 'utf8');
for (const f of readdirSync(new URL('assets/', dir)).filter(f => f.endsWith('.png'))) {
  const img = readFileSync(new URL(`assets/${f}`, dir)).toString('base64');
  out = out.replaceAll(`assets/${f}`, `data:image/png;base64,${img}`);
}
writeFileSync(new URL('index.html', dir), out);
console.log(`index.html written (${(out.length / 1024).toFixed(0)} KB)`);
