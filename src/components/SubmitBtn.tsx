"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
