export default function Header() {
  return (
    <header className="sm:basis-3/4">
      <h1
        aria-label="Grade point average"
        className="text-5xl leading-10 font-bold font-serif italic mb-2"
      >
        Grade Point <br aria-hidden="true" />
        <span aria-hidden="true" className="text-blue-500">
          Average
        </span>
      </h1>
      <p className="small-text">4.0 Scale - Credit Weighted</p>
    </header>
  );
}
