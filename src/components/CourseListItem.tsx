import type { Course } from "../utils/courses";
interface CourseListItemProps {
  course: Course;
}

export default function CourseListItem({ course }: CourseListItemProps) {
  return <p>{course.course}</p>;
}
