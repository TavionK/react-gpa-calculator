import type { Course } from "../utils/courses";
import { calculateGpa, getTotalCredits } from "../utils/courses";

interface GpaDisplayProps {
  courses: Course[];
}

export default function GpaDisplay({ courses }: GpaDisplayProps) {
  return (
    <div className="bg-blue-500 rounded-md p-6 w-full text-white flex justify-center">
      <div className="flex text-right divide-solid divide-gray-200 divide-x">
        <div className="px-6">
          <p className="small-text">Current GPA</p>
          <p className="text-4xl font-bold">
            {calculateGpa(courses) === "NaN" ? "0.00" : calculateGpa(courses)}
          </p>
        </div>
        <div className="px-6">
          <p className="small-text">Total Credits</p>
          <p className="text-4xl font-bold">
            {getTotalCredits(courses) === 0 ? "0" : getTotalCredits(courses)}
          </p>
        </div>
      </div>
    </div>
  );
}
