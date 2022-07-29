import axios from "axios";
const baseURL =
  "https://rn-expense-tracker-18ec8-default-rtdb.europe-west1.firebasedatabase.app/";

export async function postExpense(expenseData) {
  const response = await axios.post(`${baseURL}expenses.json`, expenseData);
  const id = response.data.name;
  return id;
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
export function putExpense(id, expenseData) {
  return axios.put(`${baseURL}expenses/${id}.json`, expenseData);
}
export function deleteExpense(id) {
  return axios.delete(`${baseURL}expenses/${id}.json`);
}
