import React from "react";
import { View } from "react-native";

import { CustomButton } from "@/components/shared/custom-button";

export default function HomeScreen() {
  return (
    <View className="flex-1 p-4 items-start justify-start bg-white gap-4">
      <CustomButton href="drawer/tabs/(stack)/products">Products</CustomButton>
      <CustomButton href="drawer/tabs/(stack)/profile" color="bg-pink-600">
        Profile
      </CustomButton>
      <CustomButton href="drawer/tabs/(stack)/settings">Settings</CustomButton>
    </View>
  );
}
