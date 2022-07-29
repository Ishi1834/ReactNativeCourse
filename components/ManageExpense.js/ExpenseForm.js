import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/style";

export default function ExpenseForm({
  onCancel,
  isEditing,
  onSubmit,
  initialExpense,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: initialExpense ? initialExpense.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: initialExpense
        ? initialExpense.date.toISOString().slice(0, 10)
        : "",
      isValid: true,
    },
    description: {
      value: initialExpense ? initialExpense.description : "",
      isValid: true,
    },
  });

  function handleInputChange(inputIdentifier, val) {
    setInputs({ ...inputs, [inputIdentifier]: { value: val, isValid: true } });
  }

  function handleSubmit() {
    const expenseData = {
      amount: +inputs.amount.value, // converts to a number
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs({
        amount: { value: inputs.amount.value, isValid: amountIsValid },
        date: { value: inputs.date.value, isValid: dateIsValid },
        description: {
          value: inputs.description.value,
          isValid: descriptionIsValid,
        },
      });
      return;
    }
    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (val) => handleInputChange("amount", val),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            onChangeText: (val) => handleInputChange("date", val),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputs.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          onChangeText: (val) => handleInputChange("description", val),
          multiline: true,
          autoCapitalize: "sentences",
          value: inputs.description.value,
          //autoCorrect - default is true
        }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Invalid inputs</Text>}
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
