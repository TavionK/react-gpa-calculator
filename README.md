# GPA Calculator

A clean, weighted GPA calculator built with React and TypeScript, featuring a dark UI styled with Tailwind CSS.

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
- Auto-focuses the course name input when a new course is added
- GPA scale breakdown explaining how the calculation works

## Live Demo

[tavion-gpa-calculator.netlify.app](https://tavion-gpa-calculator.netlify.app)

## Screenshot

![Screenshot of the GPA Calculator app](./public/screenshot.png)

## Project Structure

```
src/
├── components/
│   ├── CourseListItem.tsx   # Individual course row with inputs and delete button
│   ├── CoursesList.tsx      # Course list, add/clear controls, and credit summary
│   ├── GpaDisplay.tsx       # Live GPA readout
│   └── ScaleInfo.tsx        # Explanation of the GPA calculation method
├── utils/
│   └── courses.ts           # Pure functions for GPA logic + Course interface
└── App.tsx                  # Root component, state management
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