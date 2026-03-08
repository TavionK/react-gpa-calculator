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
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Credits</th>
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
