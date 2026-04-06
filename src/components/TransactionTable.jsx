export default function TransactionTable({ data }) {
  if (data.length === 0) {
    return <p style={{ padding: "20px" }}>No transactions</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        {data.map((t, i) => (
          <tr key={i}>
            <td>{t.date}</td>
            <td>{t.category}</td>
            <td
              style={{
                color: t.type === "income" ? "green" : "red",
                fontWeight: "600",
              }}
            >
              ₹{t.amount}
            </td>
            <td>{t.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
