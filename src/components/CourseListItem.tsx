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
    <li className="relative flex flex-wrap gap-2 bg-white py-4 pt-10 px-8 rounded-md cursor-pointer hover:border-purple-300 transition-colors duration-300 ease-in-out">
      <label
        className="w-full gap-2 flex flex-col small-text sm:w-auto sm:flex-1"
        htmlFor={`course-${course.id}`}
      >
        Course Name
        <input
          ref={inputRef}
          id={`course-${course.id}`}
          className="h-10 text-lg bg-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={course.course}
          placeholder="Course Name"
          onChange={(e): void =>
            updateCourse(course.id, "course", e.target.value)
          }
        />
      </label>
      <label
        className="flex-1 gap-2 flex flex-col small-text sm:flex-2"
        htmlFor={`grade-${course.id}`}
      >
        Grade
        <select
          id={`grade-${course.id}`}
          className="h-10 text-lg bg-gray-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name=""
          value={course.grade}
          onChange={(e): void =>
            updateCourse(course.id, "grade", e.target.value)
          }
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
        className="flex-1 gap-2 flex flex-col small-text sm:flex-2"
        htmlFor={`credits-${course.id}`}
      >
        Credits
        <select
          id={`credits-${course.id}`}
          className="h-10 text-lg bg-gray-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={course.credits}
          onChange={(e): void =>
            updateCourse(course.id, "credits", Number(e.target.value))
          }
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <button
        type="button"
        aria-label={`Delete ${course.course} course`}
        className="absolute top-2 right-2 cursor-pointer border border-transparent hover:border-red-500 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-red-500 focus-visible:text-red-500 rounded-md group transition-colors duration-300 ease-in-out"
        onClick={() => {
          setCourses(deleteCourse(courses, course.id));
        }}
      >
        <X
          className={
            "text-gray-700 group-hover:text-red-500 group-focus-visible:text-red-500 border border-transparent rounded-md size-8"
          }
        />
      </button>
    </li>
  );
}
