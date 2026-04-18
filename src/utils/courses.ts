export interface Course {
  id: string;
  course: string;
  grade: string;
  credits: number;
}

export interface Semester {
  id: string;
  totalGradePoints: number;
  totalCredits: number;
}

const CourseGradePointConversion: Record<string, number> = {
  A: 4,
  "A-": 3.7,
  "B+": 3.3,
  B: 3,
  "B-": 2.7,
  "C+": 2.3,
  C: 2,
  "C-": 1.7,
  "D+": 1.3,
  D: 1,
  "D-": 0.7,
  F: 0,
};

export function addCourse(courseArr: Course[], newCourse: Course): Course[] {
  return [...courseArr, newCourse];
}

export function getTotalCredits(courseArr: Course[]): number {
  return courseArr.reduce(
    (total: number, course: Course): number => total + course.credits,
    0,
  );
}

export function getTotalGradePoints(courseArr: Course[]): number {
  let totalGradePoints: number = 0;
  courseArr.forEach((course: Course): void => {
    totalGradePoints +=
      CourseGradePointConversion[course.grade] * course.credits;
  });
  return totalGradePoints;
}

export function calculateGpa(courseArr: Course[]): string {
  let totalCredits: number = getTotalCredits(courseArr);
  let totalGradePoints: number = getTotalGradePoints(courseArr);
  return (totalGradePoints / totalCredits).toFixed(2);
}

export function deleteCourse(courseArr: Course[], courseId: string): Course[] {
  return courseArr.filter((course: Course): boolean => course.id !== courseId);
}

// SEMESTER GPA FUNCTIONS
export function calculateFullGpa(semesters: Semester[]): string {
  let totalCredits: number = 0;
  let totalGradePoints: number = 0;
  for (const semester of semesters) {
    totalGradePoints += semester.totalGradePoints;
    totalCredits += semester.totalCredits;
  }
  console.log(totalCredits, totalGradePoints);
  return (totalGradePoints / totalCredits).toFixed(2);
}

export function calculateSemesterGpa(
  credits: number,
  gradePoints: number,
): string {
  return (gradePoints / credits).toFixed(2);
}
