import { calculateSemesterGpa, type Semester } from "../utils/courses.ts";

interface PreviousSemesterProps {
  prevSemester: Semester[];
}

export default function PreviousSemester({
  prevSemester,
}: PreviousSemesterProps) {
  return (
    <section className="mt-15 bg-gray-200 rounded-md overflow-hidden border border-gray-300 p-4">
      <h2 className="text-lg uppercase font-bold">Previous Semester</h2>
      {prevSemester.length === 0 ? (
        <p>No Data</p>
      ) : (
        prevSemester.map((semester: Semester) => (
          <div key={semester.id} className="flex justify-between">
            GPA:{" "}
            {calculateSemesterGpa(
              semester.totalCredits,
              semester.totalGradePoints,
            )}
          </div>
        ))
      )}
    </section>
  );
}
