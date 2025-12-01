import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Building } from 'lucide-react';
import { SERVICE_FEATURES } from '../constants';
import { ServiceType } from '../types';

const Commercial: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">For Your Business</span>
          <h1 className="text-4xl font-bold mb-4">Commercial Cleaning Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl">Create a healthy, productive environment for your employees and a pristine first impression for your clients.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Janitorial Solutions</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We understand the nuances of commercial spaces. From medical offices requiring strict sanitization protocols to high-traffic retail environments, our team delivers consistent quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {SERVICE_FEATURES[ServiceType.COMMERCIAL].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-2">Custom Maintenance Plans</h3>
              <p className="text-slate-600 text-sm">
                We work around your schedule. Day porter services, nightly janitorial, or weekend deep cleans—we build the schedule that fits your operations.
              </p>
            </div>

            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Commercial Proposal
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/800/600?random=4" 
              alt="Office Cleaning" 
              className="rounded-2xl shadow-2xl mb-8"
            />
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white shadow-lg p-4 rounded-xl border border-slate-100 text-center">
                  <Building className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-slate-900">50+</div>
                  <div className="text-xs text-slate-500 uppercase">Businesses Served</div>
               </div>
               <div className="bg-white shadow-lg p-4 rounded-xl border border-slate-100 text-center">
                  <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 uppercase">Satisfaction Rate</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;