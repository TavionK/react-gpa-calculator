import type { Course } from "../utils/courses";
import { calculateGpa } from "../utils/courses";

interface GpaDisplayProps {
  courses: Course[];
}

export default function GpaDisplay({ courses }: GpaDisplayProps) {
  return <p>{calculateGpa(courses)}</p>;
}
