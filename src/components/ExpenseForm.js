import { useState } from "react";
import { createExpense } from "../API";

export default function ExpenseForm({ onSuccess }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double click

    setLoading(true);

    const idempotencyKey = crypto.randomUUID();

    try {
      await createExpense(
        {
          ...form,
          amount: Number(form.amount),
        },
        idempotencyKey
      );

      setForm({ amount: "", category: "", description: "", date: "" });
      onSuccess();
    } catch (err) {
      alert("Error saving expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>

      <input
        placeholder="Amount"
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />

      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        required
      />

      <button disabled={loading}>
        {loading ? "Saving..." : "Add Expense"}
      </button>
    </form>
  );
}