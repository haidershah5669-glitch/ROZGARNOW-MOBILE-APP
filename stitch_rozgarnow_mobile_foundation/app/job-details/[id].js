import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MapPin, Clock, Briefcase, CheckCircle2 } from "lucide-react-native";
import TopAppBar from "../../components/TopAppBar";
import Button from "../../components/Button";
import { useApp } from "../../context/AppContext";

export default function JobDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { jobs, applyToJob, applications } = useApp();
  const job = jobs.find((j) => j.id === id);
  const alreadyApplied = applications.some((a) => a.jobId === id);
  const [applied, setApplied] = useState(alreadyApplied);

  if (!job) {
    return (
      <SafeAreaView className="flex-1 bg-surface items-center justify-center">
        <Text className="text-on-surface-variant">Job not found.</Text>
      </SafeAreaView>
    );
  }

  const handleApply = () => {
    applyToJob(job.id);
    setApplied(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Job Details" rightIcon={null} />
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-5 pt-5">
          {job.urgent && (
            <View className="self-start bg-error-container px-2.5 py-1 rounded-full mb-2">
              <Text className="text-xs font-semibold text-on-error-container">Urgent Hire</Text>
            </View>
          )}
          <Text className="text-2xl font-bold text-on-surface mb-1">{job.title}</Text>
          <Text className="text-base text-on-surface-variant mb-4">{job.company}</Text>

          <View className="flex-row items-center gap-1.5 mb-2">
            <MapPin size={16} color="#6e7b6c" />
            <Text className="text-sm text-on-surface-variant">{job.location} · {job.distance}</Text>
          </View>
          <View className="flex-row items-center gap-1.5 mb-2">
            <Briefcase size={16} color="#6e7b6c" />
            <Text className="text-sm text-on-surface-variant">{job.type} · {job.category}</Text>
          </View>
          <View className="flex-row items-center gap-1.5 mb-4">
            <Clock size={16} color="#6e7b6c" />
            <Text className="text-sm text-on-surface-variant">Posted {job.postedAgo}</Text>
          </View>

          <View className="bg-primary/5 rounded-lg p-4 mb-5">
            <Text className="text-sm text-on-surface-variant">Daily Wage</Text>
            <Text className="text-2xl font-bold text-primary">{job.pay}</Text>
          </View>

          <Text className="text-lg font-semibold text-on-surface mb-2">Job Description</Text>
          <Text className="text-base text-on-surface-variant leading-6 mb-5">{job.description}</Text>

          <Text className="text-lg font-semibold text-on-surface mb-2">Requirements</Text>
          {job.requirements.map((req, i) => (
            <View key={i} className="flex-row items-center gap-2 mb-2">
              <CheckCircle2 size={16} color="#006b2c" />
              <Text className="text-sm text-on-surface-variant">{req}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-surface border-t border-outline-variant/30 px-5 py-4">
        <Button
          title={applied ? "Applied ✓" : "Apply Now"}
          onPress={handleApply}
          disabled={applied}
          variant={applied ? "outline" : "primary"}
        />
      </View>
    </SafeAreaView>
  );
}
