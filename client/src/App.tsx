import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Districts from "@/pages/Districts";
import DistrictPage from "@/pages/DistrictPage";
import Bundeslaender from "@/pages/Bundeslaender";
import BundeslandPage from "@/pages/BundeslandPage";
import CityPage from "@/pages/CityPage";
import Services from "@/pages/Services";
import ServicePage from "@/pages/ServicePage";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/bezirke" component={Districts} />
        <Route path="/bezirke/:slug" component={DistrictPage} />
        <Route path="/bundeslaender" component={Bundeslaender} />
        <Route path="/bundeslaender/:bundesland/:city" component={CityPage} />
        <Route path="/bundeslaender/:slug" component={BundeslandPage} />
        <Route path="/leistungen" component={Services} />
        <Route path="/leistungen/:slug" component={ServicePage} />
        <Route path="/kontakt" component={Contact} />
        
        <Route path="/en" component={Home} />
        <Route path="/en/districts" component={Districts} />
        <Route path="/en/districts/:slug" component={DistrictPage} />
        <Route path="/en/federal-states" component={Bundeslaender} />
        <Route path="/en/federal-states/:bundesland/:city" component={CityPage} />
        <Route path="/en/federal-states/:slug" component={BundeslandPage} />
        <Route path="/en/services" component={Services} />
        <Route path="/en/services/:slug" component={ServicePage} />
        <Route path="/en/contact" component={Contact} />
        
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
