import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function handleInputChange(type, val) {
    console.log(type, val);
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
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            onChangeText: (val) => handleInputChange("date", val),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
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
          //autoCorrect - default is true
        }}
      />
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
});
