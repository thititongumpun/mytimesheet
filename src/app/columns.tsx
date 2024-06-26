"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Database } from "../lib/database.types";
import { ArrowUpDown, MoreHorizontal, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import UpdateTimeSheet from "@/components/UpdateTimeSheet";
import { Checkbox } from "@/components/ui/checkbox";
import EditDrawer from "@/components/EditDrawer";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<
  Database["public"]["Tables"]["timesheets"]["Row"]
>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date_memo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dete Memo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="w-[120px] flex justify-center items-center font-bold">
          <EditDrawer
            name={format(new Date(row.original.date_memo), "dd-MM-yyyy", {
              locale: th,
            })}
            data={row.original}
            // description={row.original.description}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "projects.project_name",
    header: "Project",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "is_complete",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Complete
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="w-[80px] flex justify-center items-center">
          {row.original.is_complete ? <Check /> : <X />}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const timesheet = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <UpdateTimeSheet
              id={timesheet.id}
              is_complete={timesheet.is_complete}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
