import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [grades, setGrades] = useState([{course: 'Math', grade: "A", credits: 4}])

  function addCourse() {
    setGrades([...grades, {course: 'Science', grade: "B", credits: 3}])
  }

  function qualityPonintCalculator(grade, credits) {
    if (grade === "A") {
      return 4 * credits
    } else if (grade === "B") {
      return 3 * credits
    } else if (grade === "C") {
      return 2 * credits
    } else if (grade === "D") {
      return 1 * credits
    } else {
      return 0
    }
  }


  return (
    <>
      <button className={"my-4"} onClick={addCourse}>Add Course</button>
      {grades.map((grade) => (
        <div className={"flex justify-center items-center gap-5"} key={grade.course}>
          <p>{grade.course}</p>
          <p>{grade.grade}</p>
          <p>{grade.credits}</p>
        </div>
      ))}
      {grades.map((grade) => (
        <p>{qualityPonintCalculator(grade.grade,grade.credits)}</p>
      ))}
    </>
  )
}

export default App
