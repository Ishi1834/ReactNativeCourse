import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#932323", "#dc6428"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        style={styles.container}
        imageStyle={styles.image}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.75,
  },
});
