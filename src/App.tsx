import { useState } from "react";
import { type Course } from "./utils/courses";
import Form from "./components/Form.tsx";
import CoursesList from "./components/CoursesList.tsx";
import GpaDisplay from "./components/GpaDisplay.tsx";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <main className="max-w-lg mx-auto px-4 mt-10">
      <h1 className="text-3xl">GPA Calculator</h1>
      <GpaDisplay courses={courses} />
      <Form setCourses={setCourses} />
      <hr className="my-4 border-red-500" />
      <CoursesList courses={courses} />
    </main>
  );
}

export default App;
