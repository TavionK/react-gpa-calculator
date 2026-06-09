import { Tooltip } from "radix-ui";
import { CircleQuestionMark } from "lucide-react";

interface StatCardProps {
  id: string;
  label: string;
  value: React.ReactNode;
  isEmpty: boolean;
  emptyText?: string;
  tooltip?: string;
}

export default function StatCard({
  id,
  label,
  value,
  isEmpty,
  emptyText = "No data available",
  tooltip,
}: StatCardProps) {
  return (
    <section aria-labelledby={id} className="stat-card">
      <div className="flex items-center gap-1.5">
        <h3 id={id} className="small-text text-gray-400">
          {label}
        </h3>
        {tooltip && (
          <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  type="button"
                  aria-label={`What is ${label}?`}
                  className="text-gray-400 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full"
                >
                  <CircleQuestionMark aria-hidden="true" size={13} />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="TooltipContent rounded-md bg-gray-800 px-3 py-2 text-xs font-normal text-white shadow-md max-w-60"
                  sideOffset={5}
                >
                  {tooltip}
                  <Tooltip.Arrow className="fill-gray-800" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-800 leading-none">
        {isEmpty ? (
          <>
            <span aria-hidden="true">—</span>
            <span className="sr-only">{emptyText}</span>
          </>
        ) : (
          value
        )}
      </p>
    </section>
  );
}
