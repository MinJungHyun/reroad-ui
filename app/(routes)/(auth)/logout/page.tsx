"use client";

import { useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";

export default function Logout() {
  const { logout } = useAuth();
  useEffect(() => {
    if (logout) {
      logout();
      window.location.href = "/";
    }
  }, [logout]);
  return <>처리중...</>;
}
