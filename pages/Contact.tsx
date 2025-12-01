import React from 'react';
import QuoteForm from '../components/QuoteForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact & Quote</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for general queries, or fill out the form below to request a personalized quote for your cleaning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3.5 rounded-xl mr-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Phone</h4>
                    <p className="text-slate-600 font-medium">(555) 123-4567</p>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Mon-Fri 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3.5 rounded-xl mr-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                    <p className="text-slate-600 font-medium">harjotsingh538@gmail.com</p>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3.5 rounded-xl mr-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Office</h4>
                    <p className="text-slate-600 font-medium">123 Cleaning Blvd, Suite 100<br />Metropolis, STATE 54321</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center relative z-10">
                <Clock className="w-5 h-5 mr-3 text-blue-400" />
                Service Areas
              </h3>
              <p className="text-slate-300 mb-6 text-sm relative z-10 leading-relaxed">
                We currently serve the greater Metropolis area, including downtown, the suburbs, and surrounding industrial parks.
              </p>
              <ul className="space-y-2 text-sm text-slate-400 relative z-10">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Downtown Metropolis</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>North Hills</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Riverdale District</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Westside Industrial Park</li>
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;