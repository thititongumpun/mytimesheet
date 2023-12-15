"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

export default function TipTab({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-white",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getText());
    },
  });
  return <EditorContent editor={editor} />;
}
