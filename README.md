# OrgKit Landing Page

> **The Operating System for University Student Organizations**  
> *Engineered for collegiate societies, academic clubs, student councils, and youth non-profits.*

---

## 🌟 Overview

OrgKit is an all-in-one digital headquarters for university student organizations. This repository houses the public-facing marketing and interactive product landing page built strictly adhering to the **OrgKit Design Specification (`orgkit.md`)**.

It features:
- **Zero-Friction Aesthetic:** Minimalist, approachable geometry with generous rounded radii (`rounded-3xl`, `rounded-full`), soft elevated drop shadows, and calm zinc canvas tones (`#F4F4F5`).
- **Signature Dual-Accent Harmony:**
  - **Primary Emerald Accent (`#059669`):** Growth, official approval, verified active status.
  - **Standout Amber Accent (`#D97706`):** Pending reviews, payment review queues, alerts, deadlines.
- **Interactive Live Simulators:**
  1. **Rotating HMAC Anti-Fraud QR Code:** Live 5-second countdown timer with dynamic cryptographic hash cycling and real-time scan simulation.
  2. **Treasurer Dues Review Queue:** Interactive receipt inspection with Approve (₱250), Reject, and graceful Undo audit restore actions.
  3. **Dynamic Member Roster:** Searchable member list with RBAC badge filters (`Admin`, `Finance`, `Officer`, `Member`) and 1-click CSV export simulation.
  4. **Structured Officer Handover Vault:** 5-section officer transition template with state-locking toggle.
- **Mobile-First Standard (T2):**
  - Guaranteed 360px minimum width with zero horizontal scroll.
  - Thumb-friendly 44px touch targets on mobile viewports.
  - Fluid `100dvh` units preventing iOS viewport jumping.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) configured with OrgKit color tokens & fluid clamp typography
- **Iconography:** [Lucide React](https://lucide.dev/) (`strokeWidth={1.5}`)
- **Typography:** Plus Jakarta Sans (`subsets: ["latin"]`, weights `400, 500, 600, 700, 800`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🎨 Design Tokens Quick Reference

| Token Name | Hex Code | Tailwind Token | Description |
| :--- | :--- | :--- | :--- |
| **Base** | `#F4F4F5` | `bg-base` | Global canvas background |
| **Surface** | `#FFFFFF` | `bg-surface` | Elevated cards, modals, Google CTA |
| **Ink** | `#18181B` | `text-ink` | Headings, primary button text |
| **Muted** | `#71717A` | `text-muted` | Subtitles, meta descriptions |
| **Line** | `#E4E4E7` | `border-line` | Card borders, dividers |
| **Accent** | `#059669` | `bg-accent` / `text-accent` | Primary emerald brand anchor |
| **Accent Strong** | `#047857` | `bg-accent-strong` | Hover states |
| **Amber** | `#D97706` | `bg-amber` / `text-amber` | Outstanding dues, review queues |
| **Brand Deep** | `#054A38` | `text-brand-deep` | Wordmark dark green tone |

---

## 📄 License
Independent student leadership initiative. Free forever for collegiate organizations.
