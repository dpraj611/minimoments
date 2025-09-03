import React from 'react';
import { CreditCard, Calendar, Users, CheckCircle, Phone, Mail, Clock, Star, Shield, ExternalLink, Calculator, FileText, Link as LinkIcon, Award, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';

const Funding: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Fees & Funding
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Transparent pricing and comprehensive funding support for your family
          </p>
        </div>
      </section>

      {/* Free Childcare Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Government Funded Childcare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're proud to offer government-funded places to help make quality childcare accessible to all families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="bg-brand-purple text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-4">
                Universal 15 Hours
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">15 hours free childcare per week</p>
                    <p className="text-sm text-gray-600">From the term after your child's 3rd birthday</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">570 hours annually</p>
                    <p className="text-sm text-gray-600">Spread over 50 weeks per year</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">All 3 & 4 year olds eligible</p>
                    <p className="text-sm text-gray-600">No income requirements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="bg-brand-gold text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-4">
                Extended 30 Hours
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">30 hours for working families</p>
                    <p className="text-sm text-gray-600">Additional 15 hours for eligible families</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">1,140 hours annually</p>
                    <p className="text-sm text-gray-600">Double the support for working parents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Apply via Childcare Choices</p>
                    <p className="text-sm text-gray-600">Eligibility code required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Year-Old Funding */}
          <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-5xl p-10 shadow-soft">
            <div className="text-center mb-8">
              <div className="bg-brand-purple text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-2">
                2-Year-Old Funding
              </h3>
              <p className="text-gray-600">
                15 hours of free childcare for eligible 2-year-olds from families receiving certain benefits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Income Support',
                'Income-Based JSA',
                'Child Tax Credit (income ≤ £16,190)',
                'Pension Credit',
                'Income-Related ESA',
                'Asylum Support'
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-4xl p-4 shadow-sm border border-purple-100">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nursery Fees & Sessions */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Our Session Fees
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing for all our sessions, effective from 1st June 2025
            </p>
          </div>

          <div className="bg-white rounded-5xl p-8 shadow-glow border border-purple-100 mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-purple-100">
                    <th className="text-left py-4 px-6 font-display font-bold text-xl text-brand-purple">Session Type</th>
                    <th className="text-left py-4 px-6 font-display font-bold text-xl text-brand-purple">Times</th>
                    <th className="text-right py-4 px-6 font-display font-bold text-xl text-brand-purple">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-brand-purple text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                          <Clock className="h-4 w-4" />
                        </div>
                        <span className="font-display font-semibold text-lg text-gray-800">Full Day</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium">7:00am - 6:00pm</td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-display font-bold text-2xl text-brand-purple">£82.50</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-brand-gold text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                          <Clock className="h-4 w-4" />
                        </div>
                        <span className="font-display font-semibold text-lg text-gray-800">Morning</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium">7:00am - 1:00pm</td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-display font-bold text-2xl text-brand-purple">£56.50</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-brand-purple text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                          <Clock className="h-4 w-4" />
                        </div>
                        <span className="font-display font-semibold text-lg text-gray-800">Afternoon</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium">1:00pm - 6:00pm</td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-display font-bold text-2xl text-brand-purple">£52.50</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Discounts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 text-center border border-purple-100">
              <div className="bg-purple-100 text-brand-purple rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-4">Sibling Discount</h3>
              <div className="text-4xl font-bold text-brand-gold mb-2">10%</div>
              <p className="text-gray-600 leading-relaxed">
                For the second child attending simultaneously. Applied to the most recently enrolled sibling's invoice.
              </p>
            </div>

            <div className="bg-white rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 text-center border border-purple-100">
              <div className="bg-gold-100 text-brand-gold rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-4">Full-Time Discount</h3>
              <div className="text-4xl font-bold text-brand-gold mb-2">7%</div>
              <p className="text-gray-600 leading-relaxed">
                For children attending 5 days per week, helping families with full-time childcare needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attendance Requirements */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Minimum Attendance Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To ensure consistency and continuity of care for your child
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-5xl p-8 shadow-soft">
              <div className="bg-brand-purple text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-6">
                Private Sessions
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-4xl p-4 border border-purple-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Option 1</span>
                  </div>
                  <p className="text-gray-600 text-sm">2 morning/afternoon sessions per week</p>
                </div>
                <div className="text-center text-gray-500 font-display font-medium">OR</div>
                <div className="bg-white rounded-4xl p-4 border border-purple-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Option 2</span>
                  </div>
                  <p className="text-gray-600 text-sm">2 full days per week</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-5xl p-8 shadow-soft">
              <div className="bg-brand-gold text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-6">
                Funded Hours
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-4xl p-4 border border-gold-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Option 1</span>
                  </div>
                  <p className="text-gray-600 text-sm">2 full days per week</p>
                </div>
                <div className="text-center text-gray-500 font-display font-medium">OR</div>
                <div className="bg-white rounded-4xl p-4 border border-gold-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Option 2</span>
                  </div>
                  <p className="text-gray-600 text-sm">3 morning/afternoon sessions per week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Payment Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, transparent payment process designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-5xl p-8 text-center shadow-soft hover:shadow-glow transition-all duration-300 border border-purple-100">
              <div className="bg-purple-100 text-brand-purple rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3">Monthly Billing</h3>
              <p className="text-gray-600 leading-relaxed">
                Fees calculated based on actual attendance days each month
              </p>
            </div>

            <div className="bg-white rounded-5xl p-8 text-center shadow-soft hover:shadow-glow transition-all duration-300 border border-purple-100">
              <div className="bg-gold-100 text-brand-gold rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3">Invoice Schedule</h3>
              <p className="text-gray-600 leading-relaxed">
                Invoices emailed around the 25th of each month
              </p>
            </div>

            <div className="bg-white rounded-5xl p-8 text-center shadow-soft hover:shadow-glow transition-all duration-300 border border-purple-100">
              <div className="bg-purple-100 text-brand-purple rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3">Payment Due</h3>
              <p className="text-gray-600 leading-relaxed">
                Payment required by the 3rd of the following month
              </p>
            </div>
          </div>

          {/* Additional Payment Info */}
          <div className="bg-white rounded-5xl p-10 shadow-glow border border-purple-100">
            <h3 className="font-display font-bold text-2xl text-brand-purple mb-6 text-center">
              Payment Methods & Important Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display font-semibold text-lg text-brand-purple mb-4">Accepted Payment Methods</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">BACS / Standing Order</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Childcare Vouchers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tax-Free Childcare</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Childcare Grant Payment Service</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg text-brand-purple mb-4">Important Notes</h4>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">• Fees are chargeable during public holidays (except Christmas Day and Boxing Day)</p>
                  <p className="text-sm">• Nursery closed from Christmas Day through New Year (no charges)</p>
                  <p className="text-sm">• Fees remain payable during illness or family holidays</p>
                  <p className="text-sm">• £5/month admin fee for some payment services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links and Resources */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Helpful Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Useful links and tools to help you navigate childcare funding and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.childcarechoices.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group border border-purple-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-brand-purple text-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-brand-purple transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3">The Childcare Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Official government portal for childcare choices and funding applications
              </p>
            </a>

            <a
              href="https://www.gov.uk/help-with-childcare-costs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group border border-gold-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-brand-gold text-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-brand-gold transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3">30 Hours Eligibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Check if you qualify for 30 hours free childcare for working families
              </p>
            </a>

            <a
              href="https://taxfreechildcarecalculator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group border border-purple-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-brand-purple text-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <Calculator className="h-8 w-8" />
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-brand-purple transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3">Tax Free Calculator</h3>
              <p className="text-gray-600 leading-relaxed">
                Calculate your potential savings with Tax-Free Childcare scheme
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Link */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-5xl p-10 shadow-glow border border-purple-100">
            <div className="flex items-start space-x-6">
              <div className="bg-brand-purple text-white rounded-full p-4 w-16 h-16 flex items-center justify-center flex-shrink-0">
                <FileText className="h-8 w-8" />
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-bold text-2xl text-brand-purple mb-4">
                  Terms & Conditions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Please review our complete terms and conditions for detailed information about our services, 
                  policies, and procedures. This includes important information about fees, attendance requirements, 
                  and our commitment to your child's care.
                </p>
                <Link
                  to="/nursery-terms-conditions"
                  className="inline-flex items-center space-x-3 bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-5xl font-display font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <LinkIcon className="h-5 w-5" />
                  <span>View Terms & Conditions</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Funding;