import type { Course } from "../utils/courses";
import { calculateSemesterGpa, getTotalCredits } from "../utils/courses";

interface GpaDisplayProps {
  courses: Course[];
}

export default function SemesterGpaDisplay({ courses }: GpaDisplayProps) {
  const semesterGpa: string = calculateSemesterGpa(courses);
  const totalCredits: number = getTotalCredits(courses);
  return (
    <section
      aria-live="polite"
      aria-atomic="true"
      aria-labelledby="current-semester-summary-heading"
      className="bg-blue-500 rounded-md p-6 w-full text-white flex justify-center shadow-sm"
    >
      <h2 id="current-semester-summary-heading" className="sr-only">
        Current semester summary
      </h2>
      <div className="flex w-full text-right divide-solid divide-gray-200 divide-x">
        <div className="px-6 text-left basis-2/3">
          <h3 className="small-text">Current Semester GPA</h3>
          <p className="text-4xl font-bold">
            {semesterGpa === "NaN" ? "0.00" : semesterGpa}
          </p>
        </div>
        <div className="px-6 basis-1/3">
          <h3 className="small-text">Total Credits</h3>
          <p className="text-4xl font-bold">
            {totalCredits === 0 ? "0" : totalCredits}
          </p>
        </div>
      </div>
    </section>
  );
}
