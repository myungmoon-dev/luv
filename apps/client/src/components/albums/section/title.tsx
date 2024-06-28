import { AlbumTypeOptions } from "@/constants/album";
import { AlbumType } from "type";

interface IAlbumTitleSectionProps {
  albumType: AlbumType;
}

const AlbumTitleSection = ({ albumType }: IAlbumTitleSectionProps) => {
  const albumTitle = AlbumTypeOptions.find((option) => option.value === albumType)?.label;

  return (
    <div className="flex justify-center gap-2">
      <p className="font-SCoreDream text-3xl text-blue-600">{albumTitle}</p>
      <p className="font-SCoreDream text-3xl">앨범</p>
    </div>
  );
};

export default AlbumTitleSection;
