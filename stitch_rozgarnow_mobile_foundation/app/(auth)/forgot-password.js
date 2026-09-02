import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Phone } from "lucide-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function ForgotPassword() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-surface px-6 pt-16">
      <Text className="text-2xl font-bold text-on-surface mb-2">Forgot Password</Text>
      <Text className="text-base text-on-surface-variant mb-8">
        Enter your registered phone number to receive a reset code.
      </Text>
      <Input label="Phone" icon={<Phone size={18} color="#6e7b6c" />} value={phone} onChangeText={setPhone} placeholder="+92 300 1234567" keyboardType="phone-pad" />
      <Button title="Send Reset Code" onPress={() => router.push("/reset-password")} className="mt-2" />
    </SafeAreaView>
  );
}
