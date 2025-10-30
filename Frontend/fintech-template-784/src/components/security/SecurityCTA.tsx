import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const SecurityCTA = () => {
  const handleGetStarted = () => {
    // Call backend to start Streamlit
    fetch("http://localhost:5000/start-streamlit")
      .then(res => res.text())
      .then(() => {
        // Wait 3 seconds for Streamlit to start, then open it
        setTimeout(() => {
          window.open("http://localhost:8501", "_blank");
        }, 3000);
      })
      .catch(err => console.error("Error starting Streamlit:", err));
  };

  return (
    <section id="cta" className="w-full py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="cosmic-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
              <ShieldCheck className="h-3 w-3" /> Ready to secure your home?
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter">
              Activate your security in minutes
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Get started with NSMC and experience intelligent monitoring, real-time alerts, and a clean, modern dashboard.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleGetStarted}
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="h-11 px-6 border-border hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCTA;
