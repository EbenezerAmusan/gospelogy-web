import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { DevotionalPopup } from "@/components/DevotionalPopup";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Sermons from "@/pages/Sermons";
import Ministries from "@/pages/Ministries";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import Devotional from "@/pages/Devotional";
import Leadership from "@/pages/Leadership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sermons" component={Sermons} />
      <Route path="/ministries" component={Ministries} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/devotional" component={Devotional} />
      <Route path="/leadership" component={Leadership} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <DevotionalPopup />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
