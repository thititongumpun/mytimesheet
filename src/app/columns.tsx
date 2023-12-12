"use client"

import { ColumnDef } from "@tanstack/react-table"
import type { Database } from "../lib/database.types"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Database['public']['Tables']['timesheets']['Row']>[] = [
  {
    accessorKey: "date_memo",
    header: "date_memo",
  },
  {
    accessorKey: "projects.project_name",
    header: "project_name",
  },
  {
    accessorKey: "description",
    header: "description",
  },
  {
    accessorKey: "is_complete",
    header: "is_complete",
  },
]
