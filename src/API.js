//const BASE_URL = "http://localhost:8080";
const BASE_URL = import.meta.env.VITE_API_URL;

export const createExpense = async (data, idempotencyKey) => {
  const res = await fetch(`${BASE_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create expense");
  return res.json();
};

export const fetchExpenses = async (category, sort) => {
  let url = `${BASE_URL}/expenses?`;

  if (category) url += `category=${category}&`;
  if (sort) url += `sort=${sort}`;

  const res = await fetch(url);
  return res.json();
};