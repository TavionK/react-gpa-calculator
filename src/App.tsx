import { useState } from "react";
import { type Course } from "./utils/courses";
import CoursesList from "./components/CoursesList.tsx";
import GpaDisplay from "./components/GpaDisplay.tsx";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <main className="max-w-lg mx-auto px-4 mt-10">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold font-serif italic mb-2">
            Grade Point <br />{" "}
            <span className="text-charged-yellow">Average</span>
          </h1>
          <p className="small-text">4.0 Scale - Credit Weighted</p>
        </div>
        <GpaDisplay courses={courses} />
      </div>
      <CoursesList courses={courses} setCourses={setCourses} />
    </main>
  );
}

export default App;
