import { Accordion } from "radix-ui";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { faqs } from "../data/faqs.tsx";

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
          className="btn-back mb-6"
        >
          <ChevronLeft aria-hidden="true" />
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
        {faqs.map((faq) => (
          <Accordion.Item key={faq.id} value={faq.id} className="AccordionItem">
            <Accordion.Trigger className="AccordionTrigger">
              <span>{faq.question}</span>
              <ChevronDown
                aria-hidden="true"
                className="AccordionChevron"
                strokeWidth={1.5}
              />
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
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
