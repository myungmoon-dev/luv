import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/query/Provider";
import "@/styles/globals.css";
import ThemeProvider from "@/utils/themeProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";

// FIXME: Hydrate Component Add

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryProvider>
  );
}
