import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Video, BellRing } from 'lucide-react';
const SecurityHero = () => {
  return <section className="relative w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background" aria-label="Hero">
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full">
        <div className="w-full h-full opacity-20 bg-primary blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
          <ShieldCheck className="h-3 w-3" /> AI-Powered Home Protection
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-balance" id="home-h1">Your Home, Your Security, Powered by AI</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          NSMC Home Security System safeguards what matters most with intelligent monitoring, instant alerts, and a seamless dashboard experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 items-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base" asChild>
            <a href="#cta" aria-label="Get Started with NSMC">Get Started</a>
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground h-12 px-8 text-base" asChild>
            <a href="#how-it-works" aria-label="Learn how NSMC works">How it works</a>
          </Button>
        </div>
        <div className="flex justify-center gap-6 pt-2 text-muted-foreground">
          <div className="flex items-center gap-2"><Video className="h-4 w-4" /> Live Feed</div>
          <div className="flex items-center gap-2"><BellRing className="h-4 w-4" /> Instant Alerts</div>
        </div>
      </div>
    </section>;
};
export default SecurityHero;