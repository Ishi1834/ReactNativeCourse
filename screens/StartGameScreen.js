import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import Colors from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "cancel", onPress: () => setEnteredNumber("") }]
      );
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={(val) => setEnteredNumber(val)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => setEnteredNumber("")}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary1,
    elevation: 5, //box shadow only for android
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 70,
    borderBottomColor: Colors.secondary2,
    borderBottomWidth: 2,
    color: Colors.secondary2,
    textAlign: "center",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
