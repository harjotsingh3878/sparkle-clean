import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';
import { SERVICE_FEATURES } from '../constants';
import { ServiceType } from '../types';

const Residential: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">For Your Home</span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Residential Cleaning Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl">Return to a spotless home without lifting a finger. Our team handles the dirt so you can reclaim your time.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/800/600?random=3" 
              alt="Living Room Cleaning" 
              className="rounded-2xl shadow-2xl mb-8"
            />
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                The Sparkle Guarantee
              </h3>
              <p className="text-blue-800 text-sm">
                If you aren't 100% satisfied with any area we've cleaned, call us within 24 hours and we'll come back and re-clean it for free.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Home Cleaning</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Every home is unique, and so are our cleaning plans. Whether you have pets, kids, or just need a seasonal refresh, we adapt our checklist to your needs.
            </p>
            
            <div className="space-y-4 mb-8">
              {SERVICE_FEATURES[ServiceType.RESIDENTIAL].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 bg-green-100 p-1 rounded-full mr-4 shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature}</h4>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Residential Cleaning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residential;