import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getRecentExpenses } from "../util/date";
import { getExpenses } from "../util/http";

export default function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      const expenses = await getExpenses();
      expensesContext.setExpenses(expenses);
    }
    fetchExpenses();
  }, []);
  const recentExpenses = getRecentExpenses(expensesContext.expenses);
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses in the last 7 days"
    />
  );
}
