import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useGetCategoriesQuery } from "../../api/categoryApi";

export default function Category() {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const navigation = useNavigation();
  return (
    <View className="space-y-2">
      <Text className="text-xl font-semibold">Shop by category</Text>
      <View className="flex flex-row flex-wrap justify-between gap-y-2">
        {categories &&
          categories.map((category) => {
            return (
              <TouchableOpacity
                key={category._id}
                onPress={() => {
                  navigation.navigate("SubCategoryProductScreen", {
                    categoryId: category._id,
                  });
                }}
              >
                <Image source={{ uri: category.image }} className="w-20 h-32" />
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
}
