import useModalStore from "@/store/modal";
import { useRouter } from "next/router";
import React from "react";

const ChuseokModal = () => {
  const { push } = useRouter();
  const closeModal = useModalStore((state) => state.close);

  const handleClickButton = () => {
    push("/news/resources");
    closeModal();
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-1 sm:pt-4">
      <h1 className="text-center text-lg font-bold text-gray-800 md:text-2xl">추석 가정예배 순서지</h1>
      <div className="mb-1 h-1 w-16 rounded-full bg-blue-500 sm:mb-3"></div>
      <p className="break-keep text-center text-xs text-gray-700 md:text-base">
        풍성한 한가위를 맞아 교회에서 준비한 추석 가정예배 순서지를 확인해보세요.
        <br />
        가정에서 편안하게 예배를 드리며 은혜를 누리시길 바랍니다.
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
