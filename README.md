# ASAP Business Communications — Website Redesign Prototype

A standalone HTML/CSS prototype with three pages and one shared stylesheet. No framework or build step.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Homepage (13 sections) |
| `about.html` | About Us |
| `services.html` | Services (7 core services, 6 additional solutions, Why ASAP) |
| `design-system.html` | Style guide: colours, type, buttons, image rules (reference only, not a site page) |
| `css/style.css` | Shared stylesheet: tokens → base → layout → components → sections → footer |
| `js/main.js` | ~40 lines: mobile menu, mobile submenu toggles, scroll reveal |
| `assets/images/` | Client photos, renamed descriptively. Originals are WebP, so they use `.webp` |
| `docs/01-asset-review.md` | Image inventory, telephone/vehicle audit, image-to-section map, original About copy |
| `docs/02-content-services.md` | Original Services copy transcribed from the old page |

## Preview

Open the folder with any static server, for example:

```bash
python -m http.server 5500
```

Then visit http://localhost:5500. Opening the HTML files directly also works. Fonts (Google Fonts) and the videos (YouTube) need an internet connection.

## Image rules applied (client feedback)

- Every photo is an `<img>` at its native aspect ratio (`height:auto`). There are no background images, no `object-fit: cover` and no text over a photo.
- Each page leads with a complete telephone or a branded vehicle:
  - **Home:** full phone (hero)
  - **About:** Lancaster HQ with ASAP truck (hero), van fleet with logo (CTA)
  - **Services:** full phone (hero), van fleet with logo (Relocation)
- Below 992px the hero photo appears **above** the headline, so the full product is visible as soon as the page opens.

## Responsive checks performed

Automated checks on all three pages at 1920, 1440, 1280, 1024, 768, 430, 390, 375 and 360px:
- no horizontal overflow and no elements outside the viewport
- no photo rendered at a different ratio from its source (no cropping)
- no clipped headings
- hero photo first on tablet and mobile

Result: 27/27 passed.

## Elementor Pro conversion notes

- **Global Colors:** `--c-navy` #003B75, `--c-red` #E31E24, `--c-blue` #0E5AA7, `--c-light-blue` #D6E9F5, `--c-text` #183246, `--c-white`, plus `--c-surface` #F4F8FB and `--c-navy-deep` #002A55
- **Global Fonts:** Manrope 800/700 for headings, Inter 400/600 for body. Sizes are the `--fs-*` clamps.
- **Container:** boxed, 1240px content width, side padding 16–40px. Section padding 64–120px (`--section-y`).
- **Breakpoints:** 576 / 768 / 992 / 1200. Below 992 every `.split` stacks with the image first.
- **Section patterns:**
  - `.split`: 2-column container (image widget + heading/text/button)
  - `.grid--3` / `.feature`: 3-column container with icon box
  - `.cap-grid` / `.sol-grid`: icon list rows
  - `.facts`: counter-style text
  - `.statement`: heading on a navy container
- **Photo frame:** `.media--framed` is an image with a light-blue offset box behind it (a pseudo-element). In Elementor, use a container with a background-color shape offset, or an image box-shadow such as `16px 16px 0 #D6E9F5`.
- **Header:** Theme Builder header. Top bar with text links, then a sticky header holding the Nav Menu widget (dropdowns) and a button.

## Outstanding items

1. **`assets/images/customers.gif`:** the homepage customer strip expects this file. The copy on farhandev.top could not be reached from this machine.
2. **Higher-resolution originals:** all photos are 700–800px wide and the logo is 150px. Larger files (1600px+ photos, SVG logo) will look sharper on large screens.
3. **Old service-page photos** (voice-over studio, fax-to-email graphic, headset): left out because they only exist inside the screenshot. Supply the originals if the client wants them.
