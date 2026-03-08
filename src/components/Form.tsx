import { type Course } from "../utils/courses";

interface FormProps {
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}
export default function Form({setCourses}: FormProps["setCourses"]) {

  return (
    <form className={"flex gap-4"} onSubmit={handleSubmit}>
      <input
        required
        name={"course"}
        type="text"
        placeholder="Course Name"
        ref={firstInputRef}
      />
      <select required name="grade" id="">
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
        name={"credits"}
        type="number"
        min="0"
        placeholder="Credits Hours"
      />
      <button type={"submit"}>Add Course</button>
      <button type={"reset"} onClick={clearCourses}>
        Reset
      </button>
    </form>
  );
}
