import imageCompression from "browser-image-compression";
import { toast } from "sonner";

const MAX_SIZE_MB = 10;

const convertToWebp = async (file: File): Promise<File> => {
  if (file.type === "image/gif" || file.type === "image/webp") return file;

  const options = {
    maxSizeMB: MAX_SIZE_MB,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: "image/webp",
  };

  const compressed = await imageCompression(file, options);
  const newName = file.name.replace(/\.[^/.]+$/, "") + ".webp";
  return new File([compressed], newName, { type: "image/webp" });
};

export const processImages = async (
  files: File[],
  {
    onStart,
    onDone,
  }: { onStart?: () => void; onDone?: () => void } = {},
): Promise<File[]> => {
  const needsConversion = files.some(
    (f) => f.type !== "image/gif" && f.type !== "image/webp",
  );

  if (!needsConversion) return files;

  onStart?.();
  const toastId = toast.loading("업로드를 위해 이미지를 최적화하고 있습니다…");
  try {
    const result = await Promise.all(files.map(convertToWebp));
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
