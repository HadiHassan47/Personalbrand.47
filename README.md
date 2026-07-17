# hadi-47-byte

Building Games. Crafting Worlds. Exploring AI.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's in this foundation (Phases 1–3, 5–7, 10, 12–19)

- `app/` — root layout (fonts, metadata), global styles, home page, `sitemap.ts` / `robots.ts` / `opengraph-image.tsx`
- `components/ui/` — Button, Card, Container, Badge, GlassPanel, SectionTitle, SocialIcon, CustomCursor
- `components/layout/` — Navbar (terminal wordmark), Footer, Background, HeroLighting, LoadingScreen (HH morph), SmoothScrollProvider (Lenis), EasterEggs, HiddenTerminal, MusicToggle
- `components/animations/` — Fade, Reveal, Floating, NameReveal, TypeWriter, CursorButterfly
- `hooks/` — useMousePosition, useKonamiCode
- `sections/` — Hero, About, Projects, Highlights (light mentions of Mochi Universe / Snake Game / Blog — no dedicated routes), Skills, AIExpertise, DesignPortfolio, Gallery, Timeline, Certifications, Testimonials, Contact
- `tailwind.config.ts` — full design token system from the blueprint
- `constants/`, `types/`, `lib/` — nav links, social links, all section data arrays, shared TS types, `cn()` helper
- `vercel.json` — basic security headers for deployment

### Easter eggs (Phase 16)
- Press **`` ` ``** (backtick) anywhere to open the hidden terminal (`help`, `whoami`, `contact`, `clear`, `exit`)
- Enter the **Konami code** (↑↑↓↓←→←→ba) to unlock a cursor-following butterfly
- Bottom-right speaker icon is a music toggle — it's wired up but silent until you drop a file at `public/audio/ambient.mp3`

### Premium polish (Phase 17)
- Loading screen with an animated "HH" mark and progress bar on first load
- Lenis-powered smooth scrolling (respects reduced-motion)
- Custom cursor with magnetic hover already in place from Phase 2

### Deployment (Phase 19) — this part is genuinely on you
I can't create accounts or buy a domain for you, but the project is ready:
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import that repo. It'll detect Next.js automatically.
3. Vercel Analytics is already wired in (`@vercel/analytics`) — just enable Analytics for the project in the Vercel dashboard.
4. Add a custom domain under Project → Settings → Domains. SSL is automatic on Vercel.

## Next steps
1. `npm install` and confirm `npm run dev` renders everything correctly.
2. Replace placeholder copy, numbers, and data arrays in `constants/index.ts` with your real info.
3. Drop real images into `public/images` / `public/projects` and wire them into `Gallery.tsx`, `Projects.tsx`, `DesignPortfolio.tsx`.
4. Drop your resume PDF into `public/resume/` and point the navbar's Resume link at it.
5. Deploy following the steps above.

## Still genuinely deferred
Only things that need real content/decisions from you, not more code:
- **Phase 4 (deep)** — individual `/projects/[slug]` pages, if you ever want routing after all
- Real project images/screenshots, your actual bio, and your resume file
