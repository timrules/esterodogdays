import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full">
            Client Love & Community Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            What Estero Pet Parents Say
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Our clients are our neighbors. Read real experiences from homeowners across The Brooks, Pelican Sound, Grandézza, and Bella Terra who trust Sharon & Tim with their furry family.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow transition-all flex flex-col justify-between text-left relative group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-stone-500 ml-2">{t.date}</span>
                </div>

                {/* Quote Text */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Pet Details */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-teal-800 font-medium">
                    {t.community} • Estero, FL
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-stone-700 bg-stone-100 px-2.5 py-1 rounded-lg">
                    🐾 {t.petName} ({t.petBreed})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Review Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500">
            Have Sharon & Tim cared for your pets? We love hearing your feedback!
          </p>
          <a
            id="write-review-email-btn"
            href="mailto:sharon@esterodogdays.com?subject=Review%20for%20Dog%20Days%20Pet%20Sitting"
            className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-teal-700 hover:text-teal-900"
          >
            <span>Send a review directly to Sharon & Tim</span>
          </a>
        </div>

      </div>
    </section>
  );
};
