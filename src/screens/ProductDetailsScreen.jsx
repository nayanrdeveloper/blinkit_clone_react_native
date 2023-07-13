import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import Swiper from "react-native-swiper";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();
  return (
    <View className="py-2 px-4">
      <View className="flex flex-row items-center space-x-3">
        <Text onPress={() => navigation.goBack()}>
          <FontAwesomeIcon name="arrow-left" size={25} color="#000" />
        </Text>
        <Text>Go back</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Swiper
          showsButtons
          loop={false}
          height={300}
          className="items-center flex flex-row justify-center"
        >
          {product.images.map((image, index) => {
            return (
              <Image
                key={index}
                source={{ uri: image }}
                alt={product.name}
                className="h-56 w-56 items-center flex flex-row justify-center"
              />
            );
          })}
        </Swiper>
        <View>
          <Text className="font-semibold">{product.name}</Text>
          <View className="flex flex-row items-center bg-[#F4F5F9] w-20 px-2 rounded-md">
            <Icon name="stopwatch" size={11} color="#000" />
            <Text className="text-sm">17 Mins</Text>
          </View>
        </View>
        <View>
          <Text>1 piece</Text>
          <View className="flex flex-row space-x-4 items-center">
            <Text>₹ 589.89</Text>
            <Text className="text-[#E0E3EB] line-through">₹ 699.90</Text>
            <View className="px-2 py-1 bg-[#8DB5F0] rounded-lg">
              <Text className="text-white">52% off</Text>
            </View>
          </View>
        </View>
        <View className="space-y-4">
          <Text className="font-semibold">Product Details</Text>
          <View>
            <Text className="text-gray-900 font-semibold">Description</Text>
            <Text className="text-gray-700">{product.description}</Text>
          </View>
          <View>
            <Text className="text-gray-900 font-semibold">Weight</Text>
            <Text className="text-gray-700">{product.weight}</Text>
          </View>
          <View>
            <Text className="text-gray-900 font-semibold">Expiry date</Text>
            <Text className="text-gray-700">{product.expiryDate}</Text>
          </View>
          <View>
            <Text className="text-gray-900 font-semibold">Seller</Text>
            <Text className="text-gray-700">{product.seller}</Text>
          </View>
          <View>
            <Text className="text-gray-900 font-semibold">
              Country of Origin
            </Text>
            <Text className="text-gray-700">{product.countryOfOrigin}</Text>
          </View>
          <View>
            <Text className="text-gray-900 font-semibold">Manufacturing</Text>
            <Text className="text-gray-700">{product.manufactureDetails}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
