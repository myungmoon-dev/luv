import QueryProvider from "@/query/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/layout";

// FIXME: Hydrate Component Add

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryProvider>
  );
}
