import { ImageIcon, X } from "lucide-react";

interface Props {
  preview: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  alt?: string;
  helperText?: string;
}

const ImageUpload = ({
  preview,
  onChange,
  onRemove,
  alt = "미리보기",
  helperText = "1장 · 10MB 이하 (초과 시 자동 압축)",
}: Props) => {
  if (preview) {
    return (
      <div className="relative w-full overflow-hidden rounded-lg border">
        <img src={preview} alt={alt} className="w-full object-contain" />
        <button
          type="button"
          onClick={onRemove}
          className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          <X className="size-3.5" />
        </button>
      </div>
    );
  }

  return (
    <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-6 text-center transition-colors">
      <ImageIcon className="text-muted-foreground/50 size-6" />
      <span className="text-muted-foreground text-sm">클릭하여 이미지 업로드</span>
      <span className="text-muted-foreground/70 text-xs">{helperText}</span>
      <input type="file" accept="image/*" className="hidden" onChange={onChange} />
    </label>
  );
};

export default ImageUpload;
