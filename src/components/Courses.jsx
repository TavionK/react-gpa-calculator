import React from 'react';
import { CalculatorContext } from "./Calculator.jsx";

export default function Courses() {
  const {courses} = React.useContext(CalculatorContext)

  return (
     courses.length > 0 ? <>
      {courses.map((course, index) => (
        <div className={"flex justify-center items-center gap-5"} key={index}>
          <p>{index}</p>
          <p>{course.course}</p>
          <p>{course.grade}</p>
          <p>{course.credits}</p>
        </div>
      ))}
    </> : <p>No Courses Added</p>
  )
}