import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "jeans",
    amount: 35.99,
    date: new Date("2022-06-19"),
  },
  {
    id: "e2",
    description: "a shirt",
    amount: 5.99,
    date: new Date("2022-07-19"),
  },
  {
    id: "e3",
    description: "backpack",
    amount: 20.99,
    date: new Date("2022-07-26"),
  },
  {
    id: "e4",
    description: "food",
    amount: 32.99,
    date: new Date("2022-06-19"),
  },
  {
    id: "e5",
    description: "shoes",
    amount: 85.99,
    date: new Date("2022-07-26"),
  },
];

export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList />
    </View>
  );
}
