import { type Course, getTotalCredits } from "../utils/courses.ts";
import CourseListItem from "./CourseListItem.tsx";
import { Plus } from "lucide-react";

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

  function clearAllCourses(): void {
    setCourses([]);
  }

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center my-4">
        <p className="font-bold text-lg uppercase">Courses</p>
        <p className="small-text bg-blue-200 px-2 py-1 rounded-full">
          {courses.length} courses - {getTotalCredits(courses)} credits
        </p>
      </div>
      <section aria-label="Course List">
        {courses.length === 0 ? (
          <p className="text-center text-gray-600  my-10 leading-8">
            <span className="text-4xl">📚</span>
            <br />
            No courses added. Add one to get started.
          </p>
        ) : (
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
        )}
      </section>
      <div className="flex gap-4 my-4">
        <button
          onClick={handleAddCourse}
          className="flex justify-center gap-2 basis-3/4 cursor-pointer p-2 sm:p-4 rounded-md bg-blue-200 hover:bg-blue-400 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
        >
          <Plus />
          Add Course
        </button>
        <button
          onClick={clearAllCourses}
          className="basis-1/4 cursor-pointer rounded-md p-2 sm:p-4 border-2 border-gray-300 text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:border-red-500 focus-visible:text-red-500"
        >
          Clear All
        </button>
      </div>
    </section>
  );
}
