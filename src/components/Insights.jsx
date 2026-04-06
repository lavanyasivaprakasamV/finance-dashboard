export default function Insights({ transactions }) {
  let categories = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    }
  });

  let top = Object.keys(categories).reduce(
    (a, b) => (categories[a] > categories[b] ? a : b),
    "",
  );

  return (
    <section className="insights">
      <h2>Insights</h2>
      <p>{top ? `Highest spending category: ${top}` : "No expense data"}</p>
    </section>
  );
}
