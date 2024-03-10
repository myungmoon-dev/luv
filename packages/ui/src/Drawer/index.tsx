import { ReactNode } from "react";

import DrawerLib from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface IDrawerProps {
  direction?: "left" | "right" | "top" | "bottom";
  open?: boolean;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export const Drawer = ({ direction = "right", open = false, className, children, onClose }: IDrawerProps) => {
  return (
    <DrawerLib direction={direction} open={open} className={className} onClose={onClose}>
      {children}
    </DrawerLib>
  );
};
