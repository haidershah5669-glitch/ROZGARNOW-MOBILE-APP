import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { Send } from "lucide-react-native";
import TopAppBar from "../../components/TopAppBar";

const INITIAL_MESSAGES = [
  { id: "m1", from: "them", text: "Hi! Are you available for the plumbing job tomorrow?" },
  { id: "m2", from: "me", text: "Yes, I'm available. What time should I arrive?" },
  { id: "m3", from: "them", text: "Great, please come by 9 AM. It's a 3-day job." },
];

export default function Chat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: `m${Date.now()}`, from: "me", text }]);
    setText("");
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <TopAppBar title="Khan Construction Ltd." rightIcon={null} />
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView className="flex-1 px-4 pt-4" contentContainerStyle={{ paddingBottom: 12 }}>
          {messages.map((m) => (
            <View
              key={m.id}
              className={`max-w-[75%] mb-3 rounded-lg px-4 py-2.5 ${
                m.from === "me" ? "bg-primary self-end" : "bg-white border border-outline-variant/40 self-start"
              }`}
            >
              <Text className={m.from === "me" ? "text-white" : "text-on-surface"}>{m.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View className="flex-row items-center px-4 py-3 border-t border-outline-variant/30 bg-surface">
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Type a message..."
            placeholderTextColor="#6e7b6c"
            className="flex-1 bg-white border border-outline-variant rounded-full px-4 py-2.5 text-on-surface"
          />
          <Pressable onPress={send} className="ml-2 w-11 h-11 bg-primary rounded-full items-center justify-center">
            <Send size={18} color="#fff" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
