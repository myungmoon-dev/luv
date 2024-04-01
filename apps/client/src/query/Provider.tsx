import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IQueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: IQueryProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: 3 },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
