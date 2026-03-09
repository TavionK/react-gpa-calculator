import { type Course, getTotalCredits } from "../utils/courses.ts";
import CourseListItem from "./CourseListItem.tsx";

interface CourseListProps {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
}

export default function CoursesList({ courses, setCourses }: CourseListProps) {
  function handleAddCourse() {
    setCourses([
      ...courses,
      { id: crypto.randomUUID(), course: "", grade: "A", credits: 3 },
    ]);
  }

  function updateCourse(
    id: string,
    field: keyof Course,
    value: string | number,
  ): void {
    setCourses(
      courses.map(
        (course: Course): Course =>
          course.id === id ? { ...course, [field]: value } : course,
      ),
    );
  }

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center my-4">
        <p className="font-bold text-lg uppercase">Courses</p>
        <p className="small-text bg-gray-800 border border-gray-700 px-2 py-1 rounded-full">
          {courses.length} courses - {getTotalCredits(courses)} credits
        </p>
      </div>
      <section aria-label="Course List">
        <ul className="flex flex-col gap-4">
          {courses.map((course: Course) => (
            <CourseListItem
              key={course.id}
              updateCourse={updateCourse}
              course={course}
              courses={courses}
              setCourses={setCourses}
            />
          ))}
        </ul>
      </section>
      <button
        onClick={handleAddCourse}
        className="cursor-pointer p-4 rounded-md w-full mt-4 border border-dashed text-gray-700 border-gray-700 hover:text-charged-yellow hover:border-charged-yellow transition-colors duration-300 ease-in-out"
      >
        Add Course
      </button>
    </section>
  );
}
