import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import ExpenseForm from "../components/ManageExpense.js/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import { ExpensesContext } from "../store/expenses-context";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; // only drill into expenseId if params is defined
  const isEditing = !!editedExpenseId; // convert to  boolean
  const expenseContext = useContext(ExpensesContext);

  const selectedExpense = expenseContext.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function handleSubmit(expenseData) {
    if (isEditing) {
      expenseContext.updateExpense(editedExpenseId, expenseData);
    } else {
      expenseContext.addExpense(expenseData);
    }
    navigation.goBack();
  }

  function handleCancel() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={handleCancel}
        isEditing={isEditing}
        onSubmit={handleSubmit}
        initialExpense={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={30}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
