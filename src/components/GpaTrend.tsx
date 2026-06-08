import { Tooltip } from "radix-ui";
import {
  calculatePrevGpa,
  calculateCompleteGpa,
  type Course,
  type Semester,
} from "../utils/courses.ts";
import { TrendingDown, TrendingUp, CircleQuestionMark } from "lucide-react";

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
      aria-labelledby="gpa-trend-heading"
      className="w-full bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4 flex flex-col justify-end"
    >
      {trendDirection()}

      <div className="flex items-center gap-1">
        <h3 id="gpa-trend-heading" className="small-text uppercase">
          GPA Trend
        </h3>
        <Tooltip.Provider delayDuration={200}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                type="button"
                aria-label="What is GPA Trend?"
                className="a11y-rings rounded-full text-gray-500 hover:text-gray-700"
              >
                <CircleQuestionMark aria-hidden="true" size={14} />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="TooltipContent rounded-md bg-gray-800 px-3 py-2 text-xs font-normal text-white shadow-md max-w-60"
                sideOffset={5}
              >
                Shows whether adding your current courses to your saved
                semesters would raise or lower your overall GPA.
                <Tooltip.Arrow className="fill-gray-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
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
