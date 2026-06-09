import { useState } from "react";
import {
  type Course,
  type Semester,
  calculatePrevGpa,
  calculateCompleteGpa,
  calculateHonors,
  compareGpa,
} from "./utils/courses";
import CoursesList from "./components/CoursesList.tsx";
import SemesterGpaDisplay from "./components/SemesterGpaDisplay.tsx";
import Faq from "./components/Faq.tsx";
import Header from "./components/Header.tsx";
import StatCard from "./components/StatCard.tsx";
import { TrendingDown, TrendingUp } from "lucide-react";

function TrendValue({ trend }: { trend: string }) {
  if (trend === "No change") {
    return <span className="text-gray-500">{trend}</span>;
  }
  if (trend.startsWith("-")) {
    return (
      <span className="flex items-center gap-1.5 text-red-500">
        <TrendingDown size={22} aria-hidden="true" />
        {trend}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-green-600">
      <TrendingUp size={22} aria-hidden="true" />
      {trend}
    </span>
  );
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [view, setView] = useState<"main" | "faq">("main");

  const trendIsEmpty = semesters.length === 0 || courses.length === 0;
  const trend = trendIsEmpty
    ? null
    : compareGpa(
        calculatePrevGpa(semesters),
        calculateCompleteGpa(courses, semesters),
      );

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
      <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:mt-8">
        <div className="lg:col-span-2">
          <CoursesList
            courses={courses}
            setCourses={setCourses}
            setSemesters={setSemesters}
            semesters={semesters}
          />
        </div>
        <section
          aria-labelledby="semester-statistics-heading"
          className="mt-8 lg:mt-0 lg:col-span-1"
        >
          <h2
            id="semester-statistics-heading"
            className="mb-4 font-bold text-lg uppercase"
          >
            Semester Statistics
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <StatCard
                id="overall-gpa-heading"
                label="Overall GPA"
                value={calculatePrevGpa(semesters)}
                isEmpty={semesters.length === 0}
                tooltip="Your cumulative GPA across all saved semesters."
              />
              <StatCard
                id="gpa-trend-heading"
                label="GPA Trend"
                value={trend ? <TrendValue trend={trend} /> : null}
                isEmpty={trendIsEmpty}
                tooltip="Shows whether adding your current courses to your saved semesters would raise or lower your overall GPA."
              />
            </div>
            <StatCard
              id="honors-eligibility-heading"
              label="Honors Eligibility"
              value={calculateHonors(semesters)}
              isEmpty={semesters.length === 0}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
