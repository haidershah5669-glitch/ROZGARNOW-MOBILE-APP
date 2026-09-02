import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Flag, AlertTriangle } from "lucide-react-native";
import TopAppBar from "../../components/TopAppBar";

const REPORTS = [
  { id: "r1", type: "Inappropriate job listing", reporter: "Worker - Usman Tariq", severity: "High" },
  { id: "r2", type: "Suspicious payment request", reporter: "Worker - Bilal Ahmed", severity: "Medium" },
  { id: "r3", type: "Fake business profile", reporter: "System Flag", severity: "High" },
];

const SEVERITY_STYLES = {
  High: { bg: "bg-error-container", text: "text-error" },
  Medium: { bg: "bg-secondary-container/20", text: "text-secondary" },
};

export default function ModerationSafety() {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Moderation & Safety" rightIcon={null} showBack={false} />
      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        {REPORTS.map((r) => {
          const style = SEVERITY_STYLES[r.severity];
          return (
            <View key={r.id} className="bg-white border border-outline-variant/40 rounded-md p-4 mb-3">
              <View className="flex-row items-start justify-between mb-2">
                <View className="flex-row items-center gap-2 flex-1 pr-2">
                  <Flag size={16} color="#ba1a1a" />
                  <Text className="text-base font-semibold text-on-surface flex-1">{r.type}</Text>
                </View>
                <View className={`px-2.5 py-1 rounded-full ${style.bg}`}>
                  <Text className={`text-xs font-semibold ${style.text}`}>{r.severity}</Text>
                </View>
              </View>
              <Text className="text-sm text-on-surface-variant mb-3">Reported by {r.reporter}</Text>
              <View className="flex-row gap-3 pt-3 border-t border-outline-variant/30">
                <Pressable>
                  <Text className="text-sm font-semibold text-primary">Review</Text>
                </Pressable>
                <Pressable>
                  <Text className="text-sm font-semibold text-error">Take Action</Text>
                </Pressable>
                <Pressable>
                  <Text className="text-sm font-semibold text-on-surface-variant">Dismiss</Text>
                </Pressable>
              </View>
            </View>
          );
        })}
        <View className="flex-row items-center gap-2 bg-tertiary/10 rounded-lg p-3 mt-2">
          <AlertTriangle size={16} color="#a72d51" />
          <Text className="text-xs text-tertiary flex-1">
            All flagged content is reviewed within 24 hours per platform safety policy.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
