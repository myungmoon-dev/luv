"use client";

import { useSearchParams } from "next/navigation";

export function PopupImage() {
  const searchParams = useSearchParams();
  const src = searchParams.get("src");

  if (!src) {
    return <div className="p-5 text-neutral-600">이미지가 없습니다.</div>;
  }

  return (
    <div className="p-5">
      {/* 임의 URL — next/image 원격 패턴 없이 표시 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="팝업" className="max-h-[90vh] max-w-full" />
    </div>
  );
}
