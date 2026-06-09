import type { Course } from "../utils/courses";
import { X } from "lucide-react";
import { deleteCourse } from "../utils/courses";
import { useRef, useEffect } from "react";

interface CourseListItemProps {
  course: Course;
  courses: Course[];
  setCourses: (courses: Course[]) => void;
  updateCourse: (
    id: string,
    field: keyof Course,
    value: string | number,
  ) => void;
}

const inputClass =
  "h-10 w-full bg-gray-50 border border-gray-200 rounded-md px-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150";

export default function CourseListItem({
  course,
  updateCourse,
  courses,
  setCourses,
}: CourseListItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <li className="bg-white border border-gray-200 border-l-[3px] border-l-blue-500 rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-end gap-3">
        <label
          className="flex-1 flex flex-col gap-1.5 small-text"
          htmlFor={`course-${course.id}`}
        >
          Course Name
          <input
            ref={inputRef}
            id={`course-${course.id}`}
            className={inputClass}
            type="text"
            value={course.course}
            placeholder="e.g. Calculus II"
            onChange={(e) => updateCourse(course.id, "course", e.target.value)}
          />
        </label>

        <button
          type="button"
          aria-label={course.course ? `Delete ${course.course}` : "Delete course"}
          className="shrink-0 mb-0.5 p-1.5 rounded-md text-gray-400 hover:text-red-400 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1 transition-colors duration-150 cursor-pointer"
          onClick={() => setCourses(deleteCourse(courses, course.id))}
        >
          <X size={16} aria-hidden="true" strokeWidth={3} />
        </button>
      </div>

      <div className="flex gap-3">
        <label
          className="flex-1 flex flex-col gap-1.5 small-text"
          htmlFor={`grade-${course.id}`}
        >
          <span aria-hidden="true">Grade</span>
          <span className="sr-only">Course grade</span>
          <select
            id={`grade-${course.id}`}
            className={inputClass}
            value={course.grade}
            onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
          >
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option>
          </select>
        </label>

        <label
          className="flex-1 flex flex-col gap-1.5 small-text"
          htmlFor={`credits-${course.id}`}
        >
          <span aria-hidden="true">Credits</span>
          <span className="sr-only">Course credits</span>
          <select
            id={`credits-${course.id}`}
            className={inputClass}
            value={course.credits}
            onChange={(e) =>
              updateCourse(course.id, "credits", Number(e.target.value))
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
      </div>
    </li>
  );
}
