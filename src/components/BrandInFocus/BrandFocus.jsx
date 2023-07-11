import { View, Text, Image } from "react-native";
import React from "react";
import brandInFocusData from "../../data/brandInFocusData";

export default function BrandFocus() {
  return (
    <View className="space-y-2">
      <Text className="text-xl font-semibold">Brands in focus</Text>
      <View className="space-y-2">
        {brandInFocusData.map((brandInFocus) => {
          return (
            <View key={brandInFocus.id}>
              <Image
                source={{ uri: brandInFocus.image }}
                alt={brandInFocus.title}
                className="h-44 rounded-md"
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
