import BlurImageComponent from "@/components/blurImage";
import { useGetBulletin } from "@/query/bulletin";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import { Spinner } from "ui";

import "react-medium-image-zoom/dist/styles.css";

const BulletinModal = ({ selectedBulletinId }: { selectedBulletinId?: string }) => {
  const { data, isLoading } = useGetBulletin({ bulletinId: selectedBulletinId as string });
  const bulletin = data?.bulletin;
  const [currentViewImage, setCurrentViewImage] = useState(0);

  // FIXME: 호출하기까지 시간이 걸리므로 임시로 로딩처리
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
          <div className="relative h-[220px] w-[338px] sm:h-[300px] sm:w-[468px] md:h-[440px] md:w-[688px] lg:h-[550px] lg:w-[868px]">
            <BlurImageComponent
              img={`${bulletin.images[currentViewImage]}/bulletin`}
              alt={`${bulletin.title}_${currentViewImage}`}
              fill
            />
          </div>
        </Zoom>
      )}
      <div className="flex justify-end gap-2">
        <button onClick={() => setCurrentViewImage(0)} className="rounded-md bg-gray-500 px-2 py-1 text-white">
          앞면
        </button>
        <button onClick={() => setCurrentViewImage(1)} className="rounded-md bg-gray-500 px-2 py-1 text-white">
          뒷면
        </button>
      </div>
    </div>
  );
};

export default BulletinModal;
