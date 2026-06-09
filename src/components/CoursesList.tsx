import {
  type Course,
  getTotalCredits,
  getTotalGradePoints,
  type Semester,
} from "../utils/courses.ts";
import CourseListItem from "./CourseListItem.tsx";
import { Plus, GraduationCap } from "lucide-react";

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
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-10 flex flex-col items-center text-center gap-5">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50">
            <GraduationCap size={28} className="text-blue-400" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-lg font-bold text-gray-800">Ready to calculate your GPA?</p>
            <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
              Add your courses and grades to get a precision analysis of your academic standing.
            </p>
          </div>
          <button onClick={handleAddCourse} className="btn-primary sm:w-auto px-6">
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
