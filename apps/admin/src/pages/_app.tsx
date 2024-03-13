import QueryProvider from "@/query/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// FIXME: Hydrate Component Add

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryProvider>
  );
}
