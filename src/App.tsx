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
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Nayvoh Tech provides expert DevOps, cloud infrastructure, and microservices solutions for the modern software industry." />
          <meta name="keywords" content="DevOps, cloud infrastructure, microservices, software industry" />
          <meta name="author" content="Nayvoh Tech" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://nayvohtech.com/" /> {/* Default for the homepage */}
        </Helmet>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <meta name="robots" content="index, follow" />  
                  <link rel="canonical" href="https://nayvohtech.com/" />
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
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://nayvohtech.com/about" />
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
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://nayvohtech.com/services" />
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
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://nayvohtech.com/contact" />
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
                  <meta name="robots" content="index, follow" />
                  <link rel="canonical" href="https://nayvohtech.com/resources" />
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
                  <meta name="robots" content="noindex, nofollow" />
                  <link rel="canonical" href="https://nayvohtech.com/notfound" />
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
