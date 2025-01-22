import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import CustomButton from "@/components/CustomButton";

import MEDITATION_IMAGES from "@/constants/meditation-images";
import { TimerContext } from "@/context/TimerContext";
import { ChapterContext } from "@/context/ChapterContext";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/MeditationData";
import i18n from "@/constants/i18n";

const Page = () => {
  const { id } = useLocalSearchParams();

  const { duration: secondsRemaining, setDuration } = useContext(TimerContext);

  const [isMeditating, setMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const { chapter } = useContext(ChapterContext);

  useEffect(() => {
    const initializeDuration = async () => {
      const audioFileName = MEDITATION_DATA[Number(id) - 1].audio[chapter];
      const { sound, status } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
      if (status.isLoaded && status.durationMillis) {
        setDuration(Math.ceil(status.durationMillis / 1000));
        setSound(sound);
        setAudioLoaded(true);
      } else {
        sound.unloadAsync();
      }
    };

    initializeDuration();

    return () => {
      if (audioSound) {
        audioSound.unloadAsync();
      }
      setDuration(0);
      setAudioLoaded(false);
    };
  }, [id]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      if (isPlayingAudio) {
        audioSound?.stopAsync();
      }
      setMeditating(false);
      setPlayingAudio(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  const togglePlayPause = async () => {
    if (!audioLoaded) return;

    const status = await audioSound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio) {
      await audioSound?.playAsync();
      setPlayingAudio(true);
    } else if (status?.isLoaded) {
      await audioSound?.pauseAsync();
      setPlayingAudio(false);
    }
  };

  const toggleMeditationSessionStatus = async () => {
    if (!audioLoaded) return;

    if (secondsRemaining === 0) {
      await audioSound?.setPositionAsync(0);
      setDuration(Math.ceil((await audioSound.getStatusAsync()).durationMillis / 1000));
    }

    setMeditating((prev) => !prev);

    if (!isMeditating) {
      await audioSound?.playAsync();
      setPlayingAudio(true);
    } else {
      await audioSound?.pauseAsync();
      setPlayingAudio(false);
    }
  };

  const handleGallery = () => {
    if (isMeditating) toggleMeditationSessionStatus();
    router.push("/(modal)/adjust-meditation-duration");
  };

  const handleChapters = () => {
    if (isMeditating) toggleMeditationSessionStatus();
    router.push(`/(modal)/chapterchange?id=${id}`);
  };

  const handleBackPress = () => {
    if (audioSound) {
      audioSound.unloadAsync();
    }
    setDuration(0);
    setMeditating(false);
    setPlayingAudio(false);
    router.back();
  };

  const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");
  const dataNumber = MEDITATION_DATA[Number(id) - 1];

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["#000000dd", "#000000bb", "transparent"]}>
          <Pressable onPress={handleBackPress} className="absolute top-16 left-6 z-10">
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <View className="flex-1 justify-start gap-3 pt-24">
            <Text className="text-white text-3xl font-bold leading-10">
              {i18n.t(dataNumber.title)}
            </Text>
            <Text className="text-white text-lg">{i18n.t(dataNumber.chaptersTitle[chapter])}</Text>
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={true}>
              <Text className="text-white text-lg">{i18n.t(dataNumber.description[chapter])}</Text>
            </ScrollView>
          </View>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}.{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5">
            <CustomButton title="View Gallery" onPress={handleGallery} />
            <CustomButton containerStyles="mt-3" title="Select Chapter" onPress={handleChapters} />
            <CustomButton
              title={isMeditating ? "Stop" : "Start Tour"}
              onPress={toggleMeditationSessionStatus}
              containerStyles="mt-3"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Page;
