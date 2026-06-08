import React, { ReactNode } from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AdminSidebar from "./sidebar";

interface LayoutProps {
  title: string;
  children: ReactNode;
  titleChildren?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4">
          <SidebarTrigger className="-ml-2" />
          <div className="flex flex-1 items-center gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="검색..." className="h-9 border-0 bg-muted/50 pl-8" />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-4" />
          </Button>
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
