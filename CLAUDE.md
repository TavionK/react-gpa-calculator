# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build
npm run lint      # ESLint (covers .js/.jsx only — not .ts/.tsx)
npm run preview   # preview production build locally
npx tsc --noEmit  # type-check TypeScript (no test suite exists)
```

## Architecture

**No router.** View switching is handled by a `view` state (`"main" | "faq"`) in `App.tsx`. Adding new views means adding a new value to that union and a conditional render branch.

**All state lives in `App.tsx`** and is passed down as props. There is no context, no store, and no global state. The two pieces of state are:
- `courses: Course[]` — the current in-progress semester's courses
- `semesters: Semester[]` — saved past semesters

**`Semester` is a reduced snapshot**, not an array of courses. When "Save Semester" is clicked, `CoursesList` aggregates the current courses into `{ id, totalGradePoints, totalCredits }` and appends it to `semesters`, then clears `courses`. Individual course data for past semesters is not recoverable.

**All GPA math is in `src/utils/courses.ts`** as pure functions. The three GPA calculations are distinct:
- `calculateSemesterGpa` — current `courses` only
- `calculatePrevGpa` — saved `semesters` only (used for Overall GPA and Honors — despite the name, it is the cumulative saved GPA)
- `calculateCompleteGpa` — saved `semesters` + current `courses` combined (used for GPA Trend)

## Styling

Tailwind v4 is configured entirely in `src/index.css` via `@theme` — there is no `tailwind.config.js`. Custom theme tokens (colors, fonts) and component classes live there.

Two reusable utility classes are defined in `index.css`:
- `.small-text` — `text-xs tracking-wider uppercase`
- `.a11y-rings` — standard `focus-visible` ring style; apply to all interactive elements

Radix UI Accordion styles and `slideDown`/`slideUp` keyframe animations are also defined in `index.css` under `@layer components`.

## UI Primitives

- **Radix UI** (`radix-ui` package, `@radix-ui/react-icons`) — used for the FAQ Accordion and icons
- **Lucide React** — used for action icons (`Plus`, `X`, `TrendingUp`, `TrendingDown`)

## Accessibility Conventions

- Visually hidden labels use `className="sr-only"` 
- `aria-hidden="true"` is set on decorative icons and duplicate visible text
- `aria-live="polite" aria-atomic="true"` on `SemesterGpaDisplay` for live GPA updates
- Interactive elements use `.a11y-rings` for focus styling
