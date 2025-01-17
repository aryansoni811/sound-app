import { StyleSheet, View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "./context/UserLocationContext";

const GoogleMapView = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 18.898727,
    longitude: 81.346578,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // const { location, setLocation } = useContext(UserLocationContext);

  // useEffect(() => {
  //   if (location) {
  //     setMapRegion({
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //       longitudeDelta: 0.0922,
  //       latitudeDelta: 0.0421,
  //     });
  //   }
  // }, []);

  if (!mapRegion) {
    return <Text className="text-red-500">Error loading map region</Text>;
  }

  return (
    <View className="flex-1 flex-col justify-end">
      <Text className="text-black text-2xl font-bold py-5 px-2">Map</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        region={mapRegion}
      >
        <Marker title="You" coordinate={mapRegion} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("screen").height * 0.8,
    width: Dimensions.get("screen").width,
  },
});

export default GoogleMapView;
