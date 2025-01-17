import TimerProvider from "@/context/TimerContext";
import ChapterProvider from "@/context/ChapterContext";
import LanguageProvider from "@/context/LanguageContext";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// this will prevent the flash screen from auto hiding until loading all the assets is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Allura-Regular": require("../assets/fonts/Allura-Regular.ttf"),
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ChapterProvider>
        <LanguageProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(modal)/adjust-meditation-duration"
              options={{ headerShown: false, presentation: "modal" }}
            />
          </Stack>
        </LanguageProvider>
      </ChapterProvider>
    </SafeAreaProvider>
  );
}
