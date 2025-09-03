import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-purple-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/FullLogo_Transparent_NoBuffer.png" 
                alt="Mini Moments Nursery" 
                className="h-28 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-display font-medium text-lg transition-all duration-300 hover:text-brand-purple hover:scale-105 ${
                isActive('/') ? 'text-brand-purple' : 'text-gray-700'
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 font-display font-medium text-lg transition-all duration-300 hover:text-brand-purple hover:scale-105 ${
                  location.pathname.includes('about') || location.pathname.includes('vision') || 
                  location.pathname.includes('ethos') || location.pathname.includes('funding') ||
                  location.pathname.includes('company-policies')
                    ? 'text-brand-purple' : 'text-gray-700'
                }`}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <span>About Us</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-4xl shadow-soft border border-purple-100 transition-all duration-300 ${
                  isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link
                  to="/about"
                  className="block px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-brand-purple rounded-t-4xl transition-all duration-300 font-display"
                >
                  About Us
                </Link>
                <Link
                  to="/vision-curriculum"
                  className="block px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Our Vision & Curriculum
                </Link>
                <Link
                  to="/ethos"
                  className="block px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Our Ethos
                </Link>
                <Link
                  to="/funding"
                  className="block px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Fees & Funding
                </Link>
                <Link
                  to="/company-policies"
                  className="block px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-brand-purple rounded-b-4xl transition-all duration-300 font-display"
                >
                  Company Policies
                </Link>
              </div>
            </div>

            <Link
              to="/our-rooms"
              className={`font-display font-medium text-lg transition-all duration-300 hover:text-brand-purple hover:scale-105 ${
                isActive('/our-rooms') ? 'text-brand-purple' : 'text-gray-700'
              }`}
            >
              Our Rooms
            </Link>

            <Link
              to="/gallery"
              className={`font-display font-medium text-lg transition-all duration-300 hover:text-brand-purple hover:scale-105 ${
                isActive('/gallery') ? 'text-brand-purple' : 'text-gray-700'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/faqs"
              className={`font-display font-medium text-lg transition-all duration-300 hover:text-brand-purple hover:scale-105 ${
                isActive('/faqs') ? 'text-brand-purple' : 'text-gray-700'
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className={`font-display font-medium text-lg transition-all duration-300 hover:text-brand-purple hover:scale-105 ${
                isActive('/contact') ? 'text-brand-purple' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>

            {/* Social Media */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-purple-200">
              <a
                href="https://www.facebook.com/profile.php?id=61576302939801"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/minimomentsnursery/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/mini_momentsn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-4xl text-gray-700 hover:text-brand-purple hover:bg-purple-50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-purple-100">
            <div className="space-y-3">
              <Link
                to="/"
                className="block py-3 text-gray-700 hover:text-brand-purple transition-all duration-300 font-display text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-3 text-gray-700 hover:text-brand-purple transition-all duration-300 font-display text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/vision-curriculum"
                className="block py-3 pl-4 text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Vision & Curriculum
              </Link>
              <Link
                to="/ethos"
                className="block py-3 pl-4 text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Ethos
              </Link>
              <Link
                to="/funding"
                className="block py-3 pl-4 text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                onClick={() => setIsMenuOpen(false)}
              >
                Fees & Funding
              </Link>
              <Link
                to="/company-policies"
                className="block py-3 pl-4 text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                onClick={() => setIsMenuOpen(false)}
              >
                Company Policies
              </Link>
              <Link
                to="/our-rooms"
                className="block py-3 text-gray-700 hover:text-brand-purple transition-all duration-300 font-display text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Rooms
              </Link>
              <Link
                to="/gallery"
                className="block py-3 text-gray-700 hover:text-brand-purple transition-all duration-300 font-display text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/faqs"
                className="block py-3 text-gray-700 hover:text-brand-purple transition-all duration-300 font-display text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="block py-3 text-gray-700 hover:text-brand-purple transition-all duration-300 font-display text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Social Media */}
              <div className="flex items-center space-x-4 pt-4 border-t border-purple-100">
                <span className="text-gray-600 font-display font-medium">Follow us:</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61576302939801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/minimomentsnursery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/mini_momentsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                  aria-label="X (formerly Twitter)"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;