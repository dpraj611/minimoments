import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-gold-50 text-gray-800 relative overflow-hidden border-t border-gold-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/FullLogo_Transparent_NoBuffer.png" 
                alt="Mini Moments Nursery" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Where every child's journey begins with mindfulness, joy, and mindful growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576302939801"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/minimomentsnursery/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/mini_momentsn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-purple transition-all duration-300 hover:scale-110"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-brand-purple">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-curriculum"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Our Vision & Curriculum
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://myclothing.com/collections/mini-moments-nursery-29690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Order Uniforms
                </a>
              </li>
            </ul>
          </div>

          {/* Our Rooms */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-brand-purple">
              Our Rooms
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/our-rooms"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Tiny Treasures (12 weeks - 2 years)
                </Link>
              </li>
              <li>
                <Link
                  to="/our-rooms"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Little Explorers (2 - 3 years)
                </Link>
              </li>
              <li>
                <Link
                  to="/our-rooms"
                  className="text-gray-600 hover:text-brand-purple transition-all duration-300 font-display"
                >
                  Bright Beginners (3 - 5 years)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-brand-purple">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                   102 High Street, Ingatestone, CM4 0BA
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <p className="text-gray-600">
                  01277 715 261
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <p className="text-gray-600">
                  enquiries@minimomentsnursery.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4 sm:mb-0">
            <p className="text-gray-500 font-display">
              © 2025 Mini Moments Nursery. All rights reserved.
            </p>
            <div className="bg-gradient-to-r from-brand-purple to-purple-600 text-white px-4 py-2 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
              <p className="text-sm font-display">
                Developed by{' '}
                <a
                  href="https://cyberdhruv.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-gold-300 font-semibold transition-colors duration-300 underline decoration-brand-gold hover:decoration-gold-300"
                >
                  Dhruv Prajapati
                </a>
              </p>
            </div>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/cookies-policy"
              className="text-gray-500 hover:text-brand-purple transition-all duration-300 font-display"
            >
              Cookies Policy
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-brand-purple transition-all duration-300 font-display"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-gray-500 hover:text-brand-purple transition-all duration-300 font-display"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;