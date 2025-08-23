# Timeline App 🕰️

A timeline web app built step-by-step from scratch using **HTML, CSS, JavaScript, and TypeScript**.  
Each task introduces new concepts, building towards a polished and interactive app.

---

## 🌐 Live Demo  
🔗 [View Timeline App on Netlify]()  

---

## Task 1️⃣ – HTML: The Foundations of Web Design
Created the base HTML structure for the Timeline App using semantic tags.

### What’s Included
- `<header>` with a placeholder logo and theme toggle button  
- `<nav>` for future filters (currently empty)  
- `<section id="timeline">` to hold event markers  
- `<div id="modal">` for modal content  
- Semantic structure with `<main>`, `<article>`, `<figure>`  

---

## Task 2️⃣ – CSS: Styling & Responsive Layout
Styled the Timeline App to be visually appealing and responsive.

### What’s Included
- Responsive layout using **CSS Grid** (adapts to mobile, tablet, desktop)  
- Styled header with color scheme, typography, and spacing  
- Placeholder styles for timeline events  
- Modal base styles (hidden by default, ready for JS interactivity)  
- Breakpoints for:
  - Mobile (<768px)  
  - Tablet (768–1023px)  
  - Desktop (≥1024px)  

---

## Task 3️⃣ – JavaScript: Interactivity
Introduced **Vanilla JavaScript** to make the app dynamic and interactive.

### What’s Included
- Fetching event data from `data/events.json`  
- Rendering timeline event cards dynamically  
- Modal functionality:
  - Opens on click/keyboard enter  
  - Click outside or ESC closes modal  
- Basic accessibility:
  - ARIA roles for modal/dialog  
  - Focus trapping inside modal  

---

## Task 4️⃣ – TypeScript: Static Typing & Modular Code
Refactored JavaScript into **TypeScript modules** with static typing.

### What’s Included
- Initialized **TypeScript** with `tsconfig.json` (`strict` mode enabled)  
- Converted `script.js` → modular TypeScript files:  
  - `types.ts` → Type definitions for events  
  - `fetcher.ts` → Fetch event data  
  - `renderer.ts` → Render timeline UI  
  - `modal.ts` → Modal logic  
  - `index.ts` → App entry point  
- Build setup:
  - `npx tsc` compiles `src/` → `dist/index.js`  
- Updated `index.html` to load compiled JS  

---

## Task 5️⃣ – React + Vite: Component-Based UI
Rebuilt the Timeline App using **React (with TypeScript)** for a modern, component-based architecture.

### What’s Included
- Bootstrapped with **Vite (React + TypeScript template)**  
- Components:
  - `<Header>` → Logo + theme switch  
  - `<Timeline>` → Maps over event data  
  - `<EventCard>` → Displays each timeline entry  
  - `<EventModal>` → Detailed view (with accessibility & portal support)   
- State management with React Hooks:
  - `useState`, `useEffect` for modal control and data fetching  
- Styling:
  - Reused existing CSS (migrated for React app)  
  - Ensured modal images scale properly (`object-fit: contain`)  

---

## Task 6️⃣ – Accessibility & Deployment 🌍
Enhanced the app for **Accessibility (a11y)** and deployed live with **Netlify**.

### What’s Included
- Accessibility:
  - Verified **WCAG AA** (contrast ratio ≥4.5:1)  
  - Added semantic roles: `role="dialog"`, `aria-modal="true`, `aria-current`  
  - Keyboard navigation: Tab/Shift+Tab through timeline markers  
  - Modal closable with **Esc key**  
  - Focus trap inside modal, returns focus to triggering marker on close  
- Theming:
  - Safe light/dark color palettes with guaranteed accessibility  
- Deployment:
  - Built production version (`npm run build`)  
  - Hosted on **Netlify** with `dist/` as publish folder  

---

## 📂 Folder Structure (Task 5 – React + Task 6 Updates)
```
app/
├── public/
│ ├── assets/ # Event images + placeholder
│ │ ├── event1.jpg
│ │ ├── event2.jpg
│ │ └── placeholder.jpg
│ └── data/events.json # Event data
│
├── src/
│ ├── components/ # React components
│ │ ├── Header.tsx
│ │ ├── Timeline.tsx
│ │ ├── EventCard.tsx
│ │ └── EventModal.tsx
│ │
│ ├── App.tsx # Root component
│ ├── main.tsx # React entry point
│ ├── index.css # Global styles (WCAG AA colors)
│ └── types.ts # Shared TypeScript types
│
├── index.html # Vite HTML entry
├── package.json # Dependencies & scripts
├── tsconfig.json # TypeScript config
├── vite.config.ts # Vite config
└── README.md # Project documentation
```

---

## Roadmap
- ✅ Task 1: HTML skeleton  
- ✅ Task 2: CSS layout  
- ✅ Task 3: JS interactivity  
- ✅ Task 4: TypeScript refactor  
- ✅ Task 5: React components  
- ✅ Task 6: Accessibility improvements + Deployment  

---

## Goal ✈️
A fully-featured timeline app demonstrating the journey from basic HTML to **TypeScript** and eventually **React**, with a focus on **accessibility and deployment**.

© 2025 Jawwad 👨‍💻
