# CLAUDE.md - BienMind Codebase Guide

## Project Overview

BienMind is a corporate marketing website for an "Agentic SaaS Studio" specializing in the care and wellness (bien-etre) sector. The site is a **static marketing website** — no database, no authentication, no API routes. It showcases company products (Oliceo, SonoCrea), services, team info, and a blog powered by Markdown files.

- **Language**: French (all UI text, blog content, metadata)
- **Domain**: `bienmind.com`
- **Deployment**: Vercel (configured via `vercel.json`)

## Tech Stack

| Layer         | Technology                                     |
|---------------|------------------------------------------------|
| Framework     | Next.js 15.1 (App Router)                      |
| Language      | TypeScript 5.7 (strict mode)                   |
| UI            | React 19                                        |
| Styling       | Tailwind CSS 4 (via `@tailwindcss/postcss`)    |
| Fonts         | Inter (body), Playfair Display (headings) — local woff2 files |
| Content       | Markdown + gray-matter + remark + remark-html  |
| Linting       | ESLint 9 with eslint-config-next               |
| Deployment    | Vercel                                          |

## Commands

```bash
npm run dev      # Start development server (next dev)
npm run build    # Production build (next build)
npm run start    # Start production server (next start)
npm run lint     # Run ESLint (next lint)
```

There is no test framework configured. No test runner, no test files.

## Project Structure

```
bienmind/
├── content/
│   └── blog/                    # Markdown blog posts with YAML frontmatter
│       ├── ia-bien-etre-revolution.md
│       └── marche-wellness-2026.md
├── public/
│   └── images/blog/             # Blog cover images (SVG format)
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout (Header + Footer, fonts, metadata)
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Tailwind theme + custom prose styles
│   │   ├── about/page.tsx       # About page
│   │   ├── blog/
│   │   │   ├── page.tsx         # Blog listing
│   │   │   └── [slug]/page.tsx  # Dynamic blog post page
│   │   ├── contact/page.tsx     # Contact form page
│   │   └── services/page.tsx    # Products & services page
│   ├── components/
│   │   ├── Header.tsx           # Navigation bar ("use client" — mobile menu state)
│   │   ├── Footer.tsx           # Site footer with links
│   │   └── Disclaimer.tsx       # Health disclaimer banner for blog posts
│   ├── fonts/                   # Local woff2 font files (Inter 400-700, Playfair Display 700)
│   └── lib/
│       └── blog.ts              # Blog utilities: getAllPosts(), getPostBySlug(), getAllPostSlugs()
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts               # Minimal (default Next.js config)
└── vercel.json                  # Framework: nextjs
```

## Architecture & Conventions

### Rendering Strategy

All pages are **server components by default** (Next.js App Router convention). The only client component is `Header.tsx` (marked with `"use client"`) because it manages mobile menu toggle state. Everything else renders on the server / at build time.

Blog posts are **statically generated** via `generateStaticParams()` in `src/app/blog/[slug]/page.tsx`.

### Path Aliases

TypeScript path alias `@/*` maps to `./src/*`. Always use it for imports:

```typescript
import Header from "@/components/Header";   // correct
import { getAllPosts } from "@/lib/blog";    // correct
```

### Styling Conventions

- **Tailwind CSS 4** with `@theme` directive in `globals.css` — no `tailwind.config.js`
- Custom color tokens defined in `globals.css` under `@theme`:
  - `primary-*` (blue scale: #eff6ff to #1e3a8a)
  - `accent-*` (green scale: #f0fdf4 to #14532d)
  - `warm-*` (amber scale: #fffbeb to #f59e0b)
- Font variables: `--font-sans` (Inter), `--font-display` (Playfair Display)
- Use `font-display` class for headings, `font-sans` (default) for body text
- Responsive breakpoints follow Tailwind defaults: `sm:`, `md:`, `lg:`
- Consistent use of `rounded-2xl` / `rounded-3xl` for cards and sections
- Container pattern: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Gradients are used extensively for backgrounds and decorative elements

### Component Patterns

- Pages export a default function component (e.g., `export default function Home()`)
- Inline SVG icons throughout (no icon library) — Heroicons-style stroke icons
- Data arrays defined at module level as constants (e.g., `products`, `expertise`, `navigation`)
- No prop drilling or global state management beyond React's built-in hooks
- HTML entity `&apos;` used for apostrophes in JSX text content

### Blog System

Blog posts live in `content/blog/` as Markdown files with YAML frontmatter:

```yaml
---
title: "Article title"
date: "2026-02-05"
excerpt: "Short description"
author: "BienMind"
category: "Category name"
image: "/images/blog/cover.svg"      # optional — path to SVG in public/
coverColor: "from-blue-400 to-green-400"  # fallback gradient if no image
---
```

The blog library (`src/lib/blog.ts`) provides:
- `getAllPosts()` — returns all posts sorted by date (newest first), with computed `readingTime`
- `getPostBySlug(slug)` — returns a single post with HTML content (markdown processed via remark)
- `getAllPostSlugs()` — returns slug strings for static generation

Blog content is rendered via `dangerouslySetInnerHTML` with prose styling classes.

### Metadata

Each page exports a `metadata` object or `generateMetadata()` function following the Next.js Metadata API:

```typescript
export const metadata: Metadata = {
  title: "Page Title",          // uses template "%s | BienMind" from root layout
  description: "Description",
};
```

### Key Business Details (hardcoded in components)

- Company: BienMind
- Location: Paris, France
- Email: hello@bienmind.com
- Phone: +33 (0)1 85 09 80 06
- Products: Oliceo (https://oliceo.com), SonoCrea (https://sonocrea.com)

## What This Project Does NOT Have

- No database or ORM (no Prisma, Drizzle, etc.)
- No authentication or user accounts
- No API routes (`src/app/api/` does not exist)
- No test framework or test files
- No CI/CD pipeline (relies on Vercel's built-in deployment)
- No `.env` files or environment variables required
- No state management library (no Redux, Zustand, etc.)
- No component library (no shadcn/ui, Radix, etc.)
- No internationalization framework (content is hardcoded in French)

## Adding a New Blog Post

1. Create a new `.md` file in `content/blog/` with a slug-friendly filename (e.g., `my-article.md`)
2. Add required YAML frontmatter: `title`, `date`, `excerpt`, `author`, `category`
3. Optionally add `image` (path to SVG in `public/images/blog/`) or `coverColor` (Tailwind gradient classes)
4. Write article content in Markdown below the frontmatter
5. The post will automatically appear in the blog listing and get its own page at `/blog/<slug>`

## Adding a New Page

1. Create a new directory under `src/app/` with a `page.tsx` file
2. Export a default React component and optionally a `metadata` object
3. Follow the existing section-based layout pattern (hero section + content sections)
4. Add navigation link in `src/components/Header.tsx` in the `navigation` array
5. Add footer link in `src/components/Footer.tsx` if appropriate

## Code Style Notes

- Double quotes for strings in TypeScript/JSX
- Semicolons at end of statements
- 2-space indentation
- Arrow functions for inline handlers, regular function declarations for components
- Consistent section structure: `<section className="py-20 sm:py-28">` with nested container div
