"use client";

import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TipTab({ description }: { description: string }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description,
    onUpdate({editor}) {
      console.log(editor.getText())
    }
  });
  return <EditorContent editor={editor} />;
}
