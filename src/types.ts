export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  included: string[];
  recommendedFor: string;
  basePriceHint?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  community: string;
  petName: string;
  petBreed: string;
  quote: string;
  rating: number;
  date: string;
}

export interface CommunityArea {
  name: string;
  type: 'Gated Golf & Country Club' | 'Master-Planned Community' | 'Condo & Villa Community' | 'Estero Neighborhood';
  notes: string;
  zipCode: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Meet & Greet' | 'Services & Care' | 'Safety & Medical' | 'Billing & Scheduling';
}

export interface BookingFormData {
  ownerName: string;
  email: string;
  phone: string;
  community: string;
  streetAddress: string;
  serviceType: string;
  startDate: string;
  endDate?: string;
  petType: 'dog' | 'cat' | 'both' | 'other';
  petName: string;
  petBreedAge: string;
  medicationNeeds: boolean;
  medicationDetails: string;
  specialNotes: string;
  preferredContactMethod: 'phone' | 'text' | 'email';
}
