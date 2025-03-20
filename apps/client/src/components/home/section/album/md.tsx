import Image from "next/image";

interface IMdImageProps {
  imageSrc: string;
}

const MdImage = ({ imageSrc }: IMdImageProps) => {
  return (
    <div className="relative aspect-square w-full">
      <Image src={imageSrc} alt="album" fill={true} objectFit="cover" />
    </div>
  );
};

export default MdImage;
