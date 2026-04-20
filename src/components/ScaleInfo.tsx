import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function ScaleInfo() {
  return (
    <Accordion.Root
      type="single"
      className="w-full bg-gray-200 rounded-md my-8 divide-y divide-gray-300 border border-gray-300"
      collapsible
    >
      <Accordion.Item value="item-1" className="AccordionItem">
        <Accordion.Trigger className="AccordionTrigger">
          <span>How is my GPA calculated?</span>
          <ChevronDownIcon className="AccordionChevron" />
        </Accordion.Trigger>
        <Accordion.Content className="AccordionContent accordion-border">
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
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" className="AccordionItem">
        <Accordion.Trigger className="AccordionTrigger w-full">
          <span>What are the honors eligibility cutoffs?</span>
          <ChevronDownIcon className="AccordionChevron" />
        </Accordion.Trigger>
        <Accordion.Content className="AccordionContent">
          <p className="px-4 py-2">4.0 = Summa Cum Laude</p>
          <p className="px-4 py-2">3.8 - 3.9 = Magna Cum Laude</p>
          <p className="px-4 py-2">3.5 - 3.7 = Cum Laude</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
