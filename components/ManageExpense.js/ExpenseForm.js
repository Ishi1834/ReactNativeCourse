import { View, Text } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function handleInputChange(type, val) {
    console.log(type, val);
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: (val) => handleInputChange("amount", val),
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          onChangeText: (val) => handleInputChange("date", val),
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
        }}
      />
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
