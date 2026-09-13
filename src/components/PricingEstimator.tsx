import React, { useState } from 'react';
import { Calculator, Check, Info, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface PricingEstimatorProps {
  onOpenBookingWithDetails: (details: { service: string; estimatedTotal: string }) => void;
}

export const PricingEstimator: React.FC<PricingEstimatorProps> = ({ onOpenBookingWithDetails }) => {
  const [serviceType, setServiceType] = useState<'walk30' | 'walk45' | 'walk60' | 'dropin' | 'overnight' | 'taxi'>('walk30');
  const [petCount, setPetCount] = useState<number>(1);
  const [frequency, setFrequency] = useState<'single' | 'weekly5' | 'vacationWeek'>('single');

  // Calculation Logic
  const getBaseRate = () => {
    switch (serviceType) {
      case 'walk30':
        return 25;
      case 'walk45':
        return 35;
      case 'walk60':
        return 45;
      case 'dropin':
        return 25;
      case 'overnight':
        return 95; // full overnight 8pm-7am + morning breakfast & walk
      case 'taxi':
        return 35;
      default:
        return 25;
    }
  };

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'walk30':
        return '30-Minute Neighborhood Dog Walk';
      case 'walk45':
        return '45-Minute Extended Dog Walk';
      case 'walk60':
        return '60-Minute Adventure Walk & Play';
      case 'dropin':
        return 'In-Home Drop-In Sitting Visit (Dogs or Cats)';
      case 'overnight':
        return 'Overnight House Sitting Stay (Evening to Morning)';
      case 'taxi':
        return 'Pet Taxi & Chauffeured Ride (Vet/Groomer)';
    }
  };

  const calculateTotal = () => {
    const base = getBaseRate();
    // Additional pet fee: $5 for extra pet except overnight which is $10
    const extraPetFee = petCount > 1 ? (petCount - 1) * (serviceType === 'overnight' ? 10 : 5) : 0;
    const perVisitRate = base + extraPetFee;

    if (frequency === 'single') {
      return {
        unit: 'per visit',
        total: perVisitRate,
        label: `Single visit estimate: $${perVisitRate}`,
      };
    } else if (frequency === 'weekly5') {
      const weekly = perVisitRate * 5;
      return {
        unit: 'per week (5 visits)',
        total: weekly,
        label: `Weekly package (5 visits/week): $${weekly}`,
      };
    } else {
      // vacation week (e.g. 7 days with 2 visits per day = 14 visits, or 7 overnight nights)
      const multiplier = serviceType === 'overnight' ? 7 : 14;
      const total = perVisitRate * multiplier;
      return {
        unit: serviceType === 'overnight' ? '7-night vacation stay' : '7-day vacation package (2 visits/day)',
        total: total,
        label: `Vacation estimate (${multiplier} ${serviceType === 'overnight' ? 'nights' : 'visits'}): $${total}`,
      };
    }
  };

  const estimate = calculateTotal();

  const handleBookEstimate = () => {
    onOpenBookingWithDetails({
      service: `${getServiceLabel()} (${petCount} pet${petCount > 1 ? 's' : ''})`,
      estimatedTotal: `$${estimate.total} ${estimate.unit}`,
    });
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            Interactive Pet Care Rate Estimator
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            We believe in honest, upfront pricing with zero hidden surcharges. Use our quick estimator below to plan your pet care, or contact Sharon directly for a customized quote tailored to your exact schedule.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden">
          
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  1. Select Pet Care Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'walk30', label: '30-Min Dog Walk', tag: 'From $25' },
                    { id: 'walk45', label: '45-Min Dog Walk', tag: 'From $35' },
                    { id: 'walk60', label: '60-Min Dog Walk', tag: 'From $45' },
                    { id: 'dropin', label: 'In-Home Drop-In (Dogs/Cats)', tag: 'From $25' },
                    { id: 'overnight', label: 'Overnight House Sitting', tag: 'From $95/night' },
                    { id: 'taxi', label: 'Pet Taxi / Vet Transport', tag: 'From $35' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      id={`pricing-service-${s.id}`}
                      onClick={() => setServiceType(s.id as any)}
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        serviceType === s.id
                          ? 'border-teal-700 bg-teal-50/70 text-teal-900 font-semibold ring-1 ring-teal-600'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <span className="text-sm font-medium">{s.label}</span>
                      <span className="text-xs text-stone-500 mt-1">{s.tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Pets */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  2. Number of Pets
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { count: 1, label: '1 Pet' },
                    { count: 2, label: '2 Pets' },
                    { count: 3, label: '3+ Pets' },
                  ].map((p) => (
                    <button
                      key={p.count}
                      type="button"
                      id={`pricing-pets-${p.count}`}
                      onClick={() => setPetCount(p.count)}
                      className={`py-2.5 px-4 rounded-xl border text-center text-sm font-semibold transition-all ${
                        petCount === p.count
                          ? 'border-teal-700 bg-teal-700 text-white shadow-sm'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Frequency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  3. Frequency / Duration
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'single', label: 'Single / As Needed' },
                    { id: 'weekly5', label: 'Weekly (5x / week)' },
                    { id: 'vacationWeek', label: 'Vacation (7 Days)' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      id={`pricing-freq-${f.id}`}
                      onClick={() => setFrequency(f.id as any)}
                      className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                        frequency === f.id
                          ? 'border-teal-700 bg-teal-700 text-white shadow-sm'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimate Summary (Right 5 Cols) */}
            <div className="lg:col-span-5 bg-stone-50 border border-stone-200/90 rounded-2xl p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Estimated Cost
                  </span>
                  <span className="text-xs text-stone-500 font-medium">Estero, FL</span>
                </div>

                <div className="py-6 text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                    ${estimate.total}
                  </div>
                  <div className="text-sm font-medium text-stone-600 mt-1 capitalize">
                    {estimate.unit}
                  </div>
                </div>

                {/* What's always included free banner */}
                <div className="space-y-2 pt-2 pb-4 text-xs text-stone-600 border-t border-stone-200">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Always includes real-time photo & text updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free routine medication administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Florida heat asphalt safety check & fresh iced water</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free in-home Meet & Greet prior to service</span>
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="pt-3 border-t border-stone-200 space-y-2">
                <button
                  id="pricing-book-estimate-btn"
                  onClick={handleBookEstimate}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-sm transition-all"
                >
                  <span>Request Meet & Greet For This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-stone-500 text-center">
                  Final quote confirmed in person during free Meet & Greet.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
