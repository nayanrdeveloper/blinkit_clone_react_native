import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useGetProductByBrandQuery } from "../api/productApi";
import LargeProductCard from "../components/Product/LargeProductCard";

export default function ProductByBrand({ route }) {
  const { brandId, brandName } = route.params;
  const navigation = useNavigation();
  const { data: products, isLoading } = useGetProductByBrandQuery(brandId);
  return (
    <View className="px-2 mt-10 space-y-2">
      <View className="flex flex-row justify-between py-3 px-3 bg-white">
        <View className="flex flex-row items-center space-x-3">
          <Text onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={25} color="#000" />
          </Text>
          <Text>{brandName}</Text>
        </View>
        <View>
          <Icon name="search" size={25} color="#000" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row flex-wrap gap-x-5 gap-y-3">
          {products &&
            products.map((product) => {
              return (
                <View key={product._id}>
                  <LargeProductCard product={product} />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
