# chirag.dadhich — portfolio

Personal portfolio of **Chirag Raj Dadhich** — software engineer, IIT Patna (2023–2027).
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## What's inside

- **Warm, hand-crafted design** — serif display type (Fraunces), handwritten annotations (Caveat), polaroid photo, index-card layouts, paper grain.
- **Gamified** — 7 hidden visitor achievements with unlock toasts + confetti, an interactive terminal (`help`, `sudo hire-me`, …), the konami code, and an arcade-style showcase board.
- **SEO-first** — fully static server-rendered HTML, JSON-LD `Person` structured data, OpenGraph/Twitter cards with a generated OG image, `sitemap.xml`, `robots.txt`, canonical URLs.
- **Working contact form** — `/api/contact` delivers messages via [Resend](https://resend.com). Requires `RESEND_API_KEY`; without it the form shows a graceful direct email fallback.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build