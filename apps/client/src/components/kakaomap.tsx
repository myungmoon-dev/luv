import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { cn } from "ui";

declare const window: typeof globalThis & { kakao: any };

type KakaoMapProps = {
  address: string;
  height: string;
};

const KakaoMap = ({ address, height }: KakaoMapProps) => {
  const kakaoMapRef = useRef<HTMLInputElement>(null);

  const onLoadKakaoMap = () => {
    const kakaoMapObject = window.kakao?.maps;

    kakaoMapObject &&
      kakaoMapObject.load(async () => {
        const options = {
          center: new kakaoMapObject.LatLng(33.450701, 126.570667),
          level: 4,
          scrollwheel: false,
          disableDoubleClickZoom: false,
        };

        const map = new kakaoMapObject.Map(kakaoMapRef.current, options);

        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        /* FIXME: 마커 커스텀이미지 
        const markerSize = new kakaoMapObject.Size(28, 28);
        const markerImage = new kakaoMapObject.MarkerImage("/icons/location/marker.svg", markerSize);
        */
        const geocoder = new kakaoMapObject.services.Geocoder();
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === kakaoMapObject.services.Status.OK) {
            const coords = new kakaoMapObject.LatLng(result[0].y, result[0].x);
            const marker = new kakaoMapObject.Marker({
              map: map,
              position: coords,
              // FIXME: image: markerImage,
            });
            map.setCenter(coords);
            marker.setMap(map);
          }
        });
      });
  };

  useEffect(() => {
    if (!window.kakao) return;
    onLoadKakaoMap();
  }, [address]);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`}
        onLoad={onLoadKakaoMap}
      />
      <div ref={kakaoMapRef} className={cn("ui-rounded-lg relative w-full ", height)} />
    </>
  );
};

export default KakaoMap;
