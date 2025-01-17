import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserLocationContext } from "./context/UserLocationContext";
import GoogleMapView from "./GoogleMapView";

import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <StatusBar style="auto" />
        <GoogleMapView />
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
