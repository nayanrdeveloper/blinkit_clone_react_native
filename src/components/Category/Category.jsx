import { View, Text, Image } from "react-native";
import React from "react";
import { useGetCategoriesQuery } from "../../api/categoryApi";

export default function Category() {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  console.log(categories);
  return (
    <View className="space-y-2">
      <Text className="text-xl font-semibold">Shop by category</Text>
      <View className="flex flex-row flex-wrap justify-between gap-y-2">
        {categories &&
          categories.map((category) => {
            return (
              <View key={category._id}>
                <Image source={{ uri: category.image }} className="w-20 h-32" />
              </View>
            );
          })}
      </View>
    </View>
  );
}
