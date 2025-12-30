import { IGetHomeWorshipsResponse } from "@/types/homeWorship/response";
import { IHomeWorship } from "type";
import { useRouter } from "next/navigation";
import HomeworshipListItem from "./listItem";

interface IHomeworshipListSectionProps {
  data: IGetHomeWorshipsResponse;
}

const HomeworshipListSection = ({ data }: IHomeworshipListSectionProps) => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-3 px-4 sm:gap-4 sm:px-6 md:px-12 lg:px-16">
      {data?.homeworships.map((worship: IHomeWorship) => {
        return (
          <HomeworshipListItem
            key={worship._id}
            onClick={() => push(`/discipleship/homeworship/${worship._id}`)}
            item={worship}
          />
        );
      })}
    </div>
  );
};

export default HomeworshipListSection;
