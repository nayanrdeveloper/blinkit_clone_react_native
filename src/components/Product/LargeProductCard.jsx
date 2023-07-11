import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Fontisto";

export default function LargeProductCard({ product }) {
  return (
    <View className="bg-white rounded-md p-2">
      <View>
        <Image
          source={{ uri: product.images[0] }}
          alt={product.name}
          className="w-40 h-40"
        />
      </View>
      <View className="flex flex-row items-center bg-[#F4F5F9] w-20 px-2 rounded-md">
        <Icon name="stopwatch" size={11} color="#000" />
        <Text className="text-sm">17 Mins</Text>
      </View>
      <Text className="w-40 h-8 text-[#333333] font-semibold">{`${product.name.substring(
        0,
        43
      )} ${product.name.length > 43 ? "..." : ""}`}</Text>
       <Text className="text-[#7D8288]">{product.weight} g</Text>
      <View className="flex-row justify-between items-center">
        <View>
          <Text>₹ 589.89</Text>
          <Text className="line-through text-[#7D8288]">580</Text>
        </View>
        <View className="border border-[#539645] rounded-md px-2 py-1">
          <Text className="text-[#539645] font-semibold">Add</Text>
        </View>
      </View>
    </View>
  );
}
