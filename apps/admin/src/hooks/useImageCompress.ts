import imageCompression from "browser-image-compression";
import { toast } from "sonner";

export type ImagePreset = "banner" | "content" | "thumbnail";

const PRESETS: Record<ImagePreset, { maxWidthOrHeight: number; maxSizeMB: number }> = {
  banner: { maxWidthOrHeight: 1920, maxSizeMB: 0.8 },
  content: { maxWidthOrHeight: 1280, maxSizeMB: 0.4 },
  thumbnail: { maxWidthOrHeight: 400, maxSizeMB: 0.05 },
};

const toFile = async (blob: Blob, name: string, type: string): Promise<File> => {
  const buffer = await blob.arrayBuffer();
  return new File([buffer], name, { type });
};

const convertToWebp = async (file: File, preset: ImagePreset): Promise<File> => {
  if (file.type === "image/gif") return file;

  const { maxWidthOrHeight, maxSizeMB } = PRESETS[preset];

  if (file.type === "image/webp" && file.size <= maxSizeMB * 1024 * 1024) {
    return file;
  }

  const converted = await imageCompression(file, {
    fileType: "image/webp",
    maxWidthOrHeight,
    maxSizeMB,
    initialQuality: 0.85,
    useWebWorker: true,
  });

  const newName = file.name.replace(/\.[^/.]+$/, "") + ".webp";
  return toFile(converted, newName, "image/webp");
};

export const processImages = async (
  files: File[],
  preset: ImagePreset,
  {
    onStart,
    onDone,
  }: { onStart?: () => void; onDone?: () => void } = {},
): Promise<File[]> => {
  const needsConversion = files.some(
    (f) =>
      !(f.type === "image/webp" && f.size <= PRESETS[preset].maxSizeMB * 1024 * 1024) &&
      f.type !== "image/gif",
  );

  if (!needsConversion) return files;

  onStart?.();
  const toastId = toast.loading("업로드를 위해 이미지를 최적화하고 있습니다…");
  try {
    const result = await Promise.all(files.map((f) => convertToWebp(f, preset)));
    toast.dismiss(toastId);
    onDone?.();
    return result;
  } catch {
    toast.dismiss(toastId);
    toast.error("이미지 최적화 중 오류가 발생했습니다.");
    onDone?.();
    return files;
  }
};
