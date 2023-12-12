import React from "react";
import { DataTable } from "./data-table";
import type { Database } from "../../lib/database.types";
import { columns } from "./columns";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function ProjectPage() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data } = await supabase
    .from("projects")
    .select("project_no, project_name, is_active")
    .order("id", { ascending: false });
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data as Database["public"]["Tables"]["projects"]["Row"][]}
      />
    </div>
  );
}
