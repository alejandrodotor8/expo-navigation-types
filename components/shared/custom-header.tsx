import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { usePathname, useSegments } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const STACK_HOME_PATHS = ["/drawer/tabs/(stack)", "/drawer/tabs/(stack)/home"];

const normalizePath = (path: string | null) => {
  if (!path || path === "/") {
    return "/drawer";
  }
  return path.endsWith("/") && path !== "/"
    ? path.slice(0, Math.max(1, path.length - 1))
    : path;
};

const toTitleCase = (value: string) =>
  value
    .replace(/\[(.*?)\]/g, "")
    .replace(/\((.*?)\)/g, "$1")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim() || "Navigation";

const buildSegmentedPath = (segments: string[]) => {
  if (segments.length === 0) {
    return "/";
  }
  return `/${segments.join("/")}`;
};

const shouldHideStackHeader = (segments: string[]) => {
  const stackIndex = segments.indexOf("(stack)");
  if (stackIndex === -1) {
    return false;
  }
  const stackSegments = segments.slice(stackIndex + 1);
  if (stackSegments.length === 0) {
    return false;
  }
  const [firstSegment] = stackSegments;
  return Boolean(firstSegment && firstSegment !== "home");
};

const getTitleForPath = (paths: string[]) => {
  const mappings: { match: (path: string) => boolean; title: string }[] = [
    {
      match: (current) =>
        STACK_HOME_PATHS.includes(current) ||
        current.startsWith("/drawer/tabs/(stack)"),
      title: "Stack",
    },
    {
      match: (current) => current === "/drawer/tabs/home",
      title: "Home",
    },
    {
      match: (current) => current === "/drawer/tabs/favorites",
      title: "Favorites",
    },
    {
      match: (current) => current.startsWith("/drawer/user"),
      title: "User",
    },
    {
      match: (current) => current.startsWith("/drawer/schedule"),
      title: "Schedule",
    },
    {
      match: (current) => current.startsWith("/drawer/tabs"),
      title: "Tabs",
    },
    {
      match: (current) => current.startsWith("/drawer"),
      title: "Drawer",
    },
  ];

  const mapping = mappings.find(({ match }) =>
    paths.some((candidate) => match(candidate))
  );
  if (mapping) {
    return mapping.title;
  }

  const fallbackPath = paths[paths.length - 1] ?? "/";
  const [, , ...rest] = fallbackPath.split("/");
  const lastSegment = rest.length > 0 ? rest[rest.length - 1] : undefined;
  if (!lastSegment) {
    return "Drawer";
  }
  return toTitleCase(lastSegment);
};

export const CustomHeader = ({ navigation }: DrawerHeaderProps) => {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const segments = useSegments();
  const normalizedPath = useMemo(() => normalizePath(pathname), [pathname]);
  const segmentedPath = useMemo(() => buildSegmentedPath(segments), [segments]);
  const candidatePaths = useMemo(() => {
    const values = new Set<string>();
    values.add(segmentedPath);
    values.add(normalizedPath);
    return Array.from(values);
  }, [segmentedPath, normalizedPath]);

  const hideHeader = useMemo(() => shouldHideStackHeader(segments), [segments]);
  const title = useMemo(
    () => getTitleForPath(candidatePaths),
    [candidatePaths]
  );

  const isVisible = !hideHeader;
  const animation = useRef(new Animated.Value(isVisible ? 1 : 0)).current;
  const [isRendered, setIsRendered] = useState(isVisible);

  useEffect(() => {
    let mounted = true;
    if (isVisible) {
      setIsRendered(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished && mounted) {
          setIsRendered(false);
        }
      });
    }

    return () => {
      mounted = false;
    };
  }, [isVisible, animation]);

  const translateY = useMemo(
    () =>
      animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-40, 0],
      }),
    [animation]
  );

  if (!isRendered) {
    return null;
  }

  return (
    <Animated.View
      pointerEvents={isVisible ? "auto" : "none"}
      style={{
        paddingTop: insets.top,
        opacity: animation,
        transform: [{ translateY }],
      }}
      className="bg-white border-b border-gray-200"
    >
      <View className="flex-row items-center px-4 py-3 gap-3">
        <Pressable
          onPress={navigation.toggleDrawer}
          accessibilityRole="button"
          accessibilityLabel="Toggle navigation drawer"
          className="p-2 -ml-2"
        >
          <Ionicons name="menu" size={24} color="#7c3aed" />
        </Pressable>
        <Text className="text-xl font-semibold text-gray-900">{title}</Text>
      </View>
    </Animated.View>
  );
};
