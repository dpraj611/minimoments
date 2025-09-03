import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Phone, Mail, Globe, AlertCircle, CheckCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6 tracking-extra-wide">
            Privacy Policy
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-100 text-purple-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-purple-800 tracking-wide">
                Privacy Policy for Amidhara Limited T/A Mini Moments Nursery
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Privacy Policy outlines Amidhara Limited T/A Mini Moments Nursery ("we", "our", or "the Company") 
              practices with respect to information collected from users who access our website at{' '}
              <a href="https://minimomentsnursery.com/" className="text-purple-600 hover:text-purple-700 underline">
                https://minimomentsnursery.com/
              </a>{' '}
              ("Site"), or otherwise share personal information with us (collectively: "Users").
            </p>
            <p className="text-gray-600 leading-relaxed">
              We encourage our Users to carefully read this Privacy Policy and use it to make informed decisions.
            </p>
          </div>

          {/* Grounds for Data Collection */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Grounds for Data Collection
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Processing of your personal information (meaning, any information which may potentially allow your 
                    identification with reasonable means; hereinafter "Personal Information") is necessary for:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>The performance of our contractual obligations towards you</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Providing you with our services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Protecting our legitimate interests</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Compliance with legal and regulatory obligations</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    When you use the Site or engage with our services, you consent to the collection, storage, use, 
                    disclosure, and other uses of your Personal Information as described in this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Information We Collect */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              What Information We Collect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Globe className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Non-personal Information</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Unidentified and non-identifiable information pertaining to Users, which may be gathered via your use of the Site.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Aggregated usage information</li>
                  <li>• Technical information (browser type, OS, language)</li>
                  <li>• Site activity (pages viewed, clicks, actions)</li>
                  <li>• Access time and preferences</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gold-100 text-gold-600 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Personal Information</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Information that identifies or can reasonably be used to identify you.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Name and contact details</li>
                  <li>• Email address and phone number</li>
                  <li>• Registration and service information</li>
                  <li>• Voluntarily provided details</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Receive Information */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              How Do We Receive Information About You?
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-lg text-purple-800 mb-2">Direct Provision</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you voluntarily provide your personal details to register on our Site or inquire about our services.
                </p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="font-semibold text-lg text-purple-800 mb-2">Site Usage</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you use or access our Site in connection with your use of our services.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-lg text-purple-800 mb-2">Third-Party Sources</h3>
                <p className="text-gray-600 leading-relaxed">
                  From third-party providers, services, and public registers (e.g., traffic analytics vendors).
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              How Do We Use Your Information?
            </h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-2xl p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                We do not rent, sell, or share Users' information with third parties except as described in this Privacy Policy. 
                We may disclose information if we believe in good faith that such disclosure is necessary to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Comply with applicable laws, regulations, or legal processes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Enforce our policies, including investigating potential violations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Detect, prevent, or address illegal activities, fraud, or security issues</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Establish or exercise our legal rights or defend against legal claims</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Prevent harm to the rights, property, or safety of us, our Users, or third parties</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Your Rights
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                You may request to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Receive confirmation as to whether your Personal Information is being processed</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Obtain a copy of your Personal Information in a structured format</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Request rectification or erasure of your Personal Information</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Object to or restrict the processing of your Personal Information</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Lodge a complaint with a supervisory authority</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Please note that these rights are not absolute and may be subject to our legitimate interests and 
                    regulatory requirements. To exercise these rights or for more information, please contact our 
                    Data Protection Officer ("DPO") using the details provided below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Retention */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Data Retention
            </h2>
            
            <div className="bg-gradient-to-br from-gold-50 to-purple-50 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your Personal Information for as long as necessary to provide our services, comply with legal 
                obligations, resolve disputes, and enforce our policies. Retention periods are determined based on the 
                type of information collected and the purpose for which it is collected, in accordance with applicable laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may update, correct, or remove incomplete or inaccurate information at our discretion.
              </p>
            </div>
          </div>

          {/* Third-Party Collection */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Third-Party Collection of Information
            </h2>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy only addresses the use and disclosure of information we collect. If you disclose your 
                information to third parties or other websites, different rules may apply to their use or disclosure of your 
                information. We encourage you to review the privacy policies of any third parties you engage with.
              </p>
            </div>
          </div>

          {/* Marketing */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Marketing Communications
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use your Personal Information (e.g., name, email address, phone number) to provide you with 
                promotional materials about our services. You may opt out of receiving marketing communications at any 
                time by following the unsubscribe instructions included in such materials.
              </p>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Please note:</strong> Even if you unsubscribe from marketing communications, we may still send you 
                  important administrative or service-related messages.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Transactions */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Corporate Transactions
            </h2>
            
            <div className="border-l-4 border-gold-500 pl-6">
              <p className="text-gray-700 leading-relaxed">
                In the event of a corporate transaction (e.g., sale, merger, or asset sale), we may share your information 
                with the transferee or acquiring company, who will assume the rights and obligations described in this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Minors */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Protection of Minors
            </h2>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We are committed to protecting the privacy of children. Our Site and services are not designed for or 
                    directed at minors. We do not knowingly collect Personal Information from minors without prior consent 
                    from a parent or legal guardian.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you become aware that a minor has provided us with Personal Information without consent, please contact us 
                    at <a href="mailto:harshal@minimomentsnursery.com" className="text-purple-600 hover:text-purple-700 underline">harshal@minimomentsnursery.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Updates or Amendments to This Privacy Policy
            </h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to periodically amend or revise this Privacy Policy. Material changes will be effective 
                immediately upon posting the revised policy on our Site. Your continued use of the Site or services after such 
                changes constitutes your acknowledgment and consent to the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl p-8">
            <h2 className="font-display font-bold text-2xl mb-4 tracking-wide">
              How to Contact Us
            </h2>
            <p className="text-purple-100 mb-6 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or wish to exercise your rights, 
              please contact our Data Protection Officer at:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-400" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:harshal@minimomentsnursery.com" 
                      className="text-gold-400 hover:text-gold-300 transition-colors text-sm"
                    >
                      harshal@minimomentsnursery.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-400" />
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
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-purple-100 text-sm mb-2">
                <strong>Best regards,</strong><br />
                Amidhara Limited T/A Mini Moments Nursery
              </p>
              <p className="text-purple-200 text-xs">
                Amidhara Limited is registered on the Data Protection Register with the Information Commissioner's Office 
                registration number <strong>ZB873001</strong>
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>This Privacy Policy was last modified on June 2025.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;