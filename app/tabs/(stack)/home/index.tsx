import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CustomButton } from "@/components/shared/custom-button";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, flex: 1, backgroundColor: "white" }}>
      <View className="flex-1 p-4 items-start justify-start bg-white gap-4">
        <CustomButton href="/tabs/(stack)/products">Products</CustomButton>
        <CustomButton href="/tabs/(stack)/profile" color="bg-pink-600">
          Profile
        </CustomButton>
        <CustomButton href="/tabs/(stack)/settings">Settings</CustomButton>
      </View>
    </View>
  );
}
