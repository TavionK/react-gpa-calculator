import {
  calculatePrevGpa,
  calculateCompleteGpa,
  type Course,
  type Semester,
} from "../utils/courses.ts";

interface GpaTrendProps {
  semesters: Semester[];
  courses: Course[];
}
export default function GpaTrend({ semesters, courses }: GpaTrendProps) {
  function compareGpa(overallGpa: string, newGpa: string): string {
    // console.log(overallGpa, newGpa);
    return (Number(newGpa) - Number(overallGpa)).toFixed(2);
  }

  return (
    <section className="w-full mt-15 bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4">
      <h2 className="small-text uppercase">GPA Trend</h2>
      {semesters.length === 0 || courses.length === 0 ? (
        <p>-</p>
      ) : (
        <div className="flex justify-between text-2xl font-bold">
          {compareGpa(
            calculatePrevGpa(semesters),
            calculateCompleteGpa(courses, semesters),
          )}
        </div>
      )}
    </section>
  );
}
