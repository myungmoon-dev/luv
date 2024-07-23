import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";
import CustomImage from "../customImage";

interface IAboutCoreAlbumProps {
  dataList: IValueVision[];
}

export interface IValueVision {
  id: number;
  titleKr: string;
  titleEn?: string;
  description: string;
  img: string;
  imgClass: string;
}

const coreValueVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
  },
};

const AboutCoreAlbum = ({ dataList }: IAboutCoreAlbumProps) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [showDetailValue, setDetailValue] = useState<boolean>(false);
  const selectedData = dataList[selectedValue];
  const isFirstValue = selectedValue === 0;
  const isLastValue = selectedValue === dataList.length - 1;

  const toggleShowDetailValue = () => setDetailValue((prev) => !prev);

  const onClickDetailValue = (valueId: number) => {
    setSelectedValue(valueId - 1); // FIXME: id와 index는 -1차이
    toggleShowDetailValue();
  };

  const handleClickPrev: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setSelectedValue((prev) => prev - 1);
  };
  const handleClickNext: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setSelectedValue((prev) => prev + 1);
  };

  return (
    <AnimatePresence initial={false}>
      <div className="relative grid h-full w-full grid-cols-5">
        {dataList.map((data, number) => (
          <motion.div
            key={number}
            onClick={() => onClickDetailValue(data.id)}
            layoutId={data.id + ""}
            className="h-full w-full"
          >
            <CustomImage
              className="h-[300px] w-full cursor-pointer md:h-[500px]"
              imgClass={data.imgClass}
              src={data.img}
              alt={`${data.titleKr} 이미지`}
            >
              <div
                data-aos="fade-up"
                className="absolute flex h-full w-full items-center justify-center text-white transition duration-500 ease-in-out hover:bg-blue-600 hover:bg-opacity-30 hover:text-blue-600 sm:gap-16"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="font-SCoreDream text-[50px] sm:text-5xl md:text-9xl">{data.id}</p>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="hidden font-SCoreDream text-white md:block lg:text-xl">{data.titleKr}</p>
                    <p className="hidden font-Cormorant text-white md:block md:text-xs lg:text-sm">{data.titleEn}</p>
                  </div>
                  <p className="text-xs md:text-base md:font-semibold">자세히 보기</p>
                </div>
              </div>
            </CustomImage>
          </motion.div>
        ))}
        {showDetailValue && (
          <AnimatePresence>
            <motion.div
              onClick={toggleShowDetailValue}
              className="z-99 absolute left-0 top-0 h-full w-full"
              variants={coreValueVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CustomImage
                className="relative h-[300px] w-full md:h-[500px]"
                imgClass={selectedData.imgClass}
                src={selectedData.img}
                alt={`${selectedData.titleKr} 이미지`}
              >
                {!isFirstValue && (
                  <button
                    onClick={handleClickPrev}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-3xl text-white md:left-5 xl:left-8"
                  >
                    {"<"}
                  </button>
                )}
                <div className="absolute grid h-full w-full grid-cols-5 sm:gap-16">
                  <div className="col-span-2 flex items-center justify-center">
                    <p className="font-SCoreDream text-9xl text-blue-600 md:text-[300px]">{selectedData.id}</p>
                  </div>
                  <div data-aos="fade-left" className="col-span-3 flex w-full flex-col justify-center gap-6 md:gap-20">
                    <div className="flex flex-col gap-3 text-white">
                      <p className="font-SCoreDream text-2xl sm:text-3xl md:text-5xl">{selectedData.titleKr}</p>
                      <p className="font-Lora sm:text-xl md:text-2xl lg:text-5xl">{selectedData.titleEn}</p>
                    </div>
                    <p className="break-keep pr-6 font-medium leading-relaxed text-white sm:pr-0 sm:text-2xl md:whitespace-pre-wrap">
                      {selectedData.description}
                    </p>
                  </div>
                </div>
                {!isLastValue && (
                  <button
                    onClick={handleClickNext}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-3xl text-white md:right-5 xl:right-8"
                  >
                    {">"}
                  </button>
                )}
              </CustomImage>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </AnimatePresence>
  );
};

export default AboutCoreAlbum;
