import CustomImage from "@/components/customImage";
import { IAlbum } from "type";

interface IAlbumItemSectionProps {
  album: IAlbum;
  onClick: () => void;
}
const AlbumItemSection = ({ album, onClick }: IAlbumItemSectionProps) => {
  return (
    <div onClick={onClick} className="group flex w-full cursor-pointer flex-col items-center justify-center gap-2">
      <div className="relative h-[200px] w-full">
        <CustomImage
          alt={album.title}
          src={`${album.images[0]}/full`}
          imgClass="rounded-md shadow-lg"
          className="h-full w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-35 text-lg font-bold text-white opacity-0 duration-300 group-hover:opacity-100">
          <p>자세히보기</p>
        </div>
      </div>
      <p className="text-center text-xl font-bold group-hover:text-blue-600 md:text-lg xl:text-xl">{album.title}</p>
      <div className="h-[1px] w-full bg-gray-300" />
      <p className="text-gray-700">{album.date}</p>
    </div>
  );
};

export default AlbumItemSection;
