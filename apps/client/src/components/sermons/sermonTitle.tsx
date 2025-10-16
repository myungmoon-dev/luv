import router from "next/router";
import { Icon } from "ui";

interface ISermonTitleProps {
  title: string;
  url?: string;
}
const SermonTitle = ({ title, url }: ISermonTitleProps) => {
  return (
    <button
      onClick={() => url && router.push(url)}
      className="mb-3 flex items-center gap-1 sm:mb-6 sm:gap-3 md:mb-10 md:w-full md:justify-between lg:mb-12"
    >
      <p className="text-[20px] font-bold text-[#222222] sm:text-[24px] md:text-[28px] lg:text-[32px]">{title}</p>
      {url && (
        <span className="flex size-8 items-center justify-center gap-2 sm:size-10 md:w-auto">
          <p className="hidden text-sm font-medium md:block md:text-base lg:text-lg">자세히 보기</p>
          <Icon name="CaretRight" sizeNumber={14} cursor="ui-cursor-pointer" className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </span>
      )}
    </button>
  );
};

export default SermonTitle;
