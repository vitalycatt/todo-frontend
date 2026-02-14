import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      gcTime: 1000 * 60 * 10, // 10 минут (cacheTime в v5)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const QueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>{children}</TooltipProvider>
  </QueryClientProvider>
);
