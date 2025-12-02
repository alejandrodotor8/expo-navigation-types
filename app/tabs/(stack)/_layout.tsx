import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="products/index" options={{ title: "All products" }} />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Product details",
          headerStyle: { backgroundColor: "#EAD4FF" },
        }}
      />
      <Stack.Screen name="profile/index" options={{ title: "Profile" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings" }} />
    </Stack>
  );
}
