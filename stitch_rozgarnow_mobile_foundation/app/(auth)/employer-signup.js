import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { User, Phone, MapPin, Camera } from "lucide-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useApp } from "../../context/AppContext";

export default function EmployerSignup() {
  const router = useRouter();
  const { login } = useApp();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [about, setAbout] = useState("");

  const handleRegister = async () => {
    await login("employer", { name: name || "Employer", company });
    router.push("/otp-verification");
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView className="flex-1 px-6 pt-8" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-2xl font-bold text-on-surface mb-1">Create Employer Account</Text>
        <Text className="text-base text-on-surface-variant mb-6">Hire the best workers for your needs.</Text>

        <View className="items-center mb-6">
          <View className="w-24 h-24 rounded-lg border-2 border-dashed border-outline-variant items-center justify-center">
            <Camera size={26} color="#6e7b6c" />
            <Text className="text-xs font-semibold text-outline mt-1">Upload</Text>
          </View>
          <Text className="text-xs text-on-surface-variant mt-2">Profile Photo/Logo</Text>
        </View>

        <Input label="Full Name" icon={<User size={18} color="#6e7b6c" />} value={name} onChangeText={setName} placeholder="e.g. Ahmed Khan" />
        <Input label="Business/Company Name" value={company} onChangeText={setCompany} placeholder="e.g. Khan Construction Ltd." />
        <Input label="Phone" icon={<Phone size={18} color="#6e7b6c" />} value={phone} onChangeText={setPhone} placeholder="+92 300 1234567" keyboardType="phone-pad" />
        <Input label="City & Area" icon={<MapPin size={18} color="#6e7b6c" />} value={city} onChangeText={setCity} placeholder="e.g. Clifton, Karachi" />
        <Input label="About Business" value={about} onChangeText={setAbout} placeholder="Briefly describe your business needs..." multiline numberOfLines={3} />

        <Button title="Register" onPress={handleRegister} className="mt-2" />

        <Pressable onPress={() => router.push("/login")} className="mt-6">
          <Text className="text-center text-on-surface-variant">
            Already have an account? <Text className="text-secondary font-semibold">Login</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
