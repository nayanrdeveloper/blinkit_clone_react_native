import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import storeByData from "../../data/shopByStoreData";

export default function ShopByStore() {
  return (
    <View className="space-y-2">
      <Text className="text-xl font-semibold">ShopByStore</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-2">
        {storeByData.map((store) => {
          return (
            <View key={store.id}>
              <Image
                source={{ uri: store.image }}
                alt={store.title}
                className="w-28 h-28 rounded-md"
              />
              <Text className="text-center">{store.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
