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
    <li className="grid grid-cols-2 grid-rows-3 md:flex md:flex-wrap gap-2 bg-gray-900 border border-gray-700 py-4 px-8 rounded-md cursor-pointer hover:border-purple-300 transition-colors duration-300 ease-in-out">
      <label
        className="col-span-2 gap-2 flex flex-col small-text md:flex-1"
        htmlFor="course"
      >
        Course Name
        <input
          id="course"
          className="h-10 text-white text-lg bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
          type="text"
          value={course.course}
          placeholder="Course Name"
          onChange={(e): void =>
            updateCourse(course.id, "course", e.target.value)
          }
        />
      </label>
      <label
        className="gap-2 flex flex-col small-text md:flex-2"
        htmlFor="grade"
      >
        Grade
        <select
          id="grade"
          className="h-10 text-white text-lg bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
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
        className="gap-2 flex flex-col small-text md:flex-2"
        htmlFor="credits"
      >
        Credits
        <select
          id="credits"
          className="h-10 text-white text-lg bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow "
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
        className="h-fit row-start-1 col-start-2 place-self-end cursor-pointer border border-transparent hover:border-red-500 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-red-500 focus-visible:text-red-500 rounded-md group transition-colors duration-300 ease-in-out"
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
