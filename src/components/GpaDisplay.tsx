import type { Course } from "../utils/courses";
import { calculateGpa } from "../utils/courses";

interface GpaDisplayProps {
  courses: Course[];
}

export default function GpaDisplay({ courses }: GpaDisplayProps) {
  return (
    <div className="bg-gray-900 rounded-md p-6 text-right border border-gray-700">
      <p className="small-text">Current GPA</p>
      <p className="text-3xl font-bold text-charged-yellow">
        {calculateGpa(courses) === "NaN" ? "—" : calculateGpa(courses)}
      </p>
      <p className="small-text">
        {courses.length === 0 ? "Add Courses" : "Courses added"}
      </p>
    </div>
  );
}
