import React from 'react';
import { ShieldCheck, HeartPulse, Camera, Clock, Award, Home, Lock } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Fully Insured & Bonded',
      desc: 'Complete liability coverage through Pet Sitters Associates, LLC.',
    },
    {
      icon: HeartPulse,
      title: 'Pet First Aid & CPR Certified',
      desc: 'Trained to detect distress, administer medications, and respond in emergencies.',
    },
    {
      icon: Camera,
      title: 'Real-Time Visit Pupdates',
      desc: 'Photos, GPS route map, and detailed activity report sent to your phone every visit.',
    },
    {
      icon: Home,
      title: '100% In-Home Comfort',
      desc: 'Pets remain in their safe, familiar sanctuary without scary kennel exposure.',
    },
    {
      icon: Award,
      title: 'Estero Resident Owners',
      desc: 'Operated directly by Sharon & Tim Hanson — no rotating stranger sitters.',
    },
    {
      icon: Lock,
      title: 'Secure Key Handling',
      desc: 'Safe coded key storage & strict home security respect at all times.',
    },
  ];

  return (
    <section id="why-us" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 mb-2">
            Why Estero Pet Parents Trust Dog Days
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Commercial Kennels vs. The Dog Days In-Home Difference
          </p>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Kennel boarding can cause intense separation anxiety, exposure to contagious illnesses like kennel cough, and unfamiliar noisy environments. With Dog Days Pet Sitting, your pets stay where they are happiest: in their own beds, eating their regular food, and following their exact daily rhythm.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-teal-300 hover:bg-teal-50/20 transition-all duration-200 flex items-start gap-4 text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-100/90 text-teal-800 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base mb-1">{item.title}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-Person Meet & Greet Guarantee Callout */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-900 to-emerald-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-800/80 text-teal-200 text-xs font-semibold uppercase tracking-wider">
              Always Free & In Person
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Our In-Home Meet & Greet Promise
            </h3>
            <p className="text-teal-100 text-sm max-w-xl">
              We never take on a pet blind. Sharon or Tim visits your home before service starts to present our portfolio, review insurance policies, and let your pets sniff us and get comfortable.
            </p>
          </div>
          <div className="shrink-0">
            <a
              id="trust-badge-phone-action"
              href="tel:7329101197"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm transition-colors shadow-sm"
            >
              <span>Call Sharon at (732) 910-1197</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
