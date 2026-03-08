import { useState } from "react";
import { Course } from "./utils/courses";
import Form from "./components/Form.tsx";


function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
   <main>
     <h1>Hello World</h1>
     <Form setCourses={setCourses}/>
   </main>
  );
}

export default App;
