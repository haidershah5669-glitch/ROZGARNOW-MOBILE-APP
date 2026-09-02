import React from "react";
import { Tabs } from "expo-router";
import { LayoutGrid, PlusSquare, Users, BarChart3, User } from "lucide-react-native";

export default function EmployerLayout() {
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
      <Tabs.Screen name="employer-dashboard" options={{ title: "Dashboard", tabBarIcon: ({ color, size }) => <LayoutGrid color={color} size={size} /> }} />
      <Tabs.Screen name="post-job" options={{ title: "Post Job", tabBarIcon: ({ color, size }) => <PlusSquare color={color} size={size} /> }} />
      <Tabs.Screen name="manage-applicants" options={{ title: "Applicants", tabBarIcon: ({ color, size }) => <Users color={color} size={size} /> }} />
      <Tabs.Screen name="intelligence" options={{ title: "Insights", tabBarIcon: ({ color, size }) => <BarChart3 color={color} size={size} /> }} />
      <Tabs.Screen name="employer-profile" options={{ title: "Profile", tabBarIcon: ({ color, size }) => <User color={color} size={size} /> }} />
    </Tabs>
  );
}
