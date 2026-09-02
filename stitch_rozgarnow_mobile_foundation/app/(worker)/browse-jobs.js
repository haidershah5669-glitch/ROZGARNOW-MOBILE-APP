import React, { useState, useMemo } from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";
import { Search, SlidersHorizontal } from "lucide-react-native";
import { useApp } from "../../context/AppContext";
import { JOB_CATEGORIES } from "../../data/mockData";
import JobCard from "../../components/JobCard";

export default function BrowseJobs() {
  const { jobs } = useApp();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchesQuery = j.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || j.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [jobs, query, category]);

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="px-5 pt-4 pb-2">
        <Text className="text-xl font-bold text-on-surface mb-3">Browse Jobs</Text>
        <View className="flex-row items-center bg-white border border-outline-variant rounded-md px-3">
          <Search size={18} color="#6e7b6c" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search jobs, e.g. plumber"
            placeholderTextColor="#6e7b6c"
            className="flex-1 ml-2 py-3 text-base text-on-surface"
          />
          <SlidersHorizontal size={18} color="#6e7b6c" />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-5 mb-2" contentContainerStyle={{ gap: 8 }}>
        <Pressable
          onPress={() => setCategory(null)}
          className={`px-4 py-2 rounded-full border ${!category ? "bg-primary border-primary" : "bg-white border-outline-variant"}`}
        >
          <Text className={`text-sm font-medium ${!category ? "text-white" : "text-on-surface"}`}>All</Text>
        </Pressable>
        {JOB_CATEGORIES.map((cat) => (
          <Pressable
            key={cat}
            onPress={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border ${category === cat ? "bg-primary border-primary" : "bg-white border-outline-variant"}`}
          >
            <Text className={`text-sm font-medium ${category === cat ? "text-white" : "text-on-surface"}`}>{cat}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <ScrollView className="flex-1 px-5 pt-2" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-sm text-on-surface-variant mb-2">{filtered.length} jobs found</Text>
        {filtered.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
