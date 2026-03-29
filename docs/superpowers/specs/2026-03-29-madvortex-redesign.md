# madvortex.co Redesign Spec

## Overview

Complete redesign of madvortex.co — Naveen Kumar's personal brand website. The site is a portrait of a person, not a company homepage. Naveen is a filmmaker, visual engineer, and founder with 11+ years in production who has worked with Nike, Converse, IKEA, Spotify, One8, Nothing, Oppo, OnePlus, Redmi, and more.

## Purpose & Audience

**Primary audience:** Creative peers and collaborators — people who discuss Naveen's work in rooms he's not in. The site confirms: "yeah, this guy is the real deal."

**Secondary audience:** Clients arriving through word of mouth. Already warm. The site seals the deal.

**The impression:** Not "hire me." It's "this is who I am, this is my taste, this is my standard." The site itself is proof of the taste being sold.

## Aesthetic Direction

**Reference:** THE Batman (2022, Matt Reeves). Dark, textured, cinematic. Not "dark mode with a black background" — actual depth.

**DNA:** Pentagram's boldness + Japanese precision + film-grade texture. Organic, not sterile. Craft, not template.

**Key visual elements:**
- Film grain overlay (subtle, animated, breathing)
- Halftone dot patterns for section backgrounds
- Noise/paper texture on surfaces — nothing sits on a flat color
- Vignette on hero imagery
- Rich textured backgrounds, never plain empty surfaces

**What it is NOT:**
- Not brutalist (no sharp square edges, that was the old site)
- Not AI slop / generic template
- Not a company homepage
- Not sterile or clinical

## Information Architecture

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero + proof + curated work + warmth + contact |
| `/work` | Work Archive | All projects listed |
| `/work/[slug]` | Project Detail | Visual essay — cinematic stills + director's commentary |
| `/thoughts` | Thoughts Feed | Blog/unfiltered voice (replaces "shower-thoughts") |
| `/thoughts/[slug]` | Post Detail | Individual post (MDX) |
| `/about` | About | First-person conversation. Candid, warm, mildly funny. Mentor identity. |
| `/wishlist` | Give & Get | Two-way wishlist — things Naveen wants + things he's giving away. Claim badges. Manual updates via JSON for v1. |
| `/links` | Links | Social media links |

**Removed from current site:** Labs page, boot sequence animation.

### Homepage Flow

1. **Hero** — Real photo of Naveen (moody, textured, dark) + bold name + one statement + brand proof (Nike. Spotify. IKEA. Nothing. — delivered as heavy typography, not a logo carousel)
2. **Selected Work** — 3-4 curated projects, cinematic presentation (not a grid of cards)
3. **Personal Beat** — Mood shifts warmer. Something conversational, human. Currently reading/building/obsessing. The friend moment.
4. **Thoughts Preview** — Latest 2-3 blog posts
5. **Contact** — Direct, easy, human

### Navigation

Minimal. Home, Work, Thoughts, About. No dropdowns. Contact accessible from nav or as a floating element.

## Design System

### Typography

- **Headlines:** Bold/Black weight grotesque sans-serif. Tight tracking, oversized. Candidates: Clash Display, Space Grotesk Bold, Satoshi Black.
- **Body:** Clean sans-serif at readable weight. Space Grotesk Regular or Inter.
- **Monospace accent:** JetBrains Mono for metadata, dates, tags. Keeps technical edge.
- **Character:** Thick, textured, confident. Not bougie serif — bold and raw. The kind of type that could be stamped on concrete.

### Color Palettes (3 variations to explore)

**Palette A — "Gotham"**
| Role | Color | Hex |
|------|-------|-----|
| Base | Near-black | `#0A0A0A` |
| Surface | Dark charcoal | `#141414` |
| Accent | Deep crimson | `#C41E1E` |
| Warmth | Warm sand | `#D4A574` |
| Text primary | Off-white | `#E8E8E8` |
| Text muted | Medium gray | `#888888` |

THE Batman. Dark city, red signals, warm skin tones.

**Palette B — "Darkroom"**
| Role | Color | Hex |
|------|-------|-----|
| Base | Charcoal | `#111111` |
| Surface | Dark gray | `#1A1A1A` |
| Accent | Bright white | `#E8E8E8` |
| Warmth | Amber | `#C47D3B` |
| Text primary | White | `#F5F5F5` |
| Text muted | Warm gray | `#999999` |

Film darkroom. High contrast type, warm chemical glow.

**Palette C — "Obsidian"**
| Role | Color | Hex |
|------|-------|-----|
| Base | Void black | `#0D0D0D` |
| Surface | Deep charcoal | `#161616` |
| Accent | Muted sage | `#8B9A6B` |
| Warmth | Parchment | `#E6C9A8` |
| Text primary | Light warm | `#E0DDD5` |
| Text muted | Stone gray | `#7A7A7A` |

Quieter. Earthy, organic, Japanese-precision mood.

### Spacing & Layout

- Generous margins — things breathe
- Max content width: ~1200px (hero/images can go full-bleed)
- Border radius: 0-4px max. No rounded pill shapes.
- No cards with drop shadows. Content sits on texture, not floating.
- Sections separated by texture shifts, not hard lines

### Motion

- **Ambient (always):** Film grain shifting, subtle element drifts. The page breathes. Organic, not performative.
- **Impact (key moments):** Hero entrance, project reveals, hover states. When something moves, it hits. Deliberate.
- **NOT:** Scroll-driven storytelling, parallax theater, scroll hijacking, boot sequences, typewriter effects.

## Content Strategy

### Portfolio (Work)

Each project is a **visual essay with director's commentary:**
- Big cinematic still images (hero shots, key frames, production stills)
- First-person narrative — the challenge, Naveen's approach, his thinking
- Not a case study template — a director's commentary
- Metadata: client, role, year, deliverables

**Imagery note:** Real photos and stills only. AI used for enhancement/texturing, never for generating hero content. Naveen's face and presence = always real.

### Thoughts (Blog)

- Unfiltered, platform-independent voice
- Not tailored for algorithms or platforms
- MDX format, owned content
- Existing posts migrate: vfx-ai-2028, premium-india, accidental-pipeline

### About

- First-person, conversational tone
- Reads like talking to a friend, not a corporate bio
- Candid, self-aware, "decently mildly funny"
- Mentor identity present — approachable, direct, helpful
- Companies (Vortex Films, Vortex Labs) mentioned as part of the story, not featured

### Voice (applies to ALL copy across the site)

The entire site speaks in Naveen's voice. Not just the About page. Project narratives, blog posts, section headings, footer copy — it all sounds like one person talking to you. Warm, direct, confident without being arrogant.

### Give & Get (Wishlist)

Two sections on one page:
- **Get:** Things Naveen wants. Small, affordable items. Friends/girlfriend/brother can claim.
- **Give:** Things Naveen is giving away (stickers, merch, one-offs). Limited quantity, claim to reserve.
- Each item: name, image, price/value, link, "claimed by [name]" badge
- v1: Manual updates via JSON file. No auth needed.
- Fun, social, personal. Not transactional.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript) — keep existing stack
- **Styling:** Tailwind CSS 4
- **Motion:** Framer Motion
- **Fonts:** Google Fonts (Space Grotesk, JetBrains Mono) + potentially Clash Display or Satoshi via Fontsource
- **Content:** MDX for blog posts, JSON for structured data (projects, wishlist, currently, links)
- **Deployment:** Vercel (existing setup)
- **Image processing:** Next.js Image optimization + fal.ai for texture/enhancement
- **SEO:** JSON-LD schema, OG images, sitemap, robots.txt

## Three Approaches (built in parallel)

All three share the IA, content, and tech stack above. They differ in presentation:

### Approach A — "The Monologue"

- Site reads like Naveen talking directly to the visitor
- One long flowing homepage with anchor sections
- Typography and first-person copy drive the experience
- Projects appear as full-bleed visual essays between monologue sections
- Palette: **Gotham** (crimson + warm sand)
- Most personality-driven of the three

### Approach B — "The Gallery"

- Homepage is a curated exhibition — tight, intentional sections
- Multi-page with clear separation of concerns
- Hero photo + bold type + brand strip for instant proof
- Work presented as full-width cinematic moments (3-4 curated on home)
- Warm shift in the personal section
- Palette: **Darkroom** (high contrast + amber warmth)
- Best balance of impact and maintainability

### Approach C — "The Film"

- Opens with a 5-8 second atmospheric mood piece (grain, color wash, name emergence)
- Settles into ultra-minimal layout — Japanese precision
- Typography does 80% of the work, lots of dark space
- Projects listed like film credits on archive page, rich detail pages
- Maximum restraint = maximum intention
- Palette: **Obsidian** (sage + parchment)
- Most distinctive and refined of the three

## Image Requirements

For the initial build, placeholder images will be used where real photos are needed. The following real assets are required before launch:

1. **Hero portrait** — moody, dark, cinematic shot of Naveen. Real photo, AI-enhanced for texture/grade.
2. **Project stills** — 3-5 hero images per portfolio project. Real production stills or key frames.
3. **About photo** — warmer, more approachable shot. The friend, not the Batman.
4. **Wishlist items** — product photos (can be from retailer links)

## Success Criteria

- Visitor knows who Naveen is and why he matters within 3 seconds
- The site itself demonstrates the taste and craft being sold
- Creative peers think "this guy operates at a different level"
- Feels like talking to a person, not browsing a template
- Reads well on mobile (cinematic, not cramped)
- Fast load times despite rich textures (optimized images, lazy loading)
- Mom is happy with it
