import { cn } from "ui";
import BannerIcon from "./bannerIcon";
import { IBannerIcon } from "@/types/banner/type";

interface IBannerIconListProps {
  list: IBannerIcon[];
  className?: string;
}

const BannerIconList = ({ list, className }: IBannerIconListProps) => {
  return (
    <div
      className={cn(
        "absolute bottom-8 right-6 flex flex-col items-center justify-center gap-3 sm:bottom-20 sm:right-16",
        className,
      )}
    >
      {list.map((item, index) => (
        <BannerIcon
          key={index}
          iconType={item.iconType}
          text={item.text}
          className={cn("h-12 w-32 gap-2 rounded-3xl sm:h-16 sm:w-40 md:rounded-[30px]", item.className)}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default BannerIconList;
