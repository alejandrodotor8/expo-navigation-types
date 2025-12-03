import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const destinations = [
  {
    title: "Flujos del stack",
    description: "Explora los módulos con headers dinámicos.",
    icon: "grid-outline",
    href: "drawer/tabs/(stack)/products",
    color: "bg-purple-50",
    iconColor: "#7c3aed",
  },
  {
    title: "Perfil del stack",
    description: "Visualiza cómo se ve un detalle dentro del stack.",
    icon: "person-circle-outline",
    href: "drawer/tabs/(stack)/profile",
    color: "bg-rose-50",
    iconColor: "#fb7185",
  },
  {
    title: "Ajustes de navegación",
    description: "Activa switches imaginarios para el header.",
    icon: "settings-outline",
    href: "drawer/tabs/(stack)/settings",
    color: "bg-blue-50",
    iconColor: "#2563eb",
  },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white px-6 py-8 gap-6">
      <View className="gap-2">
        <Text className="text-xs font-semibold text-indigo-500 uppercase">
          Stack playground
        </Text>
        <Text className="text-2xl font-bold text-gray-900">
          Choose a destination
        </Text>
        <Text className="text-sm text-gray-500">
          Each option opens a different screen to showcase the custom stack
          header and navigation behavior.
        </Text>
      </View>

      <View className="gap-4 flex-1">
        {destinations.map((item) => (
          <Link key={item.href} href={item.href as any}>
            <View
              className={`rounded-3xl px-5 py-4 flex-row items-center gap-4 border border-gray-100 ${item.color}`}
            >
              <View className="w-14 h-14 rounded-2xl bg-white items-center justify-center shadow-sm">
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={item.iconColor}
                />
              </View>
              <View className="flex-1 gap-1">
                <Text className="text-base font-semibold text-gray-900">
                  {item.title}
                </Text>
                <Text className="text-sm text-gray-500">
                  {item.description}
                </Text>
              </View>
              <View className="items-center justify-center">
                <Ionicons name="chevron-forward" size={20} color="#0f172a" />
              </View>
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
}
