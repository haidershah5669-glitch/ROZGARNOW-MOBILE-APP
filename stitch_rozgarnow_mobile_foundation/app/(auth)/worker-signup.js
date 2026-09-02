import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { User, Phone, MapPin, Wrench } from "lucide-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useApp } from "../../context/AppContext";

export default function WorkerSignup() {
  const router = useRouter();
  const { login } = useApp();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");

  const handleContinue = async () => {
    await login("worker", { name: name || "Worker" });
    router.push("/otp-verification");
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView className="flex-1 px-6 pt-8" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-2xl font-bold text-on-surface mb-1">Create Worker Account</Text>
        <Text className="text-base text-on-surface-variant mb-6">Find daily-wage jobs near you.</Text>

        <Input label="Full Name" icon={<User size={18} color="#6e7b6c" />} value={name} onChangeText={setName} placeholder="e.g. Bilal Ahmed" />
        <Input label="Phone" icon={<Phone size={18} color="#6e7b6c" />} value={phone} onChangeText={setPhone} placeholder="+92 300 1234567" keyboardType="phone-pad" />
        <Input label="City & Area" icon={<MapPin size={18} color="#6e7b6c" />} value={city} onChangeText={setCity} placeholder="e.g. Clifton, Karachi" />
        <Input label="Primary Skill" icon={<Wrench size={18} color="#6e7b6c" />} value={skill} onChangeText={setSkill} placeholder="e.g. Plumber, Electrician" />

        <Button title="Register" onPress={handleContinue} className="mt-2" />

        <Pressable onPress={() => router.push("/login")} className="mt-6">
          <Text className="text-center text-on-surface-variant">
            Already have an account? <Text className="text-secondary font-semibold">Login</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
