import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import BestSeller from "../components/BestSeller/BestSeller";

export default function HomeScreen({ navigation }) {
  return (
    <View className="py-2 px-3 bg-white mt-10">
      <Header />
      <BestSeller />
    </View>
  );
}
