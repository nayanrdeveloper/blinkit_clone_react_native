import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";

export default function CartToast() {
  const navigation = useNavigation();
  const { products, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  return (
    <View style={styles.container} className="mx-2">
      {products.length >= 1 && (
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <View className="flex-row justify-between items-center bg-green-500 px-2 py-2 rounded-lg">
            <View className="flex-row items-center space-x-2">
              <View>
                {products.length >= 1 && (
                  <Image
                    source={{
                      uri: products[
                        products.length <= 1 ? 0 : products.length - 1
                      ].images[0],
                    }}
                    alt={products[0].name}
                    className="w-10 h-10 rounded-lg"
                  />
                )}
              </View>
              <View>
                <Text className="text-white">{totalQuantity} Items</Text>
                <Text className="text-white">₹ {totalPrice}</Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text className="text-white">View Cart</Text>
              <Text>
                <Icon name="caretright" size={10} color="#fff" />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = {
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
};
