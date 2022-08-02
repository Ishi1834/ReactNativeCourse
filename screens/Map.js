import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

export default function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectLocationHandler(event) {
    const longitude = event.nativeEvent.coordinate.longitude;
    const latitude = event.nativeEvent.coordinate.latitude;
    setSelectedLocation({ latitude: latitude, longitude: longitude });
  }
  /**
   * useCallBack Hook only runs when one of its dependencies updates
   */
  const savePickedlocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by taping on the map)!"
      );
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.latitude,
      pickedLng: selectedLocation.longitude,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedlocationHandler}
        />
      ),
    });
  }, [navigation, savePickedlocationHandler]);

  return (
    <MapView
      onPress={selectLocationHandler}
      style={styles.map}
      initialRegion={region}
    >
      {selectedLocation && (
        <Marker title="Picked Location" coordinate={selectedLocation} />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
