import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

export default function SearchBar() {
  return (
    <View className="flex flex-row bg-[#F3F4F8] rounded-md h-10 items-center pl-2">
      <View>
        <Text>
          <Icon name="search" size={25} color="#000" />
        </Text>
      </View>
      <View>
        <TextInput className="pl-2 w-[305]" placeholder="Search Product..." />
      </View>
      <View className="">
        <Text>
          <Icon name="microphone" size={25} color="#000" />
        </Text>
      </View>
    </View>
  );
}
