import { Spinner, cn } from "ui";
import { AlbumType } from "type";
import { useGetAlbumList } from "@/query/album";
import useModalStore from "@/store/modal";
import ImageGallery from "react-image-gallery";
import AlbumItemSection from "./section/item";
import AlbumTitleSection from "./section/title";

import "react-image-gallery/styles/css/image-gallery.css";

interface IAlbumListProps {
  albumType: AlbumType;
  className?: string;
}

const AlbumList = ({ className, albumType }: IAlbumListProps) => {
  const { data, isPending } = useGetAlbumList(albumType);
  const open = useModalStore((state) => state.open);

  const convertImageGalleryFormat = (imageData: string[]) => {
    return imageData.map((imgPath) => ({
      original: `${imgPath}/full`,
      thumbnail: `${imgPath}/full`,
    }));
  };

  const showModal = (originalImages: string[]) => {
    const images = convertImageGalleryFormat(originalImages);
    open(<ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />);
  };

  const onClickAlbum = (id: number) => {
    if (!data) return;
    showModal(data[id].images);
  };

  return (
    <div className={cn("flex w-full max-w-screen-xl flex-col items-center justify-center gap-10 px-10", className)}>
      {data && data.length >= 1 && (
        <>
          <AlbumTitleSection albumType={albumType} />
          {isPending ? (
            <div className="flex h-[200px] items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
              {data.map((album, idx) => (
                <AlbumItemSection key={album.id} album={album} onClick={() => onClickAlbum(idx)} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AlbumList;
