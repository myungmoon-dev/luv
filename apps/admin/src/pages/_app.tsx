import QueryProvider from "@/query/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// FIXME: Hydrate Component Add

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryProvider>
  );
}
