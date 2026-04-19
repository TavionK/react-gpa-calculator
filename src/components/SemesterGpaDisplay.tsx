import type { Course } from "../utils/courses";
import { calculateSemesterGpa, getTotalCredits } from "../utils/courses";

interface GpaDisplayProps {
  courses: Course[];
}

export default function SemesterGpaDisplay({ courses }: GpaDisplayProps) {
  return (
    <div className="bg-blue-500 rounded-md p-6 w-full text-white flex justify-center">
      <div className="flex text-right divide-solid divide-gray-200 divide-x">
        <div className="px-6 text-left basis-2/3">
          <p className="small-text sm:text-nowrap">Current Semester GPA</p>
          <p className="text-4xl font-bold">
            {calculateSemesterGpa(courses) === "NaN"
              ? "0.00"
              : calculateSemesterGpa(courses)}
          </p>
        </div>
        <div className="px-6 basis-1/3">
          <p className="small-text sm:text-nowrap">Total Credits</p>
          <p className="text-4xl font-bold">
            {getTotalCredits(courses) === 0 ? "0" : getTotalCredits(courses)}
          </p>
        </div>
      </div>
    </div>
  );
}
