import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "11a7db19-9a62-478d-9a01-562117c56768");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message if form was submitted successfully
  if (submitStatus === 'success') {
    return (
      <div className="py-16 lg:py-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Your message has been sent successfully
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-5xl p-12 border border-green-200">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="font-display font-bold text-3xl text-brand-purple mb-4">
                Message Sent Successfully! 😊
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Thank you for your enquiry! We'll be in touch within 24 hours to discuss your childcare needs 
                and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-3 rounded-5xl font-display font-semibold transition-all duration-300 hover:scale-105"
                >
                  Return to Home
                </a>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-3 rounded-5xl font-display font-semibold transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            We'd love to hear from you and answer any questions about your child's care
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-3xl text-brand-purple mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to help with any questions about our nursery, booking a tour, 
                  or discussing your child's specific needs. Our friendly team is always 
                  happy to chat about how we can support your family.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-brand-purple rounded-full p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-brand-purple mb-1">Phone</h3>
                    <p className="text-gray-600">01277 715 261</p>
                    <p className="text-sm text-gray-500">Available during office hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 text-brand-gold rounded-full p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-brand-purple mb-1">Email</h3>
                    <p className="text-gray-600">enquiries@minimomentsnursery.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-brand-purple rounded-full p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-brand-purple mb-1">Address</h3>
                    <p className="text-gray-600">102 High Street</p>
                    <p className="text-gray-600">Ingatestone, CM4 0BA</p>
                    <p className="text-sm text-gray-500">Free parking available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 text-brand-gold rounded-full p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-brand-purple mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Weekends: Closed</p>
                    <p className="text-sm text-gray-500">50 weeks per year</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-4xl p-6">
                <h3 className="font-display font-semibold text-xl text-brand-purple mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:01277715261"
                    className="flex items-center space-x-3 text-brand-purple hover:text-purple-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">Call us now for immediate assistance</span>
                  </a>
                  <a
                    href="mailto:enquiries@minimomentsnursery.com"
                    className="flex items-center space-x-3 text-brand-purple hover:text-purple-700 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="font-medium">Send us an email enquiry</span>
                  </a>
                  <div className="flex items-center space-x-3 text-brand-purple">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">Book a tour using the form</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-4xl p-8">
              <h2 className="font-display font-bold text-2xl text-brand-purple mb-6">
                Send Us a Message
              </h2>
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-4xl p-4">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <div>
                      <h3 className="font-semibold text-red-800">Error Sending Message</h3>
                      <p className="text-red-700 text-sm">Please check your information and try again, or call us directly.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                      placeholder="01277 715 261"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Age
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                    >
                      <option value="">Select age range</option>
                      <option value="12weeks-2years">12 weeks - 2 years</option>
                      <option value="2-3years">2 - 3 years</option>
                      <option value="3-5years">3 - 5 years</option>
                      <option value="expecting">Expecting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                  >
                    <option value="">Please select an enquiry type</option>
                    <option value="check-availability">Check Availability</option>
                    <option value="general-enquiry">General Enquiry</option>
                    <option value="book-tour">Book a Tour</option>
                    <option value="funding-info">Funding Information</option>
                    <option value="admissions">Admissions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    When do you need childcare?
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                  >
                    <option value="flexible">Flexible - just exploring options</option>
                    <option value="soon">Within the next month</option>
                    <option value="urgent">Urgently - within 2 weeks</option>
                    <option value="future">Planning for the future (3+ months)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tourDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Tour Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="tourDate"
                    name="tourDate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your childcare needs, any questions you have, or anything specific you'd like to know about our nursery..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-5xl font-display font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours. For urgent enquiries, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're conveniently located in Ingatestone with easy access and free parking. 
              Come and visit us to see our wonderful facilities.
            </p>
          </div>

          <div className="bg-white rounded-4xl shadow-soft overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d397.9990224456063!2d0.3837121!3d51.6703221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c008c55848cd%3A0x9659b99bb5ca6451!2sCranwell%20House%2C%20102%20High%20St%2C%20Ingatestone%20CM4%200BA%2C%20UK!5e1!3m2!1sen!2sin!4v1750143301859!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mini Moments Nursery Location"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-4xl p-6 text-center shadow-soft">
              <div className="bg-purple-100 text-brand-purple rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-purple mb-2">Easy to Find</h3>
              <p className="text-gray-600 text-sm">Located on the main road with clear signage</p>
            </div>

            <div className="bg-white rounded-4xl p-6 text-center shadow-soft">
              <div className="bg-gold-100 text-brand-gold rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-purple mb-2">Free Parking</h3>
              <p className="text-gray-600 text-sm">Plenty of off street parking available for 2 hours</p>
            </div>

            <div className="bg-white rounded-4xl p-6 text-center shadow-soft">
              <div className="bg-purple-100 text-brand-purple rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-purple mb-2">Public Transport</h3>
              <p className="text-gray-600 text-sm">Bus stop nearby with regular services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Contact;