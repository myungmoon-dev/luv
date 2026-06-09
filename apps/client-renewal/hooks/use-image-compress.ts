import imageCompression from "browser-image-compression";

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

export const compressImages = async (files: File[]): Promise<File[]> => {
  const needsCompression = files.some((file) => file.size > MAX_SIZE_MB * 1024 * 1024);
  if (!needsCompression) return files;

  try {
    return await Promise.all(files.map(compressImage));
  } catch {
    return files;
  }
};
