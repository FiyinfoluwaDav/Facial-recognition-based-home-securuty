import React from 'react';
import { Shield, Home } from 'lucide-react';
const SecurityAbout = () => {
  return <section id="about" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">Why home security matters</h2>
          <p className="text-muted-foreground text-lg">Your home deserves secure protection. NSMC security system combines computer vision, secure messaging, and a modern dashboard to detect intrusions, verify identities, and notify you instantly, day or night.</p>
          <p className="text-muted-foreground">Built for reliability and privacy, the NSMC security system helps you prevent incidents before they escalate. It provides full visibility through a live camera feed and detailed logs.</p>
        </div>
        <div className="cosmic-card rounded-xl p-6 flex flex-col gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium">Intelligent security approach</span>
          </div>
          <div className="flex items-center gap-3">
            <Home className="h-5 w-5 text-primary" />
            <span className="font-medium">Designed for real homes</span>
          </div>
        </div>
      </div>
    </section>;
};
export default SecurityAbout;