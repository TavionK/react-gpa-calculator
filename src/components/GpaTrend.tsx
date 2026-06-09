import {
  calculatePrevGpa,
  calculateCompleteGpa,
  type Course,
  type Semester,
} from "../utils/courses.ts";
import { TrendingDown, TrendingUp } from "lucide-react";
import StatCard from "./StatCard.tsx";

interface GpaTrendProps {
  semesters: Semester[];
  courses: Course[];
}

function compareGpa(overallGpa: string, newGpa: string): string {
  const trend = String((Number(newGpa) - Number(overallGpa)).toFixed(2));
  if (trend === "0.00") return "No change";
  return trend.startsWith("-") ? trend : `+${trend}`;
}

function TrendValue({ trend }: { trend: string }) {
  if (trend === "No change") {
    return <span className="text-gray-500">{trend}</span>;
  }
  if (trend.startsWith("-")) {
    return (
      <span className="flex items-center gap-1.5 text-red-500">
        <TrendingDown size={22} aria-hidden="true" />
        {trend}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-green-600">
      <TrendingUp size={22} aria-hidden="true" />
      {trend}
    </span>
  );
}

export default function GpaTrend({ semesters, courses }: GpaTrendProps) {
  const isEmpty = semesters.length === 0 || courses.length === 0;
  const trend = isEmpty
    ? null
    : compareGpa(
        calculatePrevGpa(semesters),
        calculateCompleteGpa(courses, semesters),
      );

  return (
    <StatCard
      id="gpa-trend-heading"
      label="GPA Trend"
      value={trend ? <TrendValue trend={trend} /> : null}
      isEmpty={isEmpty}

      tooltip="Shows whether adding your current courses to your saved semesters would raise or lower your overall GPA."
    />
  );
}
