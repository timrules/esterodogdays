import React, { useState } from 'react';
import { Footprints, Home, Moon, HeartPulse, Car, Sparkles, Check, ArrowRight, ShieldAlert } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'walks' | 'sitting' | 'specialized'>('all');

  const filterServices = (service: ServiceItem) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'walks') return service.id === 'dog-walking';
    if (activeFilter === 'sitting') return service.id === 'in-home-dropins' || service.id === 'overnight-sitting';
    if (activeFilter === 'specialized') {
      return service.id === 'medication-care' || service.id === 'pet-taxi' || service.id === 'concierge-granny';
    }
    return true;
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-teal-700" />;
      case 'Home':
        return <Home className="w-6 h-6 text-teal-700" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-teal-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-teal-700" />;
      case 'Car':
        return <Car className="w-6 h-6 text-teal-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-700" />;
      default:
        return <Footprints className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full">
            Tailored Care Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            Our Estero Pet Care Services
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you need a daily mid-day exercise walk while you're at work, attentive cat visits while on vacation, or gentle overnight care in your home, Sharon & Tim provide reliable, top-tier pet care.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services (6)' },
            { id: 'walks', label: 'Dog Walking' },
            { id: 'sitting', label: 'In-Home & Overnight Sitting' },
            { id: 'specialized', label: 'Medications, Taxi & Concierge' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`service-tab-${tab.id}`}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.filter(filterServices).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between text-left relative group"
            >
              {/* Badge if present */}
              {service.badge && (
                <div className="absolute top-5 right-5">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {service.fullDesc}
                </p>

                {/* What's included checklist */}
                <div className="space-y-2 mb-6 pt-2 border-t border-stone-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2">
                    What's Included
                  </span>
                  {service.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended For */}
                <div className="mb-6 p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-600">
                  <strong className="text-stone-800 font-semibold">Recommended for: </strong>
                  {service.recommendedFor}
                </div>
              </div>

              {/* Action and Pricing footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 mt-auto">
                <span className="text-xs font-semibold text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-lg">
                  {service.basePriceHint}
                </span>

                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Book This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Personalized Quotes */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 text-center max-w-2xl mx-auto text-sm text-stone-600">
          <p>
            <strong className="text-stone-900 font-semibold">Have a multi-pet household or custom routine?</strong> We tailor every visit to your family's exact needs. There are no surprise fees, and we finalize all expectations during your free in-home meet & greet.
          </p>
        </div>

      </div>
    </section>
  );
};
