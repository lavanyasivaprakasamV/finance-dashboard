export default function SummaryCards({ transactions }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  return (
    <section className="summary">
      <div className="card">
        <strong>Balance</strong>
        <br />₹{income - expense}
      </div>

      <div className="card">
        <strong>Income</strong>
        <br />₹{income}
      </div>

      <div className="card">
        <strong>Expense</strong>
        <br />₹{expense}
      </div>
    </section>
  );
}
