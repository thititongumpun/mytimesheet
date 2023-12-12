"use client"

import { ColumnDef } from "@tanstack/react-table"
import type { Database } from "../../lib/database.types"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Database['public']['Tables']['projects']['Row']>[] = [
  {
    accessorKey: "project_no",
    header: "project_no",
  },
  {
    accessorKey: "project_name",
    header: "project_name",
  },
  {
    accessorKey: "is_active",
    header: "is_active",
  },
]
