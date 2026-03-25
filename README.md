# Agritec — Agriculture & Organic Farm Website

A pixel-perfect React + Tailwind CSS clone of the Agritec agriculture website theme.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
agritec/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Icons.jsx          # All SVG icons
│   │   ├── Navbar.jsx         # Sticky navbar with mobile menu
│   │   ├── Hero.jsx           # Auto-playing hero slider (3 slides)
│   │   ├── Ticker.jsx         # Infinite scrolling marquee
│   │   ├── About.jsx          # About / intro section
│   │   ├── Services.jsx       # Services cards grid (6 cards)
│   │   ├── Stats.jsx          # Animated counter stats
│   │   ├── Sustainability.jsx # Sustainability section
│   │   ├── Features.jsx       # Skills bars + feature checklist
│   │   ├── ContactStrip.jsx   # CTA strip between sections
│   │   ├── CTABanner.jsx      # Full-width CTA with subscribe form
│   │   ├── Testimonials.jsx   # Customer testimonial cards
│   │   ├── Blog.jsx           # Latest blog posts
│   │   ├── Partners.jsx       # Partner logo strip
│   │   ├── Footer.jsx         # Full footer with links
│   │   └── ScrollToTop.jsx    # Floating scroll-to-top button
│   ├── hooks/
│   │   └── useInView.js       # Intersection observer hook
│   ├── App.jsx                # Root component
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind + global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ✨ Features

- **Hero Slider** — 3 slides, auto-plays every 5.5s, animated text, prev/next arrows, dot indicators
- **Sticky Navbar** — transparent → solid on scroll, dropdown indicators, mobile hamburger menu
- **Infinite Ticker** — smooth marquee of services
- **Scroll Animations** — every section fades/slides in using IntersectionObserver
- **Animated Counters** — numbers count up when scrolled into view (196K, 58M, 98K)
- **Skill Progress Bars** — animate from 0% on scroll
- **Services Grid** — hover lift + zoom image effect
- **Testimonials** — star ratings, quote icon overlay
- **Blog Cards** — category badge, hover image zoom
- **Scroll to Top** — floating button appears after scrolling down
- **Fully Responsive** — mobile, tablet, desktop layouts

---

## 🎨 Color Palette

| Variable       | Value     | Usage                  |
|----------------|-----------|------------------------|
| `primary`      | `#1a5c2a` | Dark green (main)      |
| `primary-dark` | `#144a22` | Hover states           |
| `primary-light`| `#e8f5e9` | Light green bg tints   |
| `accent`       | `#e8c535` | Yellow (highlights)    |
| `accent-dark`  | `#d4b22e` | Yellow hover           |

---

## 🛠 Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — utility-first styling
- **Vite 5** — blazing fast dev server & bundler
- **Google Fonts** — Plus Jakarta Sans + Dancing Script
# agritec
