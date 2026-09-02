import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { MapPin, Clock } from "lucide-react-native";

export default function JobCard({ job }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(`/job-details/${job.id}`)}
      className="bg-white border border-outline-variant/40 rounded-md p-4 mb-3 active:opacity-80"
    >
      <View className="flex-row justify-between items-start mb-1.5">
        <Text className="text-base font-semibold text-on-surface flex-1 pr-2">{job.title}</Text>
        {job.urgent ? (
          <View className="bg-error-container px-2 py-0.5 rounded-full">
            <Text className="text-xs font-semibold text-on-error-container">Urgent</Text>
          </View>
        ) : null}
      </View>
      <Text className="text-sm text-on-surface-variant mb-2">{job.company}</Text>
      <View className="flex-row items-center gap-1 mb-1">
        <MapPin size={14} color="#6e7b6c" />
        <Text className="text-xs text-on-surface-variant">{job.location} · {job.distance}</Text>
      </View>
      <View className="flex-row items-center justify-between mt-2 pt-2 border-t border-outline-variant/30">
        <Text className="text-base font-bold text-primary">{job.pay}</Text>
        <View className="flex-row items-center gap-1">
          <Clock size={12} color="#6e7b6c" />
          <Text className="text-xs text-on-surface-variant">{job.postedAgo}</Text>
        </View>
      </View>
    </Pressable>
  );
}
