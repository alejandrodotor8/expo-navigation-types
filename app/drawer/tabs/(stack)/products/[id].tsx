import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { Text, View } from "react-native";

import { products } from "@/store/products.store";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  const product = useMemo(() => {
    return products.find((item) => item.id === id);
  }, [id]);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-purple-50 p-6 gap-4 border-t border-purple-100">
      <Text className="text-xs font-semibold text-purple-500 uppercase">
        Navegación en Stack
      </Text>
      <Text className="text-3xl font-bold text-gray-900">{product.title}</Text>
      <Text className="text-base text-gray-600">{product.description}</Text>
      <View className="mt-4 bg-white rounded-2xl p-4 gap-2">
        <Text className="text-sm font-semibold text-gray-500 uppercase">
          Precio
        </Text>
        <Text className="text-3xl font-bold text-purple-600">
          ${product.price}
        </Text>
        <Text className="text-sm text-gray-500">
          Empuja esta pantalla desde la lista y usa el botón back para volver al
          stack anterior.
        </Text>
      </View>
      <Text className="text-sm text-gray-500">
        Tip: desde aquí también puedes abrir el drawer para comprobar cómo
        conviven los headers.
      </Text>
    </View>
  );
}
