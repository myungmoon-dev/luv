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
  const { data, isFetching } = useGetAlbumList(albumType);
  const open = useModalStore((state) => state.open);

  const convertImageGalleryFormat = (imageData: string[]) => {
    return imageData.map((imgPath) => ({
      original: `${imgPath}`,
      thumbnail: `${imgPath}`,
    }));
  };

  const showModal = (originalImages: string[]) => {
    const images = convertImageGalleryFormat(originalImages);
    open(<ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />);
  };

  return (
    <div className={cn("flex w-full max-w-screen-xl flex-col items-center justify-center gap-10 px-10", className)}>
      {data && data.totalAlbums >= 1 && (
        <>
          <AlbumTitleSection albumType={albumType} />
          {isFetching ? (
            <div className="flex h-[200px] items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
              {data.albums.map((album, idx) => (
                <AlbumItemSection key={album._id} album={album} onClick={() => showModal(album.imageUrls)} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AlbumList;
