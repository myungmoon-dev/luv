import dynamic from "next/dynamic";
import { Spinner } from "ui";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

interface IHomeworshipFormEditorProps {
  setValue: (value: string) => void;
  defaultValue?: string;
}

const HomeworshipFormEditor = ({ setValue, defaultValue }: IHomeworshipFormEditorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">
        내용<span className="text-red-500">*</span>
      </span>
      <div className="rounded-md border border-gray-300">
        <Editor setValue={setValue} defaultValue={defaultValue} />
      </div>
    </div>
  );
};

export default HomeworshipFormEditor;
