import Image from "next/image";

interface IHomeBannerSmCardProps {
  image: string;
  description: string;
  handleClick: () => void;
}

const HomeBannerSmCard = ({ description, handleClick, image }: IHomeBannerSmCardProps) => {
  const renderIcon = () => {
    if (image === "onair") {
      return (
        <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center bg-red-500">
          <div className="relative">
            <svg
              className="h-11 w-11 text-white drop-shadow-lg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white shadow-lg"></span>
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden">
        <Image
          src={`/images/home/${image}.jpeg`}
          alt="image"
          fill={true}
          className="object-cover"
        />
      </div>
    );
  };

  return (
    <div
      className="flex w-full cursor-pointer overflow-hidden rounded-lg shadow-md"
      onClick={handleClick}
    >
      {renderIcon()}
      <div className="flex h-[70px] w-full items-center break-keep bg-white pl-[41px] text-[17px] font-semibold text-[#222222] sm:pl-[38px] sm:text-[18px] md:pl-[33px]">
        {description}
      </div>
    </div>
  );
};

export default HomeBannerSmCard;
