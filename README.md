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

### Adding a photo of Koundinya

Drop the file at `site/static/koundinya.jpg`, then in
`site/src/lib/components/About.svelte` replace the `.placeholder` block with the
commented-out `<img>` line just above it.

## Brand

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

1. Add the domain under *Settings → Pages → Custom domain*.
2. Add a file `site/static/CNAME` containing just the domain name.
3. In `.github/workflows/deploy.yml`, change `BASE_PATH` to an empty string —
   a custom domain serves from the root, so the `/repo-name` prefix must go.
