import type { Course } from "../utils/courses";
interface CourseListItemProps {
  course: Course;
}

export default function CourseListItem({ course }: CourseListItemProps) {
  return (
    <li className="flex justify-between" key={course.id}>
      <p>{course.course}</p>
      <p>{course.grade}</p>
      <p>{course.credits}</p>
    </li>
  );
}
