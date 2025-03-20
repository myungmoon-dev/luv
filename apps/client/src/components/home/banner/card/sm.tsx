import Image from "next/image";

interface IHomeBannerSmCardProps {
  image: string;
  description: string;
  handleClick: () => void;
}

const HomeBannerSmCard = ({ description, handleClick, image }: IHomeBannerSmCardProps) => {
  return (
    <div className="flex w-full cursor-pointer" onClick={handleClick}>
      <div className="relative h-[70px] min-w-[70px]">
        <Image src={`/images/home/${image}.jpeg`} alt="image" fill={true} objectFit="cover" />
      </div>
      <div className="flex h-[70px] w-full items-center bg-white pl-[41px] text-[17px] font-bold text-[#222222] sm:pl-[38px] sm:text-[18px] md:pl-[33px]">
        {description}
      </div>
    </div>
  );
};

export default HomeBannerSmCard;
