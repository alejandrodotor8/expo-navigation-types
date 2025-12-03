import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "indigo", headerShown: false }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="reader-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
