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
    <div className="grid grid-cols-2 gap-2 px-3 sm:gap-4 sm:px-6 md:grid-cols-3 md:px-12 lg:grid-cols-4 lg:px-16">
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
