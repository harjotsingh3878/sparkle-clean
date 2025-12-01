import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Clock, ArrowRight, Building2, Home as HomeIcon } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-6">Top Rated Cleaning Service</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Professional Cleaning for <span className="text-blue-400">Home</span> & <span className="text-blue-400">Business</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Experience the difference of a truly professional clean. We use eco-friendly products and vetted staff to ensure your space sparkles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                Request Quote
              </Link>
              <Link to="/residential" className="bg-white text-slate-900 text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fully Insured & Bonded</h3>
              <p className="text-slate-600">Peace of mind knowing your property is protected by our comprehensive liability insurance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Top-Rated Staff</h3>
              <p className="text-slate-600">Every cleaner undergoes strict background checks and rigorous training programs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Reliable Scheduling</h3>
              <p className="text-slate-600">We show up on time, every time. Flexible booking options to fit your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Segments */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Whether you need a pristine office environment or a spotless home, we deliver excellence in every corner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Residential */}
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img src="https://picsum.photos/800/600?random=1" alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Residential Cleaning</h3>
                <p className="text-slate-200 mb-6 line-clamp-2">Detailed cleaning for kitchens, bathrooms, bedrooms and living areas. Weekly, bi-weekly, or monthly.</p>
                <Link to="/residential" className="inline-flex items-center text-white font-semibold hover:text-blue-400 transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img src="https://picsum.photos/800/600?random=2" alt="Commercial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Commercial Cleaning</h3>
                <p className="text-slate-200 mb-6 line-clamp-2">Janitorial services for offices, retail spaces, schools, and medical facilities.</p>
                <Link to="/commercial" className="inline-flex items-center text-white font-semibold hover:text-blue-400 transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-slate-300'}`} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Cleaner Space?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of satisfied customers. Request your personalized quote today.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-slate-100 transition-colors shadow-xl">
            Request Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;