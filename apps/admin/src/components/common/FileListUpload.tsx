import { FileUp, Paperclip, X } from "lucide-react";

interface Props {
  /** 새로 선택한 파일 목록 */
  files: File[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (idx: number) => void;
  accept?: string;
  helperText?: string;
}

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};

const FileListUpload = ({
  files,
  onChange,
  onRemove,
  accept,
  helperText = "여러 개 선택 가능",
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-6 text-center transition-colors">
        <FileUp className="text-muted-foreground/50 size-6" />
        <span className="text-muted-foreground text-sm">클릭하여 파일 업로드</span>
        <span className="text-muted-foreground/70 text-xs">{helperText}</span>
        <input type="file" accept={accept} multiple className="hidden" onChange={onChange} />
      </label>

      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="bg-muted flex items-center gap-2 rounded-md px-3 py-2"
            >
              <Paperclip className="text-muted-foreground size-3.5 shrink-0" />
              <span className="min-w-0 flex-1 truncate text-sm">{file.name}</span>
              <span className="text-muted-foreground shrink-0 text-xs">
                {formatSize(file.size)}
              </span>
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="text-muted-foreground hover:text-destructive shrink-0"
              >
                <X className="size-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileListUpload;
