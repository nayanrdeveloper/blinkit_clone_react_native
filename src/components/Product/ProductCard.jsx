import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Fontisto";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addProduct } from "../../features/cartSlice";

export default function ProductCard({ product }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAddToCart = (product, quantity) => {
    dispatch(addProduct({ product, quantity }));
  };
  return (
    <View key={product._id} className="space-y-2">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetailsScreen", {
            product: product,
          });
        }}
      >
        <View className="p-2 border border-[#F3F3F3] rounded-md">
          <Image
            source={{ uri: product.images[0] }}
            alt={product.name}
            className="w-28 h-28"
          />
        </View>
      </TouchableOpacity>
      <View className="flex flex-row items-center bg-[#F4F5F9] w-20 px-2 rounded-md">
        <Icon name="stopwatch" size={11} color="#000" />
        <Text className="text-sm">17 Mins</Text>
      </View>
      <Text className="w-32 h-8 text-[#333333] font-semibold">{`${product.name.substring(
        0,
        25
      )} ${product.name.length > 25 ? "..." : ""}`}</Text>
      <Text className="text-[#7D8288]">{product.weight} g</Text>
      <View className="flex-row justify-between items-center">
        <View>
          <Text>₹ 589.89</Text>
          <Text className="line-through text-[#7D8288]">580</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleAddToCart(product, 1)}
          className="border border-[#539645] rounded-md px-2 py-1"
        >
          <Text className="text-[#539645] font-semibold">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
