"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import HardBreak from "@tiptap/extension-hard-break";

export default function TipTab({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: 'min-h-[1rem]'
        }
      }),
      Text,
      HardBreak.extend({
        addKeyboardShortcuts() {
          return {
            Enter: () => this.editor.commands.setHardBreak(),
          };
        },
      }),
    ],
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
  editor?.commands.newlineInCode();

  return <EditorContent editor={editor} />;
}
