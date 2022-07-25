import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameOverScreen({ numTries, resetGame }) {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <Text style={styles.text}>Number of tries: {numTries}</Text>
      <View>
        <PrimaryButton onPress={resetGame}>Play Again</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    marginTop: 100,
    backgroundColor: Colors.primary1,
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    borderBottomColor: Colors.secondary2,
    borderBottomWidth: 2,
    paddingBottom: 5,
    margin: 20,
    color: "white",
  },
});
