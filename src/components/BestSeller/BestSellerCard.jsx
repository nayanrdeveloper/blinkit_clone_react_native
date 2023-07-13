import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function BestSellerCard({ bestSeller }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="space-y-1"
      onPress={() =>
        navigation.navigate("ProductModalScreen", {
          bestSellerId: bestSeller._id,
          title: bestSeller.title,
          products: bestSeller.products,
        })
      }
    >
      <View className="bg-[#E9F5F5] flex flex-row flex-wrap w-36 justify-center items-center space-x-2 space-y-2 py-2 rounded-md">
        {bestSeller.products.slice(0, 3).map((product) => {
          return (
            <View key={product._id}>
              <Image
                source={{ uri: product.images[0] }}
                alt=""
                className="w-14 h-14 rounded"
              />
            </View>
          );
        })}
        <View className="w-14 h-14 items-center justify-center bg-white">
          <Text className="text-[#BCBFD2] text-xl font-semibold rounded">
            +{bestSeller.products.length - 3}
          </Text>
        </View>
      </View>
      <Text>{bestSeller.title}</Text>
      <Text className="text-[#696973]">{bestSeller.products.length} Products</Text>
      <View className="px-2 py-2 border-2 border-[#F3F3F3] rounded-md mt-2">
        <Text className="text-[#539645] text-center">See All</Text>
      </View>
    </TouchableOpacity>
  );
}
