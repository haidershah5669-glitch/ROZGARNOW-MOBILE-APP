import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Bell, Briefcase, Users, TrendingUp } from "lucide-react-native";
import { useApp } from "../../context/AppContext";

export default function EmployerDashboard() {
  const router = useRouter();
  const { user, jobs, applicants } = useApp();
  const myJobs = jobs.slice(0, 3);

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
          <View>
            <Text className="text-sm text-on-surface-variant">Welcome back,</Text>
            <Text className="text-xl font-bold text-on-surface">{user?.company || user?.name || "Employer"}</Text>
          </View>
          <Pressable className="w-11 h-11 rounded-full bg-white items-center justify-center border border-outline-variant/40">
            <Bell size={20} color="#171d16" />
          </Pressable>
        </View>

        <View className="flex-row px-5 gap-3 mt-4">
          <View className="flex-1 bg-primary rounded-lg p-4">
            <Briefcase size={20} color="#fff" />
            <Text className="text-white/80 text-xs mt-2">Active Jobs</Text>
            <Text className="text-white text-lg font-bold">{myJobs.length}</Text>
          </View>
          <View className="flex-1 bg-white border border-outline-variant/40 rounded-lg p-4">
            <Users size={20} color="#006b2c" />
            <Text className="text-on-surface-variant text-xs mt-2">Applicants</Text>
            <Text className="text-on-surface text-lg font-bold">{applicants.length}</Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/post-job")}
          className="flex-row items-center justify-center mx-5 mt-4 bg-secondary-container rounded-lg p-3.5"
        >
          <Text className="text-white font-semibold">+ Post a New Job</Text>
        </Pressable>

        <View className="flex-row items-center justify-between px-5 mt-6 mb-3">
          <Text className="text-lg font-semibold text-on-surface">Your Job Posts</Text>
        </View>
        <View className="px-5">
          {myJobs.map((job) => (
            <View key={job.id} className="bg-white border border-outline-variant/40 rounded-md p-4 mb-3">
              <Text className="text-base font-semibold text-on-surface mb-1">{job.title}</Text>
              <Text className="text-sm text-on-surface-variant mb-2">{job.location}</Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-bold text-primary">{job.pay}</Text>
                <View className="flex-row items-center gap-1">
                  <TrendingUp size={14} color="#6e7b6c" />
                  <Text className="text-xs text-on-surface-variant">3 applicants</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
