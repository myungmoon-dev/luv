import React, { useEffect, useRef } from "react";
import Script from "next/script";

declare const window: typeof globalThis & { kakao: any };

type KakaoMapProp = {
  address: string;
};

const KakaoMap = ({ address }: KakaoMapProp) => {
  const kakaoMapRef = useRef<HTMLInputElement>(null);

  const onLoadKakaoMap = () => {
    const kakaoMapObject = window.kakao.maps;

    kakaoMapObject.load(async () => {
      const options = {
        center: new kakaoMapObject.LatLng(33.450701, 126.570667),
        level: 4,
      };

      const map = new kakaoMapObject.Map(kakaoMapRef.current, options);
      const geocoder = new kakaoMapObject.services.Geocoder();
      /* FIXME: 마커 커스텀이미지 
      const markerSize = new kakaoMapObject.Size(28, 28);
      const markerImage = new kakaoMapObject.MarkerImage("/icons/location/marker.svg", markerSize);
      */

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
      <div ref={kakaoMapRef} className="ui-rounded-lg relative h-[230px] w-full" />
    </>
  );
};

export default KakaoMap;