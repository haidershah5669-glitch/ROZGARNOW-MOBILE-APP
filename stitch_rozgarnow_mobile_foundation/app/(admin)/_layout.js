import React from "react";
import { Tabs } from "expo-router";
import { LayoutGrid, Users, ShieldCheck, Flag } from "lucide-react-native";

export default function AdminLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#006b2c",
        tabBarInactiveTintColor: "#6e7b6c",
        tabBarStyle: { borderTopColor: "#bdcaba", height: 60, paddingBottom: 8, paddingTop: 6 },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
      }}
    >
      <Tabs.Screen name="admin-dashboard" options={{ title: "Dashboard", tabBarIcon: ({ color, size }) => <LayoutGrid color={color} size={size} /> }} />
      <Tabs.Screen name="user-management" options={{ title: "Users", tabBarIcon: ({ color, size }) => <Users color={color} size={size} /> }} />
      <Tabs.Screen name="verification-requests" options={{ title: "Verify", tabBarIcon: ({ color, size }) => <ShieldCheck color={color} size={size} /> }} />
      <Tabs.Screen name="moderation-safety" options={{ title: "Moderation", tabBarIcon: ({ color, size }) => <Flag color={color} size={size} /> }} />
    </Tabs>
  );
}
