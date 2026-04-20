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
      aria-label="Current semester summary"
      className="bg-blue-500 rounded-md p-6 w-full text-white flex justify-center"
    >
      <dl className="flex text-right divide-solid divide-gray-200 divide-x">
        <div className="px-6 text-left basis-2/3">
          <dt className="small-text text-nowrap">Current Semester GPA</dt>
          <dd className="text-4xl font-bold">
            {semesterGpa === "NaN" ? "0.00" : semesterGpa}
          </dd>
        </div>
        <div className="px-6 basis-1/3">
          <dt className="small-text text-nowrap">Total Credits</dt>
          <dd className="text-4xl font-bold">
            {totalCredits === 0 ? "0" : totalCredits}
          </dd>
        </div>
      </dl>
    </section>
  );
}
