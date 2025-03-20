import { useMediaQuery } from "react-responsive";

import { lg, md, sm } from "../constants/responsive";

const useResponsive = () => {
  const isSm = useMediaQuery({ query: `(min-width: ${sm}px)` });
  const isMd = useMediaQuery({ query: `(min-width: ${md}px)` });
  const isLg = useMediaQuery({ query: `(min-width: ${lg}px)` });

  return { isSm, isMd, isLg };
};

export default useResponsive;
