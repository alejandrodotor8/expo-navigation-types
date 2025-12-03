import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";
import React from "react";

import { CustomDrawer } from "@/components/shared/custom-drawer";
import { CustomHeader } from "@/components/shared/custom-header";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        overlayColor: "rgba(218, 177, 218, 0.4)",
        drawerActiveTintColor: "indigo",
        header: (props) => <CustomHeader {...props} />,
      }}
    >
      <Drawer.Screen
        name="tabs"
        options={{
          title: "Home",
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color="purple" />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          title: "User",
          drawerIcon: () => (
            <Ionicons name="person-circle-outline" size={24} color="purple" />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          title: "Schedule",
          drawerIcon: () => (
            <Ionicons name="calendar-outline" size={24} color="purple" />
          ),
        }}
      />
    </Drawer>
  );
}
