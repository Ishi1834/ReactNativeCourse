import { View, Button } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

export default function ImagePicker() {
  async function takeImagehandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title="take Image" onPress={takeImagehandler} />
    </View>
  );
}
