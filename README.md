# seravyx.com

Landing page for **Seravyx**, a home vital-sign monitor for people having chemotherapy. Agile Team Project, group SE16 (IIT / University of Westminster).

Plain HTML, CSS and JavaScript. No build step. Hosted on GitHub Pages at https://seravyx.com.

## Files

| File | What it is |
|---|---|
| `index.html` | The landing page |
| `privacy.html` | Privacy notice for the waitlist |
| `404.html` | Not-found page |
| `styles.css` | Styles, using the Seravyx brand tokens |
| `script.js` | Mobile menu and waitlist form |
| `assets/` | Logo, prototype screenshots, self-hosted fonts |
| `og-image.png` | Social preview image (1200 × 630) |
| `CNAME` | Custom domain for GitHub Pages |

## Waitlist form

The form posts to the URL in `data-endpoint` on `<form id="waitlist-form">` in `index.html`.

1. Create a free form at https://formspree.io and copy its URL (`https://formspree.io/f/xxxxxxx`).
2. Paste it into `data-endpoint=""`.

Until that is set, the form opens an email to `hello@seravyx.com` with the details filled in.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Checklist (coursework B8)

- [x] Product name and logo, value proposition, problem and solution, key features
- [x] Prototype screenshots, team section, call to action, privacy notice
- [x] Page title, meta description, favicon, social preview image, alt text
- [x] Responsive layout, keyboard focus styles, skip link
- [ ] Real form endpoint (Formspree) so sign-ups are saved
- [ ] `hello@seravyx.com` forwarding set up at the domain registrar
- [ ] Analytics snippet (GoatCounter or Plausible) in `<head>`
- [ ] Social links, once the accounts exist
