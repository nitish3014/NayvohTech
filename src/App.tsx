import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet for setting the canonical link
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Helmet>
          <link rel="canonical" href="https://www.nayvohtech.com/" /> {/* Default for the homepage */}
        </Helmet>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <link rel="canonical" href="https://www.nayvohtech.com/" />
                </Helmet>
                <Index />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <link rel="canonical" href="https://www.nayvohtech.com/about" />
                </Helmet>
                <About />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Helmet>
                  <link rel="canonical" href="https://www.nayvohtech.com/services" />
                </Helmet>
                <Services />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <link rel="canonical" href="https://www.nayvohtech.com/contact" />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="/resources"
            element={
              <>
                <Helmet>
                  <link rel="canonical" href="https://www.nayvohtech.com/resources" />
                </Helmet>
                <Tools />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <link rel="canonical" href="https://www.nayvohtech.com/notfound" />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
