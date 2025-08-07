# Blue Ginger Petsitting - Implementation Plan

## Project Overview
Converting the static HTML pet sitting website (`assets/UI.html`) into a modern Next.js 15 application with React 19, TypeScript, and Tailwind CSS v4.

## Technology Stack
- **Framework**: Next.js 15.4.4 with App Router
- **React**: 19.1.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans & Geist Mono (already configured)

## Phase 1: Project Setup & Architecture (30-45 min)

### 1.1 Tailwind Configuration
- [x] Configure custom pet-themed colors in globals.css:
  - `--pet-purple: #6B46C1`
  - `--pet-teal: #14B8A6` 
  - `--pet-green: #10B981`
- [x] Add smooth scrolling behavior
- [x] Update font family to use Geist Sans

### 1.2 TypeScript Interfaces
- [x] Create `src/types/index.ts` with interfaces:
  - `Service` - for pet sitting services
  - `Review` - for customer testimonials
  - `ContactFormData` - for contact form
  - `Feature` - for benefit highlights
  - `NavItem` - for navigation items

### 1.3 Directory Structure
- [ ] Create component directories:
  - `src/components/` - root components
  - `src/components/ui/` - reusable UI components
  - `src/components/sections/` - page sections
- [ ] Create data directory:
  - `src/data/` - static data files

## Phase 2: Core Components (60-90 min)

### 2.1 Layout Components
- [ ] **Header Component** (`src/components/Header.tsx`)
  - Logo with gradient paw icon
  - Navigation menu (Services, About, Reviews, Contact)
  - Mobile hamburger menu
  - Call-to-action button (Call Now)
  - Sticky positioning

- [ ] **Footer Component** (`src/components/Footer.tsx`)
  - Brand information with logo
  - Service links
  - Contact details
  - Social media icons (Facebook, Instagram, WhatsApp)
  - Copyright information

### 2.2 UI Components
- [ ] **ServiceCard Component** (`src/components/ui/ServiceCard.tsx`)
  - Service icon/emoji
  - Title and description
  - Pricing information
  - Gradient backgrounds
  - Hover effects

- [ ] **ReviewCard Component** (`src/components/ui/ReviewCard.tsx`)
  - 5-star rating display
  - Customer testimonial text
  - Avatar with initial
  - Customer name and verification badge

- [ ] **FeatureCard Component** (`src/components/ui/FeatureCard.tsx`)
  - Feature icon in colored circle
  - Title and description
  - Consistent styling with hover effects

- [ ] **ContactForm Component** (`src/components/ui/ContactForm.tsx`)
  - Form fields: name, email, phone, service selection, message
  - Validation and error states
  - Submit handling (form submission logic)
  - Tailwind styling with focus states

## Phase 3: Page Sections (90-120 min)

### 3.1 Hero Section (`src/components/sections/HeroSection.tsx`)
- Purple to teal gradient background
- Compelling headline: "Where we look after your pets as if they are our own"
- Descriptive text about professional pet sitting
- Two CTA buttons: "Book Now" and phone number
- 2x2 grid of pet images (using Unsplash URLs from HTML)

### 3.2 Services Section (`src/components/sections/ServicesSection.tsx`)
- Section title and description
- 4-card grid layout:
  1. Stay Over Service (R300/day + travel) - Purple gradient
  2. Check-In Visits (R200 + travel) - Teal gradient  
  3. Hourly Pet Sitting (R200 + travel) - Pink gradient
  4. Dog Walks (Contact for pricing) - Orange gradient

### 3.3 Features Section (`src/components/sections/FeaturesSection.tsx`)
- "Why Choose Blue Ginger?" heading
- 3-card layout highlighting:
  1. Personalized Care (heart icon)
  2. Daily Updates (camera icon)  
  3. Certified & Experienced (certificate icon)

### 3.4 About Section (`src/components/sections/AboutSection.tsx`)
- Two-column layout
- Rachel's profile image
- "Meet Rachel" content
- Certification badges/tags
- Personal story about rescue work

### 3.5 Reviews Section (`src/components/sections/ReviewsSection.tsx`)
- Section heading with 5-star display
- "5 star reviews • 28 reviews written"
- 3-card testimonial grid
- Real customer names and quotes from HTML

### 3.6 Contact Section (`src/components/sections/ContactSection.tsx`)
- Two-column layout
- Left: Contact information with icons
  - Phone, email, service area
  - Emergency contact card
- Right: Contact form component
- Consistent styling with other sections

## Phase 4: Integration & Polish (45-60 min)

### 4.1 Main Page Assembly
- [ ] Update `src/app/page.tsx` to compose all sections
- [ ] Import and arrange sections in proper order
- [ ] Remove default Next.js template content

### 4.2 Data Management
- [ ] Create `src/data/services.ts` - service definitions
- [ ] Create `src/data/reviews.ts` - customer testimonials
- [ ] Create `src/data/features.ts` - feature definitions
- [ ] Ensure all data matches HTML template content

### 4.3 Responsive Design
- [ ] Test and refine mobile layouts (< 768px)
- [ ] Optimize tablet layouts (768px - 1024px)
- [ ] Ensure desktop layouts match HTML template
- [ ] Add mobile menu functionality

### 4.4 Accessibility
- [ ] Add proper alt text for all images
- [ ] Implement ARIA labels where needed
- [ ] Ensure keyboard navigation works
- [ ] Test with screen readers
- [ ] Proper heading hierarchy (h1, h2, h3)

### 4.5 Performance & UX
- [ ] Add loading states for images
- [ ] Implement smooth scrolling navigation
- [ ] Add hover/focus states for interactive elements
- [ ] Optimize image loading with Next.js Image component

## Phase 5: Testing & Optimization (30-45 min)

### 5.1 Build & Lint Checks
- [ ] Run `npm run build` - fix any build errors
- [ ] Run `npm run lint` - resolve linting issues
- [ ] Fix TypeScript errors
- [ ] Verify all imports and exports

### 5.2 Content Verification
- [ ] Compare with HTML template for accuracy
- [ ] Verify all contact information is correct
- [ ] Test all navigation links work properly
- [ ] Ensure all service information matches

### 5.3 Cross-browser Testing
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Verify mobile responsive design
- [ ] Test form submission (even if non-functional)
- [ ] Check smooth scrolling behavior

### 5.4 Performance Optimization
- [ ] Check Core Web Vitals
- [ ] Optimize images and fonts
- [ ] Minimize bundle size
- [ ] Test loading performance

## Key Success Metrics
- [ ] Visual match with HTML template design
- [ ] All content accurately transferred
- [ ] Responsive design works across devices
- [ ] Build passes without errors
- [ ] Accessibility standards met
- [ ] Contact information verified

## Implementation Notes
- Use exact colors from HTML: pet-purple (#6B46C1), pet-teal (#14B8A6), pet-green (#10B981)
- Maintain gradient backgrounds for service cards
- Keep the same Unsplash image URLs for consistency
- Preserve all customer testimonials and contact details
- Implement smooth scrolling for navigation links
- Focus on component reusability and clean TypeScript

## Estimated Timeline
- **Total Duration**: 4-6 hours
- **Phase 1**: 30-45 minutes
- **Phase 2**: 60-90 minutes  
- **Phase 3**: 90-120 minutes
- **Phase 4**: 45-60 minutes
- **Phase 5**: 30-45 minutes

## Deliverables
1. Fully functional Next.js application
2. Responsive design matching HTML template
3. TypeScript interfaces and proper typing
4. Reusable component architecture
5. Clean, maintainable code structure
6. Build-ready production application