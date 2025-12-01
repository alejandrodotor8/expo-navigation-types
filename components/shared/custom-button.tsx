import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export const CustomButton = ({
  href,
  children,
  color = "bg-purple-600",
}: {
  href: any;
  children: string;
  color?: "bg-blue-600" | "bg-purple-600" | "bg-pink-600";
}) => {
  return (
    <Link href={href}>
      <View className={`w-full p-3  ${color} rounded shadow `}>
        <Text className="text-center text-xl font-medium text-white">
          {children}
        </Text>
      </View>
    </Link>
  );
};
