import { Tooltip } from "radix-ui";
import { CircleQuestionMark } from "lucide-react";
import { calculatePrevGpa, type Semester } from "../utils/courses.ts";

interface FullGpaDisplayProps {
  semesters: Semester[];
}

export default function OverallGpaDisplay({ semesters }: FullGpaDisplayProps) {
  const gpaValue = semesters.length === 0 ? "—" : calculatePrevGpa(semesters);

  return (
    <section
      aria-labelledby="overall-gpa-heading"
      className="w-full bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4 flex flex-col justify-end"
    >
      <div className="flex items-center gap-1">
        <h3 id="overall-gpa-heading" className="small-text uppercase">
          Overall GPA
        </h3>
        <Tooltip.Provider delayDuration={200}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                type="button"
                aria-label="What is Overall GPA?"
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
                Your cumulative GPA across all saved semesters.
                <Tooltip.Arrow className="fill-gray-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <p className="text-2xl font-bold">
        {semesters.length === 0 ? (
          <>
            <span aria-hidden="true">—</span>
            <span className="sr-only">No semesters saved</span>
          </>
        ) : (
          gpaValue
        )}
      </p>
    </section>
  );
}
