import BlurImageComponent from "@/components/blurImage";
import { useGetBulletin } from "@/query/bulletin";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import { Spinner } from "ui";

import "react-medium-image-zoom/dist/styles.css";

const BulletinModal = ({ selectedBulletinId }: { selectedBulletinId?: string }) => {
  const { data: bulletin, isLoading } = useGetBulletin({ bulletinId: selectedBulletinId as string });
  const [currentViewImage, setCurrentViewImage] = useState(0);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const imagesLength = bulletin?.imageUrls.length || 0;
  const hasPrevImage = currentViewImage !== 0;
  const hasNextImage = currentViewImage !== imagesLength - 1;

  useEffect(() => {
    setIsLoadingImage(true);
  }, [currentViewImage]);

  if (isLoading)
    return (
      <div className="flex h-[220px] w-[338px] items-center justify-center sm:h-[300px] sm:w-[468px] md:h-[440px] md:w-[688px] lg:h-[550px] lg:w-[868px]">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg">주보 | {bulletin?.title}</h1>
      {bulletin && (
        <Zoom>
          <BlurImageComponent
            img={`${bulletin.imageUrls[currentViewImage]}`}
            alt={`${bulletin.title}_${currentViewImage}`}
            fill
            isLoading={isLoadingImage}
            setIsLoading={setIsLoadingImage}
          />
        </Zoom>
      )}
      <div className="flex justify-end gap-2">
        {hasPrevImage && (
          <button
            onClick={() => setCurrentViewImage((prev) => prev - 1)}
            className="rounded-md bg-gray-500 px-2 py-1 text-white"
          >
            이전
          </button>
        )}
        {hasNextImage && (
          <button
            onClick={() => setCurrentViewImage((prev) => prev + 1)}
            className="rounded-md bg-gray-500 px-2 py-1 text-white"
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
};

export default BulletinModal;
