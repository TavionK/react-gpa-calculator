import type { Course } from "../utils/courses";
import { calculateGpa } from "../utils/courses";

interface GpaDisplayProps {
  courses: Course[];
}

export default function GpaDisplay({ courses }: GpaDisplayProps) {
  return (
    <div className="flex justify-center mt-8">
      <p className="bg-gray-500 p-4 rounded-md text-lg">
        {calculateGpa(courses)}
      </p>
    </div>
  );
}
