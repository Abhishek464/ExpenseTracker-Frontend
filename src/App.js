import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filter";
import { fetchExpenses } from "./API";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("date_desc");
  const [loading, setLoading] = useState(false);

  const loadExpenses = async () => {
    setLoading(true);
    try {
      const data = await fetchExpenses(category, sort);
      setExpenses(data);
    } catch {
      alert("Failed to load expenses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, [category, sort]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Expense Tracker</h2>

      <ExpenseForm onSuccess={loadExpenses} />

      <Filters
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      {loading ? <p>Loading...</p> : <ExpenseList expenses={expenses} />}
    </div>
  );
}

export default App;