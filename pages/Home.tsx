import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Clock, ArrowRight, Building2, Home as HomeIcon } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        {/* Simple Blue Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-6 backdrop-blur-md">
                <Star className="w-3 h-3 fill-current" />
                Top Rated Cleaning Service
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
              Professional Cleaning for <br/>
              <span className="text-blue-400">Home</span> & <span className="text-blue-400">Business</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Experience the difference of a truly professional clean. We use eco-friendly products and vetted staff to ensure your space sparkles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
                Request Free Quote
              </Link>
              <Link to="/residential" className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Fully Insured & Bonded</h3>
              <p className="text-slate-600 leading-relaxed">Peace of mind knowing your property is protected by our comprehensive liability insurance.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
               <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Top-Rated Staff</h3>
              <p className="text-slate-600 leading-relaxed">Every cleaner undergoes strict background checks and rigorous training programs.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
               <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Reliable Scheduling</h3>
              <p className="text-slate-600 leading-relaxed">We show up on time, every time. Flexible booking options to fit your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Segments */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Whether you need a pristine office environment or a spotless home, we deliver excellence in every corner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Residential */}
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
              <img src="https://picsum.photos/800/600?random=1" alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent flex flex-col justify-end p-10">
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <HomeIcon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Residential Cleaning</h3>
                <p className="text-slate-200 mb-8 line-clamp-2 text-lg">Detailed cleaning for kitchens, bathrooms, bedrooms and living areas. Weekly, bi-weekly, or monthly.</p>
                <Link to="/residential" className="inline-flex items-center text-white font-bold hover:text-blue-400 transition-colors text-lg">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
              <img src="https://picsum.photos/800/600?random=2" alt="Commercial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent flex flex-col justify-end p-10">
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <Building2 className="text-white w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Commercial Cleaning</h3>
                <p className="text-slate-200 mb-8 line-clamp-2 text-lg">Janitorial services for offices, retail spaces, schools, and medical facilities.</p>
                <Link to="/commercial" className="inline-flex items-center text-white font-bold hover:text-blue-400 transition-colors text-lg">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-slate-300'}`} />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 italic text-lg leading-relaxed">"{t.content}"</p>
                <div className="flex items-center border-t border-slate-200 pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-xs text-blue-600 uppercase tracking-wide font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative py-20 overflow-hidden bg-blue-600">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready for a Cleaner Space?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto font-light">Join hundreds of satisfied customers. Request your personalized quote today.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 font-bold px-12 py-5 rounded-full hover:bg-slate-50 transition-all shadow-xl hover:scale-105 duration-300">
            Request Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;