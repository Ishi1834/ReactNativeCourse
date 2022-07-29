import axios from "axios";
const baseURL =
  "https://rn-expense-tracker-18ec8-default-rtdb.europe-west1.firebasedatabase.app/";

export function postExpense(expenseData) {
  axios.post(`${baseURL}expenses.json`, expenseData);
}
export async function getExpenses() {
  const response = await axios.get(`${baseURL}expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
}
