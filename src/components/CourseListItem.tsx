import type { Course } from "../utils/courses";
interface CourseListItemProps {
  course: Course;
}

export default function CourseListItem({ course }: CourseListItemProps) {
  return (
    <tr className="flex justify-between" key={course.id}>
      <td>{course.course}</td>
      <td>{course.grade}</td>
      <td>{course.credits}</td>
    </tr>
  );
}
