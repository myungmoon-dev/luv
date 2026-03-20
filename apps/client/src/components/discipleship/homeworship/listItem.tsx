import { format } from "date-fns";
import { IHomeWorship } from "type";

interface IHomeworshipListItemProps {
  item: IHomeWorship;
  onClick: () => void;
}
const HomeworshipListItem = ({ item, onClick }: IHomeworshipListItemProps) => {
  const imageUrl = item.imageUrls?.[0] ?? "/images/home/homeworship.png";
  const date = item.date
    ? format(new Date(item.date), "yyyy.MM.dd")
    : format(new Date(item.createdAt), "yyyy.MM.dd");

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {/* 썸네일 */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={item.title || "가정예배 이미지"}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.comments?.length > 0 && (
          <div className="absolute bottom-1.5 right-1.5 flex items-center gap-0.5 rounded-full bg-black/60 px-1.5 py-0.5 text-white sm:bottom-2 sm:right-2 sm:gap-1 sm:px-3 sm:py-1">
            <svg className="size-3.5 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs font-bold sm:text-sm">{item.comments.length}</span>
          </div>
        )}
      </div>

      {/* 정보 */}
      <div className="p-2 sm:p-3">
        <h3 className="line-clamp-2 break-keep text-xs font-medium text-gray-800 sm:text-sm">
          {item.title || "가정예배 갤러리"}
        </h3>
        <div className="mt-1 flex items-center justify-between text-[10px] text-gray-400 sm:text-xs">
          <span className="text-blue-900">{item.userName}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeworshipListItem;
