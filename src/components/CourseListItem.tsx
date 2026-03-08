import type { Course } from "../utils/courses";
interface CourseListItemProps {
  course: Course;
}

export default function CourseListItem({ course }: CourseListItemProps) {
  return (
    <tr>
      <td className="border border-gray-300">{course.course}</td>
      <td className="border border-gray-300">{course.grade}</td>
      <td className="border border-gray-300">{course.credits}</td>
    </tr>
  );
}
