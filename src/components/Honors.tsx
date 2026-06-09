import { calculatePrevGpa, type Semester } from "../utils/courses.ts";
import StatCard from "./StatCard.tsx";

interface HonorsProps {
  semesters: Semester[];
}

function calculateHonors(semesters: Semester[]): string {
  const gpa = Number(calculatePrevGpa(semesters));
  if (gpa === 4.0) return "Summa Cum Laude";
  if (gpa >= 3.8) return "Magna Cum Laude";
  if (gpa >= 3.5) return "Cum Laude";
  return "No Honors";
}

export default function Honors({ semesters }: HonorsProps) {
  return (
    <StatCard
      id="honors-eligibility-heading"
      label="Honors Eligibility"
      value={calculateHonors(semesters)}
      isEmpty={semesters.length === 0}

    />
  );
}
