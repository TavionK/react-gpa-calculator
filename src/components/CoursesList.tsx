import { type Course, getTotalCredits } from "../utils/courses.ts";

interface CourseListProps {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
}

export default function CoursesList({ courses, setCourses }: CourseListProps) {
  function handleAddCourse() {
    console.log("Add Course");
    setCourses([
      ...courses,
      { id: crypto.randomUUID(), course: "", grade: "A", credits: 3 },
    ]);
  }

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center my-4">
        <p className="font-bold text-lg uppercase">Courses</p>
        <p className="small-text bg-gray-800 border border-gray-700 px-2 py-1 rounded-full">
          {courses.length} courses - {getTotalCredits(courses)} credits
        </p>
      </div>
      <section aria-label="Course List">
        <ul>
          {courses.map((course: Course) => (
            <li
              key={course.id}
              className="border border-gray-700 rounded-md bg-gray-900 p-4 flex justify-between items-center"
            >
              <p className="">{course.course}</p>
              <p className="bg-gray-600">{course.grade}</p>
              <p className="bg-gray-600 px-4 rounded-md">{course.credits}</p>
            </li>
          ))}
        </ul>
      </section>
      <button
        onClick={handleAddCourse}
        className="cursor-pointer p-4 rounded-md w-full mt-4 border border-dashed text-gray-700 border-gray-700 hover:text-charged-yellow hover:border-charged-yellow"
      >
        Add Course
      </button>
    </section>
  );
}
