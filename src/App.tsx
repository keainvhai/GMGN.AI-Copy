import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Trenches from "./pages/Trenches";
import Trending from "./pages/Trending";
import CopyTrade from "./pages/CopyTrade";
import NotFound from "./pages/NotFound";
import WalletPage from "./pages/WalletPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Trenches />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/copytrade" element={<CopyTrade />} />
                <Route path="/new-pair" element={<Trenches />} />
                <Route path="/monitor" element={<Trenches />} />
                <Route path="/follow" element={<Trenches />} />
                <Route path="/holding" element={<WalletPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
