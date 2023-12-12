import Link from "next/link";
import React from "react";
import NovuHeader from "./NovuHeader";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export default async function Header({}) {
  const supabase = createClientComponentClient<Database>();
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
            <NovuHeader />
            {/* <UserButton afterSignOutUrl="/" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
