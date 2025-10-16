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
      className="mb-[12px] flex items-center gap-[1px] sm:mb-[26px] sm:gap-[12px] md:mb-[48px] md:w-full md:justify-between lg:mb-[40px]"
    >
      <p className="text-[22px] font-bold text-[#222222] sm:text-[25px] lg:text-[30px]">{title}</p>
      {url && (
        <span className="flex size-[35px] items-center justify-center gap-2 md:w-auto">
          <p className="hidden text-[14px] font-medium md:block">자세히 보기</p>
          <Icon name="CaretRight" sizeNumber={14} cursor="ui-cursor-pointer" />
        </span>
      )}
    </button>
  );
};

export default SermonTitle;
