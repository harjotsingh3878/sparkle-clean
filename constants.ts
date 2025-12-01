import { ServiceType, Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "The team was incredibly professional. They transformed my home in just a few hours. The attention to detail in the kitchen and bathrooms was outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "TechStart Solutions",
    role: "Office Manager",
    content: "We've used SparkleClean for our 5000 sq ft office for over a year. Reliable, trustworthy, and they always go the extra mile. Highly recommended for commercial needs.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Property Manager",
    content: "Best move-out cleaning service I've hired. Helped me get my full deposit back. The AI quote tool was surprisingly accurate!",
    rating: 4
  }
];

export const SERVICE_FEATURES = {
  [ServiceType.RESIDENTIAL]: [
    "Deep Kitchen Cleaning",
    "Bathroom Sanitization",
    "Dusting & Vacuuming",
    "Floor Polishing",
    "Pet Hair Removal",
    "Eco-friendly Products"
  ],
  [ServiceType.COMMERCIAL]: [
    "Office Desk & Cubicle Cleaning",
    "Common Area Maintenance",
    "Restroom Sanitization",
    "Trash & Recycling Removal",
    "Window Washing (Interior)",
    "After-hours Service"
  ]
};
