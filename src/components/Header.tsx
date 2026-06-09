import { CircleHelp } from "lucide-react";

interface HeaderProps {
  onFaqClick: () => void;
}

export default function Header({ onFaqClick }: HeaderProps) {
  return (
    <header className="lg:basis-2/3">
      <h1
        aria-label="Grade point average"
        className="text-5xl leading-10 font-bold font-serif italic mb-2"
      >
        Grade Point <br aria-hidden="true" className="lg:hidden" />
        <span aria-hidden="true" className="text-blue-500">
          Average
        </span>
      </h1>
      <p className="small-text">4.0 Scale - Credit Weighted</p>
      <nav aria-label="App navigation" className="mt-4">
        <button onClick={onFaqClick} className="btn-nav">
          <CircleHelp aria-hidden="true" size={16} />
          FAQ
        </button>
      </nav>
    </header>
  );
}
