import { AntDesign } from "@expo/vector-icons";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ImageBackground, Pressable, ScrollView, Image } from "react-native";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import AppGradient from "@/components/AppGradient";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const AffirmationPractice = () => {
  const { i18n } = useContext(LanguageContext);

  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;

      const affirmationToStart = affirmationData.find((a) => a.id === Number(itemId));

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationsArray = affirmationToStart.text.split(".");

        // Remove the last element if it's an empty string
        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray.pop();
        }

        setSentences(affirmationsArray);
        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <AppGradient colors={["#A57C4D", "#fff5e5"]}>
        <Pressable onPress={() => router.back()} className="absolute top-16 left-6 z-10">
          <AntDesign name="leftcircleo" size={50} color="black" />
        </Pressable>
        <View className="mt-20">
          <Text className="text-black text-2xl font-bold text-center pt-2">
            {i18n.t(affirmation?.name)}
          </Text>
          <Image
            source={affirmation?.image}
            className="w-52 h-52 flex self-center mt-5 rounded-full"
          ></Image>
        </View>

        <ScrollView
          className=" h-full mt-10"
          scrollEnabled={true}
          showsVerticalScrollIndicator={true}
        >
          <View className="h-full border-white justify-end">
            {sentences.map((sentence, idx) => (
              <Text className="text-black text-xl mb-12 font-medium text-center" key={idx}>
                {i18n.t(sentence)}
              </Text>
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default AffirmationPractice;
