"use client";

import React, { useTransition } from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import updateTimesheet from "../lib/supabase";
import { useRouter } from "next/navigation";

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
        startTransition(() =>
          updateTimesheet(id, is_complete === true ? false : true)
        );
        startTransition(() => router.refresh());
      }}
    >
      {is_complete ? "Mark as incomplete" : "Mark as complete"}
    </DropdownMenuItem>
  );
}
