import axios from "axios";
const baseURL =
  "https://rn-expense-tracker-18ec8-default-rtdb.europe-west1.firebasedatabase.app/";

export function storeExpense(expenseData) {
  axios.post(`${baseURL}expenses.json`, expenseData);
}
