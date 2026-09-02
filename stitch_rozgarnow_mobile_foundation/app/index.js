import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/get-started");
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-primary items-center justify-center">
      <View className="w-24 h-24 bg-white rounded-2xl items-center justify-center mb-5">
        <Text className="text-4xl">🛠️</Text>
      </View>
      <Text className="text-3xl font-bold text-white">RozgarNow</Text>
      <Text className="text-base text-primary-fixed mt-2">Connecting Hands, Building Futures</Text>
    </View>
  );
}
