import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';
import { SERVICE_FEATURES } from '../constants';
import { ServiceType } from '../types';

const Residential: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">For Your Home</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Residential Cleaning Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">Return to a spotless home without lifting a finger. Our team handles the dirt so you can reclaim your time.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform rotate-2"></div>
                <img 
                src="https://picsum.photos/800/600?random=3" 
                alt="Living Room Cleaning" 
                className="relative rounded-2xl shadow-2xl mb-8 w-full"
                />
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center text-lg">
                <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                The Sparkle Guarantee
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                If you aren't 100% satisfied with any area we've cleaned, call us within 24 hours and we'll come back and re-clean it for free.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Home Cleaning</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Every home is unique, and so are our cleaning plans. Whether you have pets, kids, or just need a seasonal refresh, we adapt our checklist to your needs.
            </p>
            
            <div className="space-y-4 mb-10">
              {SERVICE_FEATURES[ServiceType.RESIDENTIAL].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-1.5 rounded-full mr-4 shrink-0">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 text-lg">{feature}</h4>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
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