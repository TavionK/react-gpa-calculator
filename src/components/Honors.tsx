import { calculatePrevGpa, type Semester } from "../utils/courses.ts";

interface HonorsProps {
  semesters: Semester[];
}

export default function Honors({ semesters }: HonorsProps) {
  function calculateHonors(semesters: Semester[]): string {
    let gpa: number = Number(calculatePrevGpa(semesters));
    if (gpa === 4.0) {
      return "Summa Cum Laude";
    } else if (gpa >= 3.8) {
      return "Magna Cum Laude";
    } else if (gpa >= 3.5) {
      return "Cum Laude";
    } else {
      return "No Honors";
    }
  }

  return (
    <section className="w-full p-4 bg-gray-200 rounded-md overflow-hidden border border-gray-300">
      <h2 className="small-text">Honors Eligibility</h2>
      {semesters.length === 0 ? (
        <p className="text-2xl font-bold">
          <span aria-hidden="true">—</span>
          <span className="sr-only">No semesters saved</span>
        </p>
      ) : (
        <p className="text-2xl font-bold">{calculateHonors(semesters)}</p>
      )}
    </section>
  );
}
