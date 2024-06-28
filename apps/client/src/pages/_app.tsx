import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import ModalProvider from "@/components/modal/provider";
import QueryProvider from "@/query/Provider";

import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
      <ToastContainer />
      <ModalProvider />
    </QueryProvider>
  );
}
