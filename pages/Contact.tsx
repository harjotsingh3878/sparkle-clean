import React from 'react';
import QuoteForm from '../components/QuoteForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact & Quote</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch with us for general queries, or fill out the form below to request a personalized quote for your cleaning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <p className="text-xs text-slate-500 mt-1">Mon-Fri 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">harjotsingh538@gmail.com</p>
                    <p className="text-xs text-slate-500 mt-1">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Office</h4>
                    <p className="text-slate-600">123 Cleaning Blvd, Suite 100<br />Metropolis, STATE 54321</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Service Areas
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                We currently serve the greater Metropolis area, including downtown, the suburbs, and surrounding industrial parks.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Downtown Metropolis</li>
                <li>• North Hills</li>
                <li>• Riverdale District</li>
                <li>• Westside Industrial Park</li>
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