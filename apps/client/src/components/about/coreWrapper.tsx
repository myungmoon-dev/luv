import { AnimatePresence, motion } from "framer-motion";
import CustomImage from "../customImage";
import { useState } from "react";

interface IAboutCoreWrapperProps {
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

const AboutCoreWrapper = ({ dataList }: IAboutCoreWrapperProps) => {
  const [selectedValue, setSelectedValue] = useState<IValueVision>(dataList[0]);
  const [showDetailValue, setDetailValue] = useState<boolean>(false);

  const toggleShowDetailValue = () => setDetailValue((prev) => !prev);

  const onClickDetailValue = (valueId: number) => {
    setSelectedValue(dataList[valueId - 1]); // FIXME: id와 index는 -1차이
    toggleShowDetailValue();
  };

  return (
    <AnimatePresence initial={false}>
      <div className="relative grid h-full w-full grid-cols-5 gap-1">
        {dataList.map((data, number) => (
          <motion.div onClick={() => onClickDetailValue(data.id)} layoutId={data.id + ""} className="h-full w-full">
            <CustomImage
              className="h-[300px] w-full cursor-pointer md:h-[500px]"
              imgClass={data.imgClass}
              src={data.img}
              alt={`${data.titleKr} 이미지`}
            >
              <div
                data-aos="fade-up"
                key={number}
                className="absolute flex h-full w-full items-center justify-center text-white transition duration-500 ease-in-out hover:text-blue-600 sm:gap-16"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="font-SCoreDream text-[50px] sm:text-5xl md:text-9xl">{data.id}</p>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-SCoreDream hidden text-white md:block lg:text-xl">{data.titleKr}</p>
                    <p className="font-Lora hidden text-gray-300 md:text-sm lg:block">{data.titleEn}</p>
                  </div>
                  <p className="font-SCoreDream text-xs text-white md:text-base">자세히 보기</p>
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
                  <div data-aos="fade-left" className="col-span-3 flex w-full flex-col justify-center gap-6 md:gap-20">
                    <div className="flex flex-col gap-3 text-white">
                      <p className="font-SCoreDream text-2xl sm:text-3xl md:text-5xl">{selectedValue.titleKr}</p>
                      <p className="font-Lora sm:text-xl md:text-2xl lg:text-5xl">{selectedValue.titleEn}</p>
                    </div>
                    <p className="whitespace-pre pr-6 font-medium leading-relaxed text-white sm:pr-0 sm:text-2xl">
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
  );
};

export default AboutCoreWrapper;
