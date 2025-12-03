import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const quickActions = [
  {
    label: "Repasar Drawer",
    description: "Abre el timeline en Schedule y observa el overlay.",
    icon: "menu-outline",
    color: "#7c3aed",
    href: "/drawer/schedule",
  },
  {
    label: "Practicar Tabs",
    description: "Salta a favoritos para revisar flujos guardados.",
    icon: "star-outline",
    color: "#2563eb",
    href: "/drawer/tabs/favorites",
  },
];

export default function UserScreen() {
  return (
    <View className="flex-1 bg-white px-6 py-8 gap-6">
      <View className="flex-row items-center gap-4">
        <View className="w-16 h-16 rounded-full bg-purple-100 items-center justify-center">
          <Text className="text-2xl font-bold text-purple-500">AD</Text>
        </View>
        <View>
          <Text className="text-xl font-semibold text-gray-900">
            Alejandro Dotor
          </Text>
          <Text className="text-gray-500">Navigator in training</Text>
        </View>
      </View>

      <View className="gap-3">
        <Text className="text-base font-semibold text-gray-700">
          Quick actions (abren rutas)
        </Text>
        {quickActions.map((action) => (
          <Link key={action.label} href={action.href as any}>
            <View className="flex-row bg-purple-50 rounded-2xl p-4 items-center gap-3 border border-purple-100">
              <View className="w-11 h-11 rounded-2xl bg-white items-center justify-center">
                <Ionicons
                  name={action.icon as any}
                  size={22}
                  color={action.color}
                />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900">
                  {action.label}
                </Text>
                <Text className="text-sm text-gray-500">
                  {action.description}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={action.color} />
            </View>
          </Link>
        ))}
      </View>

      <View className="mt-auto gap-3">
        <Text className="text-base font-semibold text-gray-700">
          Latest activity
        </Text>
        <View className="bg-gray-50 rounded-2xl p-4 gap-2 border border-gray-100">
          <Text className="text-sm text-gray-600">Today · 10:42 AM</Text>
          <Text className="text-base font-medium text-gray-900">
            Probó 3 combinaciones Drawer → Tabs → Stack
          </Text>
          <Text className="text-sm text-gray-500">
            Consejo: usa `router.back()` y el botón físico para comparar
            comportamientos.
          </Text>
        </View>
      </View>
    </View>
  );
}
