import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
               <Sparkles className="w-6 h-6 text-blue-500" />
               <h3 className="text-white text-xl font-bold tracking-tight">SparkleClean Pro</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional residential and commercial cleaning services dedicated to making your space shine. Eco-friendly products, trusted professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Home</Link></li>
              <li><Link to="/residential" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Residential Cleaning</Link></li>
              <li><Link to="/commercial" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Commercial Cleaning</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-blue-300 transition-colors cursor-default">Regular Housekeeping</li>
              <li className="hover:text-blue-300 transition-colors cursor-default">Office Janitorial</li>
              <li className="hover:text-blue-300 transition-colors cursor-default">Deep Cleaning</li>
              <li className="hover:text-blue-300 transition-colors cursor-default">Move-In/Move-Out</li>
              <li className="hover:text-blue-300 transition-colors cursor-default">Post-Construction</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">123 Cleaning Blvd, Suite 100<br />Metropolis, STATE 54321</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">(555) 123-4567</span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">harjotsingh538@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SparkleClean Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;