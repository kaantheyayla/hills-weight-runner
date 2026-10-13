# Perfect Weight Run: Losing weight. Adding life.

3D isometric low-poly endless runner (three.js) for Hill's Science Plan Perfect Weight.
On the start screen the player picks **Bobby the dog** or **Bella the cat**. The pet starts out chubby,
eats kibble, avoids table scraps (they add weight) and obstacles, and collects Hill's bags
(dog or cat Perfect Weight, matching the chosen pet). Each bag opens a speech bubble that busts one of 3 weight myths.

**Claim mechanic:** every 20 kibbles = 1 week on Perfect Weight. The week counter (top left, under the Hill's logo)
counts up to 5, the pet visibly slims down each week, and week 5 celebrates "Proven weight loss in 5 weeks".

## Files
- `index.html`: **the deliverable**. Single self-contained file (images embedded), ~790 KB.
- `game.src.html`: source to edit. Copy, products, myths, funny week lines and CTA URLs are in `CONFIG` / `PETS` at the top of the script.
- `assets/`: `product-dog.png`, `product-cat.png` (Perfect Weight packshots) and `hills-logo.png`.
- `build.mjs`: run `node build.mjs` after editing the source to regenerate `index.html`.

## Sending it to clients
Upload `index.html` to any static host (S3/CloudFront, Netlify, Vercel, your CMS) and put that URL
in the email as a button, ideally a GIF or screenshot of the game linking to it. Games can't run inside
an email itself. The page needs internet access (three.js and the Montserrat font come from CDNs).

## Review links
- `?pet=cat`: preselect Bella the cat
- `?myth=1` / `?myth=2` / `?myth=3`: open straight on a myth bubble
- `?over`: open the end screen

## Before sending
- Have Hill's regulatory/legal approve the myth facts (dog and cat), the "Proven weight loss in 5 weeks" claim,
  the funny week lines and the "nearly 2 years longer" stat (dog only).
- Replace both `ctaUrl` values (currently `https://www.hillspet.co.uk/`) with the real product pages and add UTM tags.
