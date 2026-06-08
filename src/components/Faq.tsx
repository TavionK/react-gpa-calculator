import { Accordion } from "radix-ui";
import { ChevronDownIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

interface FaqProps {
  onBack: () => void;
}

export default function Faq({ onBack }: FaqProps) {
  return (
    <section aria-labelledby="faq-heading" className="w-full">
      <div className="mb-6">
        <button
          onClick={onBack}
          aria-label="Back to calculator"
          className="btn small-text mb-6"
        >
          <ChevronLeftIcon aria-hidden />
          Back
        </button>
        <h2
          id="faq-heading"
          aria-label="Frequently asked questions"
          className="text-5xl leading-10 font-bold font-serif italic mb-2"
        >
          Frequently Asked <br aria-hidden="true" />
          <span aria-hidden="true" className="text-blue-500">
            Questions
          </span>
        </h2>
        <p className="small-text">Common questions</p>
      </div>
      <Accordion.Root
        type="single"
        className="w-full bg-gray-200 rounded-md my-8 divide-y divide-gray-300 border border-gray-300"
        collapsible
      >
        <Accordion.Item value="item-1" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            <span>How is my GPA calculated?</span>
            <ChevronDownIcon aria-hidden className="AccordionChevron" />
          </Accordion.Trigger>
          <Accordion.Content
            className="AccordionContent"
            onAnimationEnd={(e) => {
              if (e.animationName === "slideDown") {
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }
            }}
          >
            <p className="px-4 py-2">
              Each letter grade is converted to a grade point value — for
              example, an A is 4.0, a B+ is 3.3, and so on. Each course's grade
              points are then multiplied by its credit hours to get the weighted
              grade points for that course. Your GPA is the sum of all weighted
              grade points divided by your total credit hours.
            </p>
            <p className="px-4 py-2">
              For example, if you get a B (3.0) in a 3 credit course:
            </p>
            <p className="px-4 py-2">3.0 × 3 = 9.0 grade points</p>
            <p className="px-4 py-2">
              GPA = total grade points ÷ total credits
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            <span>What is the grading scale?</span>
            <ChevronDownIcon aria-hidden className="AccordionChevron" />
          </Accordion.Trigger>
          <Accordion.Content
            className="AccordionContent"
            onAnimationEnd={(e) => {
              if (e.animationName === "slideDown") {
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }
            }}
          >
            <p className="px-4 py-2">
              Each letter grade converts to a grade point value used to
              calculate your GPA:
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
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            <span>What are the honors eligibility cutoffs?</span>
            <ChevronDownIcon aria-hidden className="AccordionChevron" />
          </Accordion.Trigger>
          <Accordion.Content
            className="AccordionContent"
            onAnimationEnd={(e) => {
              if (e.animationName === "slideDown") {
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }
            }}
          >
            <p className="px-4 py-2">4.0 = Summa Cum Laude</p>
            <p className="px-4 py-2">3.8 - 3.9 = Magna Cum Laude</p>
            <p className="px-4 py-2">3.5 - 3.7 = Cum Laude</p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            <span>What happens when I save a semester?</span>
            <ChevronDownIcon aria-hidden className="AccordionChevron" />
          </Accordion.Trigger>
          <Accordion.Content
            className="AccordionContent"
            onAnimationEnd={(e) => {
              if (e.animationName === "slideDown") {
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }
            }}
          >
            <p className="px-4 py-2">
              Saving a semester rolls your current courses up into a single
              summary — total grade points and total credits — and adds it to
              your saved semesters. Your course list is then cleared so you can
              start the next semester.
            </p>
            <p className="px-4 py-2">
              Once a semester is saved, the individual courses behind it can't
              be recovered or edited — only the summary is kept.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-5" className="AccordionItem">
          <Accordion.Trigger className="AccordionTrigger">
            <span>
              Will my data be saved if I refresh or close the page?
            </span>
            <ChevronDownIcon aria-hidden className="AccordionChevron" />
          </Accordion.Trigger>
          <Accordion.Content
            className="AccordionContent"
            onAnimationEnd={(e) => {
              if (e.animationName === "slideDown") {
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }
            }}
          >
            <p className="px-4 py-2">
              No. Everything you enter — your current courses and any saved
              semesters — lives only in this browser tab's memory. Refreshing
              or closing the page clears it, so be sure to note down any
              results you want to keep.
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}
