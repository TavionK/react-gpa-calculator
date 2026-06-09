import type { ReactNode } from "react";

export interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

export const faqs: FaqItem[] = [
  {
    id: "gpa-calculation",
    question: "How is my GPA calculated?",
    answer: (
      <>
        <p className="px-4 py-2">
          Each letter grade is converted to a grade point value — for example,
          an A is 4.0, a B+ is 3.3, and so on. Each course's grade points are
          then multiplied by its credit hours to get the weighted grade points
          for that course. Your GPA is the sum of all weighted grade points
          divided by your total credit hours.
        </p>
        <p className="px-4 py-2">
          For example, if you get a B (3.0) in a 3 credit course:
        </p>
        <p className="px-4 py-2">3.0 × 3 = 9.0 grade points</p>
        <p className="px-4 py-2">GPA = total grade points ÷ total credits</p>
      </>
    ),
  },
  {
    id: "grading-scale",
    question: "What is the grading scale?",
    answer: (
      <>
        <p className="px-4 py-2">
          Each letter grade converts to a grade point value used to calculate
          your GPA:
        </p>
        <ul className="px-4 py-2 grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3">
          <li>A = 4.0</li>
          <li>A- = 3.7</li>
          <li>B+ = 3.3</li>
          <li>B = 3.0</li>
          <li>B- = 2.7</li>
          <li>C+ = 2.3</li>
          <li>C = 2.0</li>
          <li>C- = 1.7</li>
          <li>D+ = 1.3</li>
          <li>D = 1.0</li>
          <li>D- = 0.7</li>
          <li>F = 0.0</li>
        </ul>
      </>
    ),
  },
  {
    id: "honors-cutoffs",
    question: "What are the honors eligibility cutoffs?",
    answer: (
      <>
        <p className="px-4 py-2">4.0 = Summa Cum Laude</p>
        <p className="px-4 py-2">3.8 - 3.9 = Magna Cum Laude</p>
        <p className="px-4 py-2">3.5 - 3.7 = Cum Laude</p>
      </>
    ),
  },
  {
    id: "save-semester",
    question: "What happens when I save a semester?",
    answer: (
      <>
        <p className="px-4 py-2">
          Saving a semester rolls your current courses up into a single summary
          — total grade points and total credits — and adds it to your saved
          semesters. Your course list is then cleared so you can start the next
          semester.
        </p>
        <p className="px-4 py-2">
          Once a semester is saved, the individual courses behind it can't be
          recovered or edited — only the summary is kept.
        </p>
      </>
    ),
  },
  {
    id: "data-persistence",
    question: "Will my data be saved if I refresh or close the page?",
    answer: (
      <p className="px-4 py-2">
        No. Everything you enter — your current courses and any saved semesters
        — lives only in this browser tab's memory. Refreshing or closing the
        page clears it, so be sure to note down any results you want to keep.
      </p>
    ),
  },
];
