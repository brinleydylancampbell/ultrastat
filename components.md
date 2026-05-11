# ULTRASTAT — Component Patterns

> **Audit date:** 11 May 2026  
> **Platform:** Wix Website Builder  
> **Source:** HTML extracted from 4 pages via static fetch. Wix renders all component styles via JavaScript; computed CSS values are not available from static fetch. All styling descriptions are **(visual estimates)** unless marked **(confirmed)**.

---

## ⚠️ Wix Rendering Limitation

Component styles on Wix sites are injected at runtime. This document describes component *structure and behaviour* as observed from HTML source and content context. Exact colours, padding values, and border-radius on these components cannot be confirmed without live browser DevTools inspection.

---

## 1. Navigation

### Structure (confirmed from HTML)

```
[Logo — left-aligned]    [Home] [Downloads] [Knowledge Base] [Contact]    [Menu / Hamburger — mobile]
```

- **Type:** Horizontal top navigation bar
- **Logo position:** Far left (linked to homepage)
- **Nav links:** Home, Downloads, Knowledge Base, Contact — 4 items
- **Mobile:** Hamburger menu present (`Menu` / `Close` toggle confirmed in HTML source)
- **Sticky/fixed:** Unknown — not determinable from static fetch; Wix often makes navs sticky on scroll
- **Background:** White or transparent (visual estimate)
- **Active state:** Not determinable from static fetch
- **Hover state:** Not determinable from static fetch

### Notes

- Nav is identical across all 4 pages (confirmed) — consistent global component
- No dropdown or mega-menu observed
- No search, cart, or utility icons in nav

---

## 2. Buttons

### 2a. Primary CTA Button — "Request my free demo"

| Property | Value |
|---|---|
| **Label** | "Request my free demo" |
| **Location** | Hero section, homepage |
| **Destination** | `/blank-1` (Contact page) |
| **Style** | Filled/solid (visual estimate) |
| **Background colour** | UNKNOWN (visual estimate — likely brand accent; see tokens.json) |
| **Text colour** | UNKNOWN (visual estimate — likely white on dark background) |
| **Border radius** | UNKNOWN (visual estimate — Wix buttons are typically slightly rounded or pill-shaped) |
| **Font weight** | UNKNOWN (visual estimate — medium/semibold) |
| **Padding** | UNKNOWN |

### 2b. Secondary / Ghost Button — "Watch Video"

| Property | Value |
|---|---|
| **Label** | "Watch Video" |
| **Location** | Hero section, homepage (alongside primary CTA) |
| **Style** | Ghost or outline (visual estimate — secondary CTAs on Wix are commonly ghost/outline style when paired with a filled primary) |
| **Background colour** | Transparent (visual estimate) |
| **Border colour** | UNKNOWN |
| **Text colour** | UNKNOWN |

### 2c. Form Submit Button — "Submit"

| Property | Value |
|---|---|
| **Label** | "Submit" |
| **Location** | Contact page form |
| **Style** | Filled (visual estimate — matches Wix form default) |
| **Notes** | Part of Wix native form component; styles inherited from site theme |

---

## 3. Hero Section

### Structure (confirmed from HTML)

- **Background:** Full-width photographic image (product in use, bodyshop context)
- **Overlay:** Likely dark overlay/tint (visual estimate — blurred thumbnail shows dark treatment)
- **Content:** Headline text + feature bullet list + two CTA buttons ("Request my free demo", "Watch Video")
- **Layout:** Centred or left-aligned text over image (visual estimate)

### Headline observed (confirmed)

```
Key Features
Advanced Static Control: Powerfully & instantly neutralizes static buildup on all surfaces.
Cordless Operation: Offers maximum flexibility and ease of use.
Lightweight, Ergonomic Design: Reduces user fatigue during extended use.
Durable Construction: Built for demanding environments.
Extended Battery Life: Upto 10 hours of continuous use on a full charge.
Battery Charge Indicator: Shows remaining battery life to prevent downtime.
ATEX Certified: Approved for safe use in spray booths.
```

---

## 4. Feature / Benefit Cards

### Structure (confirmed from HTML content, visual estimate for styles)

Three or four feature tiles visible on the homepage, using a consistent pattern:

```
[Icon or visual — not confirmed]
[Short heading]
[One-line description]
```

**Observed instances (confirmed text):**

| Heading | Body |
|---|---|
| Economic Benefits | Affordable anti-static technology that saves you money. |
| Cordless | Complete freedom of movement with powerful battery technology. |
| Lightweight | Ergonomic design reduces fatigue during extended use |
| Powerful | Advanced anti-static technology with immediate results every time. |

- **Layout:** Horizontal row (desktop), likely stacked on mobile (visual estimate — standard Wix responsive grid)
- **Background:** White or very light grey (visual estimate)
- **Border:** Unknown — may be borderless (visual estimate)
- **Border radius:** Unknown
- **Shadow:** Unknown

---

## 5. Contact / Lead Capture Form

### Structure (confirmed from HTML)

Located on `/blank-1` (Contact page). This is a Wix native form component.

**Fields (all confirmed):**

| Field | Type | Required |
|---|---|---|
| Name | Text input | Yes (*) |
| Company name | Text input | Yes (*) |
| Post Code | Text input | Yes (*) |
| Email | Email input | Yes (*) |
| Phone | Phone input with flag (GBR flag shown) | Yes (*) |
| Website | URL input | Yes (*) |
| Paint distributor preference | Text input / textarea | Yes (*) |

**Submit button label:** "Submit" (confirmed)

**Heading above form (confirmed):**
> "Contact us for your free demo through your preferred Paint Distributor"

**Input styles (visual estimate):**
- Standard Wix form inputs: rectangular, light border (#CCCCCC approx), white background
- Border radius: 0–4px (visual estimate)
- Label above input (visual estimate — Wix default form layout)
- No inline validation messages observed in source

---

## 6. Footer

### Structure (confirmed from HTML)

```
[ULTRASTAT Logo — linked to homepage]
[Instagram icon — linked to https://www.instagram.com/ultrastatgun/]
[Home] [Downloads] [Knowledge Base] [Contact]
```

- **Layout:** Logo + social icon + nav links repeated
- **Background:** White or very light (visual estimate — matches body background)
- **Social:** Instagram only (confirmed)
- **No copyright line** observed in source
- **No address, phone, or email** in footer (confirmed absent)

---

## 7. Downloads Page

### Structure (confirmed from HTML)

Very minimal page. Single content element:

- **Heading:** "TDS" — linked to a PDF file
- **PDF URL (confirmed):** `https://www.ultrastat.co.uk/_files/ugd/03950d_24312b1a2b1c4ad79dc0d63782c1b6e3.pdf`
- **TDS** = Technical Data Sheet (standard industry document for anti-static/coating products)
- No other downloads present

---

## 8. Knowledge Base Page

### Structure (confirmed from HTML)

Page is currently **empty** — no content body detected beyond the standard nav and footer. This page appears to be a placeholder or is not yet populated.

---

## 9. Overall Layout Observations

| Observation | Confidence |
|---|---|
| Single-column mobile layout | Visual estimate |
| Full-width hero section | Confirmed (structure) |
| Max-width content container | UNKNOWN (Wix platform dependent) |
| Wix standard responsive grid | Confirmed (platform) |
| No custom CSS framework (e.g. Tailwind, Bootstrap) | Confirmed — Wix handles all layout |

---

## 10. What's Missing / Recommended Investigations

The following could not be determined from static fetch and should be investigated via live DevTools or Wix editor access:

- [ ] Exact colour hex values for buttons, nav, footer, headings, body text
- [ ] Font family names (heading and body)
- [ ] Font sizes (px/rem) for h1–h6 and body
- [ ] Border radius values on buttons and inputs
- [ ] Box shadow values (nav on scroll, cards)
- [ ] Hover and active states on all interactive elements
- [ ] Exact container max-width
- [ ] Animation/transition behaviour
- [ ] Favicon asset URL
- [ ] Whether a dark-mode logo variant exists
- [ ] Any custom Wix colour palette values (accessible via Wix Editor → Site Design → Color theme)
