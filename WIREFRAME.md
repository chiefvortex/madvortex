# madvortex.co -- Personal Brand Wireframe v2

> This is Naveen Kumar's personal website. Not Vortex Films. Not Vortex Labs.
> Not a company. Not a startup. A person.

---

## Site Identity

| Key | Value |
|-----|-------|
| Domain | madvortex.co |
| Owner | Naveen Kumar |
| Nav wordmark | `madvortex` (lowercase, links to /) |
| Tone | Personal, opinionated, tasteful, cinematic, direct |
| Voice | Third person in hero/intro, first person deeper in the page |
| Theme | Dark default + light mode toggle |
| Contact | naveen@vortexfilms.in |

---

## Information Architecture

```
madvortex.co/
|
|-- /                        Home
|-- /work                    Projects (listing)
|-- /work/[slug]             Project detail (short + visual)
|-- /links                   Social cards
|-- /labs                    Tools & experiments (listing)
|-- /labs/[slug]             Individual tool page
|-- /shower-thoughts         Blog (listing)
|-- /shower-thoughts/[slug]  Blog post (MDX)
```

---

## Navigation

### Desktop
```
+---------------------------------------------------------------+
| madvortex          Work   Labs   Shower Thoughts   Links      |
+---------------------------------------------------------------+
```

- Left: `madvortex` wordmark (links to /)
- Right: `Work` | `Labs` | `Shower Thoughts` | `Links`
- Optional far-right: `Say Hello` (mailto CTA, text link, not button)
- Scroll behavior: transparent at top, subtle bg + thin bottom border on scroll
- Current page: small dot below active link or thin underline
- No dropdowns. No mega-menus.

### Mobile
- Hamburger icon (right-aligned)
- Opens full-screen overlay with large type
- Same links, stacked vertically
- Close button top-right

### Theme Toggle
- Small sun/moon icon in nav, right side before the CTA
- Toggles between dark and light mode
- Persists via localStorage
- Respects system preference on first visit

---

## Color System

### Dark Mode (default)
```
--bg:            #0A0A0A
--surface:       #1A1A2E
--text:          #E8E8E8
--text-muted:    #888888
--accent:        #0033FF
--border:        rgba(255, 255, 255, 0.06)
--border-hover:  rgba(255, 255, 255, 0.12)
```

### Light Mode
```
--bg:            #F8F8FA
--surface:       #FFFFFF
--text:          #1A1A1A
--text-muted:    #717171
--accent:        #0033FF
--border:        rgba(0, 0, 0, 0.06)
--border-hover:  rgba(0, 0, 0, 0.12)
```

Accent stays `#0033FF` in both modes. The brand color is constant.

---

## Typography

```
Body + Headings:  Inter (300-900)
Code / Labels:    JetBrains Mono
Hero headline:    900 weight, -0.03em letter-spacing
Section headings: 700 weight, -0.02em letter-spacing
Eyebrow labels:   500 weight, uppercase, 0.05em-0.1em letter-spacing
Body:             400 weight, line-height 1.7
Blog prose:       400 weight, ~17px, line-height 1.8, max-width 680px
```

---

## Shape & UI Rules

- Max border radius: 4px
- No shadows (except very subtle on light mode cards if needed)
- No glassmorphism, no blur (except nav backdrop)
- No rounded-full anything except the theme toggle icon
- Borders: 1px solid var(--border)
- Buttons: outlined by default, filled accent on hover
- Links: no underline by default, underline on hover

---

## Page 1: HOME (/)

### 1.1 Hero

```
+---------------------------------------------------------------+
|                                                               |
|                                                               |
|     NAVEEN KUMAR                                              |
|                                                               |
|     I make things move.                                       |
|                                                               |
|     Visual engineer. Founder of Vortex. Based in Bangalore.   |
|                                                               |
|     [See the work -->]                                        |
|                                                               |
|                                                               |
|                         |                                     |
|                         |  (scroll indicator)                 |
|                         v                                     |
+---------------------------------------------------------------+
```

- Full viewport height
- `NAVEEN KUMAR` as small uppercase eyebrow (500 weight, tracked out)
- `I make things move.` as hero headline (900 weight, -0.03em, large)
- Subline: `Visual engineer. Founder of Vortex. Based in Bangalore.`
- CTA: `See the work` -- outlined button, electric blue border, fills on hover
- Dark background with subtle atmospheric element (grain texture, slow light drift)
- Scroll indicator: thin animated vertical line at bottom center
- NO stock images. NO 3D renders. Abstract/generative bg or clean negative space.

### 1.2 Selected Work Preview

```
+---------------------------------------------------------------+
|                                                               |
|  RECENT WORK                                                  |
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  | [16:9 dark placeholder]   |  | [16:9 dark placeholder]   | |
|  |                           |  |                           | |
|  | AMD                       |  | Nike                      | |
|  | CGI Brand Film            |  | Motion Campaign           | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
|  +---------------------------+                                |
|  | [16:9 dark placeholder]   |                                |
|  |                           |                                |
|  | Spotify                   |                                |
|  | 3D Product Story          |                                |
|  +---------------------------+                                |
|                                                               |
|  View all work -->                                            |
|                                                               |
+---------------------------------------------------------------+
```

- Show 2-3 hero projects only (not the full portfolio)
- Each card: dark placeholder with faint grid/scanline texture, title + client at bottom
- Hover: subtle upward shift (-4px) + accent border
- `View all work -->` as a text link, not a button
- Each card links to /work/[slug]
- Staggered reveal on scroll

### 1.3 The Intro

```
+---------------------------------------------------------------+
|                                                               |
|  [left -- 60%]                    [right -- 40%]              |
|                                                               |
|  Naveen Kumar is a visual         +---------------------+    |
|  engineer based in Bangalore      |                     |    |
|  who builds cinematic systems     |  Abstract visual    |    |
|  for brands that refuse to        |  or photo of        |    |
|  look like everyone else.         |  Naveen             |    |
|                                   |                     |    |
|  -------------------------------- +---------------------+    |
|                                                               |
|  I started Vortex from a                                      |
|  bedroom with a cracked copy                                  |
|  of After Effects and an                                      |
|  obsession with making things                                 |
|  move. Today I build visual                                   |
|  systems for brands that                                      |
|  refuse to look like everyone                                 |
|  else.                                                        |
|                                                               |
+---------------------------------------------------------------+
```

- Opens in third person (editorial, like a magazine feature)
- Transitions to first person as you scroll deeper (personal, raw)
- Short paragraphs, strong opening lines
- Right side: optional photo/visual or leave as negative space
- No stats counters here. The intro is about voice, not numbers.

### 1.4 What I Do (brief)

```
+---------------------------------------------------------------+
|                                                               |
|  WHAT I BUILD                                                 |
|                                                               |
|  VFX & Compositing       3D & CGI Production                  |
|  Precision post-          High-end product visuals            |
|  production.              and CG sequences.                   |
|                                                               |
|  AI-Assisted Video        Creative Direction                  |
|  Modern AI-integrated     Visual systems and                  |
|  production pipelines.    narrative-led content.              |
|                                                               |
+---------------------------------------------------------------+
```

- 2x2 grid on desktop, stacked on mobile
- Each card: title + ONE line description. That's it.
- Flat, dark, no icons, no borders or very thin borders
- This is a signal, not a pitch. The work page does the selling.

### 1.5 Currently

```
+---------------------------------------------------------------+
|                                                               |
|  CURRENTLY                                                    |
|                                                               |
|  Reading           "Shoe Dog" by Phil Knight                  |
|  Building          An AI color grading tool                   |
|  Obsessing Over    Severance S2                               |
|  Listening         Cigarettes After Sex                       |
|                                                               |
+---------------------------------------------------------------+
```

- Small, understated section
- Labels in JetBrains Mono or uppercase Inter, muted color
- Content in regular weight, primary text color
- Updated manually via a JSON file or hardcoded (simple)
- 2-column layout: label left, value right
- Adds massive personality for near-zero design cost

### 1.6 Contact

```
+---------------------------------------------------------------+
|                                                               |
|  Say hello. Or don't.                                         |
|                                                               |
|  naveen@vortexfilms.in                                        |
|                                                               |
|  [Say Hello]                                                  |
|                                                               |
|  Bangalore, India                                             |
|                                                               |
+---------------------------------------------------------------+
```

- Headline: `Say hello. Or don't.` (large, editorial)
- Email displayed as text (clickable mailto)
- One button: `Say Hello` (outlined, accent border)
- Location below in muted text
- Zero pressure. High personality.

### 1.7 Footer

```
+---------------------------------------------------------------+
|  ------------------------------------------------------------ |
|  madvortex.co                   LinkedIn  X  Instagram  GitHub |
|  (c) 2026 Naveen Kumar                                        |
+---------------------------------------------------------------+
```

- Thin accent-colored divider above
- Left: site name + copyright
- Right: social icon links (Lucide icons)
- Minimal. Clean. Done.

---

## Page 2: WORK (/work)

### Listing

```
+---------------------------------------------------------------+
|                                                               |
|  THE WORK                                                     |
|                                                               |
|  [All] [VFX] [CGI] [3D] [AI Video] [Direction]               |
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  | [16:9 placeholder]        |  | [16:9 placeholder]        | |
|  | AMD                       |  | Nike                      | |
|  | CGI Brand Film            |  | Motion Campaign           | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  | Spotify                   |  | IKEA                      | |
|  | 3D Product Story          |  | Retail Visuals            | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  | Qatar Airways             |  | One8                      | |
|  | Premium Brand Motion      |  | Brand Direction           | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
+---------------------------------------------------------------+
```

- 2 columns desktop, 1 mobile
- Filter: horizontal pills with AnimatePresence on filter change
- Each card: 16:9 placeholder, client name, project title, category tag
- NO year displayed
- Hover: upward shift + accent border
- Staggered scroll reveal

### Project Detail (/work/[slug])

```
+---------------------------------------------------------------+
|                                                               |
|  <-- Back to work                                             |
|                                                               |
|  AMD                                                          |
|  CGI Brand Film                                               |
|  CGI | Commercial                                             |
|                                                               |
|  +-------------------------------------------------------+   |
|  |                                                       |   |
|  |   [Hero image -- full width, 16:9]                    |   |
|  |                                                       |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  [1-2 paragraphs from Naveen's perspective]                   |
|                                                               |
|  How I approached this project, what made it                  |
|  interesting, what I pushed for, what I'd do                  |
|  differently.                                                 |
|                                                               |
|  +------------------+  +------------------+                   |
|  | [image]          |  | [image]          |                   |
|  +------------------+  +------------------+                   |
|  +------------------+  +------------------+                   |
|  | [image]          |  | [image]          |                   |
|  +------------------+  +------------------+                   |
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  | <-- Previous project      |  | Next project -->          | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
+---------------------------------------------------------------+
```

**Key approach: short and visual.**
- 1-2 paragraphs max, written in first person
- Focus on perspective, not deliverables
- Image gallery (2-column grid) carries the weight
- NO "The Brief / The Approach / The Result" sections
- NO tech stack, NO team size, NO timeline
- Prev/next navigation at bottom

---

## Page 3: LINKS (/links)

```
+---------------------------------------------------------------+
|                                                               |
|  FIND ME HERE                                                 |
|  (or don't. I'm not your dad.)                                |
|                                                               |
|  +-------------------------------------------------------+   |
|  |  [X icon]    X (Twitter)         @madvortex      -->  |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  +-------------------------------------------------------+   |
|  |  [LI icon]   LinkedIn            Naveen Kumar     -->  |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  +-------------------------------------------------------+   |
|  |  [IG icon]   Instagram           @madvortex      -->  |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  +-------------------------------------------------------+   |
|  |  [GH icon]   GitHub              @madvortex      -->  |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  +-------------------------------------------------------+   |
|  |  [YT icon]   YouTube             Vortex Films     -->  |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  +-------------------------------------------------------+   |
|  |  [Be icon]   Behance             Naveen Kumar     -->  |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  +-------------------------------------------------------+   |
|  |  [Mail icon] Email               naveen@vortex... -->  |   |
|  +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

- 7 cards: X, LinkedIn, Instagram, GitHub, YouTube, Behance, Email
- Centered layout, max-width ~600px
- Each card: icon (left), platform name + handle (center), arrow (right)
- Dark cards, subtle border, 4px radius
- Hover: slight lift + electric blue border accent
- Cards animate in staggered on page load
- Opens external links in new tab
- Email card triggers mailto
- Quirky subtitle adds personality
- Data driven from a JSON array (easy to add/remove platforms)

---

## Page 4: LABS (/labs)

### Status: Aspirational
The page structure is built, but tools will be added over time.

### Listing

```
+---------------------------------------------------------------+
|                                                               |
|  THE LAB                                                      |
|  Things I build when nobody's watching.                       |
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  |                           |  |                           | |
|  |  [Coming Soon]            |  |  [Coming Soon]            | |
|  |                           |  |                           | |
|  |  AI Color Grader          |  |  Prompt Optimizer         | |
|  |  Drop a frame, get a      |  |  Paste a prompt, get      | |
|  |  cinematic grade.          |  |  a better one.            | |
|  |                           |  |                           | |
|  |  SOON                     |  |  SOON                     | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
|  +-------------------------------------------------------+   |
|  |                                                       |   |
|  |  More experiments brewing. Check back.                |   |
|  |                                                       |   |
|  +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

- 2-column grid desktop, 1 mobile
- Cards: tool name, one-line description, status badge (FREE / SOON)
- "Coming Soon" cards are visually dimmed (lower opacity, no hover effect)
- Each live tool links to /labs/[slug]
- Empty state: "More experiments brewing. Check back."
- As tools are built, they go from SOON to FREE with a "Try it -->" CTA

### Tool Detail (/labs/[slug])

```
+---------------------------------------------------------------+
|                                                               |
|  <-- Back to labs                                             |
|                                                               |
|  AI COLOR GRADER                                              |
|  Drop a frame. Get a cinematic grade.                         |
|                                                               |
|  +-------------------------------------------------------+   |
|  |                                                       |   |
|  |   [Tool UI -- embedded React component]               |   |
|  |                                                       |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  HOW IT WORKS                                                 |
|  [2-3 sentences]                                              |
|                                                               |
|  BUILT WITH                                                   |
|  Next.js, fal.ai, Tailwind                                   |
|                                                               |
+---------------------------------------------------------------+
```

---

## Page 5: SHOWER THOUGHTS (/shower-thoughts)

### Engine: MDX files in the repo

Posts live in `/content/posts/` as `.mdx` files with frontmatter:
```yaml
---
title: "Why Every VFX Studio Will Be an AI Company by 2028"
date: "2026-03-15"
readTime: "8 min"
featured: true
popular: true
excerpt: "The tools changed. The taste didn't."
---
```

### Listing

```
+---------------------------------------------------------------+
|                                                               |
|  SHOWER THOUGHTS                                              |
|  Opinions, observations, and occasionally useful things.      |
|                                                               |
|  [LATEST]                                                     |
|                                                               |
|  +-------------------------------------------------------+   |
|  |                                                       |   |
|  |  Why Every VFX Studio Will Be an AI Company by 2028   |   |
|  |  March 2026 | 8 min read                              |   |
|  |                                                       |   |
|  +-------------------------------------------------------+   |
|                                                               |
|  [RECENT]                                                     |
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  |  The Problem With         |  |  How I Accidentally       | |
|  |  "Premium" in India       |  |  Built a VFX Pipeline     | |
|  |  Feb 2026 | 5 min         |  |  with AI                  | |
|  +---------------------------+  |  Jan 2026 | 6 min         | |
|                                 +---------------------------+ |
|  +---------------------------+  +---------------------------+ |
|  |  What Clients Actually    |  |  The Bangalore Creative   | |
|  |  Want (It's Not What      |  |  Scene Doesn't Exist      | |
|  |  They Say)                |  |  (Yet)                    | |
|  |  Dec 2025 | 4 min         |  |  Nov 2025 | 7 min        | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
|  [POPULAR]                                                    |
|                                                               |
|  1. Why Every VFX Studio Will Be an AI Company by 2028       |
|  2. The Problem With "Premium" in India                       |
|  3. How I Accidentally Built a VFX Pipeline with AI           |
|                                                               |
+---------------------------------------------------------------+
```

- Top: one featured/latest post (large card, full width)
- Below: 2-column grid of recent posts
- Below: "Popular" as a simple numbered list
- Each card: title, date, read time. No images on listing.
- Clean, text-forward, editorial

### Post Detail (/shower-thoughts/[slug])

```
+---------------------------------------------------------------+
|                                                               |
|  <-- Back to shower thoughts                                  |
|                                                               |
|  Why Every VFX Studio Will Be an                              |
|  AI Company by 2028                                           |
|                                                               |
|  March 15, 2026 | 8 min read                                 |
|  By Naveen Kumar                                              |
|                                                               |
|  ------------------------------------------------------------ |
|                                                               |
|  [Article body -- MDX rendered prose]                         |
|                                                               |
|  Max-width 680px. Clean typography.                           |
|  65-75 chars per line. Generous                               |
|  line-height (1.8). No sidebar.                               |
|  Images inline where needed.                                  |
|  Code blocks styled if technical.                             |
|                                                               |
|  ------------------------------------------------------------ |
|                                                               |
|  SHARE                                                        |
|  [X] [LinkedIn] [Copy link]                                   |
|                                                               |
|  ------------------------------------------------------------ |
|                                                               |
|  MORE SHOWER THOUGHTS                                         |
|  +---------------------------+  +---------------------------+ |
|  | <-- Previous post         |  | Next post -->             | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
+---------------------------------------------------------------+
```

- Reading experience is the priority
- Large title, generous whitespace
- Body: Inter 400, ~17px, line-height 1.8
- Share row: X, LinkedIn, Copy link
- Prev/next navigation at bottom

---

## Global Components

### Section Heading
Reusable component for all section titles:
- Eyebrow: uppercase, muted, small, tracked
- Heading: large, bold, -0.02em
- Optional subtitle: muted, regular weight

### Back Link
`<-- Back to [section]` link at top of all detail pages.
Muted text, accent on hover.

### Project Card
Reusable across home preview and /work listing.
Props: title, client, category, slug, image.

### Link Card
Used on /links page.
Props: platform, handle, url, icon.

### Tool Card
Used on /labs listing.
Props: name, description, status (free/soon), slug.

### Post Card
Used on /shower-thoughts listing.
Props: title, date, readTime, slug.

---

## Motion Rules

- Scroll reveals: Framer Motion `whileInView`, staggered, `once: true`
- Hover transitions: 200ms ease
- Page transitions: subtle fade (via Next.js layout transitions or AnimatePresence)
- Currently section: no animation, static
- Cards: staggered reveal + hover lift
- Hero: slow atmospheric motion in background
- `prefers-reduced-motion`: disable all motion, show content immediately

---

## Technical Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 (App Router) | Framework |
| React | 19 | UI |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 12 | Animations |
| Lucide React | latest | Icons |
| MDX | next-mdx-remote or @next/mdx | Blog posts |
| tailwind-merge | ^2.6.x | Class merging (NOT 2.7) |
| next-themes | latest | Dark/light mode |

---

## File Structure

```
app/
|-- layout.tsx                 Root layout (nav, footer, theme provider)
|-- page.tsx                   Home
|-- globals.css                Global styles + theme variables
|
|-- work/
|   |-- page.tsx               Work listing
|   |-- [slug]/
|       |-- page.tsx           Project detail
|
|-- links/
|   |-- page.tsx               Social links
|
|-- labs/
|   |-- page.tsx               Labs listing
|   |-- [slug]/
|       |-- page.tsx           Tool page
|
|-- shower-thoughts/
|   |-- page.tsx               Blog listing
|   |-- [slug]/
|       |-- page.tsx           Blog post

components/
|-- nav.tsx                    Navigation
|-- footer.tsx                 Footer
|-- theme-toggle.tsx           Dark/light toggle
|-- section-heading.tsx        Reusable section heading
|-- back-link.tsx              "Back to X" link
|-- project-card.tsx           Work project card
|-- link-card.tsx              Social link card
|-- tool-card.tsx              Lab tool card
|-- post-card.tsx              Blog post card
|-- currently.tsx              Currently section
|-- hero.tsx                   Home hero
|-- work-preview.tsx           Home work preview (3 cards)
|-- intro.tsx                  Home intro/about
|-- services-brief.tsx         Home services grid
|-- contact-strip.tsx          Home contact CTA

content/
|-- projects.json              Project data
|-- links.json                 Social links data
|-- tools.json                 Lab tools metadata
|-- currently.json             Currently reading/building/etc
|-- posts/                     MDX blog posts
    |-- vfx-ai-2028.mdx
    |-- premium-india.mdx
    |-- ...

lib/
|-- utils.ts                   cn() helper
|-- mdx.ts                     MDX utilities
```

---

## Build Phases

### Phase 1: Foundation
1. Root layout with nav + footer + theme provider
2. Home page (all 7 sections)
3. Links page
4. Dark/light mode working

### Phase 2: Portfolio
5. Work listing with filters
6. Work detail template
7. Populate 6 projects via projects.json

### Phase 3: Blog
8. MDX setup (next-mdx-remote or @next/mdx)
9. Shower Thoughts listing
10. Shower Thoughts detail
11. Write 2-3 placeholder posts

### Phase 4: Labs
12. Labs listing (aspirational cards)
13. Labs detail template
14. First tool when ready

---

## What This Site Is NOT

- Not a company website (no "we", no team page, no trust bar)
- Not a SaaS landing page (no pricing, no "book a demo")
- Not a portfolio template (no generic stock photos)
- Not a newsletter gate (no pop-ups, no cookie walls)
- Not Vortex Films or Vortex Labs -- it's Naveen Kumar

## What This Site IS

- A person's digital home
- Dark, cinematic, editorial, sharp
- Personality-forward (Currently section, quirky CTAs, raw voice)
- A site that gets better as more content is added
- Something you'd bookmark because the person is interesting
