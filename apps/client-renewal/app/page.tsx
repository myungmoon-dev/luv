import { Do_Hyeon } from "next/font/google";

import { HomePage } from "@/components/home/home-page";
import { PopupProvider } from "@/components/home/popup-provider";
import { SiteShell } from "@/components/layout/site-shell";

const doHyeon = Do_Hyeon({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  return (
    <SiteShell navFontClassName={doHyeon.className}>
      <PopupProvider>
        <HomePage />
      </PopupProvider>
    </SiteShell>
  );
}
