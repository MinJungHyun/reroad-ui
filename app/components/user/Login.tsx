"use client";

import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

export default function Login() {
  const { user } = useAuth();

  if (user) return null;

  return (
    <Link href="/login">
      <Button>로그인</Button>
    </Link>
  );
}
