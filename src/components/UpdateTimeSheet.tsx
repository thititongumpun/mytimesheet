"use client";

import React, { useTransition } from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import updateTimesheet from "../lib/supabase";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";

export default function UpdateTimeSheet({
  id,
  is_complete,
}: {
  id: number;
  is_complete: boolean | null;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      onClick={() => {
        startTransition(() => {
          updateTimesheet(id, is_complete === true ? false : true)
          toast({
            title: `Timesheet ${id} updated`,
            description: "Timesheet updated successfully",
          });
        }
        );
        startTransition(() => router.refresh());
      }}
    >
      {is_complete ? "Mark as incomplete" : "Mark as complete"}
    </DropdownMenuItem>
  );
}
