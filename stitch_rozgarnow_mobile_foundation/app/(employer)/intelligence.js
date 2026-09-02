import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { TrendingUp, Users, Clock, Star } from "lucide-react-native";
import TopAppBar from "../../components/TopAppBar";

const STATS = [
  { icon: Users, label: "Total Applicants", value: "48", change: "+12% this month" },
  { icon: Clock, label: "Avg. Response Time", value: "3.2 hrs", change: "-18% faster" },
  { icon: Star, label: "Employer Rating", value: "4.7", change: "Based on 22 reviews" },
  { icon: TrendingUp, label: "Job Fill Rate", value: "92%", change: "+5% this month" },
];

export default function Intelligence() {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Insights" rightIcon={null} showBack={false} />
      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-sm text-on-surface-variant mb-4">
          Track how your job posts are performing and how workers respond.
        </Text>
        <View className="flex-row flex-wrap gap-3">
          {STATS.map((s) => (
            <View key={s.label} className="w-[47%] bg-white border border-outline-variant/40 rounded-lg p-4">
              <s.icon size={20} color="#006b2c" />
              <Text className="text-2xl font-bold text-on-surface mt-2">{s.value}</Text>
              <Text className="text-xs text-on-surface-variant mt-0.5">{s.label}</Text>
              <Text className="text-xs text-primary font-medium mt-1">{s.change}</Text>
            </View>
          ))}
        </View>

        <View className="bg-white border border-outline-variant/40 rounded-lg p-4 mt-4">
          <Text className="text-base font-semibold text-on-surface mb-3">Top Performing Job Categories</Text>
          {[
            { name: "Plumbing", pct: 82 },
            { name: "Electrician", pct: 67 },
            { name: "Painting", pct: 54 },
          ].map((cat) => (
            <View key={cat.name} className="mb-3">
              <View className="flex-row justify-between mb-1">
                <Text className="text-sm text-on-surface">{cat.name}</Text>
                <Text className="text-sm text-on-surface-variant">{cat.pct}%</Text>
              </View>
              <View className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                <View className="h-2 bg-primary rounded-full" style={{ width: `${cat.pct}%` }} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
