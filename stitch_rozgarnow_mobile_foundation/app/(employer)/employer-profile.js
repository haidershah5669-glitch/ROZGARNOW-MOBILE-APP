import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Star, MapPin, LogOut, ChevronRight, ShieldCheck, Bell, HelpCircle, Building2 } from "lucide-react-native";
import { useApp } from "../../context/AppContext";

const MENU_ITEMS = [
  { icon: ShieldCheck, label: "Business Verification" },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help & Support" },
];

export default function EmployerProfile() {
  const router = useRouter();
  const { user, logout } = useApp();

  const handleLogout = async () => {
    await logout();
    router.replace("/get-started");
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="items-center pt-8 pb-6 bg-white border-b border-outline-variant/30">
          <View className="w-24 h-24 rounded-full bg-primary-container/10 items-center justify-center mb-3">
            <Building2 size={36} color="#006b2c" />
          </View>
          <Text className="text-xl font-bold text-on-surface">{user?.company || "My Company"}</Text>
          <Text className="text-sm text-on-surface-variant mt-0.5">{user?.name || "Employer Name"}</Text>
          <View className="flex-row items-center gap-1 mt-1">
            <Star size={14} color="#fd761a" fill="#fd761a" />
            <Text className="text-sm text-on-surface-variant">4.7 · 18 jobs posted</Text>
          </View>
          <View className="flex-row items-center gap-1 mt-1">
            <MapPin size={14} color="#6e7b6c" />
            <Text className="text-sm text-on-surface-variant">Karachi, Pakistan</Text>
          </View>
        </View>

        <View className="px-5 mt-5">
          {MENU_ITEMS.map((item) => (
            <Pressable key={item.label} className="flex-row items-center bg-white border border-outline-variant/40 rounded-md p-4 mb-2.5">
              <item.icon size={20} color="#3e4a3d" />
              <Text className="flex-1 ml-3 text-base text-on-surface">{item.label}</Text>
              <ChevronRight size={18} color="#6e7b6c" />
            </Pressable>
          ))}
          <Pressable onPress={handleLogout} className="flex-row items-center justify-center bg-error-container/40 rounded-md p-4 mt-4">
            <LogOut size={18} color="#ba1a1a" />
            <Text className="ml-2 text-base font-semibold text-error">Log Out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
