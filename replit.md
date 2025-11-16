# Flächen Frei - Vienna Cleaning Services Website

## Overview
Flächen Frei is a bilingual (German/English) marketing website for professional cleaning and clearance services in Vienna, Austria. It aims to showcase various services across Vienna's districts, featuring service listings, district-specific information, customer testimonials, and contact details. The project's ambition is to be a modern single-page application with server-side rendering, targeting the local Vienna market.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework:** React 18 with TypeScript.
- **Build:** Vite for development and bundling.
- **Routing:** Wouter for client-side routing.
- **UI:** Shadcn UI (New York style) built on Radix UI, styled with Tailwind CSS (utility-first approach with custom design tokens).
- **State Management:** TanStack Query for server state, React Context API for i18n (language switching), local storage for preferences.
- **Styling:** Tailwind CSS, Google Fonts (Inter, Open Sans), responsive mobile-first design.

### Backend
- **Server:** Express.js with Node.js (ES modules) and TypeScript.
- **API:** RESTful API with JSON format.
- **Development:** Vite middleware for HMR, custom logging, Replit-specific plugins.

### Data Storage
- **Database:** PostgreSQL via Neon serverless driver.
- **ORM:** Drizzle ORM with Drizzle-Zod for type-safe operations and validation.
- **Pattern:** Repository pattern with `IStorage` interface, supporting in-memory and database storage.
- **Models:** Users table with UUIDs, shared schema definitions (`shared/schema.ts`).

### Internationalization (i18n)
- **Languages:** German (primary) and English.
- **Implementation:** URL-based language detection (`/de/*`, `/en/*`), server-side redirects, custom `LanguageContext` for translations.
- **SEO:** Canonical URLs, hreflang tags, language-specific meta tags, translated service slugs.

### Content Architecture
- **Service Data:** Multilingual service data (12 services), canonical `ServiceId` enum, language-specific slugs and content.
- **District Data:** Static data for Vienna's 23 districts, including landmarks and service areas, optimized for SEO.
- **Legal & Information Pages:** Four bilingual static pages (Datenschutz/Privacy Policy, Impressum/Imprint, AGB/Terms, FAQ) for compliance and customer information. These pages feature extensive static text directly within components and are SEO-optimized with proper meta and hreflang tags.

### Asset Management
- **Images:** Generated images stored locally, accessed via Vite alias `@assets`.
- **Static Assets:** Favicon and other files from the public directory.
- **Fonts:** Google Fonts loaded via CDN.

### SEO Implementation
- **Structured Data (JSON-LD):** Multi-schema management using `data-schema-group` attributes for Homepage (LocalBusiness + Organization), Service pages (Service + FAQ), District pages (LocalBusiness + FAQ), and Breadcrumbs.
- **Schema Factories:** Utility functions (`getLocalBusinessSchema`, `getOrganizationSchema`, `getFAQSchema`, `getBreadcrumbSchema`) for generating structured data.
- **SEO Components:** Breadcrumbs, TrustStats (statistics), TrustBadges (USPs) for enhanced visibility.

## External Dependencies

### Core Frameworks
- React 18
- Express.js
- Vite
- TypeScript

### Database & ORM
- @neondatabase/serverless (PostgreSQL driver)
- Drizzle ORM
- drizzle-kit
- connect-pg-simple (PostgreSQL session store)

### UI Component Libraries & Styling
- @radix-ui/* (for accessible components)
- Tailwind CSS
- class-variance-authority
- tailwind-merge, clsx
- lucide-react (icons)

### Form Handling & Validation
- react-hook-form
- @hookform/resolvers
- zod
- drizzle-zod

### Data Fetching & State
- @tanstack/react-query

### Routing
- wouter

### UI Utilities
- date-fns
- embla-carousel-react
- cmdk
- nanoid

### Development Tools
- tsx
- esbuild
- @vitejs/plugin-react
- @replit/ plugins
- autoprefixer, postcss

### Font Integration
- Google Fonts (Inter, Open Sans, DM Sans, Fira Code, Geist Mono, Architects Daughter)

## Deployment & Automation

### Railway.app Configuration (Production Ready)
- **Platform:** Railway.app with automatic SSL/HTTPS
- **Configuration:** `railway.json` with build/start commands
- **Storage:** In-memory storage (no database needed for production)
- **Build:** `npm run build` (Vite production build)
- **Start:** `npm start` (Express server serving static files)
- **Domain:** `flaechenfrei.at` (configured in Railway)

### IndexNow Integration (Automatic)
- **Protocol:** IndexNow for instant search engine notification
- **Key:** `436053f3c8c7406799a1cea417ed8a4a` (stored in `client/public/`)
- **Endpoints:** 
  - `/api/indexnow/submit-sitemap` - Submits all 120+ URLs
  - `/api/indexnow/submit-url` - Submits single URL
  - `/436053f3c8c7406799a1cea417ed8a4a.txt` - Key verification file
- **Search Engines:** Bing, Yandex, DuckDuckGo (automatic propagation)
- **robots.txt:** Updated with IndexNow reference

### GitHub Actions Workflows (Fully Automated)

#### 1. Deploy to IndexNow (Automatic on Push)
- **Trigger:** After Railway deployment completes
- **Flow:** 
  1. Waits 60s for Railway deployment
  2. Verifies website is live (5 retries)
  3. Submits 120+ URLs to IndexNow
  4. Verifies IndexNow key file accessibility
- **Success Criteria (Strict):** 
  - ✅ Green = URLs successfully submitted to search engines
  - ❌ Red = URLs NOT submitted (requires retry)
- **Status Tracking:** Environment variables track submission status
- **Error Types:**
  - `failed_temporary` - IndexNow API down (retry manually or wait for daily check)
  - `failed_config` - Configuration issue (fix required)

#### 2. Health Check & Auto-Submit (Daily)
- **Schedule:** Daily at 08:00 UTC
- **Flow:**
  1. Checks website availability
  2. On success: Triggers IndexNow submission workflow
- **Purpose:** Automatic retry mechanism for temporary IndexNow failures

### Branding & Design Updates
- **Logo:** Custom yellow banner logo (HSL 46,100%,50%) at 112px height
- **File:** `client/public/logo.png` (458KB PNG)
- **Header:** Responsive design with reduced padding
- **Hero:** Reduced mobile padding (py-8) to compensate for larger header
- **Colors:** Yellow primary (#F5C518), professional dark theme

### Recent Changes (Latest Session)
- **Date:** November 16, 2025
- **Critical Fix:** Added `nixpacks.toml` to fix Railway deployment failure
  - Railway was using Node.js 18.20.5 (default)
  - Code requires Node.js 20.11+ for `import.meta.dirname` support
  - `nixpacks.toml` forces Railway to use Node.js 20+
  - Error: `TypeError [ERR_INVALID_ARG_TYPE]: The "paths[0]" argument must be of type string. Received undefined`
- **IndexNow Workflow:** Implemented strict success criteria - workflow only succeeds when URLs are actually submitted
- **Status Reporting:** Added environment variables and detailed status messages
- **Error Handling:** Distinguishes between temporary API failures and configuration errors
- **Summary Step:** Shows accurate status with actionable solutions
- **Documentation:** Created `FINAL_DEPLOYMENT_CHECKLIST.md` with complete deployment guide

## Important Files

### Configuration
- `railway.json` - Railway deployment configuration
- `nixpacks.toml` - **CRITICAL:** Node.js 20+ specification (fixes import.meta.dirname error)
- `package.json` - Build scripts and dependencies
- `.github/workflows/deploy-indexnow.yml` - Automatic deployment workflow
- `.github/workflows/health-check.yml` - Daily monitoring
- `RAILWAY_DEPLOYMENT_GUIDE.md` - Deployment instructions
- `FINAL_DEPLOYMENT_CHECKLIST.md` - Complete deployment checklist

### IndexNow Files
- `server/indexnow.ts` - IndexNow implementation
- `server/routes.ts` - API routes including IndexNow endpoints
- `client/public/436053f3c8c7406799a1cea417ed8a4a.txt` - Key verification file
- `client/public/robots.txt` - Updated with IndexNow reference
- `client/public/sitemap.xml` - 120+ priority URLs

### Branding
- `client/public/logo.png` - Yellow banner logo (112px)
- `client/src/components/Header.tsx` - Header with responsive logo
- `client/src/components/Hero.tsx` - Hero section with optimized padding