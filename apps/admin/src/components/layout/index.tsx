import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import { TooltipProvider } from "../ui/tooltip";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TooltipProvider>
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </TooltipProvider>
  );
};

export default Layout;
