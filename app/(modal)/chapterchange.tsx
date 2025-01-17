import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { ChapterContext } from "@/context/ChapterContext";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { MEDITATION_DATA } from "@/constants/MeditationData";

const changeCurrentChapter = () => {
  const { id } = useLocalSearchParams();

  const { setChapter } = useContext(ChapterContext);

  const handlePress = (chapter: number) => {
    setChapter(chapter);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient
        // Background Linear Gradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <Pressable onPress={() => router.back()} className="absolute top-8 left-6 z-10">
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <View>
            <Text className="text-center font-bold text-3xl text-white mb-8">List of Chapters</Text>
          </View>

          <View>
            <CustomButton
              title={MEDITATION_DATA[Number(id) - 1].chaptersTitle[0]}
              onPress={() => handlePress(0)}
              containerStyles="mb-5"
            />
            <CustomButton
              title={MEDITATION_DATA[Number(id) - 1].chaptersTitle[1]}
              onPress={() => handlePress(1)}
              containerStyles="mb-5"
            />
            <CustomButton
              title={MEDITATION_DATA[Number(id) - 1].chaptersTitle[2]}
              onPress={() => handlePress(2)}
              containerStyles="mb-5"
            />
            <CustomButton
              title={MEDITATION_DATA[Number(id) - 1].chaptersTitle[3]}
              onPress={() => handlePress(3)}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

{
  /* <CustomButton title="Chapter 1" onPress={() => handlePress(0)} containerStyles="mb-5" />
<CustomButton title="Chapter 2" onPress={() => handlePress(1)} containerStyles="mb-5" />
<CustomButton title="Chapter 3" onPress={() => handlePress(2)} containerStyles="mb-5" />
<CustomButton title="Chapter 4" onPress={() => handlePress(3)} containerStyles="mb-5" /> */
}
export default changeCurrentChapter;
