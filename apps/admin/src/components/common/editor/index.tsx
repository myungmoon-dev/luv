import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface IEditorProps {
  setValue: (value: string) => void;
  defaultValue?: string;
}

export const Editor = ({ defaultValue, setValue }: IEditorProps) => {
  return (
    <div className="text-black">
      <CKEditor
        editor={ClassicEditor}
        data={defaultValue}
        onBlur={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
    </div>
  );
};
