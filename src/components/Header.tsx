"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NovuHeader from "./NovuHeader";
import SignOut from "./SignOut";

import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export default function Header() {
  const [user, setUser] = useState<User | undefined>();
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user);
    });
  }, [supabase.auth]);
  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <div className="flex gap-2">
            <Link href="/">
              <p className="text-lg hover:font-normal font-bold text-blue-500 transition-shadow hover:shadow">
                My Timesheet
              </p>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            {user && (
              <span className="text-gray-500 font-md">{user.email}</span>
            )}
            {!!user && <SignOut />}
            <NovuHeader />
          </div>
        </div>
      </div>
    </nav>
  );
}
