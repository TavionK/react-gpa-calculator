import {
  calculatePrevGpa,
  calculateCompleteGpa,
  type Course,
  type Semester,
} from "../utils/courses.ts";
import { TrendingDown, TrendingUp } from "lucide-react";

interface GpaTrendProps {
  semesters: Semester[];
  courses: Course[];
}
export default function GpaTrend({ semesters, courses }: GpaTrendProps) {
  function compareGpa(overallGpa: string, newGpa: string): string {
    let trend: string = String(
      (Number(newGpa) - Number(overallGpa)).toFixed(2),
    );

    if (trend === "0.00") {
      return "No change";
    } else if (trend.startsWith("-")) {
      return trend;
    } else {
      return `+${trend}`;
    }
  }

  function trendDirection() {
    let comparison: string = compareGpa(
      calculatePrevGpa(semesters),
      calculateCompleteGpa(courses, semesters),
    );
    if (courses.length > 0 && semesters.length > 0) {
      if (comparison.startsWith("-")) {
        return <TrendingDown aria-hidden="true" color="red" />;
      } else if (comparison.startsWith("+")) {
        return <TrendingUp aria-hidden="true" color="green" />;
      }
    } else {
      return;
    }
  }

  return (
    <section
      aria-label="GPA trend"
      className="w-full bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4 flex flex-col justify-end"
    >
      {trendDirection()}

      <p className="small-text uppercase">GPA Trend</p>
      {semesters.length === 0 || courses.length === 0 ? (
        <p className="font-bold text-2xl">
          <span aria-hidden="true">—</span>
          <span className="sr-only">No trend data available</span>
        </p>
      ) : (
        <p className="text-2xl font-bold">
          {compareGpa(
            calculatePrevGpa(semesters),
            calculateCompleteGpa(courses, semesters),
          )}
        </p>
      )}
    </section>
  );
}
