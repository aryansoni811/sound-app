import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

const Page = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Audio Guide",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="headphones" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => <Entypo name="open-book" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          tabBarLabel: "Maps",
          tabBarIcon: ({ color }) => <Entypo name="map" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default Page;
