import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import TopAppBar from "../../components/TopAppBar";
import { useApp } from "../../context/AppContext";

export default function UserManagement() {
  const { adminUsers } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="User Management" rightIcon={null} showBack={false} />
      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        {adminUsers.map((u) => (
          <View key={u.id} className="bg-white border border-outline-variant/40 rounded-md p-4 mb-3">
            <View className="flex-row justify-between items-start">
              <View className="flex-1">
                <Text className="text-base font-semibold text-on-surface">{u.name}</Text>
                <Text className="text-sm text-on-surface-variant">{u.role} · Joined {u.joined}</Text>
              </View>
              <View className={`px-2.5 py-1 rounded-full ${u.status === "Active" ? "bg-primary-container/20" : "bg-error-container"}`}>
                <Text className={`text-xs font-semibold ${u.status === "Active" ? "text-primary" : "text-error"}`}>
                  {u.status}
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3 mt-3 pt-3 border-t border-outline-variant/30">
              <Pressable>
                <Text className="text-sm font-semibold text-primary">View Profile</Text>
              </Pressable>
              <Pressable>
                <Text className="text-sm font-semibold text-error">
                  {u.status === "Active" ? "Suspend" : "Reactivate"}
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
