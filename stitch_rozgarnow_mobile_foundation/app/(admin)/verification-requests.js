import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { CheckCircle2, XCircle, FileText } from "lucide-react-native";
import TopAppBar from "../../components/TopAppBar";
import { useApp } from "../../context/AppContext";

export default function VerificationRequests() {
  const { verificationRequests } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Verification Requests" rightIcon={null} showBack={false} />
      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        {verificationRequests.map((v) => (
          <View key={v.id} className="bg-white border border-outline-variant/40 rounded-md p-4 mb-3">
            <View className="flex-row items-center mb-2">
              <View className="w-10 h-10 rounded-full bg-secondary-container/20 items-center justify-center mr-3">
                <FileText size={18} color="#9d4300" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-on-surface">{v.name}</Text>
                <Text className="text-sm text-on-surface-variant">{v.type}</Text>
              </View>
            </View>
            <Text className="text-xs text-on-surface-variant mb-3">Submitted {v.submitted}</Text>
            <View className="flex-row gap-3 pt-3 border-t border-outline-variant/30">
              <Pressable className="flex-1 flex-row items-center justify-center gap-1.5 bg-primary-container/10 rounded-md py-2.5">
                <CheckCircle2 size={16} color="#006b2c" />
                <Text className="text-sm font-semibold text-primary">Approve</Text>
              </Pressable>
              <Pressable className="flex-1 flex-row items-center justify-center gap-1.5 bg-error-container/40 rounded-md py-2.5">
                <XCircle size={16} color="#ba1a1a" />
                <Text className="text-sm font-semibold text-error">Reject</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
