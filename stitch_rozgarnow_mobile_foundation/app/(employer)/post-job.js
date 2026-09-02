import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import TopAppBar from "../../components/TopAppBar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useApp } from "../../context/AppContext";
import { JOB_CATEGORIES } from "../../data/mockData";

export default function PostJob() {
  const router = useRouter();
  const { postJob } = useApp();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [pay, setPay] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(JOB_CATEGORIES[0]);

  const handlePost = () => {
    postJob({
      title: title || "Untitled Job",
      company: "My Company",
      location: location || "Karachi",
      distance: "Nearby",
      pay: pay || "PKR 2,000/day",
      type: "Daily Wage",
      category,
      urgent: false,
      description: description || "No description provided.",
      requirements: ["To be discussed"],
    });
    router.push("/employer-dashboard");
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Post a Job" rightIcon={null} showBack={false} />
      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <Input label="Job Title" value={title} onChangeText={setTitle} placeholder="e.g. Experienced Plumber Needed" />
        <Input label="Location" value={location} onChangeText={setLocation} placeholder="e.g. Clifton, Karachi" />
        <Input label="Daily Wage" value={pay} onChangeText={setPay} placeholder="e.g. PKR 2,500/day" keyboardType="numeric" />
        <Input label="Description" value={description} onChangeText={setDescription} placeholder="Describe the job..." multiline numberOfLines={4} />

        <Text className="text-sm font-medium text-on-surface mb-2">Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }} className="mb-6">
          {JOB_CATEGORIES.map((cat) => (
            <Button
              key={cat}
              title={cat}
              variant={category === cat ? "primary" : "outline"}
              onPress={() => setCategory(cat)}
              className="w-auto px-4"
            />
          ))}
        </ScrollView>

        <Button title="Post Job" onPress={handlePost} />
      </ScrollView>
    </SafeAreaView>
  );
}
