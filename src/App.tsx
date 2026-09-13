/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ServicesSection } from './components/ServicesSection';
import { MeetGreetWorkflow } from './components/MeetGreetWorkflow';
import { PricingEstimator } from './components/PricingEstimator';
import { PupdateDemo } from './components/PupdateDemo';
import { CommunityCoverage } from './components/CommunityCoverage';
import { SafetyFirstAidSection } from './components/SafetyFirstAidSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BookingRequestModal } from './components/BookingRequestModal';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [prefilledEstimate, setPrefilledEstimate] = useState<string>('');

  const handleOpenBooking = () => {
    setSelectedService('');
    setPrefilledEstimate('');
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setPrefilledEstimate('');
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithEstimate = (details: { service: string; estimatedTotal: string }) => {
    setSelectedService(details.service);
    setPrefilledEstimate(details.estimatedTotal);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col selection:bg-teal-100 selection:text-teal-900">
      {/* Top Sticky Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero with Value Proposition & Quick Community Checker */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Credentials & Trust Badges */}
        <TrustBadges />

        {/* Detailed Services Portfolio */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3-Step Process (Consultation, Meet & Greet, Pupdates) */}
        <MeetGreetWorkflow onOpenBooking={handleOpenBooking} />

        {/* Interactive Rate Estimator & Calculator */}
        <PricingEstimator onOpenBookingWithDetails={handleOpenBookingWithEstimate} />

        {/* Interactive Pupdate Simulator (Report Card Demo) */}
        <PupdateDemo />

        {/* Estero Gated Communities Coverage & Neighborhood Search */}
        <CommunityCoverage />

        {/* Southwest Florida Heat Safety, First Aid & Local Emergency Vets */}
        <SafetyFirstAidSection />

        {/* Real Client Testimonials */}
        <TestimonialsSection />

        {/* Comprehensive Accordion FAQ */}
        <FaqSection />
      </main>

      {/* Full Footer with Contact Info & Credentials */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Persistent Mobile Quick Bar (Call / Text / Meet & Greet) */}
      <MobileQuickBar onOpenBooking={handleOpenBooking} />

      {/* Booking & Meet & Greet Modal */}
      <BookingRequestModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
        prefilledEstimate={prefilledEstimate}
      />
    </div>
  );
}
