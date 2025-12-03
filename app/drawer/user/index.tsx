import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function UserScreen() {
  return (
    <View className="flex-1 bg-white px-6 py-8 gap-6">
      <View className="flex-row items-center gap-4">
        <View className="w-16 h-16 rounded-full bg-purple-100 items-center justify-center">
          <Text className="text-2xl font-bold text-purple-500">AD</Text>
        </View>
        <View>
          <Text className="text-xl font-semibold text-gray-900">
            Alejandro Dotor
          </Text>
          <Text className="text-gray-500">alejandro@example.com</Text>
        </View>
      </View>

      <View className="gap-3">
        <Text className="text-base font-semibold text-gray-700">
          Quick actions
        </Text>
        <View className="flex-row bg-purple-50 rounded-2xl p-4 items-center gap-3">
          <Ionicons name="create-outline" size={24} color="#7c3aed" />
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900">
              Edit profile
            </Text>
            <Text className="text-sm text-gray-500">
              Update your personal information
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#7c3aed" />
        </View>
        <View className="flex-row bg-blue-50 rounded-2xl p-4 items-center gap-3">
          <Ionicons name="notifications-outline" size={24} color="#2563eb" />
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900">
              Notifications
            </Text>
            <Text className="text-sm text-gray-500">
              Manage alerts and reminders
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#2563eb" />
        </View>
      </View>

      <View className="mt-auto gap-3">
        <Text className="text-base font-semibold text-gray-700">
          Latest activity
        </Text>
        <View className="bg-gray-50 rounded-2xl p-4 gap-2">
          <Text className="text-sm text-gray-600">Today · 10:42 AM</Text>
          <Text className="text-base font-medium text-gray-900">
            Reviewed 8 new products
          </Text>
          <Text className="text-sm text-gray-500">
            Check the analytics tab to see performance trends.
          </Text>
        </View>
      </View>
    </View>
  );
}
