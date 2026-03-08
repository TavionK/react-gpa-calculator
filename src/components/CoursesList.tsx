import type { Course } from "../utils/courses.ts";
import CourseListItem from "./CourseListItem.tsx";

interface CourseListProps {
  courses: Course[];
}

export default function CoursesList({ courses }: CourseListProps) {
  return (
    <>
      {courses.length === 0 ? (
        <p className="text-center mt-8">No Courses Added</p>
      ) : (
        <table className="border-collapse border border-gray-400 table-auto w-full">
          <thead>
            <tr>
              <th className="border border-gray-300">Course</th>
              <th className="border border-gray-300">Grade</th>
              <th className="border border-gray-300">Credits</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course: Course) => (
              <CourseListItem course={course} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
