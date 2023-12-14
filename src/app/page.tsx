
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Database } from "@/lib/database.types";
import CreateForm from "@/components/CreateForm";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data } = await supabase
    .from("timesheets")
    .select("*, projects (project_name)")
    .order("date_memo", { ascending: true });

  return (
    <div className="container mx-auto py-10">
      <CreateForm />
      <DataTable
        columns={columns}
        data={data as Database["public"]["Tables"]["timesheets"]["Row"][]}
      />
    </div>
  );
}
