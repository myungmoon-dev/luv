import Image from "next/image";
import React from "react";

const LoginBanner = () => {
  return (
    <div className="relative h-screen w-full">
      <Image src="/images/login.png" alt="login_banner" fill={true} className="object-cover" />
    </div>
  );
};

export default LoginBanner;
