import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useGetSellersQuery } from "../../api/bestSellerApi";

export default function BestSeller() {
  const { data: bestsellers, error, isLoading } = useGetSellersQuery();
  return (
    <View className="py-4">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-xl font-semibold">Best Sellers</Text>
        <Text className="text-[#539645] font-semibold">See All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row gap-2"
      >
        {bestsellers &&
          bestsellers.map((bestSeller) => {
            return (
              <View key={bestSeller._id} className="space-y-1">
                <View className="bg-[#E9F5F5] flex flex-row flex-wrap w-36 justify-center items-center space-x-2 space-y-2 py-2 rounded-md">
                  {bestSeller.products.slice(0, 3).map((product) => {
                    return (
                      <View key={product._id}>
                        <Image
                          source={{ uri: product.images[0] }}
                          alt=""
                          className="w-14 h-14"
                        />
                      </View>
                    );
                  })}
                  <View className="w-14 h-14 items-center justify-center bg-white">
                    <Text className="text-[#BCBFD2] text-xl font-semibold">
                      +{bestSeller.products.length - 3}
                    </Text>
                  </View>
                </View>
                <Text>{bestSeller.title}</Text>
                <Text>{bestSeller.products.length} Products</Text>
                <View className="px-2 py-2 border-2 border-[#F3F3F3] rounded-md mt-2">
                  <Text className="text-[#539645] text-center">See All</Text>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
