import React, { useState } from 'react';
import { ShieldCheck, Heart, Calendar, Phone, CheckCircle2, ArrowRight, MapPin, Sparkles, Award } from 'lucide-react';
import { BUSINESS_INFO, ESTERO_COMMUNITIES } from '../data/siteData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedCommunity, setSelectedCommunity] = useState<string>('');
  const [checkedCommunityResult, setCheckedCommunityResult] = useState<string | null>(null);

  const handleCheckCommunity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCommunity) {
      setCheckedCommunityResult('We proudly serve all of Estero (33928) and surrounding gated neighborhoods with guaranteed 5–15 min local response time!');
      return;
    }
    const found = ESTERO_COMMUNITIES.find(
      (c) => c.name.toLowerCase().includes(selectedCommunity.toLowerCase())
    );
    if (found) {
      setCheckedCommunityResult(`Yes! We actively serve ${found.name} (${found.zipCode}). ${found.notes}`);
    } else {
      setCheckedCommunityResult(`Yes! We cover ${selectedCommunity} and throughout the greater Estero, Florida area!`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 pt-6 pb-16 sm:pt-10 sm:pb-24 border-b border-stone-200">
      {/* Subtle decorative background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Prop, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/90 border border-teal-200 text-teal-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              <span>Estero, Florida’s Trusted In-Home Pet Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-900 tracking-tight leading-[1.15]">
              Your Pet’s Favorite Humans <br className="hidden sm:inline" />
              <span className="text-teal-800 font-serif italic">When You Can’t Be There.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
              Professional, certified, and fully insured in-home pet sitting, dog walking, and overnight care in Estero, Florida. Operated with love by local resident couple <strong className="text-stone-900 font-semibold">Sharon & Tim Hanson</strong>. No crowded kennels, zero kennel stress, and real-time photo updates sent to your phone after every single visit.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pet First Aid & CPR Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fully Insured & Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Text & Photo Reports Every Visit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No Added Fee for Routine Medications</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                id="hero-book-meet-greet-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all group"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Schedule Free Meet & Greet</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-base border border-stone-300 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call (732) 910-1197</span>
              </a>
            </div>

            {/* In-Hero Community Quick-Checker */}
            <div className="mt-6 p-4 rounded-2xl bg-white/90 border border-stone-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Check Your Estero Community Coverage</span>
              </div>
              <form onSubmit={handleCheckCommunity} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <select
                    id="hero-community-select"
                    value={selectedCommunity}
                    onChange={(e) => {
                      setSelectedCommunity(e.target.value);
                      setCheckedCommunityResult(null);
                    }}
                    className="w-full text-sm bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
                  >
                    <option value="">Select your Estero neighborhood or club...</option>
                    {ESTERO_COMMUNITIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.type})
                      </option>
                    ))}
                    <option value="Other Estero Area">Other Estero / South Fort Myers / Bonita Area</option>
                  </select>
                </div>
                <button
                  type="submit"
                  id="hero-community-check-btn"
                  className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-colors shrink-0"
                >
                  Verify Service
                </button>
              </form>

              {checkedCommunityResult && (
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 font-medium flex items-start gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{checkedCommunityResult}</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Visual Photo Composition & Personal Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80"
                  alt="Happy dog enjoying sunshine outdoors in Estero Florida"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-1">
                    Stress-Free In-Home Care
                  </p>
                  <p className="text-sm sm:text-base font-medium leading-snug">
                    "Keeping routines consistent and tails wagging right at home."
                  </p>
                </div>
              </div>

              {/* Floating Mini Photo (Cat Care) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-36 sm:w-44 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80"
                  alt="Calm sweet cat receiving gentle in-home care"
                  className="w-full h-24 sm:h-28 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-1.5 text-center bg-white">
                  <span className="text-[11px] font-bold text-stone-800">Cats Loved Too! 🐱</span>
                </div>
              </div>

              {/* Floating Badge (Owners Sharon & Tim) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200/80 max-w-[210px] text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0">
                    S&T
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 leading-tight">Sharon & Tim</p>
                    <p className="text-[10px] text-stone-500">Estero Resident Owners</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-amber-600 font-semibold pt-1 border-t border-stone-100">
                  <span>★★★★★</span>
                  <span className="text-stone-700">100% Personal Care</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
