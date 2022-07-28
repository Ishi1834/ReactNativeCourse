import { useEffect } from "react";
import { View, Text } from "react-native";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; // only drill into expenseId if params is defined
  const isEditing = !!editedExpenseId; // convert to  boolean

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  if (isEditing) {
    return <Text>Edit expense</Text>;
  }
  return (
    <View>
      <Text>Add expense</Text>
    </View>
  );
}
