# Koundinya Nemana — Energy Corrections

Single-page site for a Vastu and energy-correction practice. Built with SvelteKit,
prerendered to static HTML, and deployed to GitHub Pages.

## Editing the site

**Almost every change you'll want to make lives in one file:**

```
site/src/lib/content.ts
```

That file holds all the copy, the WhatsApp number, the email address, and the
testimonials. Change the text there and the page updates — you don't need to touch
any HTML or components.

Common edits:

| To change… | Edit in `content.ts` |
| --- | --- |
| WhatsApp number | `business.whatsapp` (digits only, with country code) |
| The message people send you | `business.whatsappMessage` |
| Email address | `business.email` |
| Headline and intro | `hero` |
| The two "hidden problem" cards | `problem.factors` |
| The three process steps | `method.steps` |
| Who you work with | `audiences.items` |
| Testimonials | `testimonials.items` |
| About text | `about.paragraphs` |

### Adding a testimonial

Put the photo in `site/static/testimonials/`, then add an entry to
`testimonials.items` with `name`, `title`, `image` (just the filename) and `quote`.

### Replacing the photo of Koundinya

The About portrait is `site/static/koundinya.webp` — a **transparent cutout**, so
it sits directly on the background with a soft sage disc behind it. If you swap it,
keep the transparency; a photo with a solid backdrop will look boxed-in and wrong.

The current file was cut out from a black-backdrop studio shot using
`scripts/cutout.py`. Point that script at a new source image and re-run it if you
need to repeat the process.

## Brand

### The mark

The Vastu Purusha Mandala is a square grid. The logo takes that square, fixes it,
and turns a second square inside it: **the structure never moves, the energy
within it does.** That is the no-demolition promise, drawn.

It lives in three places, and all three must be changed together if it is ever
redrawn:

- `site/src/lib/components/Logo.svelte` — the on-page mark (turns further on hover)
- `site/static/favicon.svg` — browser tab
- `site/static/apple-touch-icon.png` — iOS home screen, regenerated from the shape

### Voice

The site speaks **for** Koundinya, not **as** him. He is reserved and does not
talk about himself in "I" terms, so the page introduces him in the third person
and addresses the reader as "you".

Write "the assessment begins with readings", not "I begin by taking readings".
The only first person on the page belongs to clients, inside their own quotes.

### Copy rules

No em dashes. Short sentences. One idea per sentence. Do not strand a single
short word on its own line at the end of a heading. The full list is at the top
of `content.ts`.

### Colour and type

Defined as CSS variables at the top of `site/src/lib/styles/app.css`.

- **Deep Forest** `#2C3A2E` — anchor, dark sections
- **Terracotta** `#B5643C` — actions only, never decoration
- **Sage** `#8A9A7B` — secondary
- **Sand** `#D9C8AE` / **Limewash** `#F7F4EE` — backgrounds
- **Walnut Ink** `#3D3630` — body text

Type: **Fraunces** for headings, **Inter** for body.

Keep roughly 70% light neutrals, 20% forest, 10% terracotta. Reserving terracotta
for buttons and links is what keeps the palette feeling current rather than dated.

## Running locally

```sh
cd site
npm install
npm run dev
```

## Deploying

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Nothing to do by hand.

**One-time setup:** in the repository's *Settings → Pages*, set **Source** to
**GitHub Actions**.

### Moving to a custom domain

Everything is derived from **one file**. Create `site/static/CNAME` containing
just the bare domain:

```
energycorrections.com
```

Commit and push. The build reads that file and automatically switches the asset
prefix to the root, and points the canonical URL, Open Graph tags, sitemap and
robots.txt at the new domain. Nothing else in the repo needs editing.

Then point DNS at GitHub. For an apex domain (`example.com`), four A records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Plus a CNAME record for `www` pointing at `socraticsurge.github.io`.

Finally, in *Settings → Pages → Custom domain*, enter the domain and tick
**Enforce HTTPS** once the certificate has been issued. That can take up to
24 hours; the box stays greyed out until it is ready.

To move back to the github.io URL, delete `site/static/CNAME`.
