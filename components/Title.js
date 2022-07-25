import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.secondary2,
    padding: 12,
  },
});
