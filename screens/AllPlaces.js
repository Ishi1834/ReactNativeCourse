import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";

export default function AllPlaces({ route }) {
  const isFocussed = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    if (isFocussed && route.params) {
      setLoadedPlaces([...loadedPlaces, route.params.place]);
    }
  }, [isFocussed, route]);
  return <PlacesList places={loadedPlaces} />;
}
