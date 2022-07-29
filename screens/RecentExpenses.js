import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getRecentExpenses } from "../util/date";
import { getExpenses } from "../util/http";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      setIsFetching(true);
      const expenses = await getExpenses();
      setIsFetching(false);
      expensesContext.setExpenses(expenses);
    }
    fetchExpenses();
  }, []);
  const recentExpenses = getRecentExpenses(expensesContext.expenses);
  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses in the last 7 days"
    />
  );
}
