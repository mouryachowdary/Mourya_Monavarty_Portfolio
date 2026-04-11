import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

// Lazy load pages (code splitting)
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load non-critical UI
const Toaster = lazy(() => import("@/components/ui/toaster"));
const Sonner = lazy(() =>
  import("@/components/ui/sonner").then((mod) => ({ default: mod.Toaster }))
);

const App = () => {
  // Create QueryClient once (prevents re-creation)
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Lazy load UI components */}
        <Suspense fallback={null}>
          <Toaster />
          <Sonner />
        </Suspense>

        <BrowserRouter>
          <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
