# [BRAND NAME] — Next.js 14 Landing Page

> Converted from vanilla HTML/CSS/JS to Next.js 14 App Router + Tailwind CSS + Framer Motion

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
app/
  layout.tsx          # Root layout — SEO metadata, Google Fonts, model-viewer script
  page.tsx            # Entry: composes all section components
  globals.css         # CSS variables, theme classes, keyframe animations

components/
  ThemeContext.tsx    # Global BOY/ALL/GIRL mode state (React Context)
  CustomCursor.tsx    # Glowing dot + lagging ring cursor (RAF loop)
  Loader.tsx          # Cinematic brand name reveal + progress bar
  Navbar.tsx          # Glassmorphism on scroll + backpack icon + bag count badge
  Hero.tsx            # Toggle, 3D model-viewer, floating particles, product cards
  Marquee.tsx         # Infinite scrolling text strip
  LifestyleSection.tsx# Scroll-triggered lifestyle cards with 3D tilt
  About.tsx           # Dark section with mascot placeholder + stats
  Footer.tsx          # 4-column footer with newsletter form

public/
  girl1.glb           # ✅ ALL mode character (copy from your zip)
  girl2.glb           # ✅ GIRL mode character (copy from your zip)
  boy.glb             # ⚠️  BOY mode (ADD WHEN READY from Meshy AI)
```

---

## 🎨 Color Themes

| Mode | Background | Accent |
|------|-----------|--------|
| ALL  | `#F7EDD8` | `#E8C97A` |
| BOY  | `#D6E8F5` | `#4A90C4` |
| GIRL | `#F5D6E8` | `#C44A8A` |

---

## 🗂️ GLB Files Setup

Copy your GLB files into `/public`:

```bash
cp girl1.glb public/
cp girl2.glb public/
# Add boy.glb to public/ when ready from Meshy AI
```

The `@google/model-viewer` script is loaded globally in `layout.tsx`.

---

## 🔧 All [NOTE] Placeholders

Search for `[NOTE` in the codebase to find everything that needs replacing:

| File | Placeholder | What to replace |
|------|-------------|-----------------|
| `layout.tsx` | `[BRAND NAME]` | Your actual brand name |
| `layout.tsx` | `yourdomain.com` | Your actual domain |
| `layout.tsx` | `/og-image.jpg` | Real Open Graph image in `/public` |
| `Navbar.tsx` | `[BRAND NAME]` | Your actual brand name |
| `Hero.tsx` | `boy.glb` | Add `boy.glb` to `/public` when ready |
| `Hero.tsx` | Price placeholders | Add real prices |
| `LifestyleSection.tsx` | NOTE 2–5 | Replace placeholder divs with `<model-viewer>` pointing to product GLBs |
| `About.tsx` | NOTE 6 | Replace mascot placeholder with your mascot GLB |
| `Footer.tsx` | NOTE 7 | Real social media links |
| `Footer.tsx` | NOTE 8 | Real page routes |
| `Footer.tsx` | Newsletter form | Wire to Mailchimp / Klaviyo / Resend |
| `Footer.tsx` | `[BRAND NAME]` | Your actual brand name |

---

## 📦 Tech Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — Utility classes
- **Framer Motion** — All animations (page load, scroll reveal, tilt, transitions)
- **@google/model-viewer** — 3D GLB rendering (loaded as web component via `<Script>`)
- **TypeScript** — Full type safety

---

## 🧩 Adding More GLB Models (Lifestyle Cards)

In `LifestyleSection.tsx`, find the `[NOTE]` placeholder for each card and replace with:

```tsx
{/* @ts-ignore */}
<model-viewer
  src="/your-product.glb"
  auto-rotate
  camera-controls
  shadow-intensity="0.6"
  style={{ width: '100px', height: '100px', borderRadius: '20px', background: 'transparent' }}
/>
```

---

## 💅 Fonts

- **Syne** — Headings, brand name, buttons
- **DM Sans** — Body text, descriptions

Loaded via Google Fonts in `layout.tsx`.

---

## 📱 Mobile Responsive

All sections use inline responsive styles or `<style jsx>` breakpoints:
- Navbar hides links on `< 900px`
- Hero switches to single column on `< 900px`
- Lifestyle grid collapses to 1 column on `< 900px`
- Footer collapses to 2 cols → 1 col

---

Built with ❤️ for Gen-Z.
# newa
