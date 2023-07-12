import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { supportData, settingsData } from "../data/userSettingsData";

export default function UserScreen() {
  return (
    <View className="mt-10 p-2 space-y-2">
      <View className="flex-row space-x-2 items-center p-2 bg-white">
        <Text>
          <Icon name="arrow-left" size={25} color="#4C5058" />
        </Text>
        <Text>Profile</Text>
      </View>
      <View className="bg-white py-4 px-2 space-y-1">
        <View>
          <Text className="text-xl font-semibold">Radadiya Nayan</Text>
          <Text className="text-[#909090]">9999 55555</Text>
        </View>
        <View className="bg-[#EDF3FE] flex-row justify-between py-2 px-2 rounded-md">
          {supportData.map((support) => {
            return (
              <View key={support.id}>
                <Text>
                  <MaterialIcon name={support.icon} size={50} color="#4C5058" />
                </Text>
                <Text className="text-center text-gray-700">
                  {support.title}
                </Text>
              </View>
            );
          })}
        </View>
        <View className="">
          {settingsData.map((setting, index) => {
            return (
              <View key={index} className="">
                <Text className="text-[#83838D] font-semibold text-lg uppercase">
                  {setting.header}
                </Text>
                <View className="space-y-1">
                  {setting.menus.map((menu) => {
                    return (
                      <View className="flex flex-row items-center justify-between py-2">
                        <View
                          key={menu.id}
                          className="flex flex-row items-center space-x-2"
                        >
                          <View>
                            <View className="rounded-full bg-[#F5F6FA] p-1">
                              <MaterialIcon
                                name={menu.icon}
                                size={28}
                                color="#BEBEC8"
                              />
                            </View>
                          </View>
                          <View>
                            <Text className="text-[#393A3E]">{menu.title}</Text>
                          </View>
                        </View>
                        <View>
                          <Text className="">
                            <MaterialIcon
                              name="chevron-right"
                              size={35}
                              color="#4C5058"
                            />
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
