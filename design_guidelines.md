# Design Guidelines for Flächen Frei

## Design Approach
**Reference-Based Approach**: Service industry leaders with clean, trust-building aesthetics
- Primary inspiration: Taskrabbit (service clarity), Thumbtack (professional trust), Handy (clean service presentation)
- Secondary reference: Modern Austrian business sites with local credibility markers
- Balance professional credibility with approachable warmth

## Typography System
**Font Families** (via Google Fonts):
- Primary: Inter (headings, navigation, buttons) - Weights: 400, 500, 600, 700
- Secondary: Open Sans (body text, descriptions) - Weights: 400, 600

**Hierarchy**:
- H1: 3.5rem (desktop) / 2.5rem (mobile), font-weight: 700
- H2: 2.5rem (desktop) / 2rem (mobile), font-weight: 600
- H3: 1.75rem, font-weight: 600
- H4: 1.25rem, font-weight: 600
- Body: 1rem (16px base), line-height: 1.6
- Small/Caption: 0.875rem

## Layout System
**Spacing Primitives** (Tailwind units):
- Core spacing: 4, 8, 12, 16, 24, 32
- Section padding: py-16 (mobile), py-24 (desktop)
- Component gaps: gap-8 (cards), gap-4 (list items)
- Container: max-w-7xl with px-4 (mobile), px-8 (desktop)

**Grid System**:
- Services grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- District pages: Single column with sidebar on desktop (2/3 + 1/3 split)
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
- Sticky header with language switcher (DE/EN flags)
- Logo left, navigation center, CTA buttons right
- Mobile: Hamburger menu with full-screen overlay
- Quick action bar: Phone, WhatsApp, Email icons (always visible on mobile as floating bottom bar)

### Hero Section
- Large hero image showing professional cleaning team in action
- Overlay with h1 headline, subheadline, dual CTAs (primary: "Angebot einholen", secondary: "Mehr erfahren")
- Trust indicators below CTAs: "24/7 Erreichbar", "26+ Jahre Erfahrung", "Kostenlose Besichtigung"
- Height: 70-80vh with centered content

### Service Cards
- Icon at top (from Heroicons - truck, home, warehouse, etc.)
- Service name (h3)
- 2-3 line description
- CTA button
- Hover: Subtle lift effect with shadow

### Process Timeline
- 3-step horizontal timeline (desktop) / vertical (mobile)
- Icons, step number, title, description
- Connecting lines between steps

### Testimonials
- Customer photo (circular), name, rating stars
- Quote text in italics
- 3-column grid on desktop, carousel on mobile

### Contact/CTA Sections
- Multi-channel contact options (phone number with click-to-call, WhatsApp button, email form)
- Prominent placement after each major section
- Emergency/24-7 indicator

### District Pages Template
- Breadcrumb navigation
- H1: "Entrümpelung in [District Name]"
- Hero image relevant to district
- Service overview specific to area
- Local trust signals (completed jobs in area)
- Contact form with district pre-filled

### Footer
- 4-column layout: Services, Districts (top 8-10), Contact, Legal
- Social media links
- Newsletter signup
- Trust badges (certifications, payment methods)
- Copyright and business info

## Images Strategy

### Required Images
1. **Hero**: Professional team with truck/equipment in Vienna setting
2. **Service showcases**: Before/after cleaning results, team in action for each service type
3. **Process visuals**: Team consultation, work in progress, clean final result
4. **Testimonial avatars**: Customer photos (use placeholder portraits)
5. **District pages**: Local Vienna landmarks or buildings for each district
6. **Trust badges**: Certifications, insurance badges, payment logos

### Image Treatment
- Professional photography aesthetic
- Consistent filters: slight warmth, high clarity
- Overlay gradients on hero images for text readability
- Rounded corners (rounded-lg) on service/testimonial images

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Stack multi-column layouts to single column on mobile
- Floating action buttons on mobile (phone/WhatsApp)
- Collapsible navigation and district lists

## Accessibility
- High contrast ratios for all text
- Focus states on all interactive elements
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Language attribute on HTML tag

## SEO Optimization Elements
- H1 with target keywords on every page
- Meta descriptions (150-160 chars) with location keywords
- Structured data: LocalBusiness, Service schema
- District-specific URLs: /bezirke/1100-wien-favoriten
- Internal linking between district pages and services
- Fast loading: optimized images, minimal JS

## Distinctive Features
- Trust-building emphasis throughout (years of experience, certifications, customer count)
- Strong local Vienna identity with district-specific customization
- Multi-language switcher prominent but not intrusive
- Emergency/quick contact options always accessible
- Professional yet warm and approachable tone