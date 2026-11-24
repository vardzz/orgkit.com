# OrgKit: The Operating System for Student Organizations

> **Comprehensive Product Overview, Feature Matrix, Value Proposition & Design System Specification**
> _Prepared as the definitive guide for designing and developing the high-converting OrgKit Landing Page._

---

## 1. Executive Summary & Product Vision

### 1.1 What OrgKit Actually Is

**OrgKit** is an all-in-one, modern workspace and operational management platform engineered specifically for university student organizations, academic societies, collegiate clubs, and youth non-profits.

Student organizations are the lifeblood of campus culture, community, and student leadership. Yet every semester, millions of student leaders struggle with the exact same operational headaches:

- Managing rosters across chaotic, outdated Google Sheets.
- Tracking attendance with paper sign-in sheets or easily shared Google Forms.
- Collecting organization dues through messy personal digital wallets (GCash, Maya, Venmo) and manually cross-referencing payment screenshots in group chats.
- Losing institutional memory, permits, constitution drafts, and credentials every year when officers graduate and hand over their roles.

**OrgKit replaces this chaos with a unified, secure, beautifully branded digital headquarters.** Officers sign in with their Google accounts, configure their organization, distribute roles (`admin`, `finance`, `officer`), issue instant join links or QR codes to members, run frictionless QR attendance, manage dues with screenshot receipt verification, store essential documents, and pass down institutional knowledge through structured handover templates.

---

### 1.2 The Core Mission & Philosophy

1. **Purposeful Minimalism:** No enterprise bloat or corporate jargon. Clear visual hierarchy, ample breathing room, and zero unnecessary friction.
2. **Zero-Training Usability:** Designed so a newly elected 19-year-old student officer can set up their entire organization in under 3 minutes without reading a manual.
3. **Dual-Accent Harmony:** A signature Emerald Green (`#059669`) represents growth, official approval, and campus life; a warm Amber/Marigold (`#D97706`) signals action items, pending payment reviews, and deadlines.
4. **Mobile-First Reality:** 90%+ of student interactions happen on smartphones. OrgKit is engineered with a strict 360px minimum width standard, fluid `clamp()` sizing, 44px touch targets, and zero horizontal scroll.
5. **Privacy by Default:** Student data belongs to students. No ad tracking, minimum necessary data collection, explicit student consent on join, and strict role-based access control.

---

### 1.3 Key Personas & Value Propositions

| Persona                              | Pain Points Before OrgKit                                                                                                | The OrgKit Solution                                                                                                                 |
| :----------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Org President / Vice President**   | Unclear membership counts, messy officer transitions, losing admin access to accounts, accountability blindspots.        | Centralized dashboard, role delegation, term tracking, handover guides, and atomic admin rights transfer.                           |
| **Treasurer / Finance Officer**      | Scrolling through hundreds of chat messages to find payment receipts; guessing who paid dues; awkward manual follow-ups. | Dedicated Dues collection periods, direct screenshot upload, quick Review queue (Approve/Reject/Undo), and 1-click email reminders. |
| **Secretary / Operations Lead**      | Outdated rosters, manual typing of member details, scattered Google Drive links, lost constitutions.                     | Instant join links with QR, CSV roster import/export, and a centralized categorized document repository.                            |
| **Event Organizer / Logistics Lead** | People signing in for absent friends; slow lines at event entrances; manual paper roll calls.                            | Rotating anti-fraud dynamic QR check-in codes, 1-second camera check-in, real-time live attendance counters, and past events log.   |
| **General Student Member**           | Confusing onboarding forms, lack of clarity on payment status, forgotten event check-ins.                                | 10-second join with Google or link, self-service dues payment with receipt upload, and transparent attendance records.              |

---

## 2. Comprehensive Feature Matrix

### 2.1 Workspace & Governance (Epic 1 & Epic 5)

- **Instant Google Authentication:** Safe, single-click sign-in using campus or personal Google accounts.
- **Organization Onboarding:** Name your organization, establish your leadership profile, and generate a secure dedicated workspace.
- **Role-Based Access Control (RBAC):**
  - **Admin:** Complete authority over settings, officer invitations, role management, dues periods, and admin transfer.
  - **Finance:** Focuses on reviewing and verifying member dues payments, payment screenshots, and member rosters.
  - **Officer:** Runs event check-ins, views member rosters, and manages attendance.
- **Atomic Admin Rights Transfer (H5):** Outgoing admins can seamlessly hand over primary ownership to an incoming officer with typed confirmation of the organization name, enforcing an uncompromised _"at least one active admin"_ invariant in a single database transaction.

### 2.2 Member Management & Onboarding (Epic 2)

- **Public Join Links & QR Codes:** Share a universal invite link (`/join/[token]`) or present an auto-generated QR code on presentation screens or recruitment booths.
- **Privacy Consent Protocol:** Integrated, transparent consent agreement informing members exactly what data is collected and how it is used before joining.
- **Dynamic Member Roster:** Filter, search, and paginate through active members, pending approvals, and inactive members.
- **Bulk CSV Import with Auto-Matching:** Upload existing member rosters in `.csv` format; OrgKit automatically detects and maps column headers (Name, Email, Student ID) with manual override controls.
- **Secure CSV Export:** Export clean, filtered member rosters with single-click officer verification.

### 2.3 Events & Rotating QR Attendance (Epic 3 & Epic 5)

- **Event Creation & Scheduling:** Set up general meetings, workshops, social events, or fundraisers with dates, times, and descriptions.
- **Rotating HMAC Anti-Fraud QR Code:** Check-in QR codes automatically refresh on a tight rotating timer. Prevents students from screenshotting the QR code and texting it to absent friends.
- **Instant Scanner & Self-Check-in:** Members scan the projected code with their phone camera and are checked in instantly.
- **Real-Time Live Attendance Counter:** Event organizers watch attendee numbers update live as members enter the room.
- **Past Events Log (H3):** Historical archive of past events with term filters, date range filters, and total attendance summaries.

### 2.4 Dues Management & Receipt Verification (Epic 4)

- **Collection Periods:** Create targeted dues campaigns (e.g., "1st Semester Org Fee", "Annual T-Shirt Fund") with deadlines and custom fee amounts.
- **Self-Service Payment Submission:** Members open `/pay/[token]` on their phone, view payment details (GCash / Bank QR), enter their reference number, and attach a payment screenshot.
- **Treasurer Review Queue:** High-speed review interface where treasurers view receipts, inspect high-res image previews, and single-click **Approve** or **Reject** (with customizable feedback).
- **Graceful Undo Action:** Mistakenly rejected or approved a receipt? Undo the action instantly with restored audit trails.
- **Automated Dues Reminders:** 1-click batch reminder emails sent via Resend to unpaid members with direct payment links.
- **Collection Progress Rings:** Real-time visual progress ring showing total collections, paid percentage, and pending reviews.

### 2.5 Institutional Memory & Continuity (Epic 5)

- **Officer Terms Archive (H1):** Record and celebrate past officer terms by academic year and semester, preventing overlapping term conflicts.
- **Documents & Resource Repository (H2):** Keep constitutions, university permits, bylaws, and shared Google Drive folders categorized into _Finance_, _Legal_, _Templates_, _Contacts_, and _General_.
- **Handover Guide Template (H4):** Structured, autosaved transition guide for incoming officers covering:
  - _What I do_ (high-level responsibilities and core mission).
  - _Recurring tasks_ (weekly, monthly, seasonal cadences).
  - _Key contacts_ (advisors, department heads, partner orgs, trusted suppliers).
  - _Open items & watch-outs_ (unfinished projects, pending commitments, practical advice).
  - _Where things are_ (links directly connected to the OrgKit Documents repository).
  - Finalization lock preventing unapproved post-handover edits.

---

## 3. Landing Page Blueprint & Conversion Architecture

When designing the public landing page for OrgKit, follow this structured narrative flow tailored for university students and organization leaders:

```
┌────────────────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR: Wordmark, Feature Links, Sign In Button, Get Started   │
├────────────────────────────────────────────────────────────────────────┤
│ HERO SECTION:                                                          │
│ - Punchy 3-line Headline: "Organize. Collaborate. Lead."               │
│ - Subtitle: The modern operating system for campus organizations.      │
│ - Primary CTA: "Launch Your Org Workspace" (Google Auth pill)          │
│ - Secondary CTA: "See Live Demo / Preview"                             │
│ - Hero Mockup: Dual-accent floating dashboard card with tilt decor     │
├────────────────────────────────────────────────────────────────────────┤
│ SOCIAL PROOF & STATS STRIP:                                            │
│ - "Built by student leaders, for student leaders"                      │
│ - Key stats: 100% Mobile Ready · 3-Min Setup · Zero Spreadsheet Chaos  │
├────────────────────────────────────────────────────────────────────────┤
│ PROBLEM VS. SOLUTION (THE 5 NIGHTMARES ORGKIT SOLVES):                 │
│ 1. The Lost Spreadsheet → Real-time Roster & CSV Import                │
│ 2. The Attendance Cheaters → Rotating Anti-Fraud Dynamic QR Codes       │
│ 3. The Screenshot Flood in GCash → Dedicated Treasurer Review Queue    │
│ 4. The Annual Knowledge Wipeout → Structured Officer Handover Guides   │
│ 5. Scattered Important Files → Centralized Organization Repository     │
├────────────────────────────────────────────────────────────────────────┤
│ FEATURE SHOWCASE (INTERACTIVE OR TABBED CARDS):                        │
│ - Tab 1: Member Roster & Instant Join Links                            │
│ - Tab 2: Fraud-Proof Event Attendance                                  │
│ - Tab 3: Dues & Receipt Verification Queue                             │
│ - Tab 4: Institutional Memory & Handover                               │
├────────────────────────────────────────────────────────────────────────┤
│ MOBILE-FIRST SPOTLIGHT:                                                │
│ - Showcase smartphone view (360px viewport demonstration)              │
│ - Highlight thumb-friendly 44px touch targets                          │
├────────────────────────────────────────────────────────────────────────┤
│ SECURITY & PRIVACY PROMISE:                                            │
│ - Google OAuth identity, RBAC, zero student data selling               │
├────────────────────────────────────────────────────────────────────────┤
│ FINAL CALL TO ACTION (CTA):                                            │
│ - "Ready to elevate your organization this semester?"                  │
│ - Single-click Google button + "Free forever for student orgs"         │
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER: Logo, Privacy Policy, Terms of Service, Campus Contact         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Complete Design System Specification (`design.md`)

_The following is the verbatim design specification governing every color token, font scale, button interaction, card elevation, and mobile breakpoint in OrgKit._

````markdown
# OrgKit Design System & Style Guide (`design.md`)

This document is the official design specification for **OrgKit**, extracted directly from the production `/register` and `/signin` experiences. All subsequent pages, dashboards, components, and user flows should reference and adhere to these guidelines to ensure visual consistency, accessibility, and brand coherence.

---

## 1. Brand Identity & Design Philosophy

OrgKit is a modern, reliable, and approachable platform built for student organization officers and members.

- **Purposeful Minimalism:** Clear hierarchy, ample negative space, and zero unnecessary visual clutter.
- **Dual-Accent Harmony:** A signature emerald green accent (`#059669`) serves as the primary brand anchor for success, completion, and growth. A warm amber / marigold companion accent (`#D97706` / `#F59E0B`) provides a vibrant, high-energy counterpoint for pending states, outstanding balances, reminders, and attention items, making OrgKit's design distinct, lively, and immediately recognizable.
- **Friendly Geometry:** Generously rounded corners (`rounded-3xl`, `rounded-full`), soft elevated drop shadows, and subtle border lines create an inviting, polished modern aesthetic.
- **Responsive Fluidity:** Uses fluid CSS `clamp(...)` scaling for typography, padding, card dimensions, and icon sizes across standard desktop, laptop, and mobile viewports.

---

## 2. Color Palette & Design Tokens

OrgKit uses a clean zinc neutral scale paired with an emerald accent and an explicit destructive red for validation errors.

### 2.1 Core Palette Table

| Token Name                  | Hex Code                   | Tailwind / CSS Variable                      | Description / Usage                                                       |
| :-------------------------- | :------------------------- | :------------------------------------------- | :------------------------------------------------------------------------ |
| **Base**                    | `#F4F4F5`                  | `var(--color-base)` / `zinc-100`             | Full-screen page background, global canvas                                |
| **Surface**                 | `#FFFFFF`                  | `var(--color-surface)` / `white`             | Cards, modals, elevated surfaces, Google button                           |
| **Ink**                     | `#18181B`                  | `var(--color-ink)` / `zinc-900`              | Primary headings, button labels, main body text                           |
| **Ink Secondary**           | `#3F3F46`                  | `zinc-700`                                   | Feature list items, secondary labels                                      |
| **Ink Muted**               | `#52525B`                  | `zinc-600`                                   | Disclaimers, footer notes, terms paragraphs                               |
| **Muted**                   | `#71717A`                  | `var(--color-muted)` / `zinc-500`            | Subtitles, placeholders, captions, meta info                              |
| **Line**                    | `#E4E4E7`                  | `var(--color-line)` / `zinc-200`             | Card borders, inputs, dividers, button outlines                           |
| **Line Subtle**             | `rgba(228, 228, 231, 0.6)` | `border-line/60`                             | Floating card outer borders                                               |
| **Divider Line**            | `rgba(161, 161, 170, 0.6)` | `zinc-400/60`                                | Vertical feature item dividers                                            |
| **Accent**                  | `#059669`                  | `var(--color-accent)` / `emerald-600`        | Primary brand accent, punch words, active badges                          |
| **Accent Strong**           | `#047857`                  | `var(--color-accent-strong)` / `emerald-700` | Hover states, high-contrast link text                                     |
| **Accent Light**            | `#10B981`                  | `emerald-500`                                | Radial gradient highlights and stop colors                                |
| **Accent Tint (6%)**        | `rgba(5, 150, 105, 0.06)`  | `emerald-600/6`                              | Background geometric rings and circles                                    |
| **Accent Tint (10%)**       | `rgba(5, 150, 105, 0.10)`  | `emerald-600/10` / `bg-emerald-50`           | Soft badges, outer decorative rings                                       |
| **Amber (Standout Accent)** | `#D97706`                  | `var(--color-amber)` / `amber-600`           | Standout secondary accent: pending reviews, reminders                     |
| **Amber Strong**            | `#B45309`                  | `var(--color-amber-strong)` / `amber-700`    | Outstanding amounts, high-contrast amber labels                           |
| **Amber Soft**              | `#FEF3C7`                  | `var(--color-amber-soft)` / `amber-100`      | Warm warning washes, pending badges                                       |
| **Brand Deep**              | `#054A38`                  | `var(--color-brand-deep)`                    | The wordmark's deep green. Brand titles (dialog headers). 10.3:1 on white |
| **Brand Tint**              | Accent 8% over Surface     | `var(--color-brand-tint)`                    | The faint emerald wash behind branded headers                             |
| **Error / Destructive**     | `#DC2626`                  | `red-600`                                    | Form validation errors, error borders (`data-error`)                      |

### 2.2 Tailwind CSS Configuration (v4)

Theme tokens are defined in `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --color-base: #f4f4f5;
  --color-surface: #ffffff;
  --color-ink: #18181b;
  --color-muted: #71717a;
  --color-line: #e4e4e7;
  --color-accent: #059669;
  --color-accent-strong: #047857;
}

.bg-base {
  background-color: var(--color-base);
}
.bg-surface {
  background-color: var(--color-surface);
}
.text-ink {
  color: var(--color-ink);
}
.text-muted {
  color: var(--color-muted);
}
.border-line {
  border-color: var(--color-line);
}
.bg-accent {
  background-color: var(--color-accent);
}
.bg-accent-strong {
  background-color: var(--color-accent-strong);
}
.text-accent {
  color: var(--color-accent);
}
.text-accent-strong {
  color: var(--color-accent-strong);
}
```
````

---

## 3. Typography Hierarchy

### 3.1 Font Family

- **Primary:** `Plus Jakarta Sans` via `next/font/google` (`subsets: ["latin"]`, weights: `400`, `500`, `600`, `700`, `800`).
- **System Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.

### 3.2 Typography Scale

| Level               | Size (Fluid / Responsive)     | Weight    | Line Height | Letter Spacing | Color                                      | Notes / Usage                                            |
| :------------------ | :---------------------------- | :-------- | :---------- | :------------- | :----------------------------------------- | :------------------------------------------------------- |
| **Display H1**      | `clamp(38px, 3.83vw, 64px)`   | 800       | 1.05        | `-0.025em`     | `#18181B` (Accent `#059669` for lead word) | Hero headings ("Organize. Collaborate. Lead.")           |
| **Card H2**         | `clamp(26px, 2.39vw, 40px)`   | 700       | 1.15        | `-0.015em`     | `#18181B`                                  | Auth card titles ("Welcome back", "Create Your Account") |
| **Section H3**      | `clamp(20px, 1.8vw, 28px)`    | 700       | 1.25        | `-0.01em`      | `#18181B`                                  | Modal titles, section headers                            |
| **Hero Subtitle**   | `clamp(16px, 1.44vw, 24px)`   | 400       | 1.25        | normal         | `#71717A`                                  | Marketing subcopy under H1                               |
| **Card Subtitle**   | `clamp(14px, 1.26vw, 21px)`   | 400       | 1.38        | normal         | `#71717A`                                  | Explanatory copy under Card H2 (max-width: 440px)        |
| **Button Label**    | `clamp(17px, 1.44vw, 24px)`   | 500       | 1.2         | normal         | `#18181B`                                  | Google Auth Button label                                 |
| **Standard CTA**    | `14px - 16px`                 | 600       | 1.2         | normal         | `#FFFFFF`                                  | Standard action button text                              |
| **Feature Item**    | `clamp(13px, 0.93vw, 15.5px)` | 500       | 1.2         | normal         | `#3F3F46`                                  | Marketing feature labels                                 |
| **Caption / Legal** | `clamp(13px, 0.95vw, 15px)`   | 400       | 1.5         | normal         | `#52525B`                                  | Terms, privacy notice, sublinks                          |
| **Text Link**       | `13px - 15px`                 | 600 / 700 | 1.5         | normal         | `#059669` (hover: `#047857`)               | Underline on hover, focus ring                           |

---

## 4. Spacing, Sizing & Radii

### 4.1 Border Radii

- **Full / Pill (`rounded-full` / `9999px`):** Primary auth buttons, chips, status pills.
- **Card Container (`clamp(20px, 1.67vw, 28px)`):** Auth cards, floating modals, main container panels.
- **Inner Surface (`rounded-2xl` / `16px`):** Notice callouts, info boxes, form groupings.
- **Component / Input (`rounded-xl` / `12px` or `rounded-lg` / `8px`):** Input fields, interactive controls.
- **Focus / Inline Elements (`rounded-[2px]`):** Inline hyperlinks with focus outline offset.

### 4.2 Elevation & Shadows

- **Card Floating Shadow:**
  ```css
  box-shadow: 0 20px 50px rgba(24, 24, 27, 0.08);
  ```
- **Interactive Button (Resting):**
  ```css
  box-shadow: 0 1px 3px rgba(24, 24, 27, 0.04);
  ```
- **Interactive Button (Hover):**
  ```css
  box-shadow: 0 6px 18px rgba(24, 24, 27, 0.08);
  transform: translateY(-1px);
  ```
- **Interactive Button (Active / Pressed):**
  ```css
  box-shadow: 0 1px 2px rgba(24, 24, 27, 0.05);
  transform: translateY(0.5px) scale(0.995);
  ```
- **Accessible Focus Ring:**
  ```css
  outline: none;
  box-shadow:
    0 0 0 2px #ffffff,
    0 0 0 4px #059669;
  ```

---

## 5. Layout Architecture & Screen Templates

### 5.1 Split-Pane Layout (Desktop `>= 1024px`)

- **Viewport Constraints:** Strict `100vw` / `100vh` zero-scroll policy for auth (`overflow: hidden`).
- **Gutters:**
  - `padding-left: clamp(32px, 10.5vw, 175px)`
  - `padding-right: clamp(32px, 10.1vw, 170px)`
- **Left Pane (Brand & Marketing):**
  - OrgKit wordmark logo (`/orgkit-text-logo.png`, `clamp(150px, 13vw, 220px)` width).
  - Bold 3-line headline with accent finish.
  - Subtitle with high-readability line breaks.
  - 3-column horizontal feature summary separated by 1.5px subtle dividers:
    - _Manage Members_ (`Users` icon)
    - _Organize Events_ (`CalendarDays` icon)
    - _Track Activities_ (`ChartNoAxesCombined` icon)
- **Right Pane (Action Container):**
  - Fluid width floating card: `width: clamp(380px, 33.85vw, 566px)`, `maxWidth: 566px`.
  - Padding: `clamp(24px, 4.25vh, 40px) clamp(24px, 2.69vw, 45px)`.

### 5.2 Background Artistic Treatment

- **Abstract Geometric Vector Layer (SVG):**
  - Top-Left: Soft emerald circular backdrops (`fillOpacity="0.06"`), concentric circle outlines (`strokeOpacity="0.35"`), and tiny geometric accent tick (`polygon`).
  - Top-Right: Deep emerald gradient circle (`radialGradient` `#059669` to `#10B981`) paired with outer 10% opacity ring.
  - Bottom-Right: Emerald arc strokes and solid accent sweep.
  - Bottom-Left: Concentric pale mint base circles (`fillOpacity="0.08"`).
- **Campus Photographic Anchor:**
  - Grayscale campus building photo (`/campus-building.png`) placed at bottom-left (`objectPosition: "0 100%"`).
  - Dual directional mask fade:
    ```css
    mask-image:
      linear-gradient(to right, rgba(0, 0, 0, 1) 50%, transparent 100%),
      linear-gradient(to top, rgba(0, 0, 0, 1) 40%, transparent 100%);
    mask-composite: intersect;
    ```

### 5.3 Mobile Layout (`< 1024px`)

- Background decorative layer and marketing feature items gracefully hide (`display: none !important`).
- Body reverts to standard responsive vertical scrolling (`overflow-y: auto !important`).
- Card expands to fill mobile container up to `440px` with `padding: 32px 16px 48px 16px`.

### 5.4 Phones and touch screens (T2)

Every core screen has to work at **360px wide** with no sideways scrolling, and every control has to be easy to hit with a thumb. Check a change in browser device mode and on a real phone with `mobile-qa.md`.

**Breakpoints**:

| Width               | What changes                                                                                                                                                                 |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `< 1024px`          | The workspace sidebar becomes a **drawer**, opened from a slim top bar with a 44px menu button. The page gets the full width. The auth screens use the mobile layout (5.3).  |
| `<= 800px`          | The Dues list shows cards instead of its table (the table needs about 650px).                                                                                                |
| `<= 640px`          | The Members list, attendance, and usage report show cards. A dialog's buttons stack full width, the main action on top. Pagers show "Page 2 of 5" instead of numbered pages. |
| `(pointer: coarse)` | Any touch screen gets the 44px targets below, whatever its width.                                                                                                            |

**Touch targets:** On a phone, or any touch screen (`@media (max-width: 640px), (pointer: coarse)`), every control is at least **44px** tall and wide.

- Every `button`, `[role="button"]`, `[role="option"]`, `[role="tab"]`, `[role="menuitem"]`, `select` and text field is at least 44px.
- A link on its own line takes `className="orgkit-tap-link"`.
- A checkbox or radio is wrapped in a `label` with `className="orgkit-check-row"`, so the whole row is the target.
- Text fields are **16px** on a phone to prevent iOS auto-zooming.

**Sizes:**

- Use **`100dvh`**, never `100vh`.
- Nothing has a fixed width over **328px** (360px less 16px each side). Use `min()`, `clamp()`, a percentage or `maxWidth: "100%"`.
- A flex row that can run out of room has `flex-wrap: wrap`. Flex children holding text have `min-width: 0`.

---

## 6. Component Specs & Patterns

### 6.1 Authentication Card

Every auth card follows this exact sequence:

1. **OrgKit Icon Logo:** Centered top icon (`/orgkit-logo.png`, width `clamp(64px, 5.5vw, 92px)`).
2. **Title H2:** Primary card heading (`Welcome back` / `Create Your Account`).
3. **Subtitle:** Centered muted guidance text (`max-width: 440px`).
4. **Primary Interaction Area:** High-visibility Google OAuth button or form inputs.
5. **Secondary Information:**
   - Legal consent string: "By continuing, you agree to our [Terms](/terms) and [Privacy Policy](/privacy)."
   - Toggle route prompt: "New to OrgKit? [Sign up](/register)" / "Already have an account? [Sign in](/signin)".

### 6.2 Google OAuth Button

- **Structure:** Pill button (`border-radius: 9999px`), height `clamp(52px, 7.65vh, 72px)`.
- **Styling:** White surface `#FFFFFF`, 2px solid line `#E4E4E7`, text `#18181B`.
- **States:**
  - _Hover:_ Background `#FAFAFA`, border `#D4D4D8`, shadow lift `translateY(-1px)`.
  - _Active:_ Background `#F4F4F5`, `scale(0.995)`.
  - _Focus-Visible:_ Dual ring (`2px #FFFFFF`, `4px #059669`).
  - _Error State (`data-error="true"`):_ Border `#DC2626`.
  - _Loading State:_ Spinner icon (`#059669` sweep) with label updating to "Signing in...".

### 6.3 Iconography & Micro-interactions

- **Library:** `lucide-react` with `strokeWidth={1.5}` (or `strokeWidth={2}` for small indicator icons).
- **Floating Decorative Icons System (`FloatingIconsDecor`):**
  - Background burst of 6 tilted brand micro-cards mounted behind primary feature surfaces:
    1. _Users_ (White Card, -7deg tilt, Top-Left)
    2. _Calendar_ (Mint Wash Card, -5deg tilt, Mid-Left)
    3. _Wallet_ (Amber Border Card, +7deg tilt, Bottom-Left)
    4. _QR Code_ (Emerald Solid Card, +7deg tilt, Top-Right)
    5. _Archive / Documents_ (White Card, -8deg tilt, Mid-Right)
    6. _Clipboard / Handover_ (Mint Wash Card, +5deg tilt, Bottom-Right)

### 6.4 Dialogs (Modals)

Every modal in the app wears the same OrgKit frame:

```
┌──────────────────────────────────────┐
│ ░░ [mark]  Dialog Title           ✕ ░│  ← DialogHeader: brand tint, mark tile,
│ ░░         One quiet line            │    deep-green title, optional description
├──────────────────────────────────────┤
│                                      │
│   Content (scrolls if the window     │  ← DialogBody
│   is short)                          │
│                                      │
│              [ Cancel ]  [ Save ]    │  ← DialogFooter: main action last
└──────────────────────────────────────┘
```

- **Frame:** `var(--radius-panel)` (20px), `1px solid var(--color-line)`, shadow `0 20px 50px` ink at 14%, `overflow: hidden`.
- **Backdrop:** Ink at 45% with `blur(8px)`.
- **Header:** Background `var(--color-brand-tint)`, brand mask tile with emerald silhouette, deep green title (`var(--color-brand-deep)`).
- **Buttons:** `DialogButton` with variants `primary` (`--color-accent`), `secondary` (`--color-surface` + border), `danger` (`--color-danger`).

---

## 7. Motion & Accessibility Standards

### 7.1 Animations

- **Card Entrance:**
  ```css
  @keyframes orgkitCardFadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .orgkit-card {
    animation: orgkitCardFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  ```
- **Card Popout:**
  ```css
  @keyframes cardPopout {
    0% {
      transform: scale(0.96);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  ```

### 7.2 Accessibility (WCAG 2.1 AA+)

- Ink (`#18181B`) on Surface (`#FFFFFF`): **17.7:1** (AAA).
- Ink (`#18181B`) on Base (`#F4F4F5`): **16.0:1** (AAA).
- Muted (`#71717A`) on Surface (`#FFFFFF`): **4.8:1** (AA).
- Accent Strong (`#047857`) on Surface (`#FFFFFF`): **5.5:1** (AA).
- Reduced motion support disabling transforms and animations for sensitive users.

```

---

## 5. High-Impact Copy & Taglines for the Landing Page

### 5.1 Main Value Props / Headers
- *"The operating system for student leaders who have better things to do than fix spreadsheets."*
- *"Stop running your student organization on scattered group chats and lost receipts."*
- *"Built for students. Trusted by officers. Ready in 3 minutes."*
- *"Organize. Collaborate. Lead."*

### 5.2 Micro-Copy & Social Proof Snippets
- **For Membership:** *"Drop the link in your group chat. Watch your roster build itself with built-in privacy consent."*
- **For Events:** *"No more screenshotting QR codes for absent friends. Our rotating dynamic codes guarantee real attendance."*
- **For Dues:** *"Treasurers, celebrate: member receipts submitted in seconds, reviewed in one click, with zero personal GCash mixing."*
- **For Handover:** *"Graduate without leaving your successors in the dark. Handover guides that preserve institutional memory forever."*

---

*This document serves as the complete, authoritative reference for generating OrgKit's public marketing website, UI components, and brand landing page.*
```
