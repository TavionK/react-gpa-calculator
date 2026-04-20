# GPA Calculator

A clean, weighted GPA calculator built with React and TypeScript, featuring a light UI styled with Tailwind CSS.

## Tech Stack

- **React** – Component-based UI with hooks (`useState`, `useEffect`, `useRef`)
- **TypeScript** – Fully typed components, props, and utility functions
- **Vite** – Fast dev server and build tooling
- **Tailwind CSS v4** – Utility-first styling with a dark theme
- **Lucide React** – Lightweight icon set

## Features

- Add multiple courses with name, letter grade, and credit hours
- Weighted GPA calculation based on the 4.0 scale
- Live GPA display that updates as you add or edit courses
- Delete individual courses or clear all at once
- Save completed semesters to track progress over time
- View overall GPA across all saved semesters
- GPA trend indicator showing whether your current semester will raise or lower your cumulative GPA
- Auto-focuses the course name input when a new course is added
- GPA scale breakdown explaining how the calculation works

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
│   ├── GpaTrend.tsx             # Displays GPA trend with up/down indicator
│   ├── Header.tsx               # App title and scale info header
│   ├── OverallGpaDisplay.tsx    # Shows cumulative GPA across all semesters
│   ├── SemesterGpaDisplay.tsx   # Live GPA readout for current semester
│   └── Faq.tsx            # Explanation of the GPA calculation method
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