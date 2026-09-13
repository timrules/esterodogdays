import React, { useState } from 'react';
import { Smartphone, Camera, MapPin, CheckCircle2, Clock, Heart, Droplets, Utensils, Award, Sparkles } from 'lucide-react';

export const PupdateDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dog' | 'cat' | 'senior'>('dog');

  const scenarios = {
    dog: {
      title: 'Midday Dog Walk in Pelican Sound',
      petName: 'Charlie',
      breed: 'Golden Retriever',
      service: '30-Min Neighborhood Walk',
      time: 'Today • 1:18 PM',
      sitter: 'Sharon Hanson',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
      walkStats: {
        duration: '31 mins',
        distance: '1.2 miles',
        temp: '82°F (Shaded lake route & cool grass)',
      },
      checklist: [
        { label: 'Pee & Poo Breaks', status: 'Pee (2x) • Poo (1x)' },
        { label: 'Fresh Water Bowl', status: 'Cleaned & filled with cold ice water' },
        { label: 'Pavement Heat Test', status: '7-Second hand check passed (safe)' },
        { label: 'Paw Wipe-Down', status: 'Cleaned and dried upon return' },
        { label: 'Routine Medication', status: 'Joint support chew given with treat' },
      ],
      note: 'Charlie was waiting right by the front door wagging his whole body! We walked along the shaded lake path, watched the egrets, and did both his potty duties right on schedule. He drank a big bowl of cool water with ice and is now happily curled up on his cool tile spot. See you tomorrow!',
    },
    cat: {
      title: 'In-Home Vacation Cat Visit in Grandézza',
      petName: 'Luna & Milo',
      breed: 'Domestic Shorthair & Ragdoll',
      service: 'In-Home Cat Drop-In Visit',
      time: 'Today • 9:30 AM',
      sitter: 'Sharon Hanson',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      walkStats: {
        duration: '30 mins visit',
        distance: 'Indoor play & cuddle',
        temp: '74°F A/C confirmed running smoothly',
      },
      checklist: [
        { label: 'Fresh Wet Food & Kibble', status: 'Half can salmon pate + 1/4 cup dry kibble' },
        { label: 'Water Fountain', status: 'Rinsed, refilled with fresh filtered water' },
        { label: 'Litter Box', status: 'Scooped clean and area swept' },
        { label: 'Playtime & Brushing', status: '15 mins feather wand chase & brushing' },
        { label: 'Home Check', status: 'Brought in 2 packages from porch' },
      ],
      note: 'Luna came out immediately for purrs and neck scratches, and Milo peeked out from his tunnel and joined in with the feather wand toy. Both finished their salmon breakfast and have plenty of fresh water. Packages are safe on the kitchen island!',
    },
    senior: {
      title: 'Senior Dog Care & Meds in The Brooks',
      petName: 'Bailey',
      breed: '12-yr Labrador Retriever',
      service: 'Gentle Drop-In & Medication',
      time: 'Today • 5:45 PM',
      sitter: 'Tim Hanson',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
      walkStats: {
        duration: '30 mins',
        distance: 'Gentle yard stroll & relief',
        temp: 'Evening cool-down breeze',
      },
      checklist: [
        { label: 'Prescription Ear Drops', status: '3 drops each ear with gentle massage' },
        { label: 'Oral Anti-Inflammatory', status: 'Hidden in cheese cube, taken happily' },
        { label: 'Yard Potty Break', status: 'Gentle walk on lush grass, pee completed' },
        { label: 'Bedding Adjustments', status: 'Orthopedic bed fluffed in family room' },
        { label: 'Security Check', status: 'Front porch lamp turned on for evening' },
      ],
      note: 'Bailey is doing wonderfully. His ears were clean and he took his drops without any fuss at all like a champion. We took a slow gentle stroll around the grassy backyard, had a nice belly rub, and I made sure his orthopedic bed was situated comfortably.',
    },
  };

  const current = scenarios[activeTab];

  return (
    <section id="pupdate" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Real-Time Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            See a Real "Dog Days Pupdate"
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Wondering what happens while you’re at work or away on travel? Here is an interactive preview of the comprehensive text & photo report you receive on your phone immediately following every single visit.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'dog', label: '🐕 Charlie (Pelican Sound Walk)' },
            { id: 'cat', label: '🐱 Luna & Milo (Grandézza Cat Care)' },
            { id: 'senior', label: '🦮 Bailey (The Brooks Senior & Meds)' },
          ].map((t) => (
            <button
              key={t.id}
              id={`pupdate-tab-${t.id}`}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === t.id
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Mobile Phone Mock Container */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-[2.5rem] p-3 sm:p-4 bg-stone-900 shadow-2xl border-4 border-stone-800">
            
            {/* Phone Screen */}
            <div className="bg-stone-100 rounded-[2rem] overflow-hidden text-stone-800 text-left">
              
              {/* Phone Status Bar */}
              <div className="bg-stone-900 text-white px-6 py-2 flex items-center justify-between text-xs font-medium">
                <span>Dog Days Visit Update</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Completed
                </span>
              </div>

              {/* Message Header */}
              <div className="p-4 bg-white border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                    🐾
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{current.sitter} (Dog Days)</h4>
                    <p className="text-xs text-stone-500">{current.time} • Estero, FL</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                  {current.service}
                </span>
              </div>

              {/* Photo Card */}
              <div className="relative">
                <img
                  src={current.image}
                  alt={`Photo of ${current.petName} sent to owner`}
                  className="w-full h-56 sm:h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3 bg-stone-950/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-amber-300" />
                  <span>Photo 1 of 4 attached</span>
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 bg-white border-b border-stone-200 text-center py-2.5 px-2 text-xs">
                <div className="border-r border-stone-100">
                  <span className="text-stone-400 block text-[10px] uppercase">Duration</span>
                  <span className="font-bold text-stone-800">{current.walkStats.duration}</span>
                </div>
                <div className="border-r border-stone-100">
                  <span className="text-stone-400 block text-[10px] uppercase">Activity</span>
                  <span className="font-bold text-stone-800">{current.walkStats.distance}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Environment</span>
                  <span className="font-bold text-stone-800">{current.walkStats.temp}</span>
                </div>
              </div>

              {/* Care Checklist */}
              <div className="p-4 bg-white/90 space-y-2 border-b border-stone-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                  Care Checklist & Routine Verification
                </span>
                {current.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between text-xs py-0.5">
                    <span className="text-stone-600 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {item.label}:
                    </span>
                    <span className="text-stone-900 font-semibold text-right">{item.status}</span>
                  </div>
                ))}
              </div>

              {/* Sitter Note */}
              <div className="p-4 bg-teal-50/70">
                <div className="flex items-center gap-1 text-xs font-bold text-teal-900 mb-1">
                  <Heart className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
                  <span>Personal Note from {current.sitter}:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{current.note}"
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-stone-500">
          ✨ Every visit includes photos, notes, and direct text updates so you never have to wonder how your fur baby is doing.
        </div>

      </div>
    </section>
  );
};
