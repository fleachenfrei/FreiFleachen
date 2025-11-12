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