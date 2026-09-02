import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useApp } from "../../context/AppContext";

const STATUS_STYLES = {
  Pending: { bg: "bg-secondary-container/20", text: "text-secondary" },
  Accepted: { bg: "bg-primary-container/20", text: "text-primary" },
  Rejected: { bg: "bg-error-container", text: "text-error" },
};

export default function Applications() {
  const router = useRouter();
  const { applications, jobs } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="px-5 pt-4 pb-2">
        <Text className="text-xl font-bold text-on-surface">My Applications</Text>
      </View>
      <ScrollView className="flex-1 px-5" contentContainerStyle={{ paddingBottom: 24 }}>
        {applications.length === 0 ? (
          <Text className="text-on-surface-variant text-center mt-10">No applications yet.</Text>
        ) : (
          applications.map((app) => {
            const job = jobs.find((j) => j.id === app.jobId);
            if (!job) return null;
            const style = STATUS_STYLES[app.status] || STATUS_STYLES.Pending;
            return (
              <Pressable
                key={app.id}
                onPress={() => router.push(`/job-details/${job.id}`)}
                className="bg-white border border-outline-variant/40 rounded-md p-4 mb-3"
              >
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-base font-semibold text-on-surface flex-1 pr-2">{job.title}</Text>
                  <View className={`px-2.5 py-1 rounded-full ${style.bg}`}>
                    <Text className={`text-xs font-semibold ${style.text}`}>{app.status}</Text>
                  </View>
                </View>
                <Text className="text-sm text-on-surface-variant mb-1">{job.company}</Text>
                <Text className="text-xs text-on-surface-variant">Applied {app.appliedOn}</Text>
              </Pressable>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
