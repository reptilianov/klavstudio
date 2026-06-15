# Portfolio Specification - Visual Systems Designer

## Project Overview

- **Type**: Personal portfolio for a Visual Systems Designer / Narrative Engineer
- **Core functionality**: Bilingual (EN/ES) portfolio showcasing design work, thinking process, and services
- **Target audience**: Clients seeking clarity over decoration - consultants, strategists, businesses needing visual systems

## Design Philosophy

- **Aesthetic**: Clean, sober, typography-driven. Think Sennheiser, not Behance
- **Avoid**: Fake mockups, pretty renders without system, inflated text, "hipster creative" identity
- **Tone**: Technical, precise, strategic. Not "designer" - "systems architect"

## Identity Statement

**English**: "I design visual systems that think, not just look good"
**Spanish**: "Diseño sistemas visuales que piensan, no solo lucen bien."

## Sections

### 1. Hero / Identity (top of page)

- Bold identity statement
- Role: Visual Systems Designer / Narrative Engineer
- Brief tagline about structuring information, narrative and aesthetics with technical intent

### 2. Projects (3-5 strong cases)

Each project includes:

- **Problem**: What was being solved
- **System**: How it was thought - maps, decisions, visual logic, constraints
- **Result**: Before/after, real applications, consistency

**Key Projects**:

1. Melektausverso - IP + narrative system + coherent visual universe
2. Horror análogo (Al-Zahura) - Narrative branding with VHS aesthetics
3. PowerPoint - Information design for business decisions
4. UI/Web - Structure, hierarchy, decisions

### 3. How I Think

- How you approach problems
- How you decide
- How you discard options
- How you structure before designing

### 4. Services (max 4)

- Presentation Design (high value)
- Visual Systems / Branding
- Narrative Visual Content
- Web / UI structural

### 5. Contact

- Email
- WhatsApp
- Simple, direct

### 6. Notes / Thoughts (extra)

- Mini analysis
- Breakdowns
- Ideas
- Positions you as thinker, not just executor

## Technical Requirements

### i18n System

- `/en/` and `/es/` routes
- Language switcher in navigation
- All text content translatable
- Shared layout, different content files

### Animations

- **Scroll animations**: Elements fade/slide in on scroll
- **Text effects**:
  - Character-by-character reveal for headings
  - Staggered word animations
  - Smooth opacity transitions

### Tech Stack

- **Framework**: Astro
- **Styling**: Vanilla CSS with CSS custom properties
- **Animations**: CSS animations + Intersection Observer for scroll
- **i18n**: Astro routing with content collections

## Visual Specifications

### Typography

- **Primary font**: Strong, geometric sans-serif (e.g., Inter, Geist, or similar)
- **Display font**: Bold, impactful for headings
- **Scale**: Modular type scale

### Color Palette

- **Background**: Dark charcoal (#0a0a0a) or crisp white depending on theme
- **Text**: High contrast (near-black or near-white)
- **Accent**: Single accent color used sparingly
- **Scheme**: Monochromatic with one accent

### Layout

- Generous whitespace
- Single column or asymmetric grid
- Clear visual hierarchy
- Responsive design

## Acceptance Criteria

1. Site builds without errors
2. Both EN and ES versions accessible and display correct content
3. Scroll animations trigger properly
4. Text reveal animations work on load
5. All sections implemented as specified
6. Navigation works between languages
7. No console errors
8. Mobile responsive
