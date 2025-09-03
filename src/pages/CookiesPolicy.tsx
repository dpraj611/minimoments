import React from 'react';
import { Cookie, Shield, Settings, Info, Globe, Eye, BarChart3 } from 'lucide-react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6 tracking-extra-wide">
            Cookies Policy
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            How we use cookies to improve your experience on our website
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
                <Cookie className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-purple-800 tracking-wide">
                Cookies Policy for Amidhara Limited T/A Mini Moments Nursery
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We and our trusted partners use cookies and other technologies in our related services, 
              including when you visit our website at <a href="https://minimomentsnursery.com" className="text-purple-600 hover:text-purple-700 underline">https://minimomentsnursery.com</a> ("Site") 
              or access our services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A "cookie" is a small piece of information that a website assigns to your device while you are viewing it. 
              Cookies are helpful and serve various purposes.
            </p>
          </div>

          {/* Cookie Benefits */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              How Cookies Help You
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Settings className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Navigation & Features</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Enabling efficient navigation between pages</li>
                  <li>• Automatically activating certain features</li>
                  <li>• Remembering your preferences for quicker interaction</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Personalization & Analytics</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Ensuring relevant advertisements</li>
                  <li>• Compiling statistical data about site usage</li>
                  <li>• Improving our services based on your preferences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Settings className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Session Cookies</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  These are stored temporarily during your browsing session and are deleted from your device 
                  when you close your browser. They allow for normal use of the Site during your visit.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Shield className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Persistent Cookies</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  These are saved on your device for a fixed period and are not deleted when the browser is closed. 
                  They are used to recognize you on repeat visits, enabling us to store your preferences for future sign-ins.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gold-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Globe className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-purple-800">Third-Party Cookies</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  These are set by other online services that run content on the pages you view. 
                  For example, third-party analytics companies may use cookies to monitor and analyse site traffic.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies and Personal Information */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Cookies and Personal Information
            </h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-purple-100 text-purple-600 rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-purple-800 mb-3">Privacy Protection</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Cookies do not contain information that personally identifies you. However, any Personal Information 
                    we store about you may be linked by us to the information stored in and obtained from cookies.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You can remove or disable cookies by following the instructions in your device or browser preferences. 
                    Please note that if you choose to disable cookies, some features of our Site may not function properly, 
                    and your online experience may be limited.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Analytics */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Google Analytics
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 text-green-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl text-purple-800">How We Use Google Analytics</h3>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We use a tool called Google Analytics to collect information about your use of the Site. 
                  Google Analytics gathers data such as how often users visit the Site, which pages they view, 
                  and other related information. We use this data solely to improve our Site and services.
                </p>
                <p>
                  Google Analytics collects your IP address on the date you visit the Site, but it does not collect 
                  your name or other personally identifiable information. We do not combine the information collected 
                  through Google Analytics with any Personal Information we hold about you.
                </p>
                <p>
                  Google's ability to use and share information collected by Google Analytics is restricted by the 
                  <a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline"> Google Analytics Terms of Use</a> and the 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline"> Google Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Browser Settings Guide */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl text-purple-800 mb-8 tracking-wide">
              Managing Your Cookie Preferences
            </h2>
            
            <div className="bg-gradient-to-br from-gold-50 to-purple-50 rounded-2xl p-8">
              <h3 className="font-semibold text-xl text-purple-800 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already 
                on your computer and you can set most browsers to prevent them from being placed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Chrome</h4>
                  <p className="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Firefox</h4>
                  <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Safari</h4>
                  <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Edge</h4>
                  <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl p-8">
            <h2 className="font-display font-bold text-2xl mb-4 tracking-wide">
              How to Contact Us
            </h2>
            <p className="text-purple-100 mb-6 leading-relaxed">
              If you have any questions or concerns about our use of cookies or this Cookies Policy, please contact us at:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold mb-2">Email</h4>
                <a 
                  href="mailto:enquiries@minimomentsnursery.com" 
                  className="text-gold-400 hover:text-gold-300 transition-colors"
                >
                  enquiries@minimomentsnursery.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold mb-2">Phone</h4>
                <a 
                  href="tel:01277715261" 
                  className="text-gold-400 hover:text-gold-300 transition-colors"
                >
                  01277 715 261
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-purple-100 font-display">
                Thank you for visiting Mini Moments Nursery.
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>This Cookies Policy was last updated on June 2025.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;