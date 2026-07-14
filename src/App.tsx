import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import AboutUs from "./pages/AboutUs";
import AllProjects from "./pages/AllProjects";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudies from "./pages/CaseStudies";
import ContactPage from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import ProjectDetail from "./pages/ProjectDetail";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import Testimonials from "./pages/Testimonials";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route
              path="/schedule-consultation"
              element={<ScheduleConsultation />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
