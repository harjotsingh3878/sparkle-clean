import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">SparkleClean Pro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/residential" className={isActive('/residential')}>Residential</Link>
            <Link to="/commercial" className={isActive('/commercial')}>Commercial</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact & Quote</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+15551234567" className="flex items-center text-slate-600 hover:text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              (555) 123-4567
            </a>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="block py-2 text-slate-600 hover:text-blue-600" onClick={toggleMenu}>Home</Link>
              <Link to="/residential" className="block py-2 text-slate-600 hover:text-blue-600" onClick={toggleMenu}>Residential Services</Link>
              <Link to="/commercial" className="block py-2 text-slate-600 hover:text-blue-600" onClick={toggleMenu}>Commercial Services</Link>
              <Link to="/contact" className="block py-2 text-blue-600 font-semibold" onClick={toggleMenu}>Get a Quote</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
