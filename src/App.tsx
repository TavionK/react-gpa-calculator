import { useState } from "react";
import { type Course, type Semester } from "./utils/courses";
import CoursesList from "./components/CoursesList.tsx";
import SemesterGpaDisplay from "./components/SemesterGpaDisplay.tsx";
import Faq from "./components/Faq.tsx";
import Header from "./components/Header.tsx";
import GpaTrend from "./components/GpaTrend.tsx";
import OverallGpaDisplay from "./components/OverallGpaDisplay.tsx";
import Honors from "./components/Honors.tsx";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [view, setView] = useState<"main" | "faq">("main");

  if (view === "faq") {
    return (
      <main className="min-h-dvh max-w-3xl mx-auto px-4 py-8">
        <Faq onBack={() => setView("main")} />
      </main>
    );
  }

  return (
    <main className="min-h-dvh max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <Header />
        <div className="flex flex-col items-start sm:items-end gap-2">
          <SemesterGpaDisplay courses={courses} />
          <button
            onClick={() => setView("faq")}
            className="small-text a11y-rings rounded px-2 py-1 text-blue-600 hover:text-blue-800 hover:underline"
          >
            FAQ
          </button>
        </div>
      </div>
      <CoursesList
        courses={courses}
        setCourses={setCourses}
        setSemesters={setSemesters}
        semesters={semesters}
      />
      {semesters.length > 0 && (
        <div>
          <div className="flex justify-between my-4 gap-2">
            <OverallGpaDisplay semesters={semesters} />
            <GpaTrend semesters={semesters} courses={courses} />
          </div>
          <Honors semesters={semesters} />
        </div>
      )}
    </main>
  );
}

export default App;
