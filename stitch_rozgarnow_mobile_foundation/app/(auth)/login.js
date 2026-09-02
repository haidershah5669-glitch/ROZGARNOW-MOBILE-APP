import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Phone, Lock } from "lucide-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useApp } from "../../context/AppContext";

export default function Login() {
  const router = useRouter();
  const { login } = useApp();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const continueAs = async (role) => {
    await login(role, { name: role === "worker" ? "Bilal Ahmed" : role === "employer" ? "Ahmed Khan" : "Admin" });
    if (role === "worker") router.replace("/dashboard");
    else if (role === "employer") router.replace("/employer-dashboard");
    else router.replace("/admin-dashboard");
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView className="flex-1 px-6 pt-14" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-2xl font-bold text-on-surface mb-1">Welcome Back</Text>
        <Text className="text-base text-on-surface-variant mb-6">Login to continue to RozgarNow.</Text>

        <Input label="Phone" icon={<Phone size={18} color="#6e7b6c" />} value={phone} onChangeText={setPhone} placeholder="+92 300 1234567" keyboardType="phone-pad" />
        <Input label="Password" icon={<Lock size={18} color="#6e7b6c" />} value={password} onChangeText={setPassword} placeholder="Enter your password" secureTextEntry />

        <Pressable onPress={() => router.push("/forgot-password")} className="mb-4">
          <Text className="text-right text-sm font-medium text-secondary">Forgot Password?</Text>
        </Pressable>

        <Button title="Login" onPress={() => continueAs("worker")} className="mb-6" />

        <Text className="text-center text-xs text-on-surface-variant mb-3">— DEMO QUICK ACCESS —</Text>
        <View className="gap-2">
          <Button title="Continue as Worker" variant="outline" onPress={() => continueAs("worker")} />
          <Button title="Continue as Employer" variant="outline" onPress={() => continueAs("employer")} />
          <Button title="Continue as Admin" variant="outline" onPress={() => continueAs("admin")} />
        </View>

        <Pressable onPress={() => router.push("/role-selection")} className="mt-6">
          <Text className="text-center text-on-surface-variant">
            Don't have an account? <Text className="text-secondary font-semibold">Sign Up</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
