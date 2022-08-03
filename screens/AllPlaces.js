import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

export default function AllPlaces({ route }) {
  const isFocussed = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    async function loadedPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocussed) {
      loadedPlaces();
      //setLoadedPlaces([...loadedPlaces, route.params.place]);
    }
  }, [isFocussed]);
  return <PlacesList places={loadedPlaces} />;
}
