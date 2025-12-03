import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React, { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const insets = useSafeAreaInsets();
  const routes = props.state.routes;

  const footerYear = useMemo(() => new Date().getFullYear(), []);

  const renderDrawerRow = (
    route: (typeof routes)[number],
    index: number,
  ) => {
    const focused = props.state.index === index;
    const descriptor = props.descriptors[route.key];
    const options = descriptor?.options ?? {};
    const label =
      (typeof options.drawerLabel === "string"
        ? options.drawerLabel
        : options.title) ?? route.name;

    const icon =
      typeof options.drawerIcon === "function"
        ? options.drawerIcon({
            focused,
            size: 20,
            color: focused ? "#4c1d95" : "#7e22ce",
          })
        : null;

    return (
      <Pressable
        key={route.key}
        onPress={() => props.navigation.navigate(route.name as never)}
        className={`flex-row items-center justify-between px-4 py-4 rounded-2xl border ${
          focused ? "bg-white border-transparent" : "bg-white/70 border-white"
        }`}
      >
        <View className="flex-row items-center gap-3">
          <View
            className={`w-10 h-10 rounded-2xl items-center justify-center ${
              focused ? "bg-purple-100" : "bg-white"
            }`}
          >
            {icon}
          </View>
          <Text
            className={`text-base font-semibold ${
              focused ? "text-gray-900" : "text-gray-600"
            }`}
          >
            {label}
          </Text>
        </View>
        <View className="w-8 h-8 rounded-full bg-purple-50 items-center justify-center">
          <Ionicons name="chevron-forward" size={18} color="#7c3aed" />
        </View>
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-purple-50">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: insets.top + 24,
          paddingBottom: 24,
          paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-purple-600 rounded-3xl p-6 mb-6 shadow-lg">
          <Text className="text-sm font-semibold text-purple-100 uppercase">
            Navigation suite
          </Text>
          <Text className="text-2xl font-bold text-white mt-2">
            Hola, Alejandro 👋
          </Text>
          <Text className="text-sm text-purple-100 mt-2">
            Explora las opciones del drawer y los tabs personalizados.
          </Text>
          <View className="flex-row gap-3 mt-5">
            {["Drawer", "Tabs", "Stack"].map((tag) => (
              <View
                key={tag}
                className="bg-white/15 rounded-full px-3 py-1"
              >
                <Text className="text-xs font-medium text-white">{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="gap-3">{routes.map(renderDrawerRow)}</View>
      </DrawerContentScrollView>

      <View
        style={{ paddingBottom: insets.bottom + 12 }}
        className="px-6 pt-4 border-t border-white/40"
      >
        <Text className="text-xs text-center text-gray-500 mb-1">
          v1.0.0 · Tip: Usa el tab Stack para navegar a productos.
        </Text>
        <Text className="text-xs text-center text-gray-500">
          © {footerYear} alejandrodotor8 💜
        </Text>
      </View>
    </View>
  );
};
