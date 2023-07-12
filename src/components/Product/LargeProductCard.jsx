import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Fontisto";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, cleanCart } from "../../features/cartSlice";

export default function LargeProductCard({ product }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAddToCart = (product, quantity) => {
    dispatch(addProduct({ product, quantity }));
  };
  return (
    <View className="bg-white rounded-md p-2">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetailsScreen", {
            product: product,
          });
        }}
      >
        <Image
          source={{ uri: product.images[0] }}
          alt={product.name}
          className="w-40 h-40"
        />
      </TouchableOpacity>
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
        <TouchableOpacity
          className="border border-[#539645] rounded-md px-2 py-1"
          onPress={() => handleAddToCart(product, 1)}
        >
          <Text className="text-[#539645] font-semibold">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
