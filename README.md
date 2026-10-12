# Buddy's Perfect Weight Run

3D isometric low-poly endless runner (three.js) for Hill's Science Plan Perfect Weight.
The player steers Buddy, eats kibble, avoids table scraps (they add weight) and obstacles,
and collects Hill's bags. Each bag opens a speech bubble that busts one of 3 dog-weight myths.

## Files
- `index.html`: **the deliverable**. Single self-contained file (product image embedded), ~330 KB.
- `game.src.html`: source to edit. Myths, product name, claim and CTA URL are in `CONFIG` / `MYTHS` at the top of the script.
- `assets/product.png`: Perfect Weight & Active Mobility packshot (512px).
- `build.mjs`: run `node build.mjs` after editing the source to regenerate `index.html`.

## Sending it to clients
Upload `index.html` to any static host (S3/CloudFront, Netlify, Vercel, your CMS) and put that URL
in the email as a button, ideally a GIF or screenshot of the game linking to it. Games can't run inside
an email itself. The page needs internet access (three.js and the font come from CDNs).

## Review links
- `?myth=1` / `?myth=2` / `?myth=3`: open straight on a myth bubble
- `?over`: open the end screen

## Before sending
- Have Hill's regulatory/legal approve the myth facts, product claim and the "nearly 2 years longer" stat.
- Replace `ctaUrl` (currently `https://www.hillspet.co.uk/`) with the real product or campaign page and add UTM tags.
