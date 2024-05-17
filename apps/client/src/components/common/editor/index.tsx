import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface IEditorProps {
  setValue: (value: string) => void;
  defaultValue?: string;
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

export const Editor = ({ defaultValue, setValue }: IEditorProps) => {
  return (
    <div className="text-black">
      <CKEditor
        editor={ClassicEditor}
        data={defaultValue}
        config={customToolbar}
        onBlur={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
    </div>
  );
};
