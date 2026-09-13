import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Phone, Mail, MessageSquare, AlertCircle, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO, ESTERO_COMMUNITIES } from '../data/siteData';
import { BookingFormData } from '../types';

interface BookingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  prefilledEstimate?: string;
}

export const BookingRequestModal: React.FC<BookingRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  prefilledEstimate = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    ownerName: '',
    email: '',
    phone: '',
    community: '',
    streetAddress: '',
    serviceType: preselectedService || 'Daily Dog Walking',
    startDate: '',
    endDate: '',
    petType: 'dog',
    petName: '',
    petBreedAge: '',
    medicationNeeds: false,
    medicationDetails: '',
    specialNotes: '',
    preferredContactMethod: 'text',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  // Load any previously saved draft from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dogdays_owner_draft');
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number so Sharon & Tim can reach you.');
      return;
    }

    try {
      localStorage.setItem('dogdays_owner_draft', JSON.stringify({
        ownerName: formData.ownerName,
        email: formData.email,
        phone: formData.phone,
        community: formData.community,
        petName: formData.petName,
        petBreedAge: formData.petBreedAge,
      }));
    } catch (err) {
      // ignore
    }

    setErrorMsg(null);
    setIsSubmitted(true);
  };

  const getEncodedSmsText = () => {
    const text = `Hi Sharon and Tim! My name is ${formData.ownerName}. I'd like to schedule a Meet & Greet for ${formData.serviceType} in ${formData.community || 'Estero'}. Pet: ${formData.petName || 'My pet'} (${formData.petBreedAge || ''}). Dates: ${formData.startDate || 'Upcoming'}. Phone: ${formData.phone}.`;
    return encodeURIComponent(text);
  };

  const getEncodedMailto = () => {
    const subject = encodeURIComponent(`Dog Days Meet & Greet Request - ${formData.ownerName}`);
    const body = encodeURIComponent(
      `Hi Sharon and Tim,\n\nI would like to schedule a free in-home Meet & Greet for pet care in Estero!\n\n` +
      `Owner Name: ${formData.ownerName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Estero Community: ${formData.community}\n` +
      `Street Address / Subdivision: ${formData.streetAddress}\n` +
      `Service Requested: ${formData.serviceType}\n` +
      `Estimated Rate: ${prefilledEstimate || 'Discuss at Meet & Greet'}\n` +
      `Dates: ${formData.startDate} ${formData.endDate ? `to ${formData.endDate}` : ''}\n` +
      `Pet(s): ${formData.petName} (${formData.petBreedAge})\n` +
      `Medications: ${formData.medicationNeeds ? formData.medicationDetails : 'None'}\n` +
      `Notes / Preferences: ${formData.specialNotes}\n\n` +
      `Thank you!`
    );
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-left my-8">
        
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-800/80 text-teal-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-300" /> Free In-Home Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Schedule Your Free Meet & Greet
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/90">
              Sharon or Tim will visit your Estero home, bring our insurance & portfolio, and meet your pet!
            </p>
          </div>
          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full bg-teal-800/60 text-white hover:bg-teal-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          
          {isSubmitted ? (
            /* Success View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-stone-900">
                  Request Created Successfully!
                </h4>
                <p className="text-stone-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.ownerName}</strong>! Sharon & Tim look forward to meeting <strong>{formData.petName || 'your pet'}</strong> in <strong>{formData.community || 'Estero'}</strong>.
                </p>
              </div>

              {/* Quick Summary Card */}
              <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-stone-800">{formData.serviceType}</span>
                </div>
                {prefilledEstimate && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Estimated Rate:</span>
                    <span className="font-semibold text-teal-800">{prefilledEstimate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-stone-500">Pet:</span>
                  <span className="font-semibold text-stone-800">{formData.petName} ({formData.petBreedAge || 'Pet'})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Neighborhood:</span>
                  <span className="font-semibold text-stone-800">{formData.community || 'Estero, FL'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Phone:</span>
                  <span className="font-semibold text-stone-800">{formData.phone}</span>
                </div>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Fastest Way to Connect Right Now:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    id="submit-send-sms-btn"
                    href={`sms:${BUSINESS_INFO.phone}?body=${getEncodedSmsText()}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via Text / SMS</span>
                  </a>

                  <a
                    id="submit-send-email-btn"
                    href={getEncodedMailto()}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <a
                  id="submit-call-sharon-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 font-semibold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call Sharon Directly at {BUSINESS_INFO.formattedPhone}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-stone-500 underline hover:text-stone-800"
                >
                  Close this window
                </button>
              </div>
            </div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Estimate banner if carried over */}
              {prefilledEstimate && (
                <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-center justify-between">
                  <span><strong>Calculated Estimate:</strong> {prefilledEstimate}</span>
                  <span className="text-[11px] text-teal-700 font-medium">Free Meds Included</span>
                </div>
              )}

              {/* Contact Information */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">
                  1. Your Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      id="booking-owner-name"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="e.g. Linda Miller"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Phone Number (Call or Text) *
                    </label>
                    <input
                      type="tel"
                      required
                      id="booking-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (239) 555-0192"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="booking-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. linda@example.com"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Estero Community / Neighborhood *
                    </label>
                    <select
                      id="booking-community"
                      value={formData.community}
                      onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    >
                      <option value="">Select your community...</option>
                      {ESTERO_COMMUNITIES.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                      <option value="Other Estero / Bonita / Fort Myers">Other Estero area</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service & Dates */}
              <div className="pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">
                  2. Service & Target Dates
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Service Type Requested
                    </label>
                    <select
                      id="booking-service-type"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    >
                      <option value="Daily Dog Walking (30-min)">Daily Dog Walking (30-min)</option>
                      <option value="Daily Dog Walking (45-min / 60-min)">Extended Dog Walking (45 or 60-min)</option>
                      <option value="In-Home Drop-In Pet Sitting (Dogs/Cats)">In-Home Drop-In Pet Sitting (Dogs or Cats)</option>
                      <option value="Overnight & House Sitting">Overnight & House Sitting Stay</option>
                      <option value="Pet Taxi & Vet Transport">Pet Taxi & Vet Transport</option>
                      <option value="Concierge / Granny Nanny Help">Concierge / "Granny Nanny" Help</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Approximate Start Date
                    </label>
                    <input
                      type="date"
                      id="booking-start-date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      End Date (if vacation sitting)
                    </label>
                    <input
                      type="date"
                      id="booking-end-date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Pet Details */}
              <div className="pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">
                  3. Your Furry Family
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Pet Name(s) *
                    </label>
                    <input
                      type="text"
                      id="booking-pet-name"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      placeholder="e.g. Cooper & Bella"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Breed & Age
                    </label>
                    <input
                      type="text"
                      id="booking-pet-breed"
                      value={formData.petBreedAge}
                      onChange={(e) => setFormData({ ...formData, petBreedAge: e.target.value })}
                      placeholder="e.g. Golden Retriever (3 yrs)"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Medication checkbox */}
                <div className="mt-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      id="booking-medication-check"
                      checked={formData.medicationNeeds}
                      onChange={(e) => setFormData({ ...formData, medicationNeeds: e.target.checked })}
                      className="w-4 h-4 text-teal-600 rounded border-stone-300 focus:ring-teal-500"
                    />
                    <span className="text-xs font-semibold text-stone-800">
                      Does your pet require medications? ($0 extra surcharge)
                    </span>
                  </label>

                  {formData.medicationNeeds && (
                    <div className="mt-2">
                      <textarea
                        rows={2}
                        id="booking-medication-details"
                        value={formData.medicationDetails}
                        onChange={(e) => setFormData({ ...formData, medicationDetails: e.target.value })}
                        placeholder="Briefly describe medication routine (e.g. thyroid pill in AM, eye drops in PM)..."
                        className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                      />
                    </div>
                  )}
                </div>

                {/* Special notes */}
                <div className="mt-3">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Special Routines or Questions for Meet & Greet
                  </label>
                  <textarea
                    rows={2}
                    id="booking-special-notes"
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="Any quirks, favorite games, gate code details, or preferred days for the in-home visit..."
                    className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs focus:bg-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-stone-500 text-left">
                  🔒 100% Confidential • We never sell or share your contact details.
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="booking-submit-request-btn"
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-sm transition-all"
                  >
                    Request Meet & Greet
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
