import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
};

export default Custom404Page;
