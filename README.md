# Perfect Weight Run: Help Buddy / Bella on their weight loss journey!

3D isometric runner (three.js) for Hill's Science Plan Perfect Weight.
The player picks **Buddy the dog** or **Bella the cat**, who start out very chubby (and slow).

- **5-week run:** every 15 seconds = 1 week; the run ends after 5 weeks (75 s) with "You did it! You completed Hill’s 5-Week weight loss challenge!".
  Lose all 3 lives or eat too much junk and it ends with "Buddy/Bella didn't make it!".
- **Hill's packs:** the run starts with one pack on the road; after that every 20 kibbles drops another. Wording avoids "free", "earn" or "win" so nobody thinks they win real products.
  Packs are the score. Matching dog/cat packshots.
- **Vet myths:** a vet stands beside a dog house (dog game) or cat house (cat game) on the road.
  Run into the house and the animated vet busts one of 3 myths.
- **Billboards** with the dog or cat campaign poster appear beside the road.

## Files
- `index.html`: **the deliverable**. Single self-contained file (images embedded), ~1.5 MB.
- `game.src.html`: source to edit. Timings, myths, products, funny week lines and links are in `CONFIG` / `MYTHS` / `PETS` at the top of the script.
- `assets/`: packshots, `hills-logo-box.png` (bordered logo), `vet.png` and the `poster-dog.jpg` / `poster-cat.jpg` billboards.
- `build.mjs`: run `node build.mjs` after editing the source to regenerate `index.html`.

## Sending it to clients
Upload `index.html` to any static host (S3/CloudFront, Netlify, Vercel, your CMS) and put that URL
in the email as a button, ideally a GIF or screenshot of the game linking to it. Games can't run inside
an email itself. The page needs internet access (three.js and the Montserrat font come from CDNs).

## Review links
- `?pet=cat`: preselect Bella the cat
- `?myth=1` / `?myth=2` / `?myth=3`: open straight on a vet myth screen
- `?over`: "didn't make it" screen, `?win`: "You did it!" screen

## Before sending
- Have Hill's regulatory/legal approve the myths, the "proven weight loss in as little as 5 weeks*" claim and footnote, and the funny week lines.
- Replace the `ctaUrl` / `learnUrl` values (currently `https://www.hillspet.co.uk/`) with the real pages and add UTM tags.
