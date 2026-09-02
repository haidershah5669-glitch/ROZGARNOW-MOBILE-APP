import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import TopAppBar from "../../components/TopAppBar";

const CONVERSATIONS = [
  { id: "c1", name: "Khan Construction Ltd.", lastMessage: "Can you start tomorrow morning?", time: "10:24 AM", unread: 2 },
  { id: "c2", name: "Al-Habib Builders", lastMessage: "Thanks, we'll review your application.", time: "Yesterday", unread: 0 },
  { id: "c3", name: "Sara Interiors", lastMessage: "Job completed. Payment sent.", time: "2 days ago", unread: 0 },
];

export default function Messages() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Messages" rightIcon={null} />
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 24 }}>
        {CONVERSATIONS.map((c) => (
          <Pressable
            key={c.id}
            onPress={() => router.push("/chat")}
            className="flex-row items-center px-5 py-3.5 border-b border-outline-variant/20"
          >
            <View className="w-12 h-12 rounded-full bg-primary-container/10 items-center justify-center mr-3">
              <Text className="text-lg">🏢</Text>
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-on-surface">{c.name}</Text>
              <Text className="text-sm text-on-surface-variant" numberOfLines={1}>{c.lastMessage}</Text>
            </View>
            <View className="items-end">
              <Text className="text-xs text-on-surface-variant mb-1">{c.time}</Text>
              {c.unread > 0 && (
                <View className="bg-primary rounded-full w-5 h-5 items-center justify-center">
                  <Text className="text-xs text-white font-bold">{c.unread}</Text>
                </View>
              )}
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
