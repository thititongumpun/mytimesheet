"use client";

import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "../lib/database.types";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function SignOut() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button onClick={handleSignOut}>
      <LogOut className="text-gray-500" />
    </button>
  );
}
