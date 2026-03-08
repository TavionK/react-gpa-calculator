import { type Course, addCourse } from "../utils/courses";
import { type Dispatch, type SetStateAction, useState } from "react";

interface FormProps {
  setCourses: Dispatch<SetStateAction<Course[]>>;
}
export default function Form({ setCourses }: FormProps) {
  const [courseName, setName] = useState("");
  const [courseGrade, setGrade] = useState("A");
  const [courseCreditHours, setCreditHours] = useState(0);

  return (
    <form
      className={"flex gap-4"}
      onSubmit={(e) => {
        e.preventDefault();
        const newCourse = {
          id: crypto.randomUUID(),
          course: courseName,
          grade: courseGrade,
          credits: courseCreditHours,
        };
        setCourses((prevCourses: Course[]): Course[] =>
          addCourse(prevCourses, newCourse),
        );
      }}
    >
      <input
        required
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        required
        value={courseGrade}
        onChange={(e) => setGrade(e.target.value)}
      >
        <option disabled>-- Select a Grade --</option>
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
      <input
        required
        type="number"
        min="0"
        placeholder="Credit Hours"
        value={courseCreditHours}
        onChange={(e) => setCreditHours(e.target.valueAsNumber)}
      />
      <button type={"submit"} className="bg-gray-700 px-2 py-1 rounded-md">
        Add Course
      </button>
    </form>
  );
}
