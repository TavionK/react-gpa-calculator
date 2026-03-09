import type { Course } from "../utils/courses";
import { X } from "lucide-react";
import { deleteCourse } from "../utils/courses";

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
  return (
    <li className="flex flex-wrap gap-4 items-center justify-between bg-gray-900 border border-gray-700 py-4 px-8 rounded-md cursor-pointer hover:border-purple-300 transition-colors duration-300 ease-in-out">
      <label className="gap-2 flex flex-col small-text" htmlFor="course">
        Course Name
        <input
          id="course"
          className="text-white bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
          type="text"
          value={course.course}
          placeholder="Course Name"
          onChange={(e): void =>
            updateCourse(course.id, "course", e.target.value)
          }
        />
      </label>
      <label className="gap-2 flex flex-col small-text" htmlFor="grade">
        Grade
        <select
          id="grade"
          className="text-white bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
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
      <label className="gap-2 flex flex-col small-text" htmlFor="credits">
        Credits
        <select
          id="credits"
          className="text-white bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
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
        onClick={() => {
          setCourses(deleteCourse(courses, course.id));
        }}
      >
        <X
          className={
            "text-gray-700 border border-transparent cursor-pointer hover:border-red-500 hover:text-red-500 transition-colors duration-300 ease-in-out rounded-md size-8"
          }
        />
      </button>
    </li>
  );
}
