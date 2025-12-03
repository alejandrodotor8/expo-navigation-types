import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-blue-50"
      contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-white rounded-3xl p-6 shadow-sm">
        <Text className="text-sm font-semibold text-blue-500 uppercase">
          Welcome back 👋
        </Text>
        <Text className="text-2xl font-bold text-gray-900 mt-2">
          Let&apos;s explore your navigation playground
        </Text>
        <Text className="text-sm text-gray-500 mt-3">
          Use the tabs to switch between sections and dive into the stack
          examples.
        </Text>
      </View>

      <View className="mt-8">
        <Text className="text-base font-semibold text-gray-800 mb-3">
          Quick navigation
        </Text>
        <View className="flex-row gap-4">
          {[
            { label: "Home", icon: "home" },
            { label: "Favorites", icon: "heart" },
            { label: "Stack", icon: "layers" },
          ].map((item) => (
            <View
              key={item.label}
              className="flex-1 bg-white rounded-2xl items-center justify-center py-6"
            >
              <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mb-2">
                <Ionicons name={item.icon as any} size={20} color="#2563eb" />
              </View>
              <Text className="text-sm font-semibold text-gray-800">
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="mt-8">
        <Text className="text-base font-semibold text-gray-800 mb-3">
          Recent highlights
        </Text>
        <View className="bg-white rounded-3xl p-5 gap-4">
          {[
            {
              title: "Products demo",
              description: "Test the stack navigation with product details.",
            },
            {
              title: "Profile updates",
              description: "Custom headers keep the UX consistent everywhere.",
            },
            {
              title: "Schedule pulse",
              description: "Review today’s agenda in the drawer schedule tab.",
            },
          ].map((item) => (
            <View key={item.title} className="flex-row gap-3">
              <View className="w-10 h-10 rounded-2xl bg-blue-100 items-center justify-center mt-1">
                <Ionicons name="sparkles-outline" size={20} color="#2563eb" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-gray-900">
                  {item.title}
                </Text>
                <Text className="text-sm text-gray-500">{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
