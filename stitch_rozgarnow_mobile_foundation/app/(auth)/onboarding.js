import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Dimensions, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";

const { width } = Dimensions.get("window");

const SLIDES = [
  {
    emoji: "🔍",
    title: "Find Work Near You",
    body: "Browse thousands of daily-wage jobs in your area and apply in seconds.",
  },
  {
    emoji: "🤝",
    title: "Hire Trusted Workers",
    body: "Post a job and connect with verified, skilled workers ready to start today.",
  },
  {
    emoji: "📈",
    title: "Build Your Future",
    body: "Track your earnings, ratings, and grow your reputation on RozgarNow.",
  },
];

export default function Onboarding() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (index < SLIDES.length - 1) {
      scrollRef.current?.scrollTo({ x: (index + 1) * width, animated: true });
      setIndex(index + 1);
    } else {
      router.push("/role-selection");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="flex-row justify-end px-6 pt-2">
        <Pressable onPress={() => router.push("/role-selection")}>
          <Text className="text-sm font-semibold text-on-surface-variant">Skip</Text>
        </Pressable>
      </View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        className="flex-1"
      >
        {SLIDES.map((slide, i) => (
          <View key={i} style={{ width }} className="items-center justify-center px-8">
            <View className="w-32 h-32 bg-primary-container/10 rounded-full items-center justify-center mb-8">
              <Text className="text-6xl">{slide.emoji}</Text>
            </View>
            <Text className="text-2xl font-bold text-on-surface text-center mb-3">{slide.title}</Text>
            <Text className="text-base text-on-surface-variant text-center leading-6">{slide.body}</Text>
          </View>
        ))}
      </ScrollView>
      <View className="flex-row justify-center gap-2 mb-6">
        {SLIDES.map((_, i) => (
          <View
            key={i}
            className={`h-2 rounded-full ${i === index ? "w-6 bg-primary" : "w-2 bg-outline-variant"}`}
          />
        ))}
      </View>
      <View className="px-6 pb-8">
        <Button title={index === SLIDES.length - 1 ? "Continue" : "Next"} onPress={goNext} />
      </View>
    </SafeAreaView>
  );
}
