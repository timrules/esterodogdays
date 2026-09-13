import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our in-home pet sitting, safety standards, and booking process in Estero.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all text-left overflow-hidden ${
                  isOpen
                    ? 'border-teal-300 bg-teal-50/20 shadow-sm'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  id={`faq-toggle-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left font-bold text-stone-900 focus:outline-none"
                >
                  <span className="text-sm sm:text-base flex items-center gap-2.5">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-stone-100 text-stone-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-teal-100 text-teal-800' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">Have a unique question or schedule?</h4>
            <p className="text-xs sm:text-sm text-stone-600">Sharon & Tim are always happy to chat directly.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              id="faq-call-sharon-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (732) 910-1197</span>
            </a>
            <a
              id="faq-sms-sharon-btn"
              href={`sms:${BUSINESS_INFO.phone}?body=Hi%20Sharon,%20I%20have%20a%20question%20about%20pet%20sitting%20in%20Estero.`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs sm:text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Text Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
