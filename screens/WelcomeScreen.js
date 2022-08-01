import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const authContext = useContext(AuthContext);
  const [fetchedmessage, setFetchedMessage] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://rn-auth-example-app-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${authContext.token}`
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  });
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedmessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
