"use client";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfig = {
  toolbar: [
    "undo",
    "redo",
    "|",
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "|",
    "bulletedList",
    "numberedList",
    "blockQuote",
  ],
};

export interface RichTextEditorProps {
  setValue: (value: string) => void;
  defaultValue?: string;
  minHeight?: string;
}

export function RichTextEditor({ setValue, defaultValue = "", minHeight = "220px" }: RichTextEditorProps) {
  return (
    <div className="rich-text-editor text-gray-900">
      <style>{`.rich-text-editor .ck-editor__editable { min-height: ${minHeight} !important; }`}</style>
      <CKEditor
        editor={ClassicEditor}
        data={defaultValue}
        config={editorConfig}
        onChange={(_, editor) => setValue(editor.getData())}
        onBlur={(_, editor) => setValue(editor.getData())}
      />
    </div>
  );
}
