import React, { useEffect, useState } from "react";
import useBottomSheetStore from "@/store/bottomSheet";

const BottomSheetProvider = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, children, close } = useBottomSheetStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isClient || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* 배경 오버레이 */}
      <div
        onClick={close}
        className="absolute inset-0 bg-black/50 transition-opacity"
      />
      {/* BottomSheet */}
      <div className="absolute bottom-0 left-0 right-0 flex max-h-[90vh] flex-col rounded-t-2xl bg-white shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* 드래그 핸들 */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1 w-12 rounded-full bg-gray-300" />
        </div>
        {/* 컨텐츠 */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default BottomSheetProvider;

