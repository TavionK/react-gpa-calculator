import {
  type Course,
  getTotalCredits,
  getTotalGradePoints,
  type Semester,
} from "../utils/courses.ts";
import CourseListItem from "./CourseListItem.tsx";
import { Plus } from "lucide-react";

interface CourseListProps {
  courses: Course[];
  semesters: Semester[];
  setCourses: (courses: Course[]) => void;
  setSemesters: (semester: Semester[]) => void;
}

export default function CoursesList({
  courses,
  semesters,
  setCourses,
  setSemesters,
}: CourseListProps) {
  function handleSaveSemester() {
    setSemesters([
      ...semesters,
      {
        id: crypto.randomUUID(),
        totalGradePoints: getTotalGradePoints(courses),
        totalCredits: getTotalCredits(courses),
      },
    ]);
    setCourses([]); // Clear courses after saving
  }

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
    <section className="">
      <div className="flex justify-between items-center my-6">
        <p className="font-bold text-lg uppercase">Semester Overview</p>
      </div>
      <section aria-label="Course List">
        {courses.length === 0 ? (
          <div className="bg-gray-200 rounded-2xl p-4 border border-dashed border-gray-400 flex flex-col items-center text-center">
            <p className="text-4xl mt-4">📚</p>
            <p className="text-xl font-bold my-4">
              Ready to calculate your GPA?
            </p>
            <p>
              Add your courses and grades to get a precision analysis of your
              academic standing.
            </p>
            <button
              onClick={handleAddCourse}
              className="w-full my-4 flex justify-center gap-2 cursor-pointer p-4 sm:p-4 sm:w-1/2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
            >
              <Plus />
              Add Your First Course
            </button>
          </div>
        ) : (
          <div>
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
            <div className="flex flex-col sm:flex-row gap-4 my-4">
              <button
                onClick={handleAddCourse}
                className="flex justify-center items-center w-full gap-2 basis-3/4 cursor-pointer p-2 sm:p-4 rounded-md bg-blue-200 hover:bg-blue-400 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
              >
                <Plus />
                Add Course
              </button>
              <button
                onClick={clearAllCourses}
                className="flex justify-center items-center w-full basis-1/4 cursor-pointer rounded-md p-2 sm:p-4 border-2 border-gray-300 text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:border-red-500 focus-visible:text-red-500"
              >
                Clear All
              </button>
            </div>
            <button
              onClick={handleSaveSemester}
              className="cursor-pointer px-2 py-1 bg-blue-500 rounded-md text-white"
            >
              Save Semester
            </button>
          </div>
        )}
      </section>
    </section>
  );
}
