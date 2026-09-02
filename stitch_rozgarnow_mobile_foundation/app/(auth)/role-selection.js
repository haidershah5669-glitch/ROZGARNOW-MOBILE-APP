import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { HardHat, Briefcase, ShieldCheck, ChevronRight } from "lucide-react-native";

const ROLES = [
  {
    key: "worker",
    title: "Find Work",
    subtitle: "I'm looking for daily-wage jobs",
    icon: HardHat,
    route: "/worker-signup",
  },
  {
    key: "employer",
    title: "Hire Workers",
    subtitle: "I want to post jobs and hire",
    icon: Briefcase,
    route: "/employer-signup",
  },
  {
    key: "admin",
    title: "Admin Access",
    subtitle: "Platform management",
    icon: ShieldCheck,
    route: "/login",
  },
];

export default function RoleSelection() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-surface px-6 pt-10">
      <Text className="text-2xl font-bold text-on-surface mb-2">Choose Your Role</Text>
      <Text className="text-base text-on-surface-variant mb-8">
        Select how you'd like to use RozgarNow.
      </Text>
      <View className="gap-4">
        {ROLES.map((r) => (
          <Pressable
            key={r.key}
            onPress={() => router.push(r.route)}
            className="flex-row items-center bg-white border border-outline-variant/40 rounded-lg p-4 active:opacity-80"
          >
            <View className="w-12 h-12 bg-primary-container/10 rounded-full items-center justify-center mr-4">
              <r.icon size={24} color="#006b2c" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-on-surface">{r.title}</Text>
              <Text className="text-sm text-on-surface-variant">{r.subtitle}</Text>
            </View>
            <ChevronRight size={20} color="#6e7b6c" />
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
