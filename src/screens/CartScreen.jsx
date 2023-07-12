import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  updateQuantity,
  cleanCart,
} from "../features/cartSlice";

export default function CartScreen() {
  const { products, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleAddToCart = (product, quantity) => {
    dispatch(addProduct({ product, quantity }));
  };

  const handleRemoveFromCart = (productId, quantity) => {
    dispatch(removeProduct({ productId, quantity }));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleCleanCart = () => {
    dispatch(cleanCart());
  };
  return (
    <View className="mt-10">
      {/* Header */}
      <View className="flex flex-row items-center justify-between py-3 px-3 bg-white">
        <View className="flex flex-row items-center space-x-3">
          <Text>
            <Icon name="arrow-left" size={25} color="#000" />
          </Text>
          <Text>Checkout</Text>
        </View>
        <View>
          <Text>Share</Text>
        </View>
      </View>
      {/* Cart Product */}
      <ScrollView>
        <View className="px-4 py-3 bg-white mt-4">
          {/* delivery Time */}
          <View className="flex-row space-x-2 items-center">
            <View>
              <FontistoIcon name="stopwatch" size={30} color="#000" />
            </View>
            <View>
              <Text className="text-lg font-semibold">
                Delivery in 15 minutes
              </Text>
              <Text>{totalQuantity} items</Text>
            </View>
          </View>
          {/* Cart Products */}
          <View className="space-y-3">
            {products.map((product) => {
              return (
                <View
                  key={product._id}
                  className="flex-row justify-between items-center"
                >
                  <View className="border border-gray-200 rounded-xl p-1">
                    <Image
                      source={{ uri: product.images[0] }}
                      alt={product.name}
                      className="w-20 h-20"
                    />
                  </View>
                  <View>
                    <Text className="w-40">{product.name}</Text>
                    <Text>{product.weight}</Text>
                    <Text>₹ 589.89</Text>
                  </View>
                  <View className="flex-row items-center bg-green-400 rounded-lg">
                    <TouchableOpacity
                      className="px-2 py-1"
                      onPress={() => handleAddToCart(product, 1)}
                    >
                      <Text className="text-white">+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-2 py-1">
                      <Text className="text-white">{product.quantity}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="px-2 py-1"
                      onPress={() => handleRemoveFromCart(product._id, 1)}
                    >
                      <Text className="text-white text-xl">-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
