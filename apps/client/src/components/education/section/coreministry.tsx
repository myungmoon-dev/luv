import CustomImage from "@/components/customImage";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "ui";
import EducationIntroductionTitle from "../introductionTitle";

interface IEducationCoreMinistrySectionProps {
  dataList: IValueVision[];
  department: string;
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

const EducationCoreMinistrySection = ({ dataList, department }: IEducationCoreMinistrySectionProps) => {
  const [selectedValue, setSelectedValue] = useState<IValueVision>(dataList[0]);
  const [showDetailValue, setDetailValue] = useState<boolean>(false);

  const toggleShowDetailValue = () => setDetailValue((prev) => !prev);

  const onClickDetailValue = (valueId: number) => {
    setSelectedValue(dataList[valueId - 1]); // FIXME: id와 index는 -1차이
    toggleShowDetailValue();
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 xl:h-screen">
      <EducationIntroductionTitle department={department} type="핵심사역" />
      <AnimatePresence initial={false}>
        <div className={cn("relative grid h-full w-full gap-1", `grid-cols-${dataList.length}`)}>
          {dataList.map((data, number) => (
            <motion.div
              key={number}
              onClick={() => onClickDetailValue(data.id)}
              layoutId={data.id + ""}
              className="h-full w-full"
            >
              <CustomImage
                className="h-[300px] w-full cursor-pointer bg-blue-600 md:h-[500px]"
                imgClass={data.imgClass}
                src={data.img}
                alt={`${data.titleKr} 이미지`}
              >
                <div
                  data-aos="fade-up"
                  className="flex h-full w-full items-center justify-center text-white transition duration-500 ease-in-out hover:bg-opacity-30 hover:text-blue-600 sm:gap-16"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <p className="font-SCoreDream text-[50px] sm:text-5xl md:text-9xl">{data.id}</p>
                    <div className="flex flex-col items-end justify-center gap-1">
                      <p className="font-SCoreDream w-16 overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm text-white md:w-auto md:text-2xl lg:text-xl">
                        {data.titleKr}
                      </p>
                      <p className="font-Cormorant text-white md:text-2xl">{data.titleEn}</p>
                    </div>
                    <p className="text-sm md:text-base md:font-semibold">자세히보기</p>
                  </div>
                </div>
              </CustomImage>
            </motion.div>
          ))}
          {showDetailValue && (
            <AnimatePresence>
              <motion.div
                // layoutId={selectedValue.id + ""}
                onClick={toggleShowDetailValue}
                className="z-99 absolute left-0 top-0 h-full w-full"
                variants={coreValueVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <CustomImage
                  className="relative h-[300px] w-full md:h-[500px]"
                  imgClass={selectedValue.imgClass}
                  src={selectedValue.img}
                  alt={`${selectedValue.titleKr} 이미지`}
                >
                  <div className="absolute grid h-full w-full grid-cols-5 sm:gap-16">
                    <div className="col-span-2 flex items-center justify-center">
                      <p className="font-SCoreDream text-9xl text-blue-600 md:text-[300px]">{selectedValue.id}</p>
                    </div>
                    <div
                      data-aos="fade-left"
                      className="col-span-3 flex w-full flex-col justify-center gap-6 md:gap-20"
                    >
                      <div className="flex flex-col gap-3 text-white">
                        <p className="font-SCoreDream text-2xl sm:text-3xl md:text-5xl">{selectedValue.titleKr}</p>
                        <p className="font-Lora sm:text-xl md:text-2xl lg:text-5xl">{selectedValue.titleEn}</p>
                      </div>
                      <p className="break-keep pr-6 font-medium leading-relaxed text-white sm:pr-0 sm:text-2xl md:whitespace-pre-wrap">
                        {selectedValue.description}
                      </p>
                    </div>
                  </div>
                </CustomImage>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default EducationCoreMinistrySection;
