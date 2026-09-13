import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 py-2.5 px-4 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          id="mobile-bar-call-btn"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-700 mb-0.5" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* Text / SMS Button */}
        <a
          id="mobile-bar-sms-btn"
          href={`sms:${BUSINESS_INFO.phone}?body=Hi%20Sharon,%20I'd%20like%20to%20inquire%20about%20pet%20sitting%20in%20Estero!`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-teal-50 text-teal-800 hover:bg-teal-100 transition-colors border border-teal-200"
        >
          <MessageSquare className="w-4 h-4 text-teal-700 mb-0.5" />
          <span className="text-[10px] font-bold">Text SMS</span>
        </a>

        {/* Book Meet & Greet Button */}
        <button
          id="mobile-bar-meet-greet-btn"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-teal-700 text-white hover:bg-teal-800 transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 text-teal-200 mb-0.5" />
          <span className="text-[10px] font-bold">Meet & Greet</span>
        </button>

      </div>
    </div>
  );
};
