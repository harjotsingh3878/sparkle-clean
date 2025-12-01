export enum ServiceType {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  MOVE_IN_OUT = 'Move In/Out',
  POST_CONSTRUCTION = 'Post Construction'
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  sqFt: number;
  frequency: string;
  details: string;
}

export interface QuoteEstimate {
  estimatedPriceRange: string;
  estimatedHours: string;
  recommendedServiceLevel: string;
  explanation: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
