import React from "react";
import { Text, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-50">
      <Text className="text-lg font-semibold text-gray-800">
        Favorites Screen
      </Text>
      <Text className="mt-2 text-sm text-gray-600 text-center px-4 max-w-xs">
        This is the favorites section where you can save your favorite items.
        Tap the heart icon to add items here.
      </Text>
      <View className="mt-4 flex-row gap-2 justify-center">
        <View className="bg-red-200 px-2 py-1 rounded-full">
          <Text className="text-red-800 text-xs">❤️ Heart Icon</Text>
        </View>
        <View className="bg-yellow-200 px-2 py-1 rounded-full">
          <Text className="text-yellow-800 text-xs">⭐ Star Icon</Text>
        </View>
      </View>
      <View className="mt-4 flex-row gap-2 justify-center">
        <View className="bg-green-200 px-2 py-1 rounded-full">
          <Text className="text-green-800 text-xs">🔍 Search Icon</Text>
        </View>
        <View className="bg-orange-200 px-2 py-1 rounded-full">
          <Text className="text-orange-800 text-xs">⚙️ Settings Icon</Text>
        </View>
      </View>
    </View>
  );
}
