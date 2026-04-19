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
    <section
      aria-label="Honors Eligibility"
      className="w-full p-4 bg-gray-200 rounded-md overflow-hidden border border-gray-300"
    >
      <dl>
        <dt className="small-text">Honors Eligibility</dt>
        {semesters.length === 0 ? (
          <dd
            aria-label="No semesters saved yet"
            className="text-2xl font-bold"
          >
            —
          </dd>
        ) : (
          <dd className="text-2xl font-bold">{calculateHonors(semesters)}</dd>
        )}
      </dl>
    </section>
  );
}
