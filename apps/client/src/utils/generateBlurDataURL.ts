import sharp from "sharp";

export const generateBlurDataURL = async (imagePath: string) => {
  const image = await sharp(imagePath)
    .resize(10) // 매우 작은 크기로 리사이즈
    .blur() // 블러 적용
    .toBuffer();

  return `data:image/jpeg;base64,${image.toString("base64")}`;
};
