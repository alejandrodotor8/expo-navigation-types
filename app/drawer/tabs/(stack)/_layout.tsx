import { Stack } from "expo-router";
import React from "react";

import { CustomStackHeader } from "@/components/shared/custom-stack-header";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => <CustomStackHeader {...props} />,
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
        }}
      />
      <Stack.Screen name="profile/index" options={{ title: "Profile" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings" }} />
    </Stack>
  );
}
