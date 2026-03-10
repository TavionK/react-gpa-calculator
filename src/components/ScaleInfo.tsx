export default function ScaleInfo() {
  return (
    <section className="mt-10 bg-gray-900 rounded-md overflow-hidden border border-gray-700">
      <h2 className="text-xl uppercase font-bold bg-gray-800 p-4 mb-2">
        How is my GPA calculated?
      </h2>
      <p className="px-4 py-2">
        Each letter grade is converted to a grade point value — for example, an
        A is 4.0, a B+ is 3.3, and so on. Each course's grade points are then
        multiplied by its credit hours to get the weighted grade points for that
        course. Your GPA is the sum of all weighted grade points divided by your
        total credit hours.
      </p>
      <p className="px-4 py-2">
        For example, if you get a B (3.0) in a 3 credit course:
      </p>
      <p className="px-4 py-2">3.0 × 3 = 9.0 grade points</p>
      <p className="px-4 py-2">GPA = total grade points ÷ total credits</p>
    </section>
  );
}
