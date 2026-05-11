# ULTRASTAT Brand Identity

> **Audit date:** 11 May 2026  
> **Platform:** Wix Website Builder  
> **Pages visited:**
> - `https://www.ultrastat.co.uk/` — Home
> - `https://www.ultrastat.co.uk/blank-1` — Contact
> - `https://www.ultrastat.co.uk/blank` — Downloads
> - `https://www.ultrastat.co.uk/blank-2` — Knowledge Base

---

## ⚠️ Important Caveat

This site is built on **Wix**, which renders all styles via JavaScript at runtime using obfuscated class names. This means:

- CSS custom properties (`--color-*`, `--font-*`, etc.) **cannot be extracted** via static fetch.
- Typography declarations, computed colour values, and spacing values are **not available in source HTML**.
- All values marked **(visual estimate)** are inferred from what was visible in blurred/thumbnail image previews returned in the HTML and from knowledge of Wix platform defaults.
- Values marked **(confirmed)** were extracted directly from the HTML source or image asset URLs.

To get accurate token values, the site would need to be inspected live using browser DevTools (Computed Styles panel), or the Wix editor would need to be accessed directly.

---

## 1. Logo

### Primary Logo

| Asset | Details |
|---|---|
| **Logo name** | `ULTRASTAT Logo.png` |
| **Format** | PNG with transparency (confirmed) |
| **URL (nav/footer, small)** | `https://static.wixstatic.com/media/03950d_a8557468c3fc4e3fa9a8feeb72f1e950~mv2.png` (confirmed) |
| **Rendered size (nav/footer)** | 84 × 30 px at 1x (confirmed from `w_84,h_30` in Wix image transform URL) |
| **URL (hero, full-res)** | `https://static.wixstatic.com/media/03950d_a8557468c3fc4e3fa9a8feeb72f1e950~mv2.png` — same source asset, larger render in hero |
| **Variants** | Only one logo file observed in source. No separate dark/light/mark-only variants detected. |

### Hero/Background Image

| Asset | Details |
|---|---|
| **Type** | Product photography (the ULTRASTAT gun in use / bodyshop context) |
| **URL (blurred preview)** | `https://static.wixstatic.com/media/03950d_79b73c0b15b9458a968790d534f55667f000.jpg` (confirmed) |
| **URL (second image)** | `https://static.wixstatic.com/media/b83ad8_893a3c7859574dd6b0076996ecdef656f000.jpg` (confirmed — appears in product feature section) |

### Favicon

- **Status:** Not extractable via static fetch on Wix-hosted sites. Wix serves favicons via its own CDN. To retrieve: visit `https://www.ultrastat.co.uk/favicon.ico` or inspect the `<link rel="icon">` tag in a live browser.

---

## 2. Tone and Voice

### Overview

Based on reading the copy across all four pages visited, ULTRASTAT's tone is:

**Professional, direct, and benefit-led.** The copy is confident and focused on solving a concrete, technical problem — static build-up in bodyshop and coating environments — without over-explaining. It avoids jargon-heavy technical language in favour of short, punchy benefit statements. There is a clear commercial mission (making the product accessible and affordable) that is stated plainly rather than dressed up in marketing fluff. The overall register is that of a **specialist B2B tool brand** speaking to skilled tradespeople — it respects the reader's expertise and gets to the point.

### Tone Descriptors

1. **Confident and authoritative** — strong declarative statements ("Advanced anti-static technology with immediate results every time").
2. **Benefit-first** — copy leads with what the product does *for* the user, not its specifications.
3. **Accessible and unpretentious** — short sentences, no flowery language; speaks like a fellow professional, not a marketing department.
4. **Mission-driven** — the brand has a stated democratisation angle ("make the advanced ULTRASTAT anti-static gun accessible to every painter — easy to try, and affordable to own").

### Recurring Phrases / Vocabulary

- "Advanced static control" — appears multiple times, appears to be the core positioning line
- "Flawless finishes" — recurring benefit statement
- "Cordless / Lightweight / Powerful" — the three core product pillars, used consistently as a triplet
- "Essential for use in the Bodyshop" — repeatedly frames the use-case context
- "Professionals" / "painters" — consistent audience language
- "Affordable" — deliberate, repeated emphasis on accessibility of pricing
- "Easy to try" — lowering the barrier to trial; appears in mission statement
- "Immediate results" — urgency and effectiveness claim
- "ATEX Certified" — credibility marker for safety in spray booth contexts

---

## 3. Brand Do's

- **Do** use short, punchy benefit statements — three-word pillars (Cordless / Lightweight / Powerful) work well
- **Do** lead with the *outcome* for the painter, not the specification of the product
- **Do** reference the professional context (bodyshop, spray booth, coating industry) to establish authority
- **Do** use the ATEX certification as a trust signal — it's industry-meaningful
- **Do** position affordability alongside quality — the brand story is "advanced tech, accessible price"
- **Do** use the demo offer (via paint distributor) as the primary call to action — it's the key conversion mechanism

## 4. Brand Don'ts

- **Don't** use overly technical or scientific language — the audience are skilled tradespeople, not engineers
- **Don't** use corporate or abstract brand-speak — tone should remain grounded and direct
- **Don't** position this as a luxury or premium-only product — the democratisation narrative is central
- **Don't** use the logo file without checking it renders correctly on both light and dark backgrounds — only one variant was found in the source; check for transparency issues
- **Don't** rely on the site's current page titles (e.g. "Home | My Site") — these are Wix defaults and not branded; this is worth fixing as an SEO and brand issue
- **Don't** mistake the blurred/thumbnail image assets from the HTML for full-resolution brand images — always use the original Wix media URLs without transformation parameters

---

## 5. Site Platform Notes (for developers / designers)

- **Builder:** Wix (confirmed via `meta-generator: Wix.com Website Builder`)
- **Social:** Instagram only (`https://www.instagram.com/ultrastatgun/`) — confirmed from footer
- **Page slug naming:** Pages use `/blank`, `/blank-1`, `/blank-2` slugs — these are Wix defaults and not branded. Recommend renaming to `/downloads`, `/contact`, `/knowledge-base` for SEO and clarity.
- **Site title:** Currently set to "My Site" in Wix metadata — this is a Wix default that should be updated to "ULTRASTAT" across all pages.
- **Open Graph:** `og:title` and `twitter:title` also currently show "Home | My Site" — unbranded, should be corrected.

---

## 6. Brand Assets Checklist

| Asset | Status | Notes |
|---|---|---|
| Primary logo PNG | ✅ Found | Single variant, URL confirmed |
| Logo — dark variant | ❓ Unknown | Not found in source; may not exist |
| Logo — mark/icon only | ❓ Unknown | Not found in source |
| Favicon | ❓ Unknown | Not extractable via static fetch |
| Hero background photo | ✅ Found | Product in use, bodyshop context |
| Product photos | ✅ Found | At least 2 distinct image assets identified |
| Brand colour guide | ❌ Not found | Would need Wix editor access or DevTools |
| Font specification | ❌ Not found | Would need Wix editor access or DevTools |
| Social assets | ❓ Unknown | Instagram present; no other platforms detected |
