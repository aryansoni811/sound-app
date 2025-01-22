import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import React, { useContext } from "react";
// import I18n from "@/constants/i18n";
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

import MEDITATION_IMAGES from "@/constants/meditation-images";

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import AppGradient from "@/components/AppGradient";
import { LanguageContext } from "@/context/LanguageContext";

const Page = () => {
  const { i18n } = useContext(LanguageContext);

  return (
    <View className="flex-1">
      <AppGradient
        // Background Linear Gradient
        colors={["#A57C4D", "#fff5e5", "#fff5e588"]}
      >
        <View className="mb-6 pt-5">
          <Text className="text-black mb-3 font-bold text-3xl text-left leading-10">
            {i18n.t("welcome")}
          </Text>
          <Text className="text-black text-xl font-medium">{i18n.t("welcome_subtitle")} </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  style={styles.backgroundImage}
                >
                  <LinearGradient
                    // Gradient from transparent to black
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={styles.gradient}
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center leading-10">
                      {i18n.t(item.title)}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150,
  },
});

export default Page;
