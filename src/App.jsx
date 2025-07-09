import "./App.css";
import Calculator from "./components/Calculator.jsx";
import Courses from "./components/Courses.jsx";
import Form from "./components/Form.jsx";
import Gpa from "./components/Gpa.jsx";

function App() {
  return (
    <>
      <h1>GPA Calculator</h1>
      <Calculator>
        <Form />
        <Courses />
        <Gpa />
      </Calculator>
    </>
  );
}

export default App;
