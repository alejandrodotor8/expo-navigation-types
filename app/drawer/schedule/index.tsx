import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Text, View } from "react-native";

export default function ScheduleScreen() {
  const schedule = [
    {
      id: "1",
      title: "Drawer warm-up",
      time: "09:00 AM",
      description:
        "Abre y cierra el drawer varias veces comprobando el overlay y el custom header.",
      color: "bg-purple-50",
      iconColor: "#7c3aed",
    },
    {
      id: "2",
      title: "Tabs relay",
      time: "11:30 AM",
      description:
        "Navega entre Home y Favorites midiendo la persistencia de estado.",
      color: "bg-blue-50",
      iconColor: "#2563eb",
    },
    {
      id: "3",
      title: "Stack deep dive",
      time: "03:15 PM",
      description:
        "Empuja rutas de productos y regresa usando el header personalizado.",
      color: "bg-amber-50",
      iconColor: "#f59e0b",
    },
  ];

  return (
    <View className="flex-1 bg-white px-4 py-6">
      <Text className="text-2xl font-semibold text-gray-900 mb-2">
        Navigation rehearsal
      </Text>
      <Text className="text-sm text-gray-500 mb-4">
        Repite estos hitos para interiorizar drawers, tabs y stacks en Expo
        Router.
      </Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item }) => (
          <View className={`rounded-2xl p-4 ${item.color}`}>
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-full bg-white items-center justify-center">
                <Ionicons name="time-outline" size={20} color={item.iconColor} />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900">
                  {item.title}
                </Text>
                <Text className="text-sm text-gray-500">{item.time}</Text>
              </View>
            </View>
            <Text className="text-sm text-gray-600 mt-3">
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
