import { useState } from "react";
import { type Course } from "./utils/courses";
import CoursesList from "./components/CoursesList.tsx";
import GpaDisplay from "./components/GpaDisplay.tsx";
import ScaleInfo from "./components/ScaleInfo.tsx";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <main className="min-h-dvh max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <div className="sm:basis-3/4">
          <h1 className="text-5xl leading-10 font-bold font-serif italic mb-2">
            Grade Point <br /> <span className="text-blue-500">Average</span>
          </h1>
          <p className="small-text">4.0 Scale - Credit Weighted</p>
        </div>
        <GpaDisplay courses={courses} />
      </div>
      <CoursesList courses={courses} setCourses={setCourses} />
      <ScaleInfo />
    </main>
  );
}

export default App;
