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
      className="mb-3 flex items-center gap-1 sm:mb-6 sm:gap-3 md:mb-10 md:w-full lg:mb-12"
    >
      <p className="text-[20px] font-bold text-[#222222] sm:text-[24px] md:text-[28px] lg:text-[32px]">{title}</p>
      {url && (
        <span className="flex size-8 items-center justify-center sm:size-10">
          <Icon name="CaretRight" sizeNumber={14} cursor="ui-cursor-pointer" />
        </span>
      )}
    </button>
  );
};

export default SermonTitle;
