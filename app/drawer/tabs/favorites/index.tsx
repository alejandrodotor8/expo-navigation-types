import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
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
          Saved flows
        </Text>
        <Text className="text-2xl font-bold text-gray-900 mt-2">
          Repite tus combinaciones favoritas
        </Text>
        <Text className="text-sm text-gray-500 mt-3">
          Guarda secuencias de navegación para repasarlas rápidamente desde
          cualquier pestaña.
        </Text>
      </View>

      <View className="mt-8 gap-4">
        {[
          {
            title: "Drawer → Tabs → Stack",
            description:
              "Abre el drawer, toca Tabs y empuja el flujo de productos.",
            tag: "Multinav",
            iconColor: "#a855f7",
            href: "/drawer/tabs/(stack)/products",
          },
          {
            title: "Stack detalles",
            description:
              "Entra al módulo Stack Push & Modals y vuelve con el header.",
            tag: "Stack",
            iconColor: "#6366f1",
            href: "/drawer/tabs/(stack)/products/3",
          },
          {
            title: "Drawer timeline",
            description:
              "Visita Schedule desde el drawer para repasar los hitos.",
            tag: "Drawer",
            iconColor: "#7c3aed",
            href: "/drawer/schedule",
          },
        ].map((item) => (
          <Link key={item.title} href={item.href as any}>
            <View className="bg-white rounded-3xl p-4 flex-row gap-4">
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
                <Text className="text-sm text-gray-500">
                  {item.description}
                </Text>
              </View>
            </View>
          </Link>
        ))}
      </View>

      <View className="mt-8 bg-white rounded-3xl p-4 flex-row items-center gap-3">
        <Ionicons name="add-circle" size={32} color="#7c3aed" />
        <View className="flex-1">
          <Text className="text-base font-semibold text-gray-900">
            Añadir un nuevo flujo
          </Text>
          <Text className="text-sm text-gray-500">
            Ve al stack, abre un módulo y toca el icono de corazón para
            guardarlo.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
