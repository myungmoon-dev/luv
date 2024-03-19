import React, { useState } from "react";
import { Card, cn } from "ui";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from ".";
import { useGetBulletins } from "@/query/bulletin";
import Image from "next/image";
import { IBulletin } from "type";

import "swiper/css";

const NewsSection = () => {
  const { data } = useGetBulletins();
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedBulletin, setSelectedBulletin] = useState<IBulletin>();

  const handleBulletinClick = (bulletin: IBulletin) => {
    setSelectedBulletin(bulletin);
    setOpenModal(true);
  };

  return (
    <Section title="교회 소식">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          {data &&
            data.bulletins.map((bulletin, idx) => (
              <div onClick={() => handleBulletinClick(bulletin)} className="mt-4 flex flex-col gap-1" key={bulletin.id}>
                <div className="flex justify-around">
                  <span
                    className={cn(
                      "flex h-5 w-5 items-center justify-center bg-[#dfc7c7] text-center font-bold text-white",
                      idx === 0 ? "visible" : "invisible",
                    )}
                  >
                    N
                  </span>
                  <p>{bulletin.title}</p>
                  <p className="text-sm text-gray-400">{bulletin.date}</p>
                </div>
                <hr className="border-t-2 border-gray-100" />
              </div>
            ))}
        </div>
        <Card className="flex h-[300px] items-center justify-center bg-gray-100 sm:h-auto">주보 미리보기</Card>
      </div>
      <Modal onRequestClose={() => setOpenModal(false)} isOpen={isOpenModal}>
        {selectedBulletin && (
          <div>
            <h1>주보 | {selectedBulletin.title}</h1>
            <Swiper>
              {selectedBulletin.images.map((image) => (
                <SwiperSlide key={image}>
                  <Image src={image} alt="bulletin" width={600} height={300} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </Modal>
    </Section>
  );
};

export default NewsSection;
