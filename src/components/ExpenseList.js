export default function ExpenseList({ expenses }) {
    const total = expenses.reduce(
      (sum, e) => sum + Number(e.amount),
      0
    );
  
    return (
      <div>
        <h3>Expenses</h3>
  
        <table border="1">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
  
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td>₹{e.amount}</td>
                <td>{e.category}</td>
                <td>{e.description}</td>
                <td>{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <h4>Total: ₹{total}</h4>
      </div>
    );
  }