import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600 font-medium";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm transition-all">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-2.5 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">SparkleClean<span className="text-blue-600">Pro</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
            <Link to="/residential" className={`${isActive('/residential')} transition-colors`}>Residential</Link>
            <Link to="/commercial" className={`${isActive('/commercial')} transition-colors`}>Commercial</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>Contact & Quote</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+15551234567" className="flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              (555) 123-4567
            </a>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4 animate-fadeIn bg-white rounded-b-2xl">
            <div className="flex flex-col space-y-4 px-2">
              <Link to="/" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>Home</Link>
              <Link to="/residential" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>Residential Services</Link>
              <Link to="/commercial" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>Commercial Services</Link>
              <Link to="/contact" className="block py-3 px-4 rounded-lg bg-blue-50 text-blue-700 font-bold" onClick={toggleMenu}>Get a Quote</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;