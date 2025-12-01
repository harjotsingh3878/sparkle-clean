import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Building } from 'lucide-react';
import { SERVICE_FEATURES } from '../constants';
import { ServiceType } from '../types';

const Commercial: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3 block">For Your Business</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Cleaning Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">Create a healthy, productive environment for your employees and a pristine first impression for your clients.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Janitorial Solutions</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We understand the nuances of commercial spaces. From medical offices requiring strict sanitization protocols to high-traffic retail environments, our team delivers consistent quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {SERVICE_FEATURES[ServiceType.COMMERCIAL].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 mb-10 shadow-sm rounded-r-xl">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Custom Maintenance Plans</h3>
              <p className="text-slate-600">
                We work around your schedule. Day porter services, nightly janitorial, or weekend deep cleans—we build the schedule that fits your operations.
              </p>
            </div>

            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Request Commercial Proposal
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
                 <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform -rotate-2"></div>
                <img 
                src="https://picsum.photos/800/600?random=4" 
                alt="Office Cleaning" 
                className="relative rounded-2xl shadow-2xl mb-8 w-full"
                />
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
               <div className="bg-white shadow-xl p-6 rounded-2xl border border-slate-100 text-center transform -translate-y-6">
                  <Building className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <div className="font-bold text-3xl text-slate-900">50+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">Businesses Served</div>
               </div>
               <div className="bg-white shadow-xl p-6 rounded-2xl border border-slate-100 text-center transform -translate-y-6">
                  <Check className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                  <div className="font-bold text-3xl text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">Satisfaction Rate</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;