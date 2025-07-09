import { useState, createContext } from "react";

const CalculatorContext = createContext();
export { CalculatorContext };

export default function Calculator({ children }) {
  const [courses, setCourses] = useState([]);

  return (
    <>
      <CalculatorContext.Provider value={{ courses, setCourses }}>
        {children}
      </CalculatorContext.Provider>
    </>
  );
}
