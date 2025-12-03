import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const getTitle = ({ options, route }: NativeStackHeaderProps) => {
  if (typeof options.headerTitle === "string") {
    return options.headerTitle;
  }
  if (options.title) {
    return options.title;
  }
  return route.name;
};

export const CustomStackHeader = (props: NativeStackHeaderProps) => {
  const insets = useSafeAreaInsets();
  const title = useMemo(() => getTitle(props), [props]);
  const canGoBack = props.navigation.canGoBack();

  return (
    <View
      style={{ paddingTop: insets.top }}
      className="bg-white border-b border-gray-200"
    >
      <View className="flex-row items-center px-4 py-3 gap-3">
        {canGoBack && (
          <Pressable
            onPress={props.navigation.goBack}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            className="p-2 -ml-2"
          >
            <Ionicons name="chevron-back" size={24} color="#0f172a" />
          </Pressable>
        )}
        <Text className="text-xl font-semibold text-gray-900 flex-1">
          {title}
        </Text>
      </View>
    </View>
  );
};
