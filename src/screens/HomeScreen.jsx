import { View, Text, ScrollView } from "react-native";
import React from "react";

import Header from "../components/Header/Header";
import BestSeller from "../components/BestSeller/BestSeller";
import Category from "../components/Category/Category";
import ImageCarousal from "../components/ImageCarousal/ImageCarousal";
import ShopByStore from "../components/ShopByStore.js/ShopByStore";
import Feature from "../components/Feature/Feature";
import Brand from "../components/Brand/Brand";
import BrandFocus from "../components/BrandInFocus/BrandFocus";
import CartToast from "../components/CartToast/CartToast";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="py-2 px-3 bg-white mt-10"
    >
      <Header />
      <BestSeller />
      <Category />
      <ImageCarousal />
      <ShopByStore />
      <Feature />
      <Brand />
      <BrandFocus />
    </ScrollView>
  );
}
