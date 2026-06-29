import { ImageIcon, X } from "lucide-react";

interface Props {
  previews: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (idx: number) => void;
  maxImages?: number;
  helperText?: string;
}

const ImageListUpload = ({
  previews,
  onChange,
  onRemove,
  maxImages,
  helperText,
}: Props) => {
  const reachedMax = maxImages != null && previews.length >= maxImages;
  const defaultHelper = maxImages != null ? `최대 ${maxImages}장` : "여러 장 선택 가능";

  return (
    <div className="flex flex-col gap-2">
      {!reachedMax && (
        <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-6 text-center transition-colors">
          <ImageIcon className="text-muted-foreground/50 size-6" />
          <span className="text-muted-foreground text-sm">클릭하여 이미지 업로드</span>
          <span className="text-muted-foreground/70 text-xs">{helperText ?? defaultHelper}</span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={onChange}
          />
        </label>
      )}
      {previews.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {previews.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-md border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`미리보기 ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <X className="size-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageListUpload;
