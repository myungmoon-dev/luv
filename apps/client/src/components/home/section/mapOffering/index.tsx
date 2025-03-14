import React from "react";
import MapOfferingCard from "./card";
import useResponsive from "@/hooks/useResponsive";

const MapOfferingSection = () => {
  const { isLg } = useResponsive();

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
      <MapOfferingCard type="OFFERING" />
    </div>
  );
};

export default MapOfferingSection;
