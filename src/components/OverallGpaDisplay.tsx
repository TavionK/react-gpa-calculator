import { calculatePrevGpa, type Semester } from "../utils/courses.ts";

interface FullGpaDisplayProps {
  semesters: Semester[];
}

export default function OverallGpaDisplay({ semesters }: FullGpaDisplayProps) {
  return (
    <section
      aria-label="Overall GPA summary"
      className="w-full bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4 flex flex-col justify-end"
    >
      <dl>
        <dt className="small-text uppercase">Overall GPA</dt>
        {semesters.length === 0 ? (
          <dd aria-label="No semesters saved" className="text-2xl font-bold">
            —
          </dd>
        ) : (
          <dd className="text-2xl font-bold">{calculatePrevGpa(semesters)}</dd>
        )}
      </dl>
    </section>
  );
}
