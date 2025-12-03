import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

import { products } from "@/store/products.store";

export default function Products() {
  return (
    <View className="flex-1 bg-white px-4">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="h-4" />}
        ListHeaderComponent={
          <View className="py-6 gap-2">
            <Text className="text-xs font-semibold text-indigo-500 uppercase">
              Stack demo
            </Text>
            <Text className="text-2xl font-bold text-gray-900">
              Explora productos y empuja nuevas pantallas
            </Text>
            <Text className="text-sm text-gray-500">
              Usa estas tarjetas para navegar al detalle, volver con el header y
              practicar transiciones del stack.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const ProductItem = ({ item }: { item: (typeof products)[0] }) => {
  return (
    <View className="flex-1 bg-purple-50 rounded-3xl py-6 px-5 gap-4 relative mt-2 border border-purple-100">
      <Text className="text-xl font-bold text-gray-900">{item.title}</Text>
      <Text className="text-gray-600" numberOfLines={3}>
        {item.description}
      </Text>
      <Text className="text-base font-semibold text-purple-600">
        ${item.price}
      </Text>
      <View className="absolute bottom-4 right-4">
        <Link href={`/drawer/tabs/(stack)/products/${item.id}`}>
          <View className="bg-purple-600 px-3 py-2 rounded-full">
            <Text className="font-semibold text-white text-sm">
              Ver producto
            </Text>
          </View>
        </Link>
      </View>
    </View>
  );
};
