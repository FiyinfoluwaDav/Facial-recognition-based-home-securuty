
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SecurityHero from '@/components/security/SecurityHero';
import SecurityAbout from '@/components/security/SecurityAbout';
import SecurityFeatures from '@/components/security/SecurityFeatures';
import SecurityHowItWorks from '@/components/security/SecurityHowItWorks';
import SecurityCTA from '@/components/security/SecurityCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <SecurityHero />
        <SecurityAbout />
        <SecurityFeatures />
        <SecurityHowItWorks />
        <SecurityCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
