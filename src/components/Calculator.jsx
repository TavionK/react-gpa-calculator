import { useState, createContext } from 'react'
import Form from './Form.jsx'
import Courses from './Courses.jsx'

const CalculatorContext = createContext()
export { CalculatorContext }

export default function Calculator({children}) {
  const [courses, setCourses] = useState([])

  return (
    <>
      <CalculatorContext.Provider value={{ courses, setCourses }}>
          {children}
      </CalculatorContext.Provider>
    </>
  )
}