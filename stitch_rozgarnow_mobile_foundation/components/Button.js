import React from "react";
import { Pressable, Text, ActivityIndicator } from "react-native";

const VARIANTS = {
  primary: "bg-primary",
  secondary: "bg-secondary-container",
  outline: "bg-transparent border border-outline-variant",
};

const TEXT_VARIANTS = {
  primary: "text-on-primary",
  secondary: "text-on-secondary-container",
  outline: "text-on-surface",
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  icon,
  loading = false,
  disabled = false,
  className = "",
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`w-full flex-row items-center justify-center gap-2 rounded-md py-3.5 px-4 active:opacity-80 ${VARIANTS[variant]} ${
        disabled ? "opacity-50" : ""
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? "#fff" : "#171d16"} />
      ) : (
        <>
          {icon}
          <Text className={`text-base font-semibold ${TEXT_VARIANTS[variant]}`}>{title}</Text>
        </>
      )}
    </Pressable>
  );
}
