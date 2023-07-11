import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProductByBrand from "../screens/ProductByBrand";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import SubCategoryProductScreen from "../screens/SubCategoryProductScreen";

const Stack = createNativeStackNavigator();

export default function index() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen
        name="SubCategoryProductScreen"
        component={SubCategoryProductScreen}
      />
      <Stack.Screen name="ProductsByBrand" component={ProductByBrand} />
    </Stack.Navigator>
  );
}
