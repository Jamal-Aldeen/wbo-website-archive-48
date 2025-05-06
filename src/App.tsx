
import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import WhyOutsource from "./pages/WhyOutsource";
// import Contact from "./pages/Contact";
// import Careers from "./pages/Careers";
// import Partners from "./pages/Partners";
// import NotFound from "./pages/NotFound";

import { Loader2 } from 'lucide-react';

const queryClient = new QueryClient();

// Lazy-load page components
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const WhyOutsource = lazy(() => import('./pages/WhyOutsource'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <Loader2 className="h-8 w-8 animate-spin text-wbo-blue" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/wbo-website-archive-48">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-outsource" element={<WhyOutsource />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
