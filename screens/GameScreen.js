import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Colors from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, handleGameOver }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [numTries, setNumTries] = useState(0);

  useEffect(() => {
    if (userNumber === currentGuess) {
      handleGameOver(numTries);
    }
  }, [currentGuess]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!!", "  :(  ", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setNumTries(numTries + 1);
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Computers Guess</Title>
      <Text style={styles.number}>{currentGuess}</Text>
      <View>
        <Text style={styles.text}>Higher or lower</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
    borderBottomColor: Colors.secondary2,
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 14,
    margin: 4,
    padding: 4,
    color: "white",
    textAlign: "center",
  },
});
