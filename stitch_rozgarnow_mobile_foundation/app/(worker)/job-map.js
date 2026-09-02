import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MapPin } from "lucide-react-native";
import TopAppBar from "../../components/TopAppBar";
import { useApp } from "../../context/AppContext";

export default function JobMapView() {
  const { jobs } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Jobs Near You" rightIcon={null} />
      <View className="h-64 bg-surface-container-high items-center justify-center border-b border-outline-variant/30">
        <MapPin size={40} color="#a72d51" />
        <Text className="text-on-surface-variant text-sm mt-2">Map view (location services required)</Text>
      </View>
      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-sm font-semibold text-on-surface-variant mb-3">{jobs.length} jobs nearby</Text>
        {jobs.map((job) => (
          <View key={job.id} className="flex-row items-center bg-white border border-outline-variant/40 rounded-md p-3.5 mb-2.5">
            <View className="w-9 h-9 rounded-full bg-tertiary/10 items-center justify-center mr-3">
              <MapPin size={16} color="#a72d51" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-on-surface">{job.title}</Text>
              <Text className="text-xs text-on-surface-variant">{job.distance}</Text>
            </View>
            <Text className="text-sm font-bold text-primary">{job.pay}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
