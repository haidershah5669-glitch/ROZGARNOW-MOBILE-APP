import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Bell, MapPin, Briefcase, TrendingUp, Wallet } from "lucide-react-native";
import { useApp } from "../../context/AppContext";
import JobCard from "../../components/JobCard";

export default function WorkerDashboard() {
  const router = useRouter();
  const { user, jobs, applications, walletBalance } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
          <View>
            <Text className="text-sm text-on-surface-variant">Welcome back,</Text>
            <Text className="text-xl font-bold text-on-surface">{user?.name || "Worker"}</Text>
          </View>
          <Pressable className="w-11 h-11 rounded-full bg-white items-center justify-center border border-outline-variant/40">
            <Bell size={20} color="#171d16" />
          </Pressable>
        </View>

        <View className="flex-row px-5 gap-3 mt-4">
          <View className="flex-1 bg-primary rounded-lg p-4">
            <Wallet size={20} color="#fff" />
            <Text className="text-white/80 text-xs mt-2">Wallet Balance</Text>
            <Text className="text-white text-lg font-bold">PKR {walletBalance.toLocaleString()}</Text>
          </View>
          <View className="flex-1 bg-white border border-outline-variant/40 rounded-lg p-4">
            <Briefcase size={20} color="#006b2c" />
            <Text className="text-on-surface-variant text-xs mt-2">Applications</Text>
            <Text className="text-on-surface text-lg font-bold">{applications.length}</Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/job-map")}
          className="flex-row items-center mx-5 mt-4 bg-tertiary/10 rounded-lg p-3"
        >
          <MapPin size={18} color="#a72d51" />
          <Text className="ml-2 text-sm font-medium text-tertiary flex-1">View jobs near you on map</Text>
        </Pressable>

        <View className="flex-row items-center justify-between px-5 mt-6 mb-3">
          <Text className="text-lg font-semibold text-on-surface">Jobs For You</Text>
          <Pressable onPress={() => router.push("/browse-jobs")}>
            <Text className="text-sm font-semibold text-primary">See All</Text>
          </Pressable>
        </View>
        <View className="px-5">
          {jobs.slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
