import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import SubCategoryProductCard from "../components/Product/SubCategoryProductCard";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useGetSubCategoriesByCategoryQuery } from "../api/subCategoryApi";
import {
  useGetProductByCategoryQuery,
  useGetProductBySubCategoryQuery,
} from "../api/productApi";

export default function SubCategoryProductScreen({ route }) {
  const { categoryId } = route.params;
  const navigation = useNavigation();
  const { data: subCategories, isLoading: isCategoryLoading } =
    useGetSubCategoriesByCategoryQuery("64a966e7b9b0a074b61c90a8");
  const { data: products, isLoading: isProductLoading } =
    useGetProductByCategoryQuery(categoryId);
  return (
    <View className="px-3 bg-white mt-10 flex flex-row space-x-0 space-y-2">
      <View className="space-y-2 border-r border-gray-100 w-16 mt-2">
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-2">
          {subCategories &&
            subCategories.map((subCategory) => {
              return (
                <View key={subCategory._id} className="space-y-1">
                  <Image
                    source={{ uri: subCategory.image }}
                    alt={subCategory.name}
                    className="w-14 h-20 p-2 bg-[#F3F4F8] object-cover"
                  />
                  <Text className="w-18  text-[#BABDC4]">
                    {subCategory.name}
                  </Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-[#F5F6FB]">
        <View className="flex flex-row items-center space-x-3 ml-5 mt-3">
          <Text onPress={() => navigation.goBack()}>
            <FontAwesomeIcon name="arrow-left" size={25} color="#000" />
          </Text>
          <Text>Go back</Text>
        </View>
        <View className="flex flex-row flex-wrap gap-2 mx-2 mt-1">
          {products &&
            products.map((product) => {
              return (
                <View key={product._id} className="">
                  <SubCategoryProductCard product={product} />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
