import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { ArrowDownLeft, ArrowUpRight, Wallet as WalletIcon } from "lucide-react-native";
import { useApp } from "../../context/AppContext";
import Button from "../../components/Button";

export default function Wallet() {
  const { walletBalance, transactions } = useApp();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-5 pt-4 pb-2">
          <Text className="text-xl font-bold text-on-surface">My Wallet</Text>
        </View>

        <View className="mx-5 mt-2 bg-primary rounded-lg p-6 items-center">
          <WalletIcon size={28} color="#fff" />
          <Text className="text-white/80 text-sm mt-2">Available Balance</Text>
          <Text className="text-white text-3xl font-bold mt-1">PKR {walletBalance.toLocaleString()}</Text>
          <View className="flex-row gap-3 mt-5 w-full">
            <Button title="Withdraw" variant="secondary" className="flex-1" />
            <Button title="History" variant="outline" className="flex-1 bg-white/10 border-white/30" />
          </View>
        </View>

        <Text className="px-5 mt-6 mb-2 text-lg font-semibold text-on-surface">Recent Transactions</Text>
        <View className="px-5">
          {transactions.map((t) => (
            <View key={t.id} className="flex-row items-center bg-white border border-outline-variant/40 rounded-md p-3.5 mb-2.5">
              <View className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${t.type === "credit" ? "bg-primary-container/10" : "bg-error-container/40"}`}>
                {t.type === "credit" ? (
                  <ArrowDownLeft size={18} color="#006b2c" />
                ) : (
                  <ArrowUpRight size={18} color="#ba1a1a" />
                )}
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-on-surface">{t.label}</Text>
                <Text className="text-xs text-on-surface-variant">{t.date}</Text>
              </View>
              <Text className={`text-sm font-bold ${t.type === "credit" ? "text-primary" : "text-error"}`}>
                {t.type === "credit" ? "+" : ""}PKR {Math.abs(t.amount).toLocaleString()}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
