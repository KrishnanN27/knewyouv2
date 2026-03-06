# Knew You — Site File Guide (v3)

## Folder Structure

```
knew-you-v3/
├── index.html                    ← Main page + all JS
│
├── css/
│   ├── base.css                  ← Colors, fonts, buttons, animations (edit here first)
│   ├── nav.css                   ← Navigation bar
│   ├── hero.css                  ← Hero section
│   ├── why.css                   ← Why This Matters
│   ├── building.css              ← What We're Building
│   ├── pillars.css               ← Three Core Pillars
│   ├── foundation.css            ← Mission / Vision / Values
│   ├── coming-soon.css           ← Coming Soon
│   ├── founder.css               ← Meet the Founder
│   ├── testimonials.css          ← Testimonials
│   ├── services.css              ← Work With Us
│   ├── connect.css               ← Contact Form
│   └── footer.css                ← Footer
│
└── sections/
    ├── 01-nav.html
    ├── 02-hero.html
    ├── 03-why.html
    ├── 04-building.html
    ├── 05-pillars.html
    ├── 06-foundation.html
    ├── 07-coming-soon.html
    ├── 08-founder.html
    ├── 09-testimonials.html
    ├── 10-services.html
    ├── 11-connect.html
    └── 12-footer.html
```

---

## How to Edit

### Change text in a section
Open the matching file in `sections/` — every editable area has a comment.

### Change colors / fonts / spacing
Open `css/base.css` — all color and font variables are at the very top under `:root`.

### Change styles for one section only
Open the matching CSS file in `css/` (e.g. `css/hero.css` for the hero).

### Swap in a real background photo
- **Hero:** In `css/hero.css`, find `.hero-bg` and change `background-image`.
- **Building section:** In `css/building.css`, find `.building-img-bg` and add `background-image`.
- **Coming Soon:** In `css/coming-soon.css`, find `.coming-bg` and add `background-image`.

### Swap in a real founder photo
In `sections/08-founder.html`, replace:
```html
<div class="founder-photo-placeholder"></div>
```
With:
```html
<img class="founder-photo" src="../images/kalee.jpg" alt="Kalee, Founder of Knew You">
```

### Reorder sections
In `index.html`, move the `<div data-section="...">` lines up or down.

### Hide a section
In `index.html`, comment out the line:
```html
<!-- <div data-section="sections/07-coming-soon.html"></div> -->
```

---

## Running Locally

The section loader requires a local web server (not just opening index.html directly).

**VS Code (easiest):** Install the "Live Server" extension → right-click `index.html` → Open with Live Server.

**Python:**
```bash
cd knew-you-v3
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Making the Contact Form Send Emails

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a form and copy your form ID
3. In `sections/11-connect.html`, update the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
