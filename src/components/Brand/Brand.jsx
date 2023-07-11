import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useGetBrandsQuery } from "../../api/brandApi";

export default function Brand() {
  const { data: brands, isLoading } = useGetBrandsQuery();
  const navigation = useNavigation();
  return (
    <View className="space-y-2">
      <Text className="text-xl font-semibold">Shop by brand</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-3"
      >
        {brands &&
          brands.map((brand) => {
            return (
              <TouchableOpacity
                key={brand._id}
                onPress={() => {
                  navigation.navigate("ProductsByBrand", {brandId: brand._id, brandName: brand.name});
                }}
              >
                <Image
                  source={{ uri: brand.image }}
                  alt={brand.name}
                  className="h-20 w-24"
                />
                <Text className="text-center">{brand.name}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
