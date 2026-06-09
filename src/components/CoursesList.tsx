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
    <section aria-labelledby="semester-overview-heading">
      <h2
        id="semester-overview-heading"
        className="mt-8 mb-4 font-bold text-lg uppercase lg:mt-0"
      >
        Semester Overview
      </h2>

      {courses.length === 0 ? (
        <div className="bg-gray-200 rounded-2xl p-4 border border-dashed border-gray-400 flex flex-col items-center text-center">
          <p className="text-4xl mt-4" aria-hidden="true">
            📚
          </p>
          <p className="text-xl font-bold my-4">Ready to calculate your GPA?</p>
          <p>
            Add your courses and grades to get a precision analysis of your
            academic standing.
          </p>
          <button
            onClick={handleAddCourse}
            className="btn-primary sm:w-1/2 my-4"
          >
            <Plus size={16} aria-hidden="true" />
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
          <div className="flex flex-col gap-2 mt-4 lg:flex-row">
            <button onClick={handleAddCourse} className="btn-primary lg:basis-2/3">
              <Plus size={16} aria-hidden="true" />
              Add Course
            </button>
            <button onClick={handleSaveSemester} className="btn-secondary lg:basis-1/3">
              Save Semester
            </button>
          </div>
          <div className="flex justify-end mt-3">
            <button onClick={clearAllCourses} className="btn-ghost-danger">
              Clear Courses
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
