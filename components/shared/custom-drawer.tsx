import {
  DrawerContentComponentProps,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 relative">
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <View className="flex justify-center items-center mx-3 p-10 h-[150px] rounded-xl bg-purple-500 my-6">
          <View className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
            <Text className="text-purple-500 text-3xl font-black">AD</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </View>

      <View className="w-full absolute bottom-4 right-4 flex flex-row justify-between">
        <Text className="text-xs text-center text-gray-500 ml-14">v1.0.0</Text>
        <Text className="text-xs text-center text-gray-500">
          © {new Date().getFullYear()} alejandrodotor8 💜
        </Text>
      </View>
    </View>
  );
};
