# Jack Friday's — Gourmet Sports Lounge Website

A responsive, portfolio-ready website concept for **Jack Friday's Gourmet Sports Lounge**
in Moreleta Park, Pretoria.

---

## File structure

```
jack-fridays/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── Front.jpg           — original photo (hero + gallery fallback)
    ├── Front.webp          — WebP version (33 % smaller, served to modern browsers)
    ├── favicon.svg         — vector favicon (all modern browsers)
    ├── apple-touch-icon.png — 180 × 180 PNG for iOS home screen
    └── site.webmanifest    — PWA / browser manifest
```

## Running locally

No build tools required. Open `index.html` in a browser, or use VS Code Live Server.

---

## Changes applied in this build

| # | What was done |
|---|---------------|
| 1 | **Reservation form wired to Formspree** — uses `fetch()` with loading/disabled state and a friendly fallback message when the endpoint isn't yet configured. No more `localStorage`. See setup steps below. |
| 2 | **All demo-facing copy removed** — menu descriptions, section copy and the menu note are now clean, production-appropriate text. |
| 3 | **Asset path confirmed** — all references point to `assets/Front.jpg` and `assets/Front.webp`. Keep the `assets/` folder alongside `index.html`. |
| 4 | **POPIA privacy notice added** — collapsible `<details>` element in the reservation form, plus a footer link, covering the Protection of Personal Information Act 4 of 2013. |
| 5 | **Open Graph meta tags added** — Facebook, WhatsApp and other social previews will now show the site title, description and image. Update `og:url` and `og:image` to your live domain. |
| 6 | **Twitter/X Card meta tags added** — `summary_large_image` card type. |
| 7 | **Schema.org JSON-LD added** — `Restaurant` structured data with address, phone, opening hours and geo coordinates. Verify coordinates before launch. |
| 8 | **Event items converted to anchor tags** — all three event cards now link to Facebook (Live Sport, Special Events) or the reservation section (Group Nights). The arrow `↗` now means something. |
| 9 | **SVG favicon + apple-touch-icon** — replaces the raw banner photo that was being used as a favicon. |
| 10 | **Instagram link placeholder added** — commented-out line in the footer. Uncomment and update the URL when the official handle is confirmed. |
| 11 | **WebP image served via `<picture>`** — gallery image now serves `Front.webp` to supporting browsers, falling back to `Front.jpg`. 33 % smaller over the wire. |
| 13 | **Canonical URL tag added** — update `href` to your live domain before launch. |
| 14 | **Firefox scroll-lock fixed** — replaced `body:has(.nav.open)` (CSS-only, broken in older Firefox) with `body.nav-open` toggled from JavaScript. |
| 15 | **Submit button gets a loading/disabled state** — prevents double-submission and gives clear visual feedback while the request is in flight. |
| 16 | **Menu note rewritten** — removed internal "demo" language visible to end users. |

---

## Before launch — required steps

### 1 · Connect the reservation form

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click **New Form**, give it a name, and register the email address where bookings should arrive.
3. Copy the form ID (looks like `abcd1234`).
4. Open `script.js` and replace `REPLACE_WITH_YOUR_FORM_ID` with your ID:

```js
const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcd1234";
```

### 2 · Update canonical and Open Graph URLs

In `index.html`, replace every instance of `https://www.jackfridays.co.za/` with your
actual live domain once hosting is confirmed.

### 3 · Verify / update geo coordinates

The Schema.org `geo` block uses approximate coordinates for Moreleta Park. Confirm the
exact latitude/longitude on Google Maps and update in `index.html`:

```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": -25.8239,
  "longitude": 28.2731
}
```

### 4 · Add the Instagram handle

Find the commented-out line in `index.html` footer and uncomment it with the official URL:

```html
<a href="https://www.instagram.com/OFFICIAL_HANDLE" target="_blank" rel="noopener">Instagram ↗</a>
```

Add the same URL to the `sameAs` array in the Schema.org JSON-LD block.

### 5 · Create a proper OG image

`Front.jpg` is a landscape banner (wide and short). For the best social share preview,
create a cropped **1200 × 630 px** version, save it as `assets/og-image.jpg`, and update
the `og:image` and `twitter:image` meta tags to point to it.

### 6 · Provide client-confirmed content

- Current menu PDF / images and prices
- Confirmed opening hours
- Current events / sports schedule
- Approved gallery photography
- Any dietary / allergen information
- Privacy / terms required for the final booking system

---

## Recommended production improvements

- Connect a CMS (e.g. Sanity, Contentful) for menu and events so staff can update without code
- Add Google Analytics / Tag Manager
- Add Google Maps embed in the contact section
- Self-host Google Fonts for better performance and offline reliability
- Add a 404 page
- Cookie / consent banner if analytics or third-party scripts are added
- Image optimisation pipeline (multiple `srcset` breakpoints, AVIF support)
- Add a `robots.txt` and submit a `sitemap.xml` to Google Search Console

---

## Verified business information

| Field | Value |
|---|---|
| Address | 680 Rubenstein Drive, Moreleta Park, Pretoria, Gauteng, 0044 |
| Phone | 012 941 0156 |
| Mon–Thu, Sat–Sun | 10:00 – 00:00 |
| Friday | 10:00 – 01:00 |
| Facebook | https://www.facebook.com/JackfridaysSA |

*Verify all details with management before going live.*
