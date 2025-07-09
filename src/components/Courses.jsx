import React from 'react';
import { CalculatorContext } from "./Calculator.jsx";

export default function Courses() {
  const {courses, setCourses} = React.useContext(CalculatorContext)

  // function removeCourse(index){
  //   setCourses((currentCourses) =>{
  //     currentCourses.filter((course) => course. !== key)
  //   })
  // }
  return (
     courses.length > 0 ? <>
      {courses.map((course, index) => (
        <div className={"flex justify-center items-center gap-5"} key={course.id}>
          <p>{course.id}</p>
          <p>{course.course}</p>
          <p>{course.grade}</p>
          <p>{course.credits}</p>
          <button>Remove</button>
        </div>
      ))}
    </> : <p>No Courses Added</p>
  )
}