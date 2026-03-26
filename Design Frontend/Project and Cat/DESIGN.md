# Design System Document

## 1. Overview & Creative North Star: "The Blueprint Authority"

This design system moves away from the generic "SaaS dashboard" aesthetic to embrace a high-end, editorial approach to industrial utility. The Creative North Star is **"The Blueprint Authority"**—a visual language that mimics the precision of architectural drafting and the ruggedness of a construction site, refined through sophisticated digital layering.

To break the "template" look, we use **Intentional Asymmetry**. Instead of perfectly centered grids, we utilize the spacing scale to create heavy left-aligned "anchor points" and wide-open gutters that allow the UI to breathe. We replace structural lines with **Tonal Depth**, creating a layout that feels built rather than simply drawn.

---

## 2. Colors & Surface Architecture

The palette is rooted in industrial heavy-metal tones (`primary`) and high-visibility safety markers (`secondary`).

### The Surface Hierarchy
Depth is achieved through nesting Material Design surface tokens rather than using borders. 
- **Base Layer:** `surface` (#f4faff) — Use for the overall page background.
- **Sectioning:** `surface-container-low` (#e7f6ff) — Use for large grouped content areas.
- **Interactive Elements:** `surface-container-lowest` (#ffffff) — Use for cards and elevated inputs to create a natural "lift."

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. 
- Separate the "Sipil" section from the "MEP" section using a background shift from `surface` to `surface-container-low`.
- Boundaries are defined by the meeting of two tonal planes, not a line.

### The "Glass & Gradient" Rule
For high-end polish, the main navigation or floating action bars should use **Glassmorphism**:
- Background: `rgba(47, 62, 70, 0.8)` (Primary with 80% opacity).
- Filter: `backdrop-blur(12px)`.
- This creates an "Industrial Frost" effect that feels premium and modern.

### Signature Textures
Apply a subtle linear gradient to Primary CTAs: 
- `from: primary (#192830)` to `to: primary-container (#2F3E46)`. This prevents buttons from looking "flat" and adds a metallic, machined depth.

---

## 3. Typography: Readability Under Pressure

In high-glare outdoor environments, typography must be authoritative and unmistakable.

*   **Display & Headlines (Space Grotesk):** A geometric sans-serif with industrial "ink traps" that feel like modern blueprint lettering. Use `display-md` (2.75rem) for site titles to establish a bold, editorial presence.
*   **Body & Labels (Inter):** Chosen for its exceptional legibility. Use `body-lg` (1rem) for checklist items to ensure they are tappable and readable on mobile devices in bright sunlight.
*   **Contrast Ratios:** All label text on `surface` backgrounds must utilize `on-surface-variant` (#43474a) at minimum to ensure accessibility compliance (WCAG AA).

---

## 4. Elevation & Depth

We eschew traditional shadows for a system of **Tonal Layering**.

*   **The Layering Principle:** A checklist card (`surface-container-lowest`) sitting on a category group (`surface-container-low`) provides all the visual separation required.
*   **Ambient Shadows:** For floating elements like "Add Observation" modals, use an extra-diffused shadow: `box-shadow: 0 20px 50px rgba(14, 29, 37, 0.08)`. The shadow is tinted with the `on-surface` color to feel like natural occlusion.
*   **The "Ghost Border" Fallback:** If a border is required for high-glare visibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque black or grey lines.

---

## 5. Components

### High-Contrast Buttons
*   **Primary:** Background `primary`, text `on-primary`. Large padding (`spacing-5` vertical, `spacing-8` horizontal) to create a massive 56px tap target for gloved hands or field use.
*   **Accent (Action):** Background `secondary` (Safety Orange), text `on-secondary-fixed`. Used exclusively for "Submit" or "Finalize."

### Status Badges (The "Signal" System)
Badges use a "Low-Chroma" background with a "High-Chroma" text for an editorial look:
*   **Approved:** Background `tertiary-fixed`, Text `on-tertiary-fixed-variant`.
*   **Needs Revision:** Background `error-container`, Text `on-error-container`.
*   **Submitted:** Background `primary-fixed`, Text `on-primary-fixed-variant`.

### Checklist Cards & Lists
*   **Forbid Dividers:** Do not use `<hr />` or `border-b`. 
*   **Separation:** Use `spacing-4` (0.9rem) of vertical white space.
*   **Category Iconography:** Icons for Sipil, Arsitektur, MEP, and Interior must be contained within a `surface-variant` square with a `md` (0.375rem) corner radius.

### Input Fields
*   **State:** Large text `body-lg`. 
*   **Focus State:** Instead of a blue glow, use a 2px offset ring of `secondary` (#FF8C00) to mimic construction marking tape.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins (e.g., `pl-10` on the left, `pr-4` on the right) to create a "Field Journal" editorial feel.
*   **Do** lean into the `secondary` (Safety Orange) for critical interaction points only.
*   **Do** use `space-y-6` to ensure content blocks have massive breathing room, preventing accidental taps on mobile.

### Don't
*   **Don't** use standard grey borders. If it looks like a spreadsheet, it’s wrong.
*   **Don't** use rounded-full "pill" buttons. Stick to `md` (0.375rem) or `lg` (0.5rem) to maintain the industrial, blocky aesthetic.
*   **Don't** use pure black (#000000). Always use `primary` (#192830) for deep tones to keep the palette sophisticated and "Dark Slate" based.