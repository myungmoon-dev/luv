import imageCompression from "browser-image-compression";
import { toast } from "sonner";

const MAX_SIZE_MB = 10;

const compressImage = async (file: File): Promise<File> => {
  if (file.size <= MAX_SIZE_MB * 1024 * 1024) return file;

  const options = {
    maxSizeMB: MAX_SIZE_MB,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: file.type === "image/png" ? "image/png" : "image/jpeg",
  };

  const compressed = await imageCompression(file, options);
  return new File([compressed], file.name, { type: compressed.type });
};

export const processImages = async (
  files: File[],
  {
    onStart,
    onDone,
  }: { onStart?: () => void; onDone?: () => void } = {}
): Promise<File[]> => {
  const needsCompression = files.some((f) => f.size > MAX_SIZE_MB * 1024 * 1024);

  if (needsCompression) {
    onStart?.();
    const toastId = toast.loading("업로드를 위해 이미지를 최적화하고 있습니다…");
    try {
      const result = await Promise.all(files.map(compressImage));
      toast.dismiss(toastId);
      onDone?.();
      return result;
    } catch {
      toast.dismiss(toastId);
      toast.error("이미지 최적화 중 오류가 발생했습니다.");
      onDone?.();
      return files;
    }
  }

  return files;
};
