"use client";

import { useQuery } from "@tanstack/react-query";
import { type ReactNode } from "react";

import { getPopups } from "@/lib/api-popup";

import { PopupOverlay } from "./popup-overlay";

export function PopupProvider({ children }: { children: ReactNode }) {
  const { data: popups } = useQuery({
    queryKey: ["popups", { onlyShow: true }],
    queryFn: getPopups,
  });

  const listKey = popups?.map((p) => p.id).join("\0") ?? "";

  return (
    <>
      {children}
      {popups?.length ? <PopupOverlay key={listKey} popups={popups} /> : null}
    </>
  );
}
