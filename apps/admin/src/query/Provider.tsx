import React, { ReactNode, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IQueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: IQueryProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: 3 },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
