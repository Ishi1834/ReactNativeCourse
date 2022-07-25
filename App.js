import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [numTries, setNumTries] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function handleGameOver(tries) {
    setNumTries(tries);
    setGameOver(true);
  }

  function handleResetGame() {
    setUserNumber(null);
    setGameOver(false);
    setNumTries(null);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} handleGameOver={handleGameOver} />
    );
  }
  if (gameOver) {
    screen = <GameOverScreen numTries={numTries} resetGame={handleResetGame} />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary1, Colors.secondary1]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        style={styles.container}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        {/**
         * Use safeAreaView to make sure content isn't hidden by device features
         */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.45,
  },
});
