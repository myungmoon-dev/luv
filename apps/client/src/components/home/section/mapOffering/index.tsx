import React, { useEffect, useState } from "react";
import MapOfferingCard from "./card";
import useResponsive from "@/hooks/useResponsive";

export type MapOfferingType = "MAP" | "OFFERING";

const MapOfferingSection = () => {
  const { isLg } = useResponsive();
  const [type, setType] = useState<MapOfferingType>("MAP");

  useEffect(() => {
    const interval = setInterval(() => {
      if (type === "MAP") {
        setType("OFFERING");
      } else {
        setType("MAP");
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  if (isLg)
    return (
      <div className="relative">
        <div className="absolute -top-[89px] left-1/2 flex -translate-x-1/2 justify-center">
          <MapOfferingCard type="OFFERING" />
          {/* <div className="flex items-center justify-center bg-white">
            <span className="h-[92px] w-[0.5px] bg-pink-400" />
          </div> */}
          <MapOfferingCard type="MAP" />
        </div>
      </div>
    );

  return (
    <div className="bg-[#F5F5F5] px-[30px] py-[19px] sm:px-[33px] sm:py-[25px]">
      <MapOfferingCard type={type} />
    </div>
  );
};

export default MapOfferingSection;
