# Cynbit-Inspired Navbar & Persistent Theme Store

This project implements a responsive Cynbit-inspired navigation bar using **React**, **TypeScript**, **Tailwind CSS**, and **Zustand** with persistent dark/light theme synchronization stored in the browser's `localStorage`.

---

## 1. Technical Stack & Dependencies

- **Framework**: React 19 + TypeScript (scaffolded via Vite)
- **Styling**: Tailwind CSS v3 (`darkMode: 'class'`), PostCSS, Autoprefixer
- **State Management**: Zustand v5 + `persist` middleware
- **Icons**: Lucide React (`Cpu`, `Sun`, `Moon`, `Menu`, `X`, `ArrowUpRight`, `ArrowRight`, `Sparkles`, etc.)

---

## 2. Architecture & Design Decisions

### A. Theme Management (`src/store/useThemeStore.ts`)
- **State Strategy**: Zustand with `persist` middleware storing state in `localStorage` under the key `'theme'`.
- **DOM Class Synchronization**:
  - Direct execution: When `toggleTheme()` or `setTheme()` is dispatched, it modifies `document.documentElement.classList` (`<html class="dark">`).
  - Rehydration hook: Uses `onRehydrateStorage` to re-sync the DOM class when the store initializes on page mount.

### B. Anti-Flash Strategy (`index.html`)
- **Problem**: React hydrates asynchronously after HTML parsing, causing a brief white flash for dark mode users.
- **Solution**: A small blocking inline `<script>` placed in the `<head>` of `index.html` inspects `localStorage.getItem('theme')` (falling back to OS preference via `matchMedia`) and sets `<html class="dark">` before the DOM is painted.

### C. Glassmorphic Sticky Header (`src/components/Navbar.tsx`)
- **Layout**: `sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800`.
- **Branding**: Cynbit badge with `Cpu` icon and bold typography.
- **Desktop Navigation**: Links (Home, Services, BitElevate, About, Blog, Contact) with a hover line transition (`origin-left scale-x-0 group-hover:scale-x-100`) and a badge pill for "BitElevate".
- **Theme Switcher**: Accessible Sun ☀️ / Moon 🌙 button wired to the Zustand store.
- **Call-to-Action**: "Join Us" pill button (`bg-teal-600 hover:bg-teal-700 text-white rounded-full px-5 py-2`).
- **Mobile Drawer**: Responsive hamburger toggle (`Menu` / `X`) with slide-down drawer and mobile theme toggle.

### D. Showcase Page (`src/App.tsx`)
- Cynbit landing hero: *"Architecting the future with AI automation"*.
- Live diagnostic card displaying current theme state, active DOM class, and toggle controls.
- Services grid and scrollable page content to verify the glassmorphic backdrop-blur effect.

---

## 3. Phased Roadmap & Git Commit History

| Phase | Description | Git Commit |
|---|---|---|
| **Phase 1** | Project setup (Vite, TS, Tailwind CSS) & Zustand theme store with `persist` and anti-flash script. | `feat(theme): add zustand theme store with localstorage persistence` |
| **Phase 2** | Responsive Cynbit `Navbar.tsx` component with theme toggle, CTA, and mobile drawer. | `feat(navbar): create responsive navbar with dark mode toggle and mobile menu` |
| **Phase 3** | Connected Navbar to `App.tsx` with hero showcase, diagnostics, and test verification. | `feat(demo): add demo preview and verify theme persistence` |

---

## 4. Verification & Testing

The implementation was tested and verified across:
1. **Build & Type Checking**: `tsc -b && vite build` compiled with 0 errors.
2. **State & DOM Unit Tests**:
   - Initial state defaults to `light`.
   - `toggleTheme()` transitions to `dark`, adds `.dark` to `document.documentElement`, and writes `{"state":{"theme":"dark"},"version":0}` to `localStorage`.
   - Second `toggleTheme()` reverts to `light`, removes `.dark`, and updates `localStorage`.
   - Rehydration restores the theme correctly on page reload.
3. **Responsive Breakpoints**: Desktop navigation displays on `md:` screens (≥768px); hamburger button and slide-down drawer activate on smaller screens (<768px).

---

## 5. Getting Started

### Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```
Generates production assets in `dist/`.
