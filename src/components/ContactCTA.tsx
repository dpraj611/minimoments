import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Users, CheckCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gold-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-5xl p-10 shadow-glow border border-purple-100">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-brand-gold text-white rounded-full p-3">
              <Users className="h-6 w-6" />
            </div>
          </div>
          
          <h2 className="font-display font-bold text-3xl text-brand-purple mb-4">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join our Mini Moments family and give your child the mindful start they deserve. 
            Contact us today to learn more about our nurturing environment and book a tour.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow inline-flex items-center justify-center"
            >
              <Phone className="mr-3 h-5 w-5" />
              Contact Us Now
            </Link>
            <Link
              to="/our-rooms"
              className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Book a Tour
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
              <span>Outstanding Care Standards</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
              <span>Qualified Mindfulness Practitioners</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
              <span>9+ Years Experience</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Call us now at <span className="font-semibold text-brand-purple">01277 715 261</span> or email info@minimomentsnursery.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;