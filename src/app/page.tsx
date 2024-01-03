import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { Database } from "@/lib/database.types";
import CreateForm from "@/components/CreateForm";
import CreateDrawer from "@/components/CreateDrawer";

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
    <div className="container mx-auto py-2">
      <div className="flex justify-end mb-2">
        <CreateForm />
        <CreateDrawer />
      </div>
      <DataTable
        columns={columns}
        data={data as Database["public"]["Tables"]["timesheets"]["Row"][]}
      />
    </div>
  );
}
