import { View, Text, Pressable, StyleSheet } from "react-native";
/**
 * object not valid as react children
 * therefore transforming it into a string
 */
export default function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View>
        <Text>{description}</Text>
        <Text>{date.toString()}</Text>
      </View>
      <View>
        <Text>{amount}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {},
});
