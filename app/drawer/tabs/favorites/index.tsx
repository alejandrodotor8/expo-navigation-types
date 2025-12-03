import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <ScrollView
      className="flex-1 bg-purple-50"
      contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-white rounded-3xl p-5 shadow-sm">
        <Text className="text-sm font-semibold text-purple-500 uppercase">
          Curated list
        </Text>
        <Text className="text-2xl font-bold text-gray-900 mt-2">
          Your favorites in one place
        </Text>
        <Text className="text-sm text-gray-500 mt-3">
          Add any product from the stack section to quickly revisit it later.
        </Text>
      </View>

      <View className="mt-8 gap-4">
        {[
          {
            title: "Purple sneakers",
            description: "Comfortable and stylish kick-off for daily walks.",
            tag: "Lifestyle",
            iconColor: "#a855f7",
          },
          {
            title: "Indigo headphones",
            description: "Noise-cancelling with immersive sound profiles.",
            tag: "Tech",
            iconColor: "#6366f1",
          },
          {
            title: "Stack hoodie",
            description: "Stay cozy while testing custom navigation flows.",
            tag: "Apparel",
            iconColor: "#7c3aed",
          },
        ].map((item) => (
          <View key={item.title} className="bg-white rounded-3xl p-4 flex-row gap-4">
            <View className="w-14 h-14 rounded-2xl bg-purple-100 items-center justify-center">
              <Ionicons
                name="heart"
                size={22}
                color={item.iconColor as string}
              />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-semibold text-gray-500 uppercase">
                  {item.tag}
                </Text>
                <Ionicons name="star" size={18} color="#facc15" />
              </View>
              <Text className="text-lg font-semibold text-gray-900">
                {item.title}
              </Text>
              <Text className="text-sm text-gray-500">{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View className="mt-8 bg-white rounded-3xl p-4 flex-row items-center gap-3">
        <Ionicons name="add-circle" size={32} color="#7c3aed" />
        <View className="flex-1">
          <Text className="text-base font-semibold text-gray-900">
            Add more favorites
          </Text>
          <Text className="text-sm text-gray-500">
            Head to the stack tab and tap the heart icon in any product.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
