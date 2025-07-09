import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {CalculatorContext} from './Calculator.jsx'

export default function Form() {
  const {courses, setCourses} = useContext(CalculatorContext)

  function addCourse(id, course, grade, credits) {
    setCourses([...courses, {id, course, grade, credits}])
  }

  function clearCourses() {
    setCourses([])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted")
    addCourse(uuidv4(), e.target.course.value, e.target.grade.value, Number(e.target.credits.value))
    e.target.reset()
  }

  return (
    <form className={"flex gap-4"} onSubmit={handleSubmit}>
      <input required name={"course"} type="text" placeholder="Course Name" />
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
      </select>
      <input required name={"credits"} type="number" placeholder="Credits Hours" />
      <button type={"submit"}>Add Course</button>
      <button type={"reset"} onClick={clearCourses}>Reset</button>
    </form>
  )

}