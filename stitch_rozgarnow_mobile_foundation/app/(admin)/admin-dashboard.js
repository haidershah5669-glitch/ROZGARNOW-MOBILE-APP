import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Users, Briefcase, ShieldAlert, TrendingUp } from "lucide-react-native";
import { useApp } from "../../context/AppContext";

const STATS = [
  { icon: Users, label: "Total Users", value: "2,431", color: "#006b2c" },
  { icon: Briefcase, label: "Active Jobs", value: "318", color: "#9d4300" },
  { icon: ShieldAlert, label: "Pending Reports", value: "7", color: "#ba1a1a" },
  { icon: TrendingUp, label: "Growth (30d)", value: "+14%", color: "#a72d51" },
];

export default function AdminDashboard() {
  const { verificationRequests } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="px-5 pt-4 pb-2">
        <Text className="text-xl font-bold text-on-surface">Admin Dashboard</Text>
        <Text className="text-sm text-on-surface-variant mt-0.5">Platform overview & moderation</Text>
      </View>
      <ScrollView className="flex-1 px-5" contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="flex-row flex-wrap gap-3 mt-2">
          {STATS.map((s) => (
            <View key={s.label} className="w-[47%] bg-white border border-outline-variant/40 rounded-lg p-4">
              <s.icon size={20} color={s.color} />
              <Text className="text-2xl font-bold text-on-surface mt-2">{s.value}</Text>
              <Text className="text-xs text-on-surface-variant mt-0.5">{s.label}</Text>
            </View>
          ))}
        </View>

        <Text className="text-lg font-semibold text-on-surface mt-6 mb-3">Pending Verifications</Text>
        {verificationRequests.map((v) => (
          <View key={v.id} className="bg-white border border-outline-variant/40 rounded-md p-4 mb-2.5">
            <Text className="text-base font-semibold text-on-surface">{v.name}</Text>
            <Text className="text-sm text-on-surface-variant">{v.type} · Submitted {v.submitted}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
