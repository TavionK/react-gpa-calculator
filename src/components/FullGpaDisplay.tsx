import { calculateFullGpa, type Semester } from "../utils/courses.ts";

interface FullGpaDisplayProps {
  semesters: Semester[];
}

export default function FullGpaDisplay({ semesters }: FullGpaDisplayProps) {
  return (
    <section className="mt-15 bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4">
      <h2 className="text-lg uppercase font-bold">Overall GPA</h2>
      {semesters.length === 0 ? (
        <p>0.00</p>
      ) : (
        <div className="flex justify-between">
          {calculateFullGpa(semesters)}
        </div>
      )}
    </section>
  );
}
