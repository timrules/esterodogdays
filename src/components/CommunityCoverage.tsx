import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, ShieldCheck, Compass, ArrowUpRight } from 'lucide-react';
import { ESTERO_COMMUNITIES } from '../data/siteData';

export const CommunityCoverage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCommunities = ESTERO_COMMUNITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.zipCode.includes(searchQuery)
  );

  return (
    <section id="communities" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full">
            Neighborhood Service Area
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            Serving Estero, Florida & Surrounding Communities
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            As Estero residents ourselves, we are familiar with local gated community access procedures, guest pass policies, and neighborhood walking trails. We arrive promptly and treat your community with respect.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="community-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your neighborhood or club (e.g. Pelican Sound, The Brooks, 33928)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-stone-300 rounded-2xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 shadow-sm"
            />
          </div>
          {searchQuery && (
            <p className="text-xs text-stone-500 mt-2 text-center">
              Showing {filteredCommunities.length} matching area{filteredCommunities.length === 1 ? '' : 's'}
            </p>
          )}
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((comm, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:shadow hover:border-teal-300 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100">
                    {comm.type}
                  </span>
                  <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    {comm.zipCode}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-1.5 flex items-center gap-1.5">
                  <span>{comm.name}</span>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {comm.notes}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Active Daily Coverage
                </span>
                <span className="text-stone-400">Estero, FL</span>
              </div>
            </div>
          ))}
        </div>

        {/* Not on the list banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200 text-center max-w-xl mx-auto shadow-sm">
          <p className="text-sm font-semibold text-stone-800">
            Don't see your specific subdivision or street listed?
          </p>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            We cover virtually all of Estero (33928), Corkscrew Road, Ben Hill Griffin, and adjacent borders of North Bonita Springs & South Fort Myers. Contact Sharon directly to confirm your address!
          </p>
          <a
            id="community-inquire-call"
            href="tel:7329101197"
            className="inline-flex items-center gap-1.5 mt-3 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-900"
          >
            <span>Call or Text (732) 910-1197</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
