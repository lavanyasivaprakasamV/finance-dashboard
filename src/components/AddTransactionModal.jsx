import { useState } from "react";

export default function AddTransactionModal({ onClose, onSave }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleSave = () => {
    if (!category || !amount || !type) {
      alert("Fill all fields");
      return;
    }

    const newTx = {
      date: new Date().toISOString().split("T")[0],
      category,
      amount: Number(amount),
      type,
    };

    console.log(newTx);
    onSave(newTx);
    onClose();
  };
  return (
    <div className="modal" style={{ display: "flex" }}>
      <div className="modal-content">
        <h2>Add Transaction</h2>

        <input
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <select onChange={(e) => setType(e.target.value)}>
          <option value="">Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
