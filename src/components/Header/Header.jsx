import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <View>
      <View>
        <Text className="text-xl font-semibold">Delivery In</Text>
        <View className="flex flex-row justify-between py-2 items-center">
          <View className="flex flex-col space-y-2">
            <Text className="text-2xl font-semibold">15 minutes</Text>
            <Text>XP55+, Spice Garden Layout</Text>
          </View>
          <View>
            <Text>
              <Icon name="user" size={30} color="#000" />
            </Text>
          </View>
        </View>
      </View>
      <SearchBar />
    </View>
  );
}
