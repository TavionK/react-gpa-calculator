import { useState } from "react";
import { type Course, type Semester } from "./utils/courses";
import CoursesList from "./components/CoursesList.tsx";
import GpaDisplay from "./components/GpaDisplay.tsx";
import ScaleInfo from "./components/ScaleInfo.tsx";
import Header from "./components/Header.tsx";
import FullGpaDisplay from "./components/FullGpaDisplay.tsx";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);

  return (
    <main className="min-h-dvh max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <Header />
        <GpaDisplay courses={courses} />
      </div>
      <CoursesList
        courses={courses}
        setCourses={setCourses}
        setSemesters={setSemesters}
        semesters={semesters}
      />
      <FullGpaDisplay semesters={semesters} />
      <ScaleInfo />
    </main>
  );
}

export default App;
