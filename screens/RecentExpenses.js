import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getRecentExpenses } from "../util/date";

export default function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = getRecentExpenses(expensesContext.expenses);
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses in the last 7 days"
    />
  );
}
