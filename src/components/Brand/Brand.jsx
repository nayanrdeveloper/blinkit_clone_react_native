import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useGetBrandsQuery } from "../../api/brandApi";

export default function Brand() {
  const { data: brands, isLoading } = useGetBrandsQuery();
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
              <View key={brand._id}>
                <Image
                  source={{ uri: brand.image }}
                  alt={brand.name}
                  className="h-20 w-24"
                />
                <Text className="text-center">{brand.name}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
