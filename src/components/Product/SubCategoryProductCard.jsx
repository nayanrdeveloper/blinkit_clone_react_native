import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, cleanCart } from "../../features/cartSlice";
import React from "react";

export default function SubCategoryProductCard({ product }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAddToCart = (product, quantity) => {
    dispatch(addProduct({ product, quantity }));
  };
  return (
    <View
      key={product._id}
      className="space-y-2 p-3 rounded-md border border-gray-200 bg-white"
    >
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
          className="w-24 h-24 rounded-md"
        />
      </TouchableOpacity>
      <View className="flex flex-row items-center bg-[#F4F5F9] w-20 px-2 rounded-md">
        <Icon name="stopwatch" size={11} color="#000" />
        <Text className="text-sm">17 Mins</Text>
      </View>
      <Text className="w-[110] h-8 text-[#333333] font-semibold">{`${product.name.substring(
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
