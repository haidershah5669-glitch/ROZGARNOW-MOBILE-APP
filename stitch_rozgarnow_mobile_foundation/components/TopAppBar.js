import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft, Bell } from "lucide-react-native";

export default function TopAppBar({ title, showBack = true, rightIcon = "bell", onRightPress }) {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-4 py-3.5 bg-surface border-b border-outline-variant/30">
      <View className="w-10">
        {showBack ? (
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <ChevronLeft size={26} color="#171d16" />
          </Pressable>
        ) : null}
      </View>
      <Text className="text-lg font-semibold text-on-surface flex-1 text-center" numberOfLines={1}>
        {title}
      </Text>
      <View className="w-10 items-end">
        {rightIcon ? (
          <Pressable onPress={onRightPress} hitSlop={10}>
            <Bell size={22} color="#171d16" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
