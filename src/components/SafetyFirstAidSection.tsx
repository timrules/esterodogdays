import React, { useState } from 'react';
import { ShieldAlert, SunMedium, HeartPulse, Wind, PhoneCall, AlertTriangle, CheckCircle2, MapPin } from 'lucide-react';

export const SafetyFirstAidSection: React.FC = () => {
  const [activeSafetyTab, setActiveSafetyTab] = useState<'heat' | 'firstaid' | 'storm' | 'vets'>('heat');

  return (
    <section id="safety" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Safety First Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            Southwest Florida Pet Safety & Care Standards
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Florida's tropical climate brings unique pet care considerations—from sizzling summer asphalt to sudden afternoon squalls. Here is how Sharon & Tim protect your pet's health and well-being every single day.
          </p>
        </div>

        {/* Safety Guide Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'heat', label: '☀️ Florida Heat & Asphalt Safety' },
            { id: 'firstaid', label: '❤️ CPR & First Aid Protocol' },
            { id: 'storm', label: '🌀 Storm & Hurricane Readiness' },
            { id: 'vets', label: '🏥 Local 24/7 Emergency Vets' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`safety-tab-${tab.id}`}
              onClick={() => setActiveSafetyTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeSafetyTab === tab.id
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="max-w-4xl mx-auto">
          
          {/* Heat & Asphalt Safety */}
          {activeSafetyTab === 'heat' && (
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 text-left space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <SunMedium className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">The 7-Second Florida Asphalt Test</h3>
                  <p className="text-xs text-stone-500">Protecting sensitive dog paw pads from third-degree burns</p>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                When outside temperatures in Estero reach 85°F, direct asphalt can soar above <strong>135°F</strong> in just minutes—hot enough to cause severe paw blistering in under 60 seconds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 block">✋ The 7-Second Rule</span>
                  <p className="text-stone-600">We place the back of our hand firmly on the pavement. If it's too hot for 7 seconds, we divert immediately to grass or shaded breezeways.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 block">🌳 Shaded Route Planning</span>
                  <p className="text-stone-600">We prioritize tree canopy paths, lakeside boardwalks, and grassy swales during morning and afternoon dog walks.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 block">🧊 Cold Hydration & Ice</span>
                  <p className="text-stone-600">Fresh water bowls are cleaned and replenished with cold filtered water (and an ice cube if your pup enjoys it) every visit.</p>
                </div>
              </div>
            </div>
          )}

          {/* CPR & First Aid */}
          {activeSafetyTab === 'firstaid' && (
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 text-left space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Pet First Aid & CPR Certified Care</h3>
                  <p className="text-xs text-stone-500">Official certification through Pet Sitters Associates, LLC</p>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                Emergencies don’t wait. Both Sharon and Tim are certified in canine and feline First Aid and CPR, ensuring your beloved pet is in calm, capable hands if an unexpected event occurs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Choking & Respiratory Distress</strong>
                    <span className="text-stone-600">Trained in canine Heimlich maneuver and artificial respiration.</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Wound Care & Snake / Bug Bites</strong>
                    <span className="text-stone-600">Immediate pressure application, antiseptic care, and emergency vet liaison.</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Heat Exhaustion Recognition</strong>
                    <span className="text-stone-600">Rapid cooling techniques, alcohol paw wipes, and temperature monitoring.</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Direct Veterinary Authorization</strong>
                    <span className="text-stone-600">Emergency medical release signed during Meet & Greet for zero delays.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hurricane Readiness */}
          {activeSafetyTab === 'storm' && (
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 text-left space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">SW Florida Storm & Hurricane Protocols</h3>
                  <p className="text-xs text-stone-500">Clear procedures for rainy season thunderstorms and tropical systems</p>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                As long-time Estero residents, Sharon & Tim know how to handle Florida storms. We keep in close contact with pet owners during heavy tropical weather.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <span className="font-bold text-teal-800 shrink-0">1.</span>
                  <p className="text-stone-700"><strong>Thunderstorm Calming:</strong> For pets anxious about loud thunder, we implement ThunderShirt wrapping, calming treats (with owner consent), and gentle interior white noise or classical radio.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <span className="font-bold text-teal-800 shrink-0">2.</span>
                  <p className="text-stone-700"><strong>Emergency Power & Generator Checks:</strong> If local power drops, we verify indoor temperatures, ensure water fountains are still accessible, and notify owners immediately.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
                  <span className="font-bold text-teal-800 shrink-0">3.</span>
                  <p className="text-stone-700"><strong>Evacuation Contact Network:</strong> We establish secondary local emergency contacts during your free Meet & Greet so your pets are never left unattended.</p>
                </div>
              </div>
            </div>
          )}

          {/* Local Emergency Vets */}
          {activeSafetyTab === 'vets' && (
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 text-left space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Estero & Surrounding 24/7 Emergency Animal Hospitals</h3>
                  <p className="text-xs text-stone-500">We maintain pre-authorized relationships with top emergency clinics</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">Florida Veterinary Referral Center (FVRC)</h4>
                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      9220 Estero Park Commons Blvd, Estero, FL 33928 (Right on Corkscrew Rd)
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      24/7 Emergency & Specialty Care in Estero
                    </span>
                  </div>
                  <a
                    id="vet-fvrc-call-btn"
                    href="tel:2399929888"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-900 text-white text-xs font-semibold shrink-0"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>(239) 992-9888</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">Animal Specialty Hospital of Florida</h4>
                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      10130 Marketplace Rd, Fort Myers, FL 33913
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      24/7 Trauma & Emergency Critical Care
                    </span>
                  </div>
                  <a
                    id="vet-ash-call-btn"
                    href="tel:2392630480"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-900 text-white text-xs font-semibold shrink-0"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>(239) 263-0480</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
