import Image from "next/image";

interface IHomeBannerLgCardProps {
  image: string;
  handleClick: () => void;
  description: string;
}

const HomeBannerLgCard = ({ description, handleClick, image }: IHomeBannerLgCardProps) => {
  return (
    <button className="flex w-full cursor-pointer" onClick={handleClick}>
      <div className="relative h-[92px] w-[92px]">
        <Image src={`/images/home/${image}.jpeg`} alt="image" fill={true} objectFit="cover" />
      </div>
      <div className="flex h-[92px] w-[231px] items-center justify-center whitespace-pre bg-white text-[18px] font-bold leading-[21px] text-[#222222]">
        {description}
      </div>
    </button>
  );
};

export default HomeBannerLgCard;
