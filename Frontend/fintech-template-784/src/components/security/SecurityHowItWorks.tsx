import React from 'react';
import { Wrench, Activity, BellRing } from 'lucide-react';

const steps = [
  {
    title: 'Install & Connect',
    desc: 'Set up your camera, grant permissions, and link WhatsApp alerts in minutes.',
    Icon: Wrench
  },
  {
    title: 'Monitor with AI',
    desc: 'Our models analyze live video to recognize faces and detect suspicious motion.',
    Icon: Activity
  },
  {
    title: 'Instant Alerting',
    desc: 'If something happens, you receive messages with snapshots and optional clips.',
    Icon: BellRing
  }
];

const SecurityHowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">How it works</h2>
          <p className="text-muted-foreground">From setup to peace of mind in three quick steps.</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, Icon }, idx) => (
            <li key={title} className="cosmic-card rounded-xl p-6 shadow-lg relative">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shadow-lg">{idx + 1}</div>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-medium text-lg mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SecurityHowItWorks;
