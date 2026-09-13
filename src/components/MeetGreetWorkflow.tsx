import React from 'react';
import { PhoneCall, Home, Camera, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface MeetGreetWorkflowProps {
  onOpenBooking: () => void;
}

export const MeetGreetWorkflow: React.FC<MeetGreetWorkflowProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'Free Phone or Online Consultation',
      icon: PhoneCall,
      desc: 'Give Sharon a call or submit our quick online form. We’ll discuss your pet’s routine, required dates, medications, and answer any initial questions you might have.',
      highlight: 'Direct call to (732) 910-1197',
    },
    {
      step: '02',
      title: 'In-Home Meet & Greet (Always Free)',
      icon: Home,
      desc: 'We visit your home in Estero at your convenience. We present our professional portfolio, Pet Sitters Associates insurance certificate, and CPR credentials. Your pet gets to know us in their safe environment.',
      highlight: 'Full portfolio & insurance presented in person',
    },
    {
      step: '03',
      title: 'Loving Care & Real-Time Pupdates',
      icon: Camera,
      desc: 'Relax with complete peace of mind! After every visit or walk, you receive a direct text message with photos of your happy pet, a potty report, fresh water confirmation, and a personal note from Sharon or Tim.',
      highlight: 'Photos sent after every single visit',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            The Dog Days Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            How It Works in 3 Simple Steps
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            We make setting up pet care effortless, safe, and transparent. We never rush the introduction process and prioritize building trusting relationships with both you and your pets.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-7 bg-stone-50 border border-stone-200/90 shadow-sm flex flex-col justify-between text-left group hover:border-teal-300 hover:bg-teal-50/10 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-teal-200 group-hover:text-teal-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-semibold text-teal-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            id="how-it-works-book-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-base shadow-sm hover:shadow transition-all"
          >
            <span>Book Your Free In-Home Meet & Greet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-2 text-xs text-stone-500">
            No obligation • 100% Free • We bring proof of insurance & credentials to your door
          </p>
        </div>

      </div>
    </section>
  );
};
