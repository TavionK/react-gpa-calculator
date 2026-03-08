import { useState } from "react";
import { type Course } from "./utils/courses";
import Form from "./components/Form.tsx";
import CoursesList from "./components/CoursesList.tsx";


function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <main className="max-w-lg mx-auto px-4 mt-10">
      <h1 className="text-3xl font-serif">GPA Calculator</h1>
      <Form setCourses={setCourses} />
      <CoursesList courses={courses} />
    </main>
  );
}

export default App;
