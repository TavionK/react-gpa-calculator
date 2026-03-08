import type { Course } from "../utils/courses.ts";

interface CourseListProps {
  courses: Course[];
}

export default function CoursesList({ courses }: CourseListProps) {
  return (
    <>
      {courses.length === 0 ? (
        <p className="text-center">No Courses Added</p>
      ) : (
        <p>do other stuff</p>
      )}
    </>
  );
}
