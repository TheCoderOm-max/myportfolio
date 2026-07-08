# Om Bhattarai — Portfolio

A premium, minimalist personal portfolio built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** for styling, with design tokens matching a light, Apple/Vercel-inspired
  aesthetic (see `tailwind.config.ts`)
- **Framer Motion** for scroll reveals, the mobile menu, the project modal, and the toast
- **Lucide React** for icons
- **Inter** (body/display) + **JetBrains Mono** (labels, tags, eyebrows) via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind directives + base styles
components/
  Navbar.tsx          Sticky nav, scroll-shrink, mobile menu
  Hero.tsx
  Highlights.tsx
  About.tsx
  Experience.tsx      Uses ui/Timeline
  Projects.tsx        Cards + modal state
  ProjectModal.tsx
  Publications.tsx
  Skills.tsx
  CompetitiveProgramming.tsx
  Achievements.tsx
  Education.tsx       Uses ui/Timeline
  Contact.tsx         Form + toast
  Footer.tsx
  ui/
    Reveal.tsx         Scroll-reveal wrapper (Framer Motion)
    Timeline.tsx        Shared vertical timeline
    SectionHeader.tsx   Shared eyebrow + title + subtitle
    Toast.tsx
lib/
  data.ts             All portfolio content (single source of truth)
  types.ts            Shared TypeScript types
```

## Editing content

Everything you'd want to change — project descriptions, publications, skills, experience,
education, contact links, resume link — lives in `lib/data.ts`. There's no content hardcoded
inside components, so this is the only file you need to touch for day-to-day updates.

## Things to replace before deploying

- **Resume link**: the "Download Resume" buttons in `Navbar.tsx` and `Hero.tsx` point to `#`.
  Add a PDF to `/public` and update the `href`.
- **Portrait photo**: `Hero.tsx` uses a placeholder Unsplash image. Swap in your own photo
  (add it to `/public` and update the `src`).
- **Project images**: same — placeholders from Unsplash in `lib/data.ts`.
- **Real links**: GitHub, LinkedIn, LeetCode, CodeChef, and email in `lib/data.ts`
  (`contactLinks`, `projects[].githubUrl/liveUrl`, `publications[].url`, `cpStats[].url`).
- **Contact form**: currently just shows a success toast with no backend. Wire it to an email
  service (Resend, Formspree) or a Next.js API route / Server Action in `Contact.tsx`.

## Adding future sections

The brief calls out future growth (blog, testimonials, more publications, certifications, open
source). To add a new section: create a component in `components/`, add its content shape to
`lib/types.ts` and data to `lib/data.ts`, then drop it into `app/page.tsx` and add a nav link in
`lib/data.ts`'s `navLinks`.
