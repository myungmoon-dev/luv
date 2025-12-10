import { IResource } from "@/types/news/common";
import useBottomSheetStore from "@/store/bottomSheet";
import dayjs from "dayjs";
import ResourceBottomSheet from "./BottomSheet";

interface IResourceItemProps {
  resource: IResource;
}

const ResourceItem = ({ resource }: IResourceItemProps) => {
  const openBottomSheet = useBottomSheetStore((state) => state.open);

  const handleClick = () => {
    openBottomSheet(<ResourceBottomSheet resource={resource} />);
  };

  return (
    <div
      onClick={handleClick}
      className="flex h-[66px] cursor-pointer items-center justify-between border-b border-[#BBBBBB] px-2 transition-colors hover:bg-[#F9F9F9]"
    >
      <p className="text-[#222222]">{resource.title}</p>
      <p className="text-xs font-light text-[#757575]">
        {dayjs(resource.createdAt).format("YYYY-MM-DD")}
      </p>
    </div>
  );
};

export default ResourceItem;
