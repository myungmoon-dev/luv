import ModalProvider from "@/components/modal/provider";
import QueryProvider from "@/query/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
      <ModalProvider />
    </QueryProvider>
  );
}
