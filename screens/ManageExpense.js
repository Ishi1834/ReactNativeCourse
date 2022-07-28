import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; // only drill into expenseId if params is defined
  const isEditing = !!editedExpenseId; // convert to  boolean

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}
  function handleConfirm() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          mode="flat"
          onPress={() => navigation.navigate("-1")}
        >
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleConfirm}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing ? (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={30}
            onPress={deleteExpenseHandler}
          />
        </View>
      ) : (
        <Text>Add expense</Text>
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
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
