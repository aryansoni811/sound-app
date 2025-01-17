import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GoogleMapView from "./GoogleMapView.tsx";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello World!</Text>
      <GoogleMapView />
      <StatusBar style="auto" />
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
