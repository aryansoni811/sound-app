import { Image, View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import images from "@/constants/affirmation-images";
import { GalleryPreviewData, Product } from "@/constants/models/Product";
import { Link } from "expo-router";

interface MonumentGalleryProps {
  title: string;
  products: GalleryPreviewData[];
}

const MonumentGallery = ({ title, products }: MonumentGalleryProps) => {
  return (
    <View className="my-5">
      <View className="space-y-2 ">
        <FlatList
          className=""
          numColumns={2}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View className=" h-40 w-40 rounded-md m-2">
              <Image source={item.image} resizeMode="cover" className="w-full h-full flex-1" />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default MonumentGallery;
