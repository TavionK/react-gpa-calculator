import React from 'react';
import { FormContext } from "../App.jsx";

export default function Courses() {
  const {grades} = React.useContext(FormContext)

  return (
     grades.length > 0 ? <>
      {grades.map((grade, index) => (
        <div className={"flex justify-center items-center gap-5"} key={index}>
          <p>{index}</p>
          <p>{grade.course}</p>
          <p>{grade.grade}</p>
          <p>{grade.credits}</p>
        </div>
      ))}
    </> : <p>No Courses Added</p>
  )
}