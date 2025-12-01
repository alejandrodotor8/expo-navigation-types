import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        //headerShown: false
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home" }} />
      <Stack.Screen name="products/index" options={{ title: "Products" }} />
      <Stack.Screen name="profile/index" options={{ title: "Profile" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings" }} />
    </Stack>
  );
}
