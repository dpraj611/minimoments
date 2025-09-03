import React from 'react';
import { FileText, AlertCircle, Globe, Shield, Users, Eye, Lock, ExternalLink } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6 tracking-extra-wide">
            Terms & Conditions
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Website Terms and Conditions for Amidhara Limited T/A Mini Moments Nursery
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-100 text-purple-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-purple-800 tracking-wide">
                Welcome to Our Website
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you continue to browse and use this website, you are agreeing to comply with and be bound by the 
              following terms and conditions of use, which, together with our Privacy Policy, govern Amidhara Limited 
              T/A Mini Moments Nursery's relationship with you in relation to this website.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you disagree with any part of these terms and conditions, please do not use our website.
            </p>
          </div>

          {/* Company Information */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Company Information
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg text-purple-800 mb-4">Company Details</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      The term 'Amidhara Limited T/A Mini Moments Nursery' or 'us' or 'we' refers to the owner of the website.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-medium text-purple-800 mb-2">Registered Office:</h4>
                      <p className="text-sm">107 Power Road, London, England, W4 5PY</p>
                    </div>
                    <div className="bg-gold-50 rounded-lg p-4">
                      <h4 className="font-medium text-purple-800 mb-2">Trading Address:</h4>
                      <p className="text-sm">Cranwell House, 102 High Street, Ingatestone, CM4 0BA</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-purple-800 mb-4">User Definition</h3>
                  <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-lg p-4">
                    <p className="text-gray-600">
                      The term 'you' refers to the user or viewer of our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use of Website */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Use of This Website
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              The use of this website is subject to the following terms of use:
            </p>

            <div className="space-y-8">
              {/* General Information */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <FileText className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">General Information</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The content of the pages of this website is for your general information and use only. 
                  It is subject to change without notice.
                </p>
              </div>

              {/* Cookies */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Eye className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  This website uses cookies to monitor browsing preferences. If you allow cookies to be used, 
                  the following information may be stored by us for site usage analysis:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>• IP address and location</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  For more details, please refer to our{' '}
                  <a href="/cookies-policy" className="text-purple-600 hover:text-purple-700 underline">
                    Cookies Policy
                  </a>.
                </p>
              </div>

              {/* Accuracy of Information */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-yellow-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Accuracy of Information</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, 
                  performance, completeness, or suitability of the information and materials found or offered on this 
                  website for any particular purpose. You acknowledge that such information and materials may contain 
                  inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to 
                  the fullest extent permitted by law.
                </p>
              </div>

              {/* Your Responsibility */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Your Responsibility</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Your use of any information or materials on this website is entirely at your own risk, for which we 
                  shall not be liable. It shall be your own responsibility to ensure that any products, services, or 
                  information available through this website meet your specific requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property & Legal */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Intellectual Property & Legal Matters
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Lock className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Intellectual Property</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  This website contains material that is owned by or licensed to us. This material includes, 
                  but is not limited to:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Design and layout</li>
                  <li>• Look and appearance</li>
                  <li>• Graphics and content</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  Reproduction is prohibited unless in accordance with applicable copyright laws.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Shield className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Trademarks</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All trademarks reproduced on this website that are not the property of, or licensed to, 
                  the operator are acknowledged on the website.
                </p>
              </div>
            </div>
          </div>

          {/* Unauthorized Use & External Links */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Website Usage & External Content
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-semibold text-lg text-purple-800 mb-2">Unauthorised Use</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold text-lg text-purple-800 mb-2">External Links</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  From time to time, this website may include links to other websites. These links are provided 
                  for your convenience to provide further information. They do not signify that we endorse the website(s).
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <ExternalLink className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      We have no responsibility for the content of the linked website(s).
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-lg text-purple-800 mb-2">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your use of this website and any dispute arising out of such use of the website is subject 
                  to the laws of England and Wales.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl p-8">
            <h2 className="font-display font-bold text-2xl mb-4 tracking-wide">
              Contact Us
            </h2>
            <p className="text-purple-100 mb-6 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold mb-3 text-gold-400">Registered Office</h4>
                <p className="text-purple-100 text-sm">
                  107 Power Road<br />
                  London, England<br />
                  W4 5PY
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold mb-3 text-gold-400">Trading Address</h4>
                <p className="text-purple-100 text-sm">
                  Cranwell House<br />
                  102 High Street<br />
                  Ingatestone, CM4 0BA
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gold-400" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href="tel:01277715261" 
                      className="text-gold-400 hover:text-gold-300 transition-colors text-sm"
                    >
                      01277 715 261
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-gold-400" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:enquiries@minimomentsnursery.com" 
                      className="text-gold-400 hover:text-gold-300 transition-colors text-sm"
                    >
                      enquiries@minimomentsnursery.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-purple-100 font-display">
                Thank you for visiting Mini Moments Nursery's website.
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>These Terms & Conditions were last updated on June 2025.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;