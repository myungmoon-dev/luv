import useModalStore from "@/store/modal";
import { useRouter } from "next/router";
import React from "react";

const ChuseokModal = () => {
  const { push } = useRouter();
  const closeModal = useModalStore((state) => state.close);

  const handleClickButton = () => {
    push("/news/resources/1");
    closeModal();
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-1 sm:pt-4">
      <h1 className="text-center text-lg font-bold text-gray-800 md:text-2xl">추석 가정예배 순서지</h1>
      <div className="mb-1 h-1 w-16 rounded-full bg-blue-500 sm:mb-3"></div>
      <p className="break-keep text-center text-xs text-gray-700 md:text-base">
        은혜와 사랑이 가득한 복된 한가위 추석 명절 보내시길 바랍니다.&nbsp;
        <br />
        가정 예배를 통하여 수선대후의 은혜가 있기를 축복합니다.
      </p>
      <button
        onClick={handleClickButton}
        className="mt-2 w-fit rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600 sm:mt-4"
      >
        2024 명문교회 추석&nbsp;
        <br className="sm:hidden" />
        가정예배 순서지 보러가기
      </button>
    </div>
  );
};

export default ChuseokModal;
