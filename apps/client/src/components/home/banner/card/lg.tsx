import Image from "next/image";

interface IHomeBannerLgCardProps {
  image: string;
  handleClick: () => void;
  description: string;
}

const HomeBannerLgCard = ({ description, handleClick, image }: IHomeBannerLgCardProps) => {
  const renderIcon = () => {
    if (image === "onair") {
      return (
        <div className="flex h-[92px] w-[92px] items-center justify-center bg-red-500">
          <div className="relative">
            <svg className="h-14 w-14 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-white shadow-lg"></span>
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-[92px] w-[92px] overflow-hidden">
        <Image src={`/images/home/${image}.jpeg`} alt="image" fill={true} className="object-cover" />
      </div>
    );
  };

  return (
    <button className="group flex w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl" onClick={handleClick}>
      {renderIcon()}
      <div className="flex h-[92px] w-[231px] items-center justify-center whitespace-pre bg-white text-[18px] font-bold leading-[21px] text-[#222222] transition-all group-hover:bg-gray-50">
        {description}
      </div>
    </button>
  );
};

export default HomeBannerLgCard;
