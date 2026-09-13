import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Clock, Award, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                🐾
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">
                  Dog Days Pet Sitting of Estero
                </span>
                <span className="text-xs text-teal-400 font-semibold tracking-wider uppercase">
                  Estero, Florida • Sharon & Tim Hanson
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing loving, reliable, and insured in-home pet sitting, dog walking, and overnight care in Estero, FL. Certified in Pet First Aid & CPR, member of Pet Sitters Associates, LLC.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-stone-400">
              <span className="inline-flex items-center gap-1 bg-stone-800 px-2.5 py-1 rounded-full text-emerald-400 font-semibold border border-stone-700">
                <ShieldCheck className="w-3.5 h-3.5" /> Fully Insured & Bonded
              </span>
              <span className="inline-flex items-center gap-1 bg-stone-800 px-2.5 py-1 rounded-full text-amber-300 font-semibold border border-stone-700">
                <Award className="w-3.5 h-3.5" /> Pet Sitters Associates LLC
              </span>
            </div>
          </div>

          {/* Col 2: Direct Contact & Hours (4 Cols) */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Sharon & Tim
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <a
                id="footer-phone-link"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-stone-800 flex items-center justify-center text-teal-400 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Call or Text: <strong className="text-white">{BUSINESS_INFO.formattedPhone}</strong></span>
              </a>

              <a
                id="footer-email-link"
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-stone-800 flex items-center justify-center text-teal-400 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-stone-400">
                <div className="w-7 h-7 rounded-lg bg-stone-800 flex items-center justify-center text-teal-400 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Serving all gated communities in Estero, FL 33928</span>
              </div>

              <div className="flex items-center gap-2.5 text-stone-400">
                <div className="w-7 h-7 rounded-lg bg-stone-800 flex items-center justify-center text-teal-400 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Open 7 Days a Week • 7:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Meet & Greet CTA (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Complimentary Visit
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Every new client starts with a free, no-obligation Meet & Greet in your Estero home.
            </p>

            <button
              id="footer-book-meet-greet-btn"
              onClick={onOpenBooking}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Free Meet & Greet</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Dog Days Pet Sitting of Estero (esterodogdays.com). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Sharon & Tim Hanson</span>
            <span>•</span>
            <span>Estero, FL 33928</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
