import React from "react";
import { FlatList, Text, View } from "react-native";

import { products } from "@/store/products.store";
import { Link } from "expo-router";

export default function Products() {
  return (
    <View className="flex-1 bg-white px-4">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </View>
  );
}

const ProductItem = ({ item }: { item: (typeof products)[0] }) => {
  return (
    <View className="flex-1 bg-purple-50 rounded-lg py-6 px-4 gap-4 relative mt-2">
      <Text className="text-xl font-bold">{item.title}</Text>
      <Text className="text-gray-500" numberOfLines={2}>
        {item.description}
      </Text>
      <Text className="text-xl font-medium color-purple-500">
        ${item.price}
      </Text>
      <View className="absolute bottom-3 right-3">
        <Link href={`/drawer/tabs/(stack)/products/${item.id}`}>
          <View className="bg-purple-200 px-2 py-1 rounded-lg">
            <Text className="font-medium">Ver detalles</Text>
          </View>
        </Link>
      </View>
    </View>
  );
};
