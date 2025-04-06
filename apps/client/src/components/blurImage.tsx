import { useGetBlurImage } from "@/query/blurImage";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { Spinner } from "ui";

interface IBlurImageProps {
  img: string;
  alt: string;
  fill?: boolean;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const BlurImageComponent = ({ img, alt, fill = false, isLoading, setIsLoading }: IBlurImageProps) => {
  // FIXME: useGetBlurImage 수정 해야함
  // const { data } = useGetBlurImage({
  //   img,
  // });

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 z-10 flex h-[220px] w-[338px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[300px] sm:w-[468px] md:h-[440px] md:w-[688px] lg:h-[550px] lg:w-[868px]">
          <Spinner />
        </div>
      )}
      <div className="relative h-[220px] w-[288px] sm:h-[300px] sm:w-[468px] md:h-[440px] md:w-[688px] lg:h-[550px] lg:w-[868px]">
        {<Image src={img} fill={fill} alt={alt} onLoad={() => setIsLoading(false)} />}
      </div>
    </div>
  );
};

export default BlurImageComponent;
