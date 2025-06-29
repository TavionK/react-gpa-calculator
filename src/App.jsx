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
    } else if (grade === "A-") {
      return 3.7 * credits
    } else if (grade === "B+") {
      return 3.3 * credits
    }else if (grade === "B") {
      return 3 * credits
    }else if (grade === "B-") {
      return 2.7 * credits
    }else if (grade === "C+") {
      return 2.3 * credits
    } else if (grade === "C") {
      return 2 * credits
    }else if (grade === "C-") {
      return 1.7 * credits
    }else if (grade === "D+") {
      return 1.3 * credits
    } else if (grade === "D") {
      return 1 * credits
    } else {
      return 0
    }
  }

  function getTotalCredits() {
    let totalCredits = 0
    grades.forEach((grade) => {
      totalCredits += grade.credits
    })
    return totalCredits
  }

  function getTotalGradePoints() {
    let totalGradePoints = 0
    grades.forEach((grade) => {
      totalGradePoints += qualityPonintCalculator(grade.grade, grade.credits)
    })
    return totalGradePoints
  }

  function calculateGpa() {
    let totalCredits = getTotalCredits()
    let totalGradePoints = getTotalGradePoints()

    return (totalGradePoints / totalCredits).toFixed(2)

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
      {calculateGpa()}
    </>
  )
}

export default App
