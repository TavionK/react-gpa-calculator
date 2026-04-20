# GPA Calculator

A clean, weighted GPA calculator built with React and TypeScript, featuring a light UI styled with Tailwind CSS.

## Tech Stack

- **React** – Component-based UI with hooks (`useState`, `useEffect`, `useRef`)
- **TypeScript** – Fully typed components, props, and utility functions
- **Vite** – Fast dev server and build tooling
- **Tailwind CSS v4** – Utility-first styling
- **Radix UI** – Accessible, unstyled UI primitives (Accordion)
- **Lucide React** – Lightweight icon set
## Features

- Add multiple courses with name, letter grade, and credit hours
- Weighted GPA calculation based on the 4.0 scale
- Live GPA display that updates as you add or edit courses
- Delete individual courses or clear all at once
- Save completed semesters to track cumulative GPA over time
- View overall GPA across all saved semesters
- GPA trend indicator showing whether your current semester will raise or lower your cumulative GPA
- Honors eligibility display (Cum Laude, Magna Cum Laude, Summa Cum Laude)
- Autofocuses the course name input when a new course is added
- Accessible FAQ accordion explaining the GPA calculation method and honors cutoffs
## Live Demo

[tavion-gpa-calculator.netlify.app](https://tavion-gpa-calculator.netlify.app)

## Screenshots
### Empty state
![Screenshot of the GPA Calculator app](./public/screenshot.png)
### Courses added
![Screenshot of the GPA Calculator app](./public/screenshot2.png)

## Project Structure

```
src/
├── components/
│   ├── CourseListItem.tsx       # Individual course row with inputs and delete button
│   ├── CoursesList.tsx          # Course list, add/clear/save controls, and credit summary
│   ├── Faq.tsx                  # Accessible accordion FAQ for GPA calculation and honors info
│   ├── GpaTrend.tsx             # Displays GPA trend with up/down indicator
│   ├── Header.tsx               # App title and scale info header
│   ├── Honors.tsx               # Honors eligibility display based on cumulative GPA
│   ├── OverallGpaDisplay.tsx    # Shows cumulative GPA across all semesters
│   └── SemesterGpaDisplay.tsx   # Live GPA readout for current semester
├── utils/
│   └── courses.ts               # Pure functions for GPA logic + Course/Semester interfaces
└── App.tsx                      # Root component, state management
```

## Getting Started

```bash
# Install dependencies
npm install
 
# Run dev server
npm run dev
 
# Build for production
npm run build
```