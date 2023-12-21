"use client";

import { CheckCircledIcon, CircleIcon, Cross2Icon, CrossCircledIcon, QuestionMarkCircledIcon, StopwatchIcon } from "@radix-ui/react-icons"
import React from "react";
import { Table } from "@tanstack/react-table";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export const statuses = [
  // {
  //   value: "all",
  //   label: "All",
  //   icon: QuestionMarkCircledIcon,
  // },
  {
    value: "true",
    label: "Complete",
    icon: CircleIcon,
  },
  {
    value: "false",
    label: "Not Complete",
    icon: StopwatchIcon,
  },
  // {
  //   value: "done",
  //   label: "Done",
  //   icon: CheckCircledIcon,
  // },
  // {
  //   value: "canceled",
  //   label: "Canceled",
  //   icon: CrossCircledIcon,
  // },
]

export const projects = [
  // {
  //   value: "all",
  //   label: "All",
  //   icon: QuestionMarkCircledIcon,
  // },
  {
    value: "bay",
    label: "bay",
    icon: CircleIcon,
  },
  {
    value: "Holiday",
    label: "Holiday",
    icon: CircleIcon,
  },
  {
    value: "LEAVE",
    label: "LEAVE",
    icon: StopwatchIcon,
  },
  // {
  //   value: "done",
  //   label: "Done",
  //   icon: CheckCircledIcon,
  // },
  // {
  //   value: "canceled",
  //   label: "Canceled",
  //   icon: CrossCircledIcon,
  // },
]

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("description")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("description")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("is_complete") && (
          <DataTableFacetedFilter
            column={table.getColumn("is_complete")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("projects_project_name") && (
          <DataTableFacetedFilter
            column={table.getColumn("projects_project_name")}
            title="Priority"
            options={projects}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
