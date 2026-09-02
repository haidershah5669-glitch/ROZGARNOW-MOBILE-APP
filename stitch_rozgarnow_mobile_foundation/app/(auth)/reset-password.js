import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Lock } from "lucide-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-surface px-6 pt-16">
      <Text className="text-2xl font-bold text-on-surface mb-2">Reset Password</Text>
      <Text className="text-base text-on-surface-variant mb-8">Create a new password for your account.</Text>
      <Input label="New Password" icon={<Lock size={18} color="#6e7b6c" />} value={password} onChangeText={setPassword} placeholder="Enter new password" secureTextEntry />
      <Input label="Confirm Password" icon={<Lock size={18} color="#6e7b6c" />} value={confirm} onChangeText={setConfirm} placeholder="Confirm new password" secureTextEntry />
      <Button title="Reset Password" onPress={() => router.replace("/login")} className="mt-2" />
    </SafeAreaView>
  );
}
