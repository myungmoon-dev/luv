import React, { useEffect } from "react";

import useModalStore from "@/store/modal";

const ModalProvider = () => {
  const [isOpen, children, close] = useModalStore((state) => [state.isOpen, state.children, state.close]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 m-2 flex h-fit w-[370px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between gap-5 overflow-hidden rounded-lg bg-white p-4 shadow-lg sm:w-[500px] md:w-[720px] lg:w-[900px]">
        {children}
        <div className="flex justify-end">
          <button className="rounded-md bg-gray-300 px-4 py-2" onClick={close}>
            닫기
          </button>
        </div>
      </div>
      <div onClick={close} className="h-full w-full bg-gray-200 bg-opacity-50" />
    </div>
  );
};

export default ModalProvider;