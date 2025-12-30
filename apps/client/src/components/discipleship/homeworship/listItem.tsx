import { format } from "date-fns";
import { it } from "node:test";
import { IHomeWorship } from "type";

interface IHomeworshipListItemProps {
  item: IHomeWorship;
  onClick: () => void;
}
const HomeworshipListItem = ({ item, onClick }: IHomeworshipListItemProps) => {
  const imageUrl = item.imageUrls?.[0] ?? "/images/home/homeworship.png";
  const date = item.date ? format(new Date(item.date), "yyyy.MM.dd") : format(new Date(item.createdAt), "yyyy.MM.dd");

  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:gap-4 sm:p-4"
    >
      {/* 날짜 및 작성자 */}
      <div className="flex items-center justify-between text-xs text-gray-500 sm:text-sm">
        <span>{date}</span>
        <span className="text-blue-900">{item.userName}</span>
      </div>

      {/* 썸네일 및 제목 */}
      <div className="flex gap-3 sm:gap-4">
        {imageUrl && (
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-gray-100 sm:h-20 sm:w-20 md:h-24 md:w-24">
            <img src={imageUrl} alt={item.title || "가정예배 이미지"} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="line-clamp-2 break-keep text-sm font-medium text-gray-800 sm:text-base md:text-lg">
            {item.title || "예배 갤러리_맞있는 가정예배 인증해주셔서 감사합니다"}
          </h3>
        </div>
      </div>

      {/* 자세히 보기 버튼 */}
      <button className="w-full rounded border border-gray-300 bg-white py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-[#2d4a6f] hover:text-white sm:py-2.5 sm:text-sm">
        자세히 보기
      </button>
    </div>
  );
};

export default HomeworshipListItem;
