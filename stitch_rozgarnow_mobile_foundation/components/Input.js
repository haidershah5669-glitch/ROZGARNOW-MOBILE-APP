import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Input({
  label,
  icon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  multiline,
  numberOfLines,
}) {
  return (
    <View className="flex-col mb-4">
      {label ? (
        <Text className="text-sm font-medium text-on-surface mb-1.5">{label}</Text>
      ) : null}
      <View className="flex-row items-center bg-white border border-outline-variant rounded-md px-3.5">
        {icon}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#6e7b6c"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          className={`flex-1 text-base text-on-surface py-3.5 ${icon ? "ml-2" : ""}`}
          style={multiline ? { minHeight: 90, textAlignVertical: "top" } : undefined}
        />
      </View>
    </View>
  );
}
