import { View, Text, Image, ImageBackground } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown, FadeInUp, withSpring } from "react-native-reanimated";
import { Picker } from "@react-native-picker/picker";
// import { dantewadaLogo } from "../assets/dantewada-logo.png";

import beachImage from "@/assets/dantewada-images/entry-image.jpg";
import { LanguageContext } from "@/context/LanguageContext";

const App = () => {
  const router = useRouter();

  const { Language, setLanguage } = useContext(LanguageContext);

  return (
    <View className="flex-1">
      <ImageBackground source={beachImage} resizeMode="cover" className="flex-1">
        <AppGradient
          // Background Linear Gradient
          colors={["#fff5e5ff", "#fff5e588"]}
        >
          <SafeAreaView className="flex flex-1 px-1 justify-between ">
            <Animated.View entering={FadeInDown.delay(300).mass(0.5).stiffness(80).springify(20)}>
              <View className=" flex flex-row justify-between">
                <Image source={require("../assets/dantewada-logo.png")} className=" w-28 h-28" />
                <Image source={require("../assets/cg-logo.png")} className=" w-28 h-28" />
              </View>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(300).mass(0.5).stiffness(80).springify(20)}>
              <Text
                style={{ fontFamily: "Allura-Regular" }}
                className="text-center font-allura text-black font-bold text-5xl "
              >
                Dantewada
              </Text>
              <Text className="text-center text-black font-regular text-3xl mt-3">
                Heritage Town
              </Text>
            </Animated.View>
            <Animated.View>
              <Text className=" text-center text-2xl font-semibold mb-2">Select Language </Text>
              <View className=" rounded-full border">
                <Picker
                  className=" border border-black"
                  selectedValue={Language}
                  onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
                >
                  <Picker.Item label="English" value="en" />
                  <Picker.Item label="Hindi" value="hi" />
                </Picker>
              </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(300).mass(0.5).stiffness(80).springify(20)}>
              <CustomButton onPress={() => router.push("/nature-meditate")} title="Get Started" />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(300).mass(0.5).stiffness(80).springify(20)}>
              <View className="flex flex-row justify-center">
                <Image
                  source={require("../assets/ub-logo-transparent.png")}
                  className=" w-40 h-14"
                />
              </View>
            </Animated.View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
