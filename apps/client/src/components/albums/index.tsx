import { Spinner, cn } from "ui";
import { AlbumType } from "type";
import { useGetAlbumListSuspense } from "@/query/album";
import useModalStore from "@/store/modal";
import ImageGallery from "react-image-gallery";
import AlbumItemSection from "./section/item";
import AlbumTitleSection from "./section/title";

import "react-image-gallery/styles/css/image-gallery.css";
import { Suspense } from "@suspensive/react";

interface IAlbumListProps {
  albumType: AlbumType;
  className?: string;
}

const AlbumList = ({ className, albumType }: IAlbumListProps) => {
  return (
    <Suspense
      clientOnly
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <AlbumListMain className={className} albumType={albumType} />
    </Suspense>
  );
};

const AlbumListMain = ({ className, albumType }: IAlbumListProps) => {
  const { data, isFetching } = useGetAlbumListSuspense(albumType);
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
    <div className={cn("max-w-screen-xl flex w-full flex-col items-center justify-center gap-10 px-10", className)}>
      {data && data.totalAlbums >= 1 && (
        <>
          <AlbumTitleSection albumType={albumType} />
          {isFetching ? (
            <div className="flex h-[200px] items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="2xl:grid-cols-4 grid w-full grid-cols-1 gap-7 md:grid-cols-3">
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
