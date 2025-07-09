import React from "react";
import { CalculatorContext } from "./Calculator.jsx";

export default function Gpa() {
  const { courses } = React.useContext(CalculatorContext);

  function qualityPointCalculator(grade, credits) {
    if (grade === "A") {
      return 4 * credits;
    } else if (grade === "A-") {
      return 3.7 * credits;
    } else if (grade === "B+") {
      return 3.3 * credits;
    } else if (grade === "B") {
      return 3 * credits;
    } else if (grade === "B-") {
      return 2.7 * credits;
    } else if (grade === "C+") {
      return 2.3 * credits;
    } else if (grade === "C") {
      return 2 * credits;
    } else if (grade === "C-") {
      return 1.7 * credits;
    } else if (grade === "D+") {
      return 1.3 * credits;
    } else if (grade === "D") {
      return 1 * credits;
    } else {
      return 0;
    }
  }

  function getTotalCredits() {
    let totalCredits = 0;
    courses.forEach((grade) => {
      totalCredits += grade.credits;
    });
    return totalCredits;
  }

  function getTotalGradePoints() {
    let totalGradePoints = 0;
    courses.forEach((grade) => {
      totalGradePoints += qualityPointCalculator(grade.grade, grade.credits);
    });
    return totalGradePoints;
  }

  function calculateGpa() {
    let totalCredits = getTotalCredits();
    let totalGradePoints = getTotalGradePoints();

    return (totalGradePoints / totalCredits).toFixed(2);
  }

  return <>{courses.length > 0 ? calculateGpa() : null}</>;
}
