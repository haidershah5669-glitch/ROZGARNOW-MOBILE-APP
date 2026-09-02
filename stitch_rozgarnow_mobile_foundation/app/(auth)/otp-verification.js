import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import { useApp } from "../../context/AppContext";

export default function OtpVerification() {
  const router = useRouter();
  const { role } = useApp();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const next = [...otp];
    next[index] = text.slice(-1);
    setOtp(next);
    if (text && index < 3) inputs.current[index + 1]?.focus();
  };

  const handleVerify = () => {
    if (role === "employer") router.replace("/employer-dashboard");
    else router.replace("/dashboard");
  };

  return (
    <SafeAreaView className="flex-1 bg-surface px-6 pt-16">
      <Text className="text-2xl font-bold text-on-surface mb-2 text-center">Verify OTP</Text>
      <Text className="text-base text-on-surface-variant mb-10 text-center">
        Enter the 4-digit code sent to your phone number.
      </Text>
      <View className="flex-row justify-center gap-3 mb-10">
        {otp.map((digit, i) => (
          <TextInput
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            value={digit}
            onChangeText={(t) => handleChange(t, i)}
            keyboardType="number-pad"
            maxLength={1}
            className="w-14 h-14 text-center text-xl font-bold bg-white border border-outline-variant rounded-md text-on-surface"
          />
        ))}
      </View>
      <Button title="Verify" onPress={handleVerify} />
      <Pressable className="mt-6">
        <Text className="text-center text-on-surface-variant">
          Didn't receive code? <Text className="text-secondary font-semibold">Resend</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
