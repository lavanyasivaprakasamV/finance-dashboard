import { useState, useEffect } from "react";
import SummaryCards from "./components/SummaryCards";
import TransactionTable from "./components/TransactionTable";
import Insights from "./components/Insights";
import AddTransactionModal from "./components/AddTransactionModal";
import ExpenseChart from "./components/ExpenseChart";

const defaultData = [
  { date: "2026-04-01", category: "Food", amount: 200, type: "expense" },
  { date: "2026-04-02", category: "Salary", amount: 5000, type: "income" },
  { date: "2026-04-03", category: "Shopping", amount: 800, type: "expense" },
];

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || defaultData;
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <header>
        <h1>Finance Dashboard</h1>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </header>

      <SummaryCards transactions={transactions} />
      <Insights transactions={transactions} />

      <input
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TransactionTable data={filtered} />

      {role === "admin" && (
        <button onClick={() => setShowModal(true)}>+ Add Transaction</button>
      )}
      <ExpenseChart transactions={transactions} />
      {showModal && (
        <AddTransactionModal
          onClose={() => setShowModal(false)}
          onSave={(newTx) => setTransactions((prev) => [...prev, newTx])}
        />
      )}
    </div>
  );
}
