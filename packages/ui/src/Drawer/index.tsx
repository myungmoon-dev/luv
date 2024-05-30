import { ReactNode, useEffect, useState } from "react";
import DrawerLib from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import throttle from "lodash/throttle";

interface IDrawerProps {
  direction?: "left" | "right" | "top" | "bottom";
  open?: boolean;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export const Drawer = ({
  direction = "right",
  open = false,
  className,
  children,
  onClose,
}: IDrawerProps) => {
  const [drawerSize, setDrawerSize] = useState("");

  useEffect(() => {
    const handleResize = throttle(() => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setDrawerSize("550px");
      } else if (width >= 1024) {
        setDrawerSize("550px");
      } else if (width >= 768) {
        setDrawerSize("50vw");
      } else {
        setDrawerSize("300px");
      }
    }, 1000);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  return (
    <DrawerLib
      direction={direction}
      open={open}
      className={className}
      onClose={onClose}
      size={drawerSize}
      lockBackgroundScroll={true}
    >
      {children}
    </DrawerLib>
  );
};
