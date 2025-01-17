import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import MonumentGallery from "@/components/MonumentGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";

const AdjustMeditationDuration = () => {
  const staysGallery = AFFIRMATION_GALLERY.filter((g) => g.title === "Stays");

  return (
    <View className="flex-1 relative">
      <AppGradient
        // Background Linear Gradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <Pressable onPress={() => router.back()} className="absolute top-16 left-6 z-10">
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <View>
            <Text className="text-center font-bold text-3xl text-white mt-20">Gallery</Text>
          </View>

          {/* <View>
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyles="mb-5"
            />
          </View> */}
          <View className="pt-8">
            {staysGallery.map((g) => (
              <MonumentGallery key={g.title} title={g.title} products={g.data} />
            ))}
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
