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
- German (primary) and English
- Context-based translation system (`LanguageContext`)
- Translation keys organized by feature/section
- Translations stored in `client/src/lib/i18n.ts`

**Implementation**
- React Context provides `t` (translation) and `setLanguage` functions
- Language preference stored in localStorage
- No external i18n library - custom lightweight solution

### Content Architecture

**District Data**
- Static data-driven approach for Vienna's 23 districts
- Comprehensive district information: landmarks, neighborhoods, service areas
- SEO-optimized with meta descriptions and structured content
- Data stored in `client/src/data/districts.ts`

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