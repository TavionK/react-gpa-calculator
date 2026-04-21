import { calculatePrevGpa, type Semester } from "../utils/courses.ts";

interface FullGpaDisplayProps {
  semesters: Semester[];
}

export default function OverallGpaDisplay({ semesters }: FullGpaDisplayProps) {
  const gpaValue = semesters.length === 0 ? "—" : calculatePrevGpa(semesters);

  return (
    <section className="w-full bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4 flex flex-col justify-end">
      <h2 className="small-text uppercase">Overall GPA</h2>
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
