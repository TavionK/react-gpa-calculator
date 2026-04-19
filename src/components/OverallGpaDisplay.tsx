import { calculatePrevGpa, type Semester } from "../utils/courses.ts";

interface FullGpaDisplayProps {
  semesters: Semester[];
}

export default function OverallGpaDisplay({ semesters }: FullGpaDisplayProps) {
  return (
    <section className="w-full bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4 flex flex-col justify-end">
      <h2 className="small-text uppercase">Overall GPA</h2>
      {semesters.length === 0 ? (
        <p className="text-2xl font-bold">—</p>
      ) : (
        <p className="text-2xl font-bold">{calculatePrevGpa(semesters)}</p>
      )}
    </section>
  );
}
