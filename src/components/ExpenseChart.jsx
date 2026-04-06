import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ExpenseChart({ transactions }) {
  const dataMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      dataMap[t.category] = (dataMap[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(dataMap).map((key) => ({
    name: key,
    value: dataMap[key],
  }));

  return (
    <div style={{ padding: "20px" }}>
      <h3>Spending Breakdown</h3>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
          {data.map((_, i) => (
            <Cell key={i} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
