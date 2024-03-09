import React from "react";
import Image from "next/image";

const NotPrepared = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">준비중인 페이지입니다.</h1>
          <p>빠른 시일내로 제작하도록 하겠습니다🔥</p>
        </div>
        <Image src="/images/hourglass.png" alt="hourglass" width={200} height={600} />
      </div>
    </div>
  );
};

export default NotPrepared;
