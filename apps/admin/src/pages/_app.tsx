import QueryProvider from "@/query/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/layout";
import ThemeProvider from "@/utils/themeProvider";

// FIXME: Hydrate Component Add

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryProvider>
  );
}
