import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, Switch, Text, View } from "react-native";

const toggles = [
  {
    label: "Dark theme preview",
    description: "Show the stack demo in dark mode.",
  },
  {
    label: "Haptics feedback",
    description: "Trigger subtle haptics on navigation actions.",
  },
  {
    label: "Auto refresh data",
    description: "Refresh stack samples every 15 minutes.",
  },
];

const integrations = [
  {
    title: "Design tokens",
    description: "Sync Tailwind and native styles automatically.",
    icon: "color-palette-outline",
    color: "#8b5cf6",
  },
  {
    title: "Performance monitor",
    description: "Track navigation timings across tabs.",
    icon: "speedometer-outline",
    color: "#2563eb",
  },
];

export default function Settings() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ padding: 24, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="gap-2 mb-6">
        <Text className="text-xs font-semibold text-indigo-500 uppercase">
          Preferences
        </Text>
        <Text className="text-2xl font-bold text-gray-900">
          Tune your stack experience
        </Text>
        <Text className="text-sm text-gray-500">
          Toggle features and review integrations used by this demo app.
        </Text>
      </View>

      <View className="gap-4 mb-8">
        {toggles.map((item) => (
          <View
            key={item.label}
            className="flex-row items-center gap-4 bg-gray-50 rounded-3xl px-4 py-3"
          >
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">
                {item.label}
              </Text>
              <Text className="text-sm text-gray-500">{item.description}</Text>
            </View>
            <Switch value />
          </View>
        ))}
      </View>

      <View className="gap-3">
        <Text className="text-base font-semibold text-gray-900">
          Integrations
        </Text>
        {integrations.map((integration) => (
          <View
            key={integration.title}
            className="flex-row gap-4 bg-gray-50 rounded-3xl p-4 border border-gray-100"
          >
            <View className="w-12 h-12 rounded-2xl bg-white items-center justify-center">
              <Ionicons
                name={integration.icon as any}
                size={22}
                color={integration.color}
              />
            </View>
            <View className="flex-1 gap-1">
              <Text className="text-base font-semibold text-gray-900">
                {integration.title}
              </Text>
              <Text className="text-sm text-gray-500">
                {integration.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
