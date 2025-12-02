import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-50">
      <Text className="text-lg font-semibold text-gray-800">Home Screen</Text>
      <Text className="mt-2 text-sm text-gray-600 text-center px-4 max-w-xs">
        Navigate using the tabs below to explore different sections
      </Text>
      <View className="mt-6 flex-row gap-4">
        <View className="bg-blue-200 px-3 py-1 rounded-full">
          <Text className="text-blue-800 text-sm">Home</Text>
        </View>
        <View className="bg-purple-200 px-3 py-1 rounded-full">
          <Text className="text-purple-800 text-sm">Favorites</Text>
        </View>
        <View className="bg-indigo-200 px-3 py-1 rounded-full">
          <Text className="text-indigo-800 text-sm">Stack</Text>
        </View>
      </View>
    </View>
  );
}
