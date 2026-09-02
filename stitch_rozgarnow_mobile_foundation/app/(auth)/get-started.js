import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";

export default function GetStarted() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-28 h-28 bg-white rounded-3xl items-center justify-center mb-6">
          <Text className="text-5xl">🛠️</Text>
        </View>
        <Text className="text-4xl font-bold text-white text-center">RozgarNow</Text>
        <Text className="text-base text-primary-fixed text-center mt-3 leading-6">
          Connecting skilled daily-wage workers with employers across Pakistan.
        </Text>
      </View>
      <View className="px-6 pb-8 gap-3">
        <Button title="Get Started" variant="secondary" onPress={() => router.push("/onboarding")} />
        <Button
          title="I already have an account"
          variant="outline"
          className="bg-white/10 border-white/30"
          onPress={() => router.push("/login")}
        />
      </View>
    </SafeAreaView>
  );
}
