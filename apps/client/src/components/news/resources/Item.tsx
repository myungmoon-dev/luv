import { IResource } from "@/types/news/common";
import dayjs from "dayjs";

interface IResourceItemProps {
  resource: IResource;
}

const ResourceItem = ({ resource }: IResourceItemProps) => {
  return (
    <div className="flex h-[66px] items-center justify-between border-b border-[#BBBBBB] px-2">
      <p className="text-[#222222]">{resource.title}</p>
      <p className="text-xs font-light text-[#757575]">
        {dayjs(resource.createdAt).format("YYYY-MM-DD")}
      </p>
    </div>
  );
};

export default ResourceItem;
