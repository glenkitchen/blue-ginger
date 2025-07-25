# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Planning

- Use plan mode to make plans
- Update tasks in the planning document as you complete tasks.
- Abstract components where you can. Create them in the components folder. These components should accept data propertes and not contain hardcoded data.

## Project Overview

This is a Next.js project for converting a static HTML pet sitting business website (`assets/UI.html`) into a modern React/Next.js application. The project is for Blue Ginger Petsitting, a professional pet care service in Ballito, KZN.

## Development Commands

- `npm run dev` or `bun dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Project Context

The main goal is converting `assets/UI.html` into a Next.js application. Reference materials include:

- `assets/UI.html` - Complete static HTML template with TailwindCSS styling
- `assets/Infographic.PNG` - Primary visual asset for hero image, logo extraction, and theme definition
- `assets/Prompt.txt` - Original design specifications

## Architecture

**Tech Stack:**

- Next.js 15.4.4 with App Router
- React 19.1.0
- TypeScript
- TailwindCSS v4 with PostCSS
- Custom fonts: Geist and Geist Mono

**Structure:**

- `src/app/` - Next.js App Router pages
- `src/app/page.tsx` - Homepage (currently default Next.js template)
- `src/app/layout.tsx` - Root layout with fonts and metadata
- `src/app/globals.css` - Global styles
- `public/` - Static assets
- `assets/` - Project reference materials and design assets

**Current State:**
The codebase contains the default Next.js template. The HTML template in `assets/UI.html` provides the complete design to be converted, featuring:

- Responsive pet sitting business landing page
- Purple/teal gradient color scheme
- Service cards, testimonials, contact forms
- Professional pet care imagery and content

**Path Aliases:**

- `@/*` maps to `./src/*`

## Business Context

Blue Ginger Petsitting offers:

- Stay Over Service (R300/day + travel)
- Check-In Visits (R200 + travel)
- Hourly Pet Sitting (R200 + travel)
- Dog Walks (contact for pricing)

Contact: 072 576 0937, bluegingerpetsitting@gmail.com
