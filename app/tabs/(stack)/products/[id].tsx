import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { Text, View } from "react-native";

import { products } from "@/store/products.store";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  const product = useMemo(() => {
    return products.find((product) => product.id === id);
  }, [id]);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View className=" bg-purple-50 flex-1 p-6 gap-4">
      <Text className="text-2xl font-bold">{product.title}</Text>
      <Text className="text-gray-500">{product.description}</Text>
      <Text className="text-xl font-medium color-purple-500">
        ${product.price}
      </Text>
    </View>
  );
}
