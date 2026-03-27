# AGENTS.md

## Project: madvortex.co
Personal brand website for Naveen Kumar — filmmaker, visual engineer, founder of Vortex Films.

## Stack
Next.js 15 (App Router, TypeScript), Tailwind CSS 3.4, Framer Motion 12, Space Grotesk + JetBrains Mono

## Design Constraints
- Dark mode only. No light mode. No toggle.
- Accent: #BFFF00 (lime). Secondary: #FF0000 (red, sparingly).
- Max border-radius: 4px. No glassmorphism. No soft shadows.
- Film grain overlay at 0.03–0.05 opacity.
- All motion: restrained, cinematic.
- tailwind-merge: ^2.6.0 (NOT ^2.7.0)

## Build
npm run build

## Deploy
Vercel auto-deploy on push to main
