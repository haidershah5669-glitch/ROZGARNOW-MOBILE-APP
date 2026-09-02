import React, { createContext, useContext, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  JOBS,
  APPLICATIONS,
  APPLICANTS,
  WALLET_TRANSACTIONS,
  ADMIN_USERS,
  VERIFICATION_REQUESTS,
} from "../data/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [role, setRole] = useState(null); // "worker" | "employer" | "admin"
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState(JOBS);
  const [applications, setApplications] = useState(APPLICATIONS);
  const [applicants, setApplicants] = useState(APPLICANTS);
  const [walletBalance, setWalletBalance] = useState(4500);
  const [transactions, setTransactions] = useState(WALLET_TRANSACTIONS);
  const [adminUsers] = useState(ADMIN_USERS);
  const [verificationRequests] = useState(VERIFICATION_REQUESTS);

  const login = useCallback(async (selectedRole, profile) => {
    setRole(selectedRole);
    setUser(profile || { name: "Guest User" });
    try {
      await AsyncStorage.setItem("rozgarnow_role", selectedRole);
    } catch (e) {}
  }, []);

  const logout = useCallback(async () => {
    setRole(null);
    setUser(null);
    try {
      await AsyncStorage.removeItem("rozgarnow_role");
    } catch (e) {}
  }, []);

  const applyToJob = useCallback((jobId) => {
    setApplications((prev) => [
      { id: `a${Date.now()}`, jobId, status: "Pending", appliedOn: "Just now" },
      ...prev,
    ]);
  }, []);

  const postJob = useCallback((job) => {
    setJobs((prev) => [{ id: `${Date.now()}`, postedAgo: "Just now", ...job }, ...prev]);
  }, []);

  const updateApplicantStatus = useCallback((id, status) => {
    setApplicants((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  }, []);

  const value = {
    role,
    setRole,
    user,
    login,
    logout,
    jobs,
    applications,
    applicants,
    walletBalance,
    transactions,
    adminUsers,
    verificationRequests,
    applyToJob,
    postJob,
    updateApplicantStatus,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
