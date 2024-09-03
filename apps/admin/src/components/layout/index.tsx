import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import { TooltipProvider } from "../ui/tooltip";
import Header from "./header";
import { Separator } from "../ui/separator";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TooltipProvider>
      <div className="flex w-full flex-col gap-10">
        <Header />
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-[1440px] gap-10">
            <div className="flex gap-10">
              <Sidebar />
              <Separator orientation="vertical" />
            </div>
            <main className="w-full">{children}</main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Layout;
