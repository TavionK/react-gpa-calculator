import { calculatePrevGpa, type Semester } from "../utils/courses.ts";
import StatCard from "./StatCard.tsx";

interface FullGpaDisplayProps {
  semesters: Semester[];
}

export default function OverallGpaDisplay({ semesters }: FullGpaDisplayProps) {
  return (
    <StatCard
      id="overall-gpa-heading"
      label="Overall GPA"
      value={calculatePrevGpa(semesters)}
      isEmpty={semesters.length === 0}

      tooltip="Your cumulative GPA across all saved semesters."
    />
  );
}
