import React from 'react';
import { UserCheck, Bell, Camera, CameraOff, Video, FileText, ShieldAlert, MessageSquare } from 'lucide-react';

const features = [
  { title: 'Real-time AI Face Recognition', desc: 'Identify known faces and flag unknown visitors instantly.', Icon: UserCheck },
  { title: 'Intrusion Alerts via WhatsApp', desc: 'Receive immediate alerts with snapshots and timestamps.', Icon: MessageSquare },
  { title: 'Live Camera Feed', desc: 'Monitor your property with low-latency live streaming.', Icon: Camera },
  { title: 'Snapshot Capture', desc: 'Capture and save images on demand or automatically.', Icon: CameraOff },
];

const SecurityFeatures = () => {
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">Powerful features, simple control</h2>
          <p className="text-muted-foreground text-lg">Everything you need to protect your home with confidence.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, Icon }) => (
            <article key={title} className="cosmic-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-medium text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
