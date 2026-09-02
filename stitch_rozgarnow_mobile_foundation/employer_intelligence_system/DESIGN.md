---
name: Employer Intelligence System
colors:
  surface: '#f8f9ff'
  surface-dim: '#D5DCD1'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4a3d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7b6c'
  outline-variant: '#bdcaba'
  surface-tint: '#006e2d'
  primary: '#006b2c'
  on-primary: '#ffffff'
  primary-container: '#00873a'
  on-primary-container: '#f7fff2'
  inverse-primary: '#62df7d'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#a72d51'
  on-tertiary: '#ffffff'
  tertiary-container: '#c74669'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7ffc97'
  primary-fixed-dim: '#62df7d'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#ffd9de'
  tertiary-fixed-dim: '#ffb2bf'
  on-tertiary-fixed: '#3f0016'
  on-tertiary-fixed-variant: '#8a143c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-light: '#F4FCF0'
  success-container: '#DCFCE7'
  warning-container: '#FFEDD5'
  info-blue: '#0284C7'
typography:
  headline-lg:
    fontFamily: Work Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  grid-margin: 24px
  grid-gutter: 16px
  component-gap: 12px
  section-padding: 32px
---

## Brand & Style

The design system is a specialized extension tailored for the employer ecosystem. It shifts the narrative from "job seeking" to "talent management," emphasizing **high-trust**, **data-clarity**, and **operational efficiency**. The brand personality is professional and authoritative, acting as a reliable partner in the recruitment lifecycle.

The visual style is a blend of **Corporate Modernism** and **Functional Minimalism**. It prioritizes information density for applicant tracking and analytics without sacrificing the warmth of the parent brand. The interface utilizes a structured layout, precise typography, and a "dashboard-first" mentality to ensure recruitment managers can make high-stakes hiring decisions with confidence and speed.

## Colors

The color palette maintains the core identity while expanding its functional range for administrative workflows. 

- **Primary Green (#16A34A)** is the anchor for growth and successful "Hired" states.
- **Secondary Orange (#F97316)** is strictly reserved for "Urgent Needs," "Expiring Posts," and "Action Required" notifications to prevent employer fatigue.
- **Surface Light (#F4FCF0)** provides a tinted foundation that distinguishes the employer portal from the general marketplace.
- **Neutral Slate** is used for structural elements, borders, and secondary metadata to ensure the interface feels grounded and professional.
- **Tertiary Maroon (#A72D51)** is introduced for high-contrast "Decline" or "Reject" actions, providing a clear visual distinction from common warning colors.

## Typography

The system uses **Work Sans** exclusively to leverage its industrial, reliable aesthetic. The typographic scale is optimized for high-density data views common in applicant tracking systems (ATS).

- **Headlines** utilize tighter letter spacing and heavier weights to create strong visual anchors in complex dashboards.
- **Body Text** is set with generous line-height to maintain readability during long periods of reviewing resumes and job descriptions.
- **Labels** are designed for maximum "scannability," using uppercase or semi-bold weights to highlight status markers, table headers, and metadata tags.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop dashboards (max-width 1440px) and a **Fluid Grid** for mobile management.

- **Desktop Layout:** A 12-column grid with 24px gutters. The side navigation is fixed at 280px, with the main content area expanding to fill the remainder.
- **Mobile Layout:** A 4-column grid with 16px margins and 12px gutters.
- **Spacing Rhythm:** Based on a 4px scale. 12px is the default for internal card elements, while 24px is used to separate distinct logical groups (e.g., Applicant Info vs. Interview Schedule).
- **Responsive Reflow:** On tablets, the side navigation collapses into a rail or drawer to prioritize the data-heavy workspace.

## Elevation & Depth

Visual hierarchy in the employer portal is conveyed through **Tonal Layers** and **Low-Contrast Outlines** to keep the interface feeling "flat" and efficient.

- **Surface Levels:** The base background uses a very light tint (#F4FCF0). Main content areas (the "workspace") use white (#FFFFFF) containers.
- **Depth Markers:** Rather than heavy shadows, use 1px borders (#E2E8F0) to define table rows and form fields.
- **Shadows:** Use only one level of elevation for active overlays (modals or dropdowns). These shadows should be extremely soft: `0px 4px 12px rgba(0, 0, 0, 0.05)`.
- **Interactivity:** On hover, interactive cards should transition from a flat outline to a subtle depth (Level 1 shadow) to provide tactile feedback.

## Shapes

The design system adopts a **Soft (0.25rem)** roundedness to maintain a rigorous, professional appearance suitable for a SaaS environment.

- **Standard Buttons & Inputs:** 0.25rem (4px) to emphasize precision and structure.
- **Data Cards:** 0.5rem (8px) for larger containers like "Candidate Profile Summaries."
- **Pill Shapes:** Reserved exclusively for status indicators (e.g., "Shortlisted," "Hired") and interactive toggle switches to differentiate them from the primary layout.

## Components

### Buttons
- **Primary Action:** Solid #16A34A. Used for "Post Job" or "Hire."
- **Ghost Action:** Transparent with #64748B text and no border. Used for secondary navigation or "Clear Filters."
- **Destructive:** Outlined #A72D51 for "Archive Listing" or "Reject Candidate."

### Applicant Cards
- A white surface with a 1px #E2E8F0 border. Features a 48px avatar, `title-lg` for name, and `body-sm` for last activity. Includes a "Match Score" indicator using the Primary Green.

### Data Tables
- Clean, borderless rows with 1px #E2E8F0 dividers. Header row uses `label-sm` in Neutral Slate with a subtle #F8FAFC background.

### Input Fields
- Structured with a persistent label above the field. Use a 1px border that turns 2px #16A34A on focus. Include clear validation states: Green for "Valid" and Tertiary Maroon for "Error."

### Status Chips
- High-trust badges: "Verified" (Primary Green 10% fill, solid text) and "Urgent" (Secondary Orange 10% fill, solid text). 

### Analytics Widgets
- Compact containers for high-level metrics (e.g., "Views," "Applications"). Use `headline-md` for the metric and `label-md` for the description, paired with Lucide line-chart icons.