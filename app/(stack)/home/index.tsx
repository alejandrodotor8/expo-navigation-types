import React from "react";
import { View } from "react-native";

import { CustomButton } from "@/components/shared/custom-button";

export default function HomeScreen() {
  return (
    <View className="flex-1 p-4 items-start justify-start bg-white gap-4">
      {/* <Text className="text-2xl font-medium text-purple-900 text-center w-full">
        Home screen
      </Text> */}

      <CustomButton href="/products">Products</CustomButton>
      <CustomButton href="/profile" color="bg-pink-600">
        Profile
      </CustomButton>
      <CustomButton href="/settings">Settings</CustomButton>
    </View>
  );
}
