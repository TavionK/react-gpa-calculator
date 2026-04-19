import { useState } from "react";
import { type Course, type Semester } from "./utils/courses";
import CoursesList from "./components/CoursesList.tsx";
import SemesterGpaDisplay from "./components/SemesterGpaDisplay.tsx";
import ScaleInfo from "./components/ScaleInfo.tsx";
import Header from "./components/Header.tsx";
import GpaTrend from "./components/GpaTrend.tsx";
import OverallGpaDisplay from "./components/OverallGpaDisplay.tsx";
import Honors from "./components/Honors.tsx";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);

  return (
    <main className="min-h-dvh max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <Header />
        <SemesterGpaDisplay courses={courses} />
      </div>
      <CoursesList
        courses={courses}
        setCourses={setCourses}
        setSemesters={setSemesters}
        semesters={semesters}
      />
      <div className="flex justify-between my-4 gap-2">
        <OverallGpaDisplay semesters={semesters} />
        <GpaTrend semesters={semesters} courses={courses} />
      </div>
      <Honors semesters={semesters} />
      <ScaleInfo />
    </main>
  );
}

export default App;
