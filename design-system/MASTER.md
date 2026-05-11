# ULTRASTAT — Master Design System

> **Version:** 1.0  
> **Date:** 2026-05-11  
> **Stack:** Next.js (App Router) + Tailwind CSS v4  
> **Deployment:** Vercel via GitHub  
> **Source:** Derived from brand.md, components.md, tokens.json + UI/UX Pro Max

---

## 1. Design Philosophy

**Style:** Swiss Modernism / Minimal & Direct  
ULTRASTAT speaks to skilled tradespeople — confident, no-nonsense professionals who value results over decoration. The UI should feel like the product: precise, powerful, and unpretentious.

**Guiding Principles:**
- Lead with outcomes, not specifications
- Dark authority + orange energy — industrial palette that commands attention
- White space is confidence, not emptiness
- One clear action per section
- Never use motion as decoration — only to guide focus

---

## 2. Color Tokens

### Core Palette

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| `--color-bg` | `#FFFFFF` | `bg-white` | Page background |
| `--color-bg-subtle` | `#F8FAFC` | `bg-slate-50` | Section alternates, cards |
| `--color-surface` | `#FFFFFF` | `bg-white` | Cards, nav, forms |
| `--color-text` | `#0F172A` | `text-slate-900` | Primary body text |
| `--color-text-muted` | `#475569` | `text-slate-600` | Secondary text, captions |
| `--color-primary` | `#1A1A2E` | `bg-[#1A1A2E]` | Nav, footer, dark sections |
| `--color-cta` | `#F97316` | `bg-orange-500` | Primary CTA buttons |
| `--color-cta-hover` | `#EA6C00` | `bg-orange-600` | CTA hover state |
| `--color-border` | `#E2E8F0` | `border-slate-200` | Cards, inputs, dividers |
| `--color-border-focus` | `#F97316` | `ring-orange-500` | Input focus rings |

### Hero Section

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-hero-overlay` | `rgba(0,0,0,0.55)` | Dark tint over hero photo |
| `--color-hero-text` | `#FFFFFF` | All text on hero |
| `--color-hero-cta-bg` | `#F97316` | Primary CTA on hero |
| `--color-hero-ghost-border` | `rgba(255,255,255,0.6)` | Ghost/secondary CTA border |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#16A34A` | Form submission, ATEX badge |
| `--color-error` | `#DC2626` | Form validation errors |
| `--color-warning` | `#D97706` | Caution notices |
| `--color-info` | `#0369A1` | Info badges, links |

### Tailwind CSS v4 Config Snippet

```css
/* app/globals.css */
@theme {
  --color-brand-dark: #1A1A2E;
  --color-brand-orange: #F97316;
  --color-brand-orange-hover: #EA6C00;
}
```

---

## 3. Typography

### Font Family

**Single family: Plus Jakarta Sans** (B2B clean, modern, professional)

```css
/* Next.js — app/layout.tsx */
import { Plus_Jakarta_Sans } from 'next/font/google';

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});
```

```js
// tailwind.config.ts
fontFamily: {
  sans: ['var(--font-sans)', 'sans-serif'],
}
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `text-display` | `56px / 3.5rem` | 800 | 1.1 | Hero headline |
| `text-h1` | `40px / 2.5rem` | 700 | 1.15 | Page titles |
| `text-h2` | `32px / 2rem` | 700 | 1.2 | Section headings |
| `text-h3` | `24px / 1.5rem` | 600 | 1.3 | Card titles, sub-sections |
| `text-h4` | `18px / 1.125rem` | 600 | 1.4 | Feature labels |
| `text-body-lg` | `18px / 1.125rem` | 400 | 1.7 | Lead paragraphs |
| `text-body` | `16px / 1rem` | 400 | 1.6 | Body text (minimum 16px mobile) |
| `text-small` | `14px / 0.875rem` | 400 | 1.5 | Captions, labels, nav links |
| `text-label` | `12px / 0.75rem` | 600 | 1.4 | Badges, form labels, tags |

### Responsive Scaling

```
Mobile  (375px):  display → 36px, h1 → 28px, h2 → 22px
Tablet  (768px):  display → 44px, h1 → 34px, h2 → 26px  
Desktop (1024px+): display → 56px, h1 → 40px, h2 → 32px
```

### Max Line Length

Body prose: **max-w-2xl** (672px) — prevents over-long lines (65–72 chars target)

---

## 4. Spacing System

**Base unit: 4px (Tailwind default)**

| Scale | Value | Use |
|-------|-------|-----|
| `1` | 4px | Micro gaps (icon + label) |
| `2` | 8px | Tight internal padding |
| `3` | 12px | Small padding |
| `4` | 16px | Standard element padding |
| `6` | 24px | Card padding, form group gap |
| `8` | 32px | Section inner padding |
| `12` | 48px | Small section spacing |
| `16` | 64px | Section vertical padding |
| `20` | 80px | Large section spacing |
| `24` | 96px | Hero padding |
| `32` | 128px | Maximum section separation |

### Container

```html
<!-- Standard content container -->
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
```

`max-w-6xl` = 1152px — slightly tighter than 1280px for better line control.

---

## 5. Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `--radius-sm` | 4px | `rounded` | Form inputs |
| `--radius-md` | 8px | `rounded-lg` | Cards, dropdowns |
| `--radius-lg` | 12px | `rounded-xl` | Feature cards, modals |
| `--radius-pill` | 9999px | `rounded-full` | Badges, tags, pill buttons |
| `--radius-btn` | 6px | `rounded-md` | Standard CTA buttons |

---

## 6. Shadows

| Token | CSS Value | Tailwind | Usage |
|-------|-----------|----------|-------|
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | `shadow-sm` | Cards at rest |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | `shadow-md` | Cards on hover, nav on scroll |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | `shadow-lg` | Modals, dropdowns |
| `shadow-cta` | `0 4px 14px rgba(249,115,22,0.35)` | custom | Orange CTA button glow |

---

## 7. Component Specs

### 7.1 Navigation

```
[Logo — left]  [spacer]  [Home] [Downloads] [Knowledge Base] [Contact]  [Request Demo — CTA]
```

- **Height:** 64px desktop, 56px mobile
- **Background:** `#1A1A2E` (dark navy) — not white; authority + brand
- **Logo:** White variant (ensure PNG has transparency for dark bg)
- **Nav links:** `text-white/80` at rest → `text-white` on hover, `text-sm font-medium`
- **Active state:** `text-white font-semibold` + bottom border `border-b-2 border-orange-500`
- **CTA button in nav:** `bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-600`
- **Mobile:** Hamburger → slide-down drawer, full-width links, CTA at bottom
- **Sticky:** Yes — `position: sticky; top: 0; z-index: 50`
- **Scroll shadow:** `shadow-md` applied after 10px scroll

### 7.2 Primary CTA Button

```html
<button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md 
               transition-colors duration-200 cursor-pointer shadow-[0_4px_14px_rgba(249,115,22,0.35)]
               focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
               disabled:opacity-50 disabled:cursor-not-allowed">
  Request my free demo
</button>
```

- Min touch target: 44px height (py-3 = 48px ✓)
- Loading state: disable button + show spinner inside

### 7.3 Secondary / Ghost Button

```html
<button class="border border-white/60 text-white font-semibold px-6 py-3 rounded-md
               hover:bg-white/10 transition-colors duration-200 cursor-pointer
               focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
  Watch Video
</button>
```

### 7.4 Hero Section

- **Background:** Full-bleed product photography + `bg-black/55` overlay
- **Min height:** `min-h-screen` or `min-h-[600px]`
- **Content layout:** Centred column, max-width `max-w-3xl`
- **Headline:** display scale (56px desktop), white, weight 800
- **Subheading:** body-lg (18px), `text-white/85`, max-w-xl
- **CTA pair:** Primary orange + secondary ghost, `gap-4`, horizontally on desktop / stacked mobile
- **Feature triplet:** "Cordless · Lightweight · Powerful" — `text-orange-400 font-semibold text-sm tracking-widest uppercase` above headline

### 7.5 Feature Cards

```
[Icon — 40px, orange]
[Heading — text-h4]
[Body — text-body text-muted]
```

- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` 
- **Card:** `bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default`
- **Icon container:** `w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4`
- **Icon:** 24px SVG from Lucide, `text-orange-500`
- **Heading:** `text-slate-900 font-semibold text-lg mb-2`
- **Body:** `text-slate-600 text-sm leading-relaxed`
- Section background: `bg-slate-50` to contrast with white hero/footer

### 7.6 Contact Form

- **Container:** `max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10`
- **Layout:** Two-column grid for paired fields (Name + Company, Postcode + Phone), single-column for the rest
- **Input base:** `w-full border border-slate-200 rounded-md px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`
- **Label:** `block text-sm font-semibold text-slate-700 mb-1.5`
- **Error message:** `text-red-600 text-sm mt-1` (below input, not as tooltip)
- **Submit button:** Full-width primary CTA, `w-full mt-6`
- **Supabase integration note:** POST form data to Supabase table `demo_requests`

### 7.7 Footer

```
[Logo — white]          [Nav links — white/70]
[Instagram icon]        [© 2026 ULTRASTAT]
```

- **Background:** `#1A1A2E` (matches nav)
- **Logo:** White variant
- **Links:** `text-white/70 hover:text-white text-sm`
- **Social icon:** White, 20px SVG, `hover:text-orange-400`
- **Copyright:** `text-white/40 text-xs`
- **Padding:** `py-12 lg:py-16`

---

## 8. Animation & Motion

| Interaction | Duration | Easing | Property |
|-------------|----------|--------|----------|
| Button hover | 200ms | ease | `background-color`, `box-shadow` |
| Card hover | 200ms | ease | `box-shadow`, `transform` (translateY -2px) |
| Nav shadow on scroll | 300ms | ease | `box-shadow` |
| Mobile nav drawer | 250ms | ease-out | `transform` (translateY) |
| Entrance animation | 400ms | ease-out | `opacity`, `translateY(16px → 0)` |
| Page transitions | 200ms | ease | `opacity` |

**Always check `prefers-reduced-motion`:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Icon System

**Library:** [Lucide React](https://lucide.dev) — consistent 24px SVG icons

```bash
npm install lucide-react
```

```tsx
import { Zap, Battery, Wind, ShieldCheck } from 'lucide-react';
// Feature icons: Zap (Powerful), Battery (Battery Life), Wind (Cordless), ShieldCheck (ATEX)
```

**Rules:**
- Never use emojis as icons
- All icons 24px (`w-6 h-6`) unless decorative (then `w-5 h-5`)
- Icon + text gap: `gap-2`
- Icon-only buttons: `aria-label` required

---

## 10. Page Structure

### Site Map

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero + Features + ROI Calculator + Social proof + CTA |
| Contact / Demo | `/contact` | Lead capture form |
| Become a Distributor | `/distributors` | Distributor/importer enquiry + territory map |
| Downloads | `/downloads` | TDS PDF + future assets |
| Knowledge Base | `/knowledge-base` | FAQ / how-to articles |
| Squeeze pages | `/demo/[slug]` | Ad-matched landing pages (no nav/footer) |
| Privacy Policy | `/privacy` | GDPR compliance stub |

### Home Page Section Order

```
1. <Nav>              — sticky dark nav
2. <Hero>             — full-bleed video/photo + headline + dual CTA
3. <Features>         — 4 benefit cards (bg-slate-50)
4. <VideoProof>       — Instagram video embed + "See it in action" heading
5. <ROICalculator>    — 3 sliders → savings output → CTA (bg-slate-50)
6. <Testimonials>     — 2–3 quotes with name/role/location
7. <Trust>            — ATEX/CE/UKCA/FCC badges + certifications
8. <CTA Banner>       — dark bg, orange CTA, single-minded conversion
9. <Footer>           — dark nav repeat
```

### Squeeze Page Section Order (`/demo/[slug]`)

```
1. <SqueezNav>        — logo only (links to homepage), no nav links
2. <SqueezeHero>      — headline (mirrors ad copy) + subheadline + anchor CTA button
3. <SqueezeVideo>     — autoplay muted MP4 loop (self-hosted) or Instagram embed
4. <SqueezeBenefits>  — 3 outcome bullets
5. <SqueezeTestimonial> — 1–2 quotes
6. <SqueezeForm>      — full demo request form (id="demo-form", anchor target)
7. <SqueezeLegal>     — Privacy Policy link + © + certification badges
```

### Distributor Page Section Order (`/distributors`)

```
1. <Nav>                — standard sticky nav
2. <DistributorHero>    — headline: "Become an ULTRASTAT Distributor"
3. <DistributorPitch>   — proven UK traction, demo-led model, marketing support
4. <DistributorMap>     — interactive territory map (Phase 1: Leaflet.js + hardcoded JSON)
5. <DistributorForm>    — enquiry form (country/region auto-populated from map click)
6. <Footer>
```

---

## 11. Next.js Project Structure

```
ultrastat/
├── app/
│   ├── layout.tsx                    # Font, metadata, globals, cookie consent
│   ├── page.tsx                      # Home
│   ├── contact/page.tsx              # Contact / demo request form
│   ├── distributors/page.tsx         # Become a Distributor + map
│   ├── downloads/page.tsx            # TDS PDF + future assets
│   ├── knowledge-base/
│   │   ├── page.tsx                  # Article index
│   │   └── [slug]/page.tsx           # Individual FAQ articles
│   ├── demo/
│   │   └── [slug]/page.tsx           # Squeeze pages (no nav/footer)
│   ├── privacy/page.tsx              # Privacy Policy (GDPR stub)
│   └── globals.css                   # @theme tokens, base styles
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── FeatureCards.tsx
│   ├── VideoSection.tsx              # Instagram embed or self-hosted MP4
│   ├── ROICalculator.tsx             # 3-slider savings calculator
│   ├── Testimonials.tsx
│   ├── TrustBar.tsx
│   ├── CTABanner.tsx
│   ├── ContactForm.tsx
│   ├── DistributorMap.tsx            # Leaflet.js map (Phase 1)
│   ├── DistributorForm.tsx
│   ├── CookieBanner.tsx              # GDPR consent — controls Pixel + GA4 injection
│   ├── Footer.tsx
│   ├── squeeze/
│   │   ├── SqueezeNav.tsx            # Logo-only nav for /demo/* pages
│   │   ├── SqueezeHero.tsx
│   │   ├── SqueezeBenefits.tsx
│   │   ├── SqueezeTestimonial.tsx
│   │   ├── SqueezeForm.tsx           # UTM capture + Supabase submit
│   │   └── SqueezeLegal.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Badge.tsx
│       └── SchemaScript.tsx          # Reusable JSON-LD injector
├── lib/
│   ├── supabase.ts                   # Supabase client
│   ├── squeeze-pages.ts              # Phase 1: SqueezePage config array
│   └── distributors.ts              # Phase 1: Distributor JSON (lat/lng, territory)
└── public/
    ├── logo.png                      # White variant needed for dark bg
    └── videos/
        └── hero-demo.mp4             # Self-hosted, compressed <5MB (HandBrake)
```

---

---

## 12. New Component Specs

### 12.1 Cookie Consent Banner

- **Position:** Fixed bottom, full width, `z-index: 60` (above sticky nav)
- **Background:** `#1A1A2E` (navy — matches nav, authoritative)
- **Text:** `text-white/80 text-sm` — short copy: "We use cookies to measure ad performance and improve your experience."
- **Buttons:** "Accept" (primary orange, small) + "Decline" (ghost, small) — side by side, right-aligned
- **Behaviour:** Stores `cookie_consent: "accepted" | "declined"` in `localStorage`. Never shows again after choice. Scripts only load on "accepted".
- **IDs:** `NEXT_PUBLIC_GA4_ID` and `NEXT_PUBLIC_META_PIXEL_ID` in `.env.local` — leave blank until available, scripts simply won't fire.
- **Links:** "Privacy Policy" text link in the copy → `/privacy`

### 12.2 Video Section

**Self-hosted hero video (for Hero or squeeze pages):**
```html
<video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
  <source src="/videos/hero-demo.mp4" type="video/mp4" />
</video>
```
- Add dark overlay on top (`bg-black/55`) — same as hero photo treatment
- File: compress with HandBrake, target <5MB, 1080p max, H.264

**Instagram embed section (homepage social proof):**
- Pick 2–3 posts from @ultrastatgun
- Use native Instagram embed: `<blockquote class="instagram-media">` + `//www.instagram.com/embed.js`
- No API key required — copy embed code from post
- Lazy-load the embed script (`loading="lazy"` on iframe) — below the fold so no performance impact
- Section heading: "See it in action" — `text-h2`, centred, `bg-white` section

### 12.3 ROI Calculator

- **Section background:** `bg-slate-50`
- **Container:** `max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8`
- **Heading:** "How much is static costing your bodyshop?" — `text-h2`
- **Subheading:** "Adjust the sliders to see your potential savings." — `text-body text-muted`

**Three sliders:**
| Label | Range | Default | Unit |
|---|---|---|---|
| Cars painted per week | 1–50 | 10 | cars |
| Extra rework per car (dust/static) | 5–120 | 30 | minutes |
| Hourly charge-out rate | £20–£150 | £60 | £/hr |

**Output card (updates in real time):**
- `bg-[#1A1A2E] rounded-xl p-6 mt-6`
- "ULTRASTAT could save you:" — `text-white/70 text-sm uppercase tracking-wider`
- Savings figure: `text-orange-400 text-5xl font-extrabold` — the big number
- "per year" suffix — `text-white/60 text-lg`
- Below: "Hours saved per week: X hrs" — secondary stat in `text-white/60 text-sm`

**CTA below the card:**
- "Ready to test it for free? Your local distributor can arrange a demo."
- Primary orange button: "Request my free demo"

**Calculation:**
```typescript
const hoursLostPerWeek = (cars * reworkMinutes) / 60
const costPerWeek = hoursLostPerWeek * hourlyRate
const savingsPerYear = Math.round(costPerWeek * 52)
```

### 12.4 Distributor Map

**Phase 1 — Leaflet.js (launch):**
- `npm install leaflet react-leaflet`
- Tile style: CartoDB Dark Matter tiles — matches navy brand palette
- Pins: orange (`#F97316`) custom SVG marker — 24px
- On pin click: popup card with distributor name, territory, optional "Visit site" link
- Map shows UK + Europe zoom level by default
- Deliberate gaps in coverage = opportunity signal for prospective distributors
- Section below map: "Interested in your region? Get in touch." → anchor to DistributorForm

**Data shape (Phase 1 — hardcoded in `lib/distributors.ts`):**
```typescript
interface Distributor {
  id: string
  name: string
  territory: string      // "South East England"
  country: string        // "UK"
  lat: number
  lng: number
  contactUrl?: string
  active: boolean
}
```

**Phase 2 — Supabase-backed:**
- Move array to `distributors` table
- `generateStaticParams` fetches at build time → no runtime latency
- Add country filter dropdown above the map
- "Areas seeking distributors" section: explicit list of countries with no coverage

**Phase 3 — Full platform:**
- Territory polygon overlays
- Admin UI for client to self-manage
- Lead routing: form country field → auto-routes to matched distributor email

### 12.5 Squeeze Page System

**Config (`lib/squeeze-pages.ts`):**
```typescript
interface SqueezePage {
  slug: string
  headline: string          // Must mirror the Meta ad copy exactly
  subheadline: string
  videoSrc: string          // '/videos/demo-bodyshop.mp4' or Instagram embed URL
  benefits: [string, string, string]
  testimonial: {
    quote: string
    name: string
    role: string            // "Bodyshop Owner"
    location: string        // "East Sussex"
  }
  formHeading: string
  ctaLabel: string
  metaTitle: string
  metaDescription: string
  ogImage: string
}
```

**UTM capture (runs on page load, transparent to user):**
```typescript
// Reads from URL: ?utm_source=meta&utm_medium=cpc&utm_campaign=bodyshop-uk
// Stored in sessionStorage, appended to Supabase form submission
const utmFields = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']
```

**Key squeeze page rules:**
- No global `<Nav>` — use `<SqueezeNav>` (logo only)
- No global `<Footer>` — use `<SqueezeLegal>` (Privacy + © + cert badges)
- Each page has unique `metaTitle` and `ogImage` — must match the ad creative
- Form anchor: CTA button scrolls to `#demo-form` (not a new page)
- One action only — remove all other exit paths

### 12.6 Structured Data (JSON-LD)

**Reusable component `ui/SchemaScript.tsx`:**
```tsx
export function SchemaScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

**Organization schema (global — `app/layout.tsx`):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ULTRASTAT",
  "url": "https://ultrastat.co.uk",
  "logo": "https://ultrastat.co.uk/logo.png",
  "sameAs": ["https://www.instagram.com/ultrastatgun/"]
}
```

**Product schema (homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ULTRASTAT Anti-Static Gun",
  "description": "Cordless, lightweight anti-static gun for bodyshop painters. ATEX certified for spray booth use.",
  "brand": { "@type": "Brand", "name": "ULTRASTAT" },
  "manufacturer": { "@type": "Organization", "name": "Lean Air" }
}
```

**FAQPage schema (knowledge-base articles):**
- Each `[slug]` page generates its own `FAQPage` schema from its Q&A content
- Enables Google "People also ask" / expandable snippet — strongest organic CTR driver

**BreadcrumbList (all inner pages):**
- `Home > Page Name` or `Home > Knowledge Base > Article`
- Set per-page via `SchemaScript`

---

## 14. Accessibility Checklist

- [ ] Color contrast: all text/background combinations meet 4.5:1 minimum
- [ ] Focus rings: visible on all interactive elements (orange ring matches brand)
- [ ] Keyboard navigation: tab order matches visual order
- [ ] Form inputs: all have `<label>` with matching `for` / `htmlFor`
- [ ] Images: hero photo has `alt` describing context (bodyshop product in use)
- [ ] Icon-only buttons: `aria-label` on hamburger, social links
- [ ] `prefers-reduced-motion` media query applied globally
- [ ] Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>` used correctly
- [ ] Touch targets: minimum 44×44px on all interactive elements
- [ ] Error feedback: form errors appear near the relevant field, not as toasts

---

## 15. Pre-Delivery Checklist

### Visual
- [ ] No emojis used as icons (Lucide SVGs only)
- [ ] Logo renders on dark nav/footer (white variant or confirmed transparency)
- [ ] Orange CTA visible in both contexts (dark bg and light bg)
- [ ] Hover states on all interactive elements

### Layout
- [ ] Responsive tested at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] Content not hidden behind sticky nav (add `pt-16` or `scroll-mt`)
- [ ] Footer copyright line included

### Performance
- [ ] Hero image uses `next/image` with `priority` prop
- [ ] Fonts loaded via `next/font/google` (no `@import` in CSS)
- [ ] No unused icon imports (tree-shake via named imports)

### Brand
- [ ] Copy uses benefit-first language (outcome, not spec)
- [ ] ATEX certification mentioned as trust signal
- [ ] Demo CTA is the primary conversion mechanism
- [ ] No corporate/abstract language — direct, professional tone
