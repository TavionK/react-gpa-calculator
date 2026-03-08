import { useContext } from "react";
import { CalculatorContext } from "./Calculator.js";

export default function Courses() {
  const { courses, setCourses } = useContext(CalculatorContext);

  function removeCourse(id) {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id),
    );
  }
  return courses.length > 0 ? (
    <>
      {courses.map((course, index) => (
        <div
          className={"flex justify-center items-center gap-5"}
          key={course.id}
        >
          <p>{index}</p>
          <p>{course.course}</p>
          <p>{course.grade}</p>
          <p>{course.credits}</p>
          <button onClick={() => removeCourse(course.id)}>Remove</button>
        </div>
      ))}
    </>
  ) : (
    <p>No Courses Added</p>
  );
}
