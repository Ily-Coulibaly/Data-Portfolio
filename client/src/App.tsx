import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/useTheme";
import { LanguageProvider } from "@/hooks/useLanguage";
import Home from "@/pages/home";
import MoreAboutMePage from "@/pages/more-about-me";
import ResumePage from "@/pages/resume";
import NotFound from "@/pages/not-found";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/more-about-me" component={MoreAboutMePage} />
      <Route path="/resume" component={ResumePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
