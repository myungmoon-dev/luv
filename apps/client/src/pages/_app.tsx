import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Do_Hyeon, Poppins } from "next/font/google";

import ModalProvider from "@/components/modal/provider";
import BottomSheetProvider from "@/components/bottomSheet/provider";
import QueryProvider from "@/query/Provider";

import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
});

const doHyeon = Do_Hyeon({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <div
        className={`${poppins.className} ${doHyeon.className}`}
        style={{
          // Poppins는 라틴에 강하고 한글은 Pretendard로 폴백합니다.
          fontFamily: `${poppins.style.fontFamily}, "Pretendard", sans-serif`,
        }}
      >
        <Component {...pageProps} />
        <ToastContainer />
        <ModalProvider />
        <BottomSheetProvider />
      </div>
    </QueryProvider>
  );
}
