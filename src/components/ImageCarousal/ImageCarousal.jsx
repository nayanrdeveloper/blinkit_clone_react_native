import { View, Text, Image, ScrollView } from "react-native";
import imageCarousalData from "../../data/imageCarousal";
import React from "react";

export default function ImageCarousal() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
      {imageCarousalData.map((imageCarousal) => {
        return (
          <View key={imageCarousal.id} className="p-2">
            <Image
              source={{ uri: imageCarousal.image }}
              alt={imageCarousal.title}
              className="w-80 h-48 rounded-md"
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
