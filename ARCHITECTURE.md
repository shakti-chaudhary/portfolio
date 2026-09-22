# SHAKTI_CHAUDHARY — Project Architecture

## Overview

This project uses **Feature-Based Architecture** — code is organized around business
domains (features), not technical role (components vs hooks vs utils).

---

## Directory Structure

```
src/
├── app/                    # Redux store + typed hooks
│   ├── store.ts            # configureStore — import slices here
│   └── hooks.ts            # useAppSelector, useAppDispatch (always use these)
│
├── assets/                 # Static: fonts, images, icons
│
├── components/             # 🏛 Global Component Library (design system)
│   ├── ui/                 # Primitive components (no business logic)
│   │   ├── Button/         # Button.tsx + Button.types.ts + index.ts
│   │   ├── Input/          # Input + Textarea
│   │   ├── Badge/
│   │   ├── Card/
│   │   ├── Icon/           # Material Symbols wrapper
│   │   ├── Spinner/
│   │   └── Divider/
│   │   └── index.ts        # Barrel: export * from all ui/*
│   ├── layout/             # Layout wrappers (no visual styling)
│   │   ├── Container/      # Max-width centering
│   │   └── Section/        # Semantic <section> + spacing
│   │   └── index.ts
│   └── index.ts            # Master barrel: import { Button } from '@/components'
│
├── features/               # Feature modules — co-located by domain
│   ├── theme/              # Dark/light mode slice
│   ├── navigation/         # Navbar, MobileMenu, Footer, slice, hook
│   ├── hero/               # Hero section + TechStackGrid
│   ├── projects/           # Projects section + Redux + Zod schema
│   ├── experience/         # Timeline + skills grid
│   ├── blog/               # Blog listing + post view + Redux + Zod
│   └── contact/            # Contact form + Redux async thunk + Zod
│
│   Each feature follows this structure:
│   features/{name}/
│   ├── components/         # React components for this feature only
│   ├── store/              # Redux slice (if stateful)
│   ├── schemas/            # Zod schemas (validation source of truth)
│   ├── types/              # TypeScript types (inferred from Zod schemas)
│   ├── data/               # Static data / mock data
│   ├── hooks/              # Feature-specific React hooks
│   └── index.ts            # Barrel — public API of this feature
│
├── hooks/                  # Global reusable hooks (no Redux, no features)
│   ├── useScrollPosition.ts
│   ├── useIntersectionObserver.ts
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
│
├── lib/                    # Pure utility functions (no React, no Redux)
│   ├── utils.ts            # cn(), formatDate(), slugify(), etc.
│   ├── constants.ts        # App-wide constants (SITE_NAME, NAV_ITEMS, etc.)
│   └── validators.ts       # Shared Zod primitives (zEmail, zName, etc.)
│
├── pages/                  # Route-level components (thin, compose features)
│   ├── HomePage.tsx
│   ├── BlogPage.tsx
│   ├── BlogPostPage.tsx
│   └── NotFoundPage.tsx
│
├── router/                 # React Router setup
│   ├── AppRouter.tsx       # BrowserRouter + Routes + lazy loading
│   └── routes.ts           # ROUTES constant for type-safe navigation
│
├── styles/                 # Global CSS — ordered imports
│   ├── globals.css         # Entry point, CSS custom properties, resets
│   ├── typography.css      # Font rendering, scale utilities
│   ├── animations.css      # All @keyframes
│   └── components.css      # glass-card, btn-3d, dotted-border, etc.
│
├── types/                  # Global TypeScript types
│   ├── common.types.ts     # AsyncState, BaseEntity, polymorphic helpers
│   └── env.d.ts            # ImportMetaEnv (Vite env vars)
│
├── App.tsx                 # Root: <Provider> + <AppRouter> + ThemeSync
├── main.tsx                # ReactDOM.createRoot entry point
└── vite-env.d.ts
```

---

## CSS Architecture

| File | What goes here |
|------|----------------|
| `globals.css` | CSS custom properties, `:root`, html/body base, `::selection` |
| `typography.css` | Material Symbols rendering, text scale utilities (`text-label-sm` etc.) |
| `animations.css` | `@keyframes` only — animation classes go in `tailwind.config.ts` |
| `components.css` | `@layer components` classes: `glass-card`, `btn-3d`, `dotted-border`, `bg-text-overlay` |
| Tailwind config | Design tokens as Tailwind classes, animation utilities, custom scales |
| Component styles | Tailwind `className` in JSX — no separate CSS files per component |

**Rule:** If a style can be expressed as Tailwind classes, it goes in JSX.
Only classes that require multi-value `box-shadow`, `font-variation-settings`,
`backdrop-filter`, or `@keyframes` go in CSS files.

---

## State Management (Redux RTK)

Every slice follows this pattern:

```ts
// store/mySlice.ts
import { createSlice } from '@reduxjs/toolkit'
const mySlice = createSlice({ name: 'my', initialState, reducers: {} })
export const { actions } = mySlice
export default mySlice.reducer

// hooks/useMy.ts  (wraps dispatch + selector)
export function useMy() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((s) => s.my)
  return { ...state, action: (p) => dispatch(actionCreator(p)) }
}
```

Components **never** import `useDispatch`/`useSelector` directly — always use
feature hooks or `useAppSelector`/`useAppDispatch` from `@/app/hooks`.

---

## Validation (Zod)

Each feature has its own `schemas/` folder:

```
features/contact/
  schemas/contact.schema.ts   — z.object({ name, email, message })
  types/contact.types.ts      — type ContactFormData = z.infer<typeof contactFormSchema>
```

Shared primitive validators (`zEmail`, `zName`, `zMessage`) live in
`lib/validators.ts` and are imported by feature schemas.

React Hook Form is wired to Zod via `@hookform/resolvers/zod`:
```ts
const form = useForm({ resolver: zodResolver(mySchema) })
```

---

## Component Library Rules

1. **Every UI primitive has a barrel** — `import { Button } from '@/components/ui'`
2. **`cn()` for className merging** — always `cn(...classes, className)` as last arg
3. **`forwardRef` on all inputs** — for RHF compatibility
4. **No business logic in `components/`** — feature-specific components live in `features/{name}/components/`
5. **Polymorphic `as` prop** for Button (renders as `<a>` or `<button>`)
6. **Accessibility first** — `aria-*`, `role`, `focus-visible`, `aria-label` on Icon

---

## Import Aliases

All paths use `@/` alias defined in `tsconfig.json` + `vite.config.ts`:

```ts
import { Button } from '@/components/ui'           // ✅
import { useProjects } from '@/features/projects'  // ✅
import { cn } from '@/lib/utils'                   // ✅
import { useAppSelector } from '@/app/hooks'       // ✅

import Button from '../../components/ui/Button'    // ❌ never use relative paths for src/
```

---

## Adding a New Feature

1. Create `src/features/{name}/` with the standard sub-folders
2. Add Zod schema → infer TypeScript type
3. Create Redux slice → add to `src/app/store.ts`
4. Create feature hook wrapping dispatch + selector
5. Build components using `@/components` primitives
6. Export everything through `features/{name}/index.ts`
7. Import in `pages/` or other features via the barrel

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Vite | Build tool, dev server |
| React 19 | UI framework |
| TypeScript 6 | Type safety |
| Tailwind CSS 4 | Utility-first styling |
| Redux Toolkit | Global state management |
| React Redux | React bindings for Redux |
| React Router v7 | Client-side routing |
| Zod | Runtime schema validation |
| React Hook Form | Performant form state |
| @hookform/resolvers | RHF + Zod integration |
| clsx + tailwind-merge | Conditional className merging |
