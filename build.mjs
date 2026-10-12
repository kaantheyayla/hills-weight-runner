// Builds a single self-contained index.html (product image embedded as a data URI),
// so the game works when opened directly or uploaded to any static host.
// Usage: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const dir = new URL('.', import.meta.url);
const html = readFileSync(new URL('game.src.html', dir), 'utf8');
const img = readFileSync(new URL('assets/product.png', dir)).toString('base64');
const out = html.replaceAll('assets/product.png', `data:image/png;base64,${img}`);
writeFileSync(new URL('index.html', dir), out);
console.log(`index.html written (${(out.length / 1024).toFixed(0)} KB)`);
