import { Image, View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import images from "@/constants/affirmation-images";
import { GalleryPreviewData, Product } from "@/constants/models/Product";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({ title, products }: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-black font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={products}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <ImageBackground
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full flex-1"
                  ></ImageBackground>
                  <View className=" bg-amber-800">
                    <Text className=" flex justify-center items-center font-bold text-white text-center">
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
