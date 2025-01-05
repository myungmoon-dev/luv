import KakaoMap from "@/components/kakaomap";
import { cn } from "ui";

interface IMapProps {
  isWhite: boolean;
  title: string;
  address: string;
}

const Map = ({ isWhite, address, title }: IMapProps) => {
  return (
    <div
      data-aos={isWhite ? "fade-right" : "fade-left"}
      data-aos-duration="700"
      className={cn("flex w-full", isWhite ? "justify-start" : "justify-end")}
    >
      <div className={cn("flex w-full flex-col md:w-3/5 2xl:w-1/2", isWhite ? "items-start text-white" : "items-end")}>
        <p className={cn("font-SCoreDream text-lg sm:text-xl md:text-2xl", !isWhite && "text-[#001f54]")}>{title}</p>
        <p className="mb-2 md:text-lg">{address}</p>
        <KakaoMap address={address} height=" h-[230px] lg:h-[400px]" />
      </div>
    </div>
  );
};

export default Map;
