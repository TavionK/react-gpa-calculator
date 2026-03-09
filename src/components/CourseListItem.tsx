import type { Course } from "../utils/courses";

interface CourseListItemProps {
  course: Course;
  updateCourse: (
    id: string,
    field: keyof Course,
    value: string | number,
  ) => void;
}

export default function CourseListItem({
  course,
  updateCourse,
}: CourseListItemProps) {
  return (
    <li className="flex flex-wrap gap-4 items-center justify-between bg-gray-900 border border-gray-700 p-4 rounded-md cursor-pointer hover:border-purple-300 transition-colors duration-300 ease-in-out">
      <input
        className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
        type="text"
        value={course.course}
        placeholder="Course Name"
        onChange={(e): void =>
          updateCourse(course.id, "course", e.target.value)
        }
      />
      <select
        className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
        name=""
        value={course.grade}
        onChange={(e): void => updateCourse(course.id, "grade", e.target.value)}
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
      <select
        className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-charged-yellow"
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
    </li>
  );
}
