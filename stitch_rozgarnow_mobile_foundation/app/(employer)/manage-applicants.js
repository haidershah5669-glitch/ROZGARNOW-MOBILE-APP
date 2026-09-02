import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Star, CheckCircle2, XCircle } from "lucide-react-native";
import TopAppBar from "../../components/TopAppBar";
import { useApp } from "../../context/AppContext";

export default function ManageApplicants() {
  const { applicants, updateApplicantStatus } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Manage Applicants" rightIcon={null} showBack={false} />
      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        {applicants.map((a) => (
          <View key={a.id} className="bg-white border border-outline-variant/40 rounded-md p-4 mb-3">
            <View className="flex-row items-center mb-2">
              <View className="w-12 h-12 rounded-full bg-primary-container/10 items-center justify-center mr-3">
                <Text className="text-xl">👷</Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-on-surface">{a.name}</Text>
                <Text className="text-sm text-on-surface-variant">{a.skill} · {a.experience}</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Star size={14} color="#fd761a" fill="#fd761a" />
                <Text className="text-sm text-on-surface-variant">{a.rating}</Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between mt-2 pt-2 border-t border-outline-variant/30">
              <Text className="text-xs font-semibold text-secondary">{a.status}</Text>
              <View className="flex-row gap-3">
                <Pressable onPress={() => updateApplicantStatus(a.id, "Shortlisted")}>
                  <CheckCircle2 size={22} color="#006b2c" />
                </Pressable>
                <Pressable onPress={() => updateApplicantStatus(a.id, "Rejected")}>
                  <XCircle size={22} color="#ba1a1a" />
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
