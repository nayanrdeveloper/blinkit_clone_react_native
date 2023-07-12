import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Text className="text-xl font-semibold">Delivery In</Text>
        <View className="flex flex-row justify-between py-2 items-center">
          <View className="flex flex-col space-y-2">
            <Text className="text-2xl font-semibold">15 minutes</Text>
            <Text>XP55+, Spice Garden Layout</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserScreen", {});
            }}
          >
            <Text>
              <Icon name="user" size={30} color="#000" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar />
    </View>
  );
}
