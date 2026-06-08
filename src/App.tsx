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
    <main className="min-h-dvh max-w-3xl lg:max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <Header onFaqClick={() => setView("faq")} />
        <div className="w-full lg:basis-1/3">
          <SemesterGpaDisplay courses={courses} />
        </div>
      </div>
      <div className="lg:flex lg:items-start lg:gap-8 lg:mt-8">
        <div className="lg:basis-2/3">
          <CoursesList
            courses={courses}
            setCourses={setCourses}
            setSemesters={setSemesters}
            semesters={semesters}
          />
        </div>
        <section
          aria-label="Semester statistics"
          className="hidden lg:flex lg:basis-1/3 lg:flex-col lg:gap-4 lg:mt-8"
        >
          {semesters.length > 0 && (
            <>
              <div className="flex gap-2">
                <OverallGpaDisplay semesters={semesters} />
                <GpaTrend semesters={semesters} courses={courses} />
              </div>
              <Honors semesters={semesters} />
            </>
          )}
        </section>
      </div>
      {semesters.length > 0 && (
        <div className="lg:hidden">
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
