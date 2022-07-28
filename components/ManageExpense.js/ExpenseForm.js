import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

export default function ExpenseForm({
  onCancel,
  isEditing,
  onSubmit,
  initialExpense,
}) {
  const [inputValues, setInputValues] = useState({
    amount: initialExpense ? initialExpense.amount.toString() : "",
    date: initialExpense ? initialExpense.date.toISOString().slice(0, 10) : "",
    description: initialExpense ? initialExpense.description : "",
  });

  function handleInputChange(inputIdentifier, val) {
    setInputValues({ ...inputValues, [inputIdentifier]: val });
  }

  function handleSubmit() {
    const expenseData = {
      amount: +inputValues.amount, // converts to a number
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (val) => handleInputChange("amount", val),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            onChangeText: (val) => handleInputChange("date", val),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          onChangeText: (val) => handleInputChange("description", val),
          multiline: true,
          autoCapitalize: "sentences",
          value: inputValues.description,
          //autoCorrect - default is true
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
