import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Profile() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ padding: 24, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="items-center gap-4 mb-6">
        <View className="w-28 h-28 rounded-full bg-purple-100 items-center justify-center">
          <Text className="text-4xl font-black text-purple-600">AD</Text>
        </View>
        <View className="items-center gap-1">
          <Text className="text-2xl font-bold text-gray-900">
            Alejandro Dotor
          </Text>
          <Text className="text-sm text-gray-500">Product Explorer</Text>
        </View>
        <View className="flex-row gap-2">
          {["Navigation", "Stack", "Native"].map((tag) => (
            <View
              key={tag}
              className="bg-purple-50 px-3 py-1 rounded-full border border-purple-100"
            >
              <Text className="text-xs font-semibold text-purple-600">
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="flex-row gap-3 mb-8">
        {[
          { label: "Projects", value: "18" },
          { label: "Experiments", value: "42" },
          { label: "Reviews", value: "126" },
        ].map((item) => (
          <View
            key={item.label}
            className="flex-1 bg-gray-50 rounded-2xl p-4 items-center"
          >
            <Text className="text-2xl font-bold text-gray-900">
              {item.value}
            </Text>
            <Text className="text-xs font-semibold text-gray-500 uppercase">
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      <View className="gap-3">
        <Text className="text-base font-semibold text-gray-900">
          Latest activity
        </Text>
        {[1, 2, 3].map((index) => (
          <View
            key={index}
            className="bg-gray-50 rounded-3xl p-4 flex-row gap-3 border border-gray-100"
          >
            <View className="w-12 h-12 rounded-2xl bg-white items-center justify-center">
              <Ionicons name="flash-outline" size={20} color="#7c3aed" />
            </View>
            <View className="flex-1">
              <Text className="text-sm text-gray-500">
                Today · {9 + index}:0{index} AM
              </Text>
              <Text className="text-base font-semibold text-gray-900">
                Tweaked stack layout sample #{index}
              </Text>
              <Text className="text-sm text-gray-600">
                Verified headers stay in sync across drawer, tabs and stack.
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
