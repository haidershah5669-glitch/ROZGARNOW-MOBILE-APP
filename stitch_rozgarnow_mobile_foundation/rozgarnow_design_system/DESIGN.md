---
name: RozgarNow Design System
colors:
  surface: '#f4fcf0'
  surface-dim: '#d5dcd1'
  surface-bright: '#f4fcf0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff6ea'
  surface-container: '#e9f0e5'
  surface-container-high: '#e3eadf'
  surface-container-highest: '#dde5d9'
  on-surface: '#171d16'
  on-surface-variant: '#3e4a3d'
  inverse-surface: '#2b322b'
  inverse-on-surface: '#ecf3e7'
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
  tertiary-container: '#c74668'
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
  background: '#f4fcf0'
  on-background: '#171d16'
  surface-variant: '#dde5d9'
typography:
  headline-lg:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
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
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 16px
  gutter-mobile: 12px
---

## Brand & Style

The design system is engineered for a high-trust, professional mobile marketplace connecting workers and employers. The brand personality is dependable, efficient, and empowering, encapsulated by the tagline "Kaam Milay Asani Say."

The visual style follows a **Corporate / Modern** aesthetic with a strong emphasis on **Minimalism**. It prioritizes clarity and functional density to ensure users can navigate listings and profiles with zero cognitive friction. The interface uses generous white space, a refined color palette, and clear information hierarchy to build credibility in a peer-to-peer economic environment.

## Colors

The palette is anchored by a confidence-inspiring **Primary Green (#16A34A)**, symbolizing growth and successful placement. **Secondary Orange (#F97316)** is utilized sparingly for high-priority calls to action, urgent notifications, and status highlights to ensure they stand out against the professional backdrop.

The neutral system utilizes a cool **Background Gray (#F8FAFC)** to provide subtle contrast against **Pure White (#FFFFFF)** surface cards. Text is layered using **Deep Navy (#111827)** for maximum legibility in titles and **Muted Gray (#6B7280)** for secondary metadata and descriptions.

## Typography

This design system employs **Work Sans** across all interfaces. It was chosen for its professional, grounded character and exceptional legibility at small sizes on mobile displays. 

- **Headlines:** Use Bold (700) or Semi-Bold (600) to anchor the page and define clear sections.
- **Body Text:** Standardized at 14px and 16px for optimal reading comfort.
- **Labels:** Use Medium (500) weights to differentiate interactive elements and categories from standard body text.
- **Hierarchy:** Maintain strict vertical rhythm by adhering to the defined line-heights, ensuring that multi-line descriptions remain readable.

## Layout & Spacing

The system follows a **Fluid Grid** model optimized for mobile-first consumption. 

- **Grid:** Use a 4-column layout for mobile devices with 16px outer margins and 12px gutters.
- **Rhythm:** All spatial increments are based on a 4px baseline. Use 16px (md) for standard padding within cards and 24px (lg) to separate distinct content blocks.
- **Touch Targets:** Minimum touch target size is 44x44px. Ensure buttons and interactive icons have sufficient clearance to prevent accidental taps, especially in high-density job lists.

## Elevation & Depth

Visual hierarchy is established using **Tonal Layers** and **Ambient Shadows**. This approach maintains the professional "clean" look while clearly separating the background from interactive foreground elements.

- **Level 0 (Background):** #F8FAFC. Used for the main canvas.
- **Level 1 (Cards/Surfaces):** #FFFFFF. Used for job cards, profile sections, and input groups. These use a very soft, diffused shadow (0px 2px 8px, 4% opacity black) to lift them slightly.
- **Level 2 (Modals/Overlays):** #FFFFFF. Used for bottom sheets and snackbars. These utilize a more pronounced shadow (0px 4px 20px, 8% opacity black) to signify temporary interruption.
- **Outlines:** Use a 1px border (#E2E8F0) on input fields and inactive states instead of shadows to maintain a crisp, UI-heavy feel.

## Shapes

The design system uses a **Rounded** shape language to balance professional structure with an approachable feel.

- **Standard Elements:** 0.5rem (8px) corner radius for buttons, input fields, and job cards.
- **Large Containers:** 1rem (16px) for bottom sheets and large content modules.
- **Full Rounded:** Used specifically for "Status Chips" (e.g., "Active", "Verified") and Profile Avatars to create distinct visual markers that differ from structural layout elements.

## Components

### Buttons
- **Primary:** Solid #16A34A background with #FFFFFF text. Used for main actions like "Apply Now" or "Post a Job."
- **Secondary:** Outlined with #16A34A and 1px border. Used for "View Details" or "Cancel."
- **Urgent:** Solid #F97316 for critical alerts or "Immediate Start" tags.

### Inputs
- **Fields:** 1px border in #D1D5DB, 8px radius. Active state uses a 2px #16A34A border.
- **Labels:** Always visible above the input in `label-md` style.

### Cards
- **Job Cards:** White surface, 8px radius, subtle shadow. Title in `headline-sm`, subtitle/location in `body-sm` with Lucide icons (MapPin, Clock).
- **Profile Cards:** Feature a circular avatar, "Verified" badge (ShieldCheck icon), and star rating.

### Chips
- **Category Chips:** Light gray background (#F1F5F9) with `label-sm` text.
- **Status Chips:** Primary Green background at 10% opacity with solid green text for "Open" status.

### Icons
- Use **Lucide** icons. Maintain a consistent 20px size for list items and 24px for navigation. Stroke width should be set to 2px for balanced visual weight with the Work Sans typeface.