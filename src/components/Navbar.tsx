import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, Heart, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why In-Home', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Rate Estimator', href: '#pricing' },
    { name: 'Pupdate Demo', href: '#pupdate' },
    { name: 'Communities', href: '#communities' },
    { name: 'Safety & Vets', href: '#safety' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification Announcement Bar */}
      <div className="bg-teal-900 text-teal-100 text-xs sm:text-sm py-1.5 px-4 font-medium border-b border-teal-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-teal-800 text-teal-200 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Insured & Bonded
            </span>
            <span className="hidden sm:inline text-teal-200/80">•</span>
            <span className="hidden md:inline">Pet Sitters Associates Member</span>
            <span className="hidden sm:inline text-teal-200/80">•</span>
            <span>Pet First Aid & CPR Certified</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-teal-200 hidden lg:inline">Estero, FL Residents Sharon & Tim Hanson</span>
            <a
              id="top-bar-phone-link"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 text-white hover:text-amber-300 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-2.5'
            : 'bg-white border-b border-stone-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <a id="brand-logo-link" href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-xl">🐾</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-stone-900 tracking-tight leading-tight group-hover:text-teal-800 transition-colors">
                  Dog Days Pet Sitting
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-1">
                  <span>Estero, Florida</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-500 font-normal">Sharon & Tim</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={link.href}
                  className="text-stone-600 hover:text-teal-800 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-stone-100/70"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                id="header-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-stone-700 hover:text-teal-800 hover:bg-teal-50/70 text-sm font-semibold border border-stone-200 transition-colors"
                title="Call Sharon & Tim directly"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call/Text</span>
              </a>

              <button
                id="header-book-meet-greet-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-sm hover:shadow transition-all"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Free Meet & Greet</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                id="header-book-meet-greet-mobile-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-700 text-white text-xs font-semibold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Meet & Greet</span>
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 mt-2 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
              <a
                id="mobile-nav-call-action"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-100 text-stone-800 font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call Us</span>
              </a>
              <a
                id="mobile-nav-sms-action"
                href={`sms:${BUSINESS_INFO.phone}?body=Hi%20Sharon%20and%20Tim,%20I'm%20interested%20in%20pet%20sitting%20in%20Estero!`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-teal-50 text-teal-800 font-semibold text-sm border border-teal-200"
              >
                <MessageSquare className="w-4 h-4 text-teal-700" />
                <span>Text Us</span>
              </a>
            </div>

            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-stone-700 hover:bg-teal-50 hover:text-teal-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                id="mobile-nav-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-700 text-white font-semibold shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Free Meet & Greet</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
