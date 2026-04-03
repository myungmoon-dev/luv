"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type KakaoMapProps = {
  address: string;
  className?: string;
};

export function KakaoMap({ address, className }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const appKey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

  useEffect(() => {
    if (!appKey || !scriptReady || !mapRef.current || typeof window === "undefined" || !window.kakao?.maps) {
      return;
    }

    const kakaoMapObject = window.kakao.maps;

    kakaoMapObject.load(() => {
      if (!mapRef.current) return;

      const options = {
        center: new kakaoMapObject.LatLng(33.450701, 126.570667),
        level: 4,
        scrollwheel: false,
        disableDoubleClickZoom: false,
      };

      const map = new kakaoMapObject.Map(mapRef.current, options);
      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      const geocoder = new kakaoMapObject.services.Geocoder();
      geocoder.addressSearch(address, (result: { x: string; y: string }[], status: unknown) => {
        if (status === kakaoMapObject.services.Status.OK && result[0]) {
          const coords = new kakaoMapObject.LatLng(result[0].y, result[0].x);
          new kakaoMapObject.Marker({ map, position: coords });
          map.setCenter(coords);
        }
      });
    });
  }, [address, appKey, scriptReady]);

  if (!appKey) {
    return (
      <div
        className={cn(
          "flex h-[230px] w-full items-center justify-center border border-[#E6E6E6] bg-[#f5f7fa] px-4 text-center text-sm text-[#496674] sm:h-[314px] md:h-[395px] lg:h-[508px]",
          className,
        )}
      >
        지도를 표시하려면 환경 변수 NEXT_PUBLIC_KAKAOMAP_KEY가 필요합니다.
      </div>
    );
  }

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div
        ref={mapRef}
        className={cn(
          "relative w-full overflow-hidden rounded-none border border-[#E6E6E6] sm:rounded-sm",
          "h-[230px] sm:h-[314px] md:h-[395px] lg:h-[508px]",
          className,
        )}
      />
    </>
  );
}
