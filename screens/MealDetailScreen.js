import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import IconButton from "../components/IconButton";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Detail",
      headerRight: () => {
        return <IconButton icon="star" color="white" />;
      },
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          affordability={selectedMeal.affordability}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
        />
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
    padding: 8,
    backgroundColor: "#836587",
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
  },
});
