# Flächen Frei - Vienna Cleaning Services Website

## Overview

Flächen Frei is a professional cleaning and clearance service website targeting the Vienna, Austria market. The application is a bilingual (German/English) marketing website showcasing various cleaning services across Vienna's 23 districts. It features service listings, district-specific pages, customer testimonials, and contact information. The site is built as a modern single-page application with server-side rendering capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (no React Router dependency)
- Client-side rendering with SSR preparation through Vite middleware

**UI Component Library**
- **Shadcn UI** (New York style variant) - A comprehensive component library built on Radix UI primitives
- **Radix UI** primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom CSS variables for theming (light mode focused)

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management
- **React Context API** for language switching (German/English i18n)
- Local storage for language preference persistence

**Styling Approach**
- Tailwind CSS with custom configuration (neutral base color, CSS variables enabled)
- Design system inspired by service industry leaders (Taskrabbit, Thumbtack)
- Google Fonts integration: Inter (headings), Open Sans (body text)
- Responsive design with mobile-first approach
- Hover and active elevation effects for interactive elements

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server
- Node.js runtime with ES modules
- TypeScript for type safety across the stack

**Development Setup**
- Vite middleware integration for HMR during development
- Custom logging middleware for API request tracking
- Replit-specific plugins for development experience

**API Design**
- RESTful API structure (currently minimal, ready for expansion)
- JSON request/response format
- Routes prefixed with `/api` namespace
- Session management infrastructure prepared (connect-pg-simple)

### Data Storage Solutions

**Database**
- **PostgreSQL** via Neon serverless driver
- **Drizzle ORM** for type-safe database operations
- Schema-first approach with Drizzle-Zod integration for validation

**Storage Pattern**
- Repository pattern with `IStorage` interface abstraction
- In-memory storage implementation (`MemStorage`) for development/testing
- Database storage can be swapped in without changing business logic
- Current schema includes basic user authentication structure

**Data Models**
- Users table with UUID primary keys
- Schema definitions in `shared/schema.ts` for client-server sharing
- Zod schemas for runtime validation

### Internationalization (i18n)

**Language Support**
- German (primary) and English with dedicated URL paths
- URL-based language detection: `/de/*` for German, `/en/*` for English
- Server-side redirect from `/` to `/de` or `/en` based on Accept-Language header
- Context-based translation system (`LanguageContext`)
- Translation keys organized by feature/section
- Translations stored in `client/src/lib/i18n.ts`

**Implementation**
- Language-specific URL structure:
  - German: `/de`, `/de/leistungen`, `/de/leistungen/{slug}`
  - English: `/en`, `/en/services`, `/en/services/{slug}`
- React Context provides `t` (translation), `language`, and `setLanguage` functions
- Language state derived from URL path using `getLanguageFromPath()`
- URL translation helper `getLocalizedPath()` for language switching
- No external i18n library - custom lightweight solution

**SEO Integration**
- Canonical URLs for each language version
- Hreflang tags linking German ↔ English versions
- Language-specific meta tags (og:locale)
- Service slug translations (e.g., `wohnungsraeumungen` ↔ `apartment-clearing`)

### Content Architecture

**Service Data**
- Multilingual service data structure with canonical ServiceId enum
- Each service has language-specific slugs and content
- 12 services total: Wohnungsräumungen, Haushaltsauflösung, Kellerräumung, etc.
- Service helper functions: `getServiceBySlug()`, `getServiceContent()`, `getLocalizedServicePath()`
- Professional AI-generated English translations (marked for client review)
- Data stored in `client/src/data/services.ts`

**District Data**
- Static data-driven approach for Vienna's 23 districts
- Comprehensive district information: landmarks, neighborhoods, service areas
- SEO-optimized with meta descriptions and structured content
- Data stored in `client/src/data/districts.ts`

**Legal Pages**
- Three bilingual legal pages required for Austrian website compliance
- Each page contains content directly in components (not i18n.ts) due to extensive legal text
- Routes:
  - German (no prefix): `/datenschutz`, `/impressum`, `/agb`
  - English (with /en prefix): `/en/privacy-policy`, `/en/imprint`, `/en/terms`
- Footer contains language-aware links to all legal pages
- SEO: Each page has proper meta tags, canonical URLs, and hreflang tags
- Pages:
  1. **Datenschutz / Privacy Policy** - GDPR-compliant privacy information with sections on data collection, processing, user rights, and Austrian-specific legal requirements
  2. **Impressum / Imprint** - Mandatory Austrian business disclosures per ECG requirements including company information, legal form, VAT ID (UID-Nr), company register number (Firmenbuchnummer), supervisory authority, chamber membership, and disclaimer sections
  3. **AGB / Terms and Conditions** - Comprehensive terms for clearing/transport services including contract formation, service scope, pricing, client obligations, liability, scheduling, and data protection

**Design System**
- Reference-based design approach (documented in `design_guidelines.md`)
- Component library examples in `client/src/components/examples/`
- Consistent spacing, typography, and color systems

### Asset Management

**Images**
- Generated images stored in `attached_assets/generated_images/`
- Vite alias `@assets` for easy import
- Hero images, service illustrations, testimonials, and landmark photos

**Static Assets**
- Favicon and other static files served from public directory
- Font loading via Google Fonts CDN

### SEO Implementation

**Structured Data (JSON-LD)**
- Multi-schema management using data attributes to prevent conflicts
- Each page/component manages its own schema independently
- Schema groups used per page:
  - Homepage: `data-schema-group="home-page-schemas"` (LocalBusiness + Organization)
  - Service pages: `data-schema-group="service-{slug}-schemas"` (Service + FAQ)
  - Bundesland pages: `data-schema-group="bundesland-{slug}-schemas"` (Service + FAQ)
  - District pages: `data-schema-group="district-{slug}-schemas"` (LocalBusiness + FAQ)
  - Breadcrumbs: Independent `id="breadcrumb-schema"` (BreadcrumbList)

**Schema Factories** (`client/src/lib/seo.ts`)
- `getLocalBusinessSchema()` - Business info with all 9 Austrian states coverage, ratings, hours
- `getOrganizationSchema()` - Company organization data
- `getFAQSchema()` - FAQ structured data from question/answer arrays
- `getBreadcrumbSchema()` - BreadcrumbList for navigation
- `addMultipleJsonLd()` - Manages multiple schemas with data-schema-group attributes
- `addJsonLd()` - Single schema with optional ID
- `updateMetaTags()` - Meta tags including keywords, OG tags, Twitter cards, canonical

**SEO Components**
- **Breadcrumbs** - Navigation with BreadcrumbList schema on all service/district/state pages
- **TrustStats** - Statistics section (5000+ customers, 4.9/5 rating, 26+ years, 100% satisfaction)
- **TrustBadges** - USP highlights (insured, 24/7, free consultation, fair prices)

**Important Notes**
- To avoid schema ID collisions, always use the appropriate data-schema-group for your page type
- Breadcrumb schema is managed separately by the Breadcrumbs component
- All schemas use @id for entity references where applicable
- LocalBusiness schema includes aggregate ratings and service areas for SEO boost

## External Dependencies

### Core Framework Dependencies
- **React 18** - UI library
- **Express.js** - Web server framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type system

### Database & ORM
- **@neondatabase/serverless** - PostgreSQL serverless driver
- **Drizzle ORM** - Type-safe ORM
- **drizzle-kit** - Migration and schema management tools
- **connect-pg-simple** - PostgreSQL session store

### UI Component Libraries
- **@radix-ui/** (multiple packages) - Accessible component primitives
  - Accordion, Dialog, Dropdown Menu, Navigation Menu, Select, Toast, etc.
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - CVA for component variants
- **tailwind-merge** & **clsx** - Conditional class composition

### Form Handling & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod** - Schema validation
- **drizzle-zod** - Drizzle schema to Zod conversion

### Data Fetching & State
- **@tanstack/react-query** - Server state management

### Routing
- **wouter** - Lightweight routing library

### UI Utilities
- **lucide-react** - Icon library
- **date-fns** - Date manipulation
- **embla-carousel-react** - Carousel component
- **cmdk** - Command menu component
- **nanoid** - Unique ID generation

### Development Tools
- **tsx** - TypeScript execution for development
- **esbuild** - Bundler for production build
- **@vitejs/plugin-react** - Vite React plugin
- **@replit/** plugins - Replit-specific development tooling
- **autoprefixer** & **postcss** - CSS processing

### Font Integration
- **Google Fonts** - Inter, Open Sans, DM Sans, Fira Code, Geist Mono, Architects Daughter

### Environment & Configuration
- Environment variables via `.env` (DATABASE_URL expected)
- TypeScript configuration with path aliases (`@/`, `@shared/`, `@assets/`)
- Module resolution set to "bundler" for modern module handling

## Recent Changes

### November 12, 2025 - Multilingual URL Routing & SEO

**Major architectural changes to support language-specific URLs:**

1. **Server-Side Redirect**
   - Added Express middleware to redirect `/` to `/de` or `/en` based on Accept-Language header
   - Implemented in `server/routes.ts`

2. **URL Mapping System**
   - Created `client/src/lib/urlMapping.ts` with helpers:
     - `getLocalizedPath()` - Translates URLs between languages
     - `getLanguageFromPath()` - Detects language from URL
     - `getAlternateUrls()` - Generates alternate language URLs for SEO
   - Hardcoded service slug mapping for all 12 services (DE ↔ EN)

3. **Enhanced SEO**
   - Updated `updateMetaTags()` to support language parameter
   - Added hreflang tags for alternate language versions
   - Implemented canonical URLs per language
   - Language-specific og:locale meta tags

4. **Service Data Refactor**
   - Complete restructure with ServiceId enum for canonical identification
   - Language-specific content objects for all 12 services
   - Professional English translations (AI-generated, ~6000 words)
   - Helper utilities for service lookup and path generation

5. **Component Updates**
   - LanguageContext: Now derives language from URL path
   - App.tsx: Dual routing for `/de/*` and `/en/*` patterns
   - Header: Logo and language switcher use language-aware navigation
   - Services & ServicePage: Use new multilingual data structure
   - Footer: Language-aware links for services and districts

6. **Testing**
   - Comprehensive e2e tests using Playwright
   - Validated language switching, navigation, and SEO tags
   - All tests passed successfully

**Known Considerations:**
- Service slug map is hardcoded in `urlMapping.ts` (architect recommends co-locating with servicesData)
- English service translations are AI-generated and should be reviewed by client
- Initial `/` redirect depends on browser's Accept-Language header