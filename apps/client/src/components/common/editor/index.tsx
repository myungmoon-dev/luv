import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface IEditorProps {
  setValue: (value: string) => void;
  defaultValue?: string;
  height?: string;
}

// 기본 툴바 설정
const customToolbar = {
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

export const Editor = ({ defaultValue, setValue, height = "200px" }: IEditorProps) => {
  return (
    <div className="text-black">
      <style>
        {`
          .ck-editor__editable {
            min-height: ${height} !important;
          }
        `}
      </style>
      <CKEditor
        editor={ClassicEditor}
        data={defaultValue}
        config={customToolbar}
        onBlur={(_, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
    </div>
  );
};
