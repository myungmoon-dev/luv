import { ICongregationNews } from "@/types/news/common";
import { CONGREGATION_NEWS_TYPE_MAP } from "./config";

interface ICongregationNewsItemProps {
  news: ICongregationNews;
}

const CongregationNewsItem = ({ news }: ICongregationNewsItemProps) => {
  return (
    <div className="flex h-[66px] items-center gap-2 border-b border-[#BBBBBB] px-2 sm:gap-4 sm:px-4 md:h-[120px] md:gap-10 md:px-10">
      <p className="w-[72px] text-sm font-medium text-[#001F54]/[.7] sm:w-[80px] sm:text-base md:w-[90px] md:text-xl">
        {CONGREGATION_NEWS_TYPE_MAP[news.type]}
      </p>
      <p className="flex-1 whitespace-pre-wrap font-medium text-[#505050] sm:text-lg md:text-xl">
        {news.description}
      </p>
    </div>
  );
};

export default CongregationNewsItem;
