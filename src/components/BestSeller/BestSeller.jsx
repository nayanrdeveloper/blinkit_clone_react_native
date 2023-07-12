import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useGetSellersQuery } from "../../api/bestSellerApi";
import BestSellerCard from "./BestSellerCard";

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
              <View key={bestSeller._id}>
                <BestSellerCard bestSeller={bestSeller} />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
