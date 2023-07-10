import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import BestSeller from "../components/BestSeller/BestSeller";
import Category from "../components/Category/Category";
import ImageCarousal from "../components/ImageCarousal/ImageCarousal";
import ShopByStore from "../components/ShopByStore.js/ShopByStore";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView className="py-2 px-3 bg-white mt-10">
      <Header />
      <BestSeller />
      <Category />
      <ImageCarousal />
      <ShopByStore />
    </ScrollView>
  );
}
