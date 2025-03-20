import Image from "next/image";

interface ILgImageProps {
  imageSrc: string;
}

const LgImage = ({ imageSrc }: ILgImageProps) => {
  return (
    <div className="relative aspect-square min-w-[244px]">
      <Image src={imageSrc} alt="album" fill={true} objectFit="cover" />
    </div>
  );
};

export default LgImage;
