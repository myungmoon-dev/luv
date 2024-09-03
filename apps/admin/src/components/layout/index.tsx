import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import { TooltipProvider } from "../ui/tooltip";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TooltipProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Layout;
