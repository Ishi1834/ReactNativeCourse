import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
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
