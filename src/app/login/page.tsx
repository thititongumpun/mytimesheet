"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import type { Database } from "@/lib/database.types";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | undefined>();
  const supabase = createClientComponentClient<Database>();

  if (user) {
    redirect("/");
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user);
    });
  }, [supabase.auth]);

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    toast({
      title: "Sign in successful",
    });

    if (res.error) {
      toast({
        title: res.error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <Image
            src="/timesheet.jpg"
            alt="timesheet"
            width={100}
            height={100}
            className="mx-auto w-auto h-auto"
            priority
          />
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
