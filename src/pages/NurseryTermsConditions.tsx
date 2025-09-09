import React from 'react';
import { FileText, AlertCircle, Clock, CreditCard, Shield, Users, Baby, MapPin, Phone, Mail } from 'lucide-react';

const NurseryTermsConditions: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-3xl text-gray-800 mb-4">
            Mini Moments Nursery - Terms and Conditions
          </h1>
          <p className="text-gray-600">
            Formal agreement between you (the parent/guardian) and Mini Moments Nursery
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              This document constitutes the formal agreement ("Parent Agreement") between you (the parent/guardian) 
              and Mini Moments Nursery, operated by Amidhara Limited, regarding the provision of early years 
              education and childcare services for your child.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <span>Amendments and Changes</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700">
                Mini Moments Nursery reserves the right to modify or update these Terms & Conditions at any time without prior notice.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <span>Registration and Initial Payments</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                To request a place at Mini Moments Nursery, a registration form must be completed. Once a place is confirmed, 
                a non-refundable registration fee of £50, a £750 refundable deposit, and four weeks' advance fees are required 
                to secure your child's place.
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• The four weeks' advance payment will be credited towards your first invoice.</li>
                <li>• The deposit is refundable upon your child's departure, provided fees are fully paid and one month's written notice has been given.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Should you wish to change the start date or scheduled sessions, two months' written notice is required. 
                If notice is not provided, fees for the originally agreed start date or sessions will still be due.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <span>Attendance Requirements</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Children must attend a minimum of two sessions per week, which must be spread over two separate days.
              </p>
              <p className="text-gray-700 mb-4">
                For children accessing government-funded hours, attendance must follow one of the following patterns:
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• Two full days per week, or</li>
                <li>• Three half-day sessions per week</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This is to ensure consistency and continuity of care for your child.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <span>Health, Medical & Emergency Information</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Before your child starts, all relevant health, dietary, and care requirements must be provided in writing. 
                Medical conditions, allergies, or intolerances must be supported with evidence from a medical professional.
              </p>
              <p className="text-gray-700">
                It is the responsibility of parents/carers to keep this information up to date. Contact details for parents 
                and authorised collectors must also be kept current, along with any relevant legal or safeguarding documents.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
              <span>Opening Times and Collections</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Mini Moments Nursery is open Monday to Friday, from 7:00am to 6:00pm, excluding public holidays. 
                Children must be collected only by authorised adults over 18.
              </p>
              <p className="text-gray-700">
                If your child remains at nursery beyond closing time, we will attempt to contact you. Late collection 
                charges will apply at a rate of £20 for every 15 minutes, as the premises must be vacated in accordance 
                with our regulatory commitments.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
              <span>Safeguarding Children</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700">
                We have a duty of care to report any concerns regarding a child's welfare to the appropriate local authority. 
                This may occur without parental consent if deemed necessary. Further details are available in our safeguarding policy.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">7</span>
              <span>Nursery Policies</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700">
                Our policies can be viewed at the nursery reception or on our website. Copies can also be requested 
                from the Nursery Manager.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">8</span>
              <span>Nursery Fees</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Fees are based on your child's agreed attendance and may vary each month based on the number of days attended.
              </p>
              <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                <li>• Fees are chargeable during public holidays, except for Christmas Day and Boxing Day.</li>
                <li>• The nursery is closed from Christmas Day through New Year, and no charges apply during this closure.</li>
                <li>• We may hold training (INSET) days annually, and nursery will be closed on these dates (announced in advance).</li>
              </ul>
              <p className="text-gray-700">
                Fees remain payable during absence due to illness or family holidays.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">9</span>
              <span>Force Majeure</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Mini Moments Nursery is not liable for disruptions caused by events beyond our control (e.g., extreme weather, 
                natural disasters, pandemics, government restrictions, etc.).
              </p>
              <p className="text-gray-700">
                In such cases, we may apply reasonable fees to cover ongoing operational costs during any closures. 
                If these fees are unpaid, we may terminate your child's place in accordance with our termination clause.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">10</span>
              <span>Payment of Fees</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                All fees must be paid in advance by the 3rd of each month via BACS / Standing Order or other agreed payment methods. 
                We accept childcare vouchers, Tax-Free Childcare, and Childcare Grant Payment Service (subject to a £5/month admin fee).
              </p>
              <p className="text-gray-700 mb-4">Surcharges may apply:</p>
              <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                <li>• Late payment: £5 per day.</li>
                <li>• Late collection: £20 for every 15 minutes beyond your booked session.</li>
                <li>• Interest may be charged at 4% above the Bank of England base rate on overdue accounts.</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate your child's place for non-payment and to recover any outstanding 
                amounts legally. Any discounts are discretionary and may be withdrawn if payments are late more than once.
              </p>
            </div>
          </div>

          {/* Continue with remaining sections... */}
          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">11</span>
              <span>Extra Sessions and Session Changes</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Additional sessions may be available upon request and will be added to your monthly invoice. We require:
              </p>
              <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                <li>• 48 hours' notice for changes or cancellations of extra sessions.</li>
                <li>• At least one month's notice in writing for any changes to regular bookings.</li>
              </ul>
              <p className="text-gray-700">
                We do not offer session swapping. Advance payment may be required to secure schedule changes.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">12</span>
              <span>Government Funding and Additional Charges</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                All children are entitled to 15 hours of free childcare per week from the term after their third birthday, 
                and some are eligible for a further 15 hours per week.
              </p>
              <p className="text-gray-700">
                Government-funded hours do not cover the cost of breakfast, hot lunch, afternoon tea, snacks, consumables (such as nappies and creams), or additional activities (such as yoga and meditation). To help cover these services, a <strong><em>voluntary</em></strong> charge of approximately £2.80 per funded hour is applied. This will be itemised on your monthly invoice and is reviewed periodically in line with nursery fees.
              </p>
              <p className="text-gray-700 mt-4">
                For allergy and dietary safety reasons, parents are not able to provide their own food. However, no child will be excluded from accessing their funded entitlement. Families who wish to discuss alternative arrangements are encouraged to speak with the nursery manager.
              </p>
            </div>
          </div>

          {/* Section 13 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">13</span>
              <span>Privacy and Data Protection</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700">
                Our Privacy Notice, in compliance with the UK GDPR, is available at the nursery and on our website. 
                You may request a copy at any time.
              </p>
            </div>
          </div>

          {/* Section 14 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">14</span>
              <span>Parking and Drop-Off</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Parents are requested to only use designated parking spaces off street (20 spaces available on Bell Mead Road, 
                and more spaces at Market Place Parking).
              </p>
              <p className="text-gray-700 mb-4">
                Please DO NOT use the rear access, as that is strictly for staff and not suitable for children's drop off.
              </p>
              <p className="text-gray-700">
                Parking on neighbouring properties or restricted zones is not permitted and may result in suspension of your child's place.
              </p>
            </div>
          </div>

          {/* Section 15 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">15</span>
              <span>Suspension of Nursery Place</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                We reserve the right to temporarily suspend your child's place under the following circumstances:
              </p>
              <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                <li>• Unpaid fees.</li>
                <li>• Violation of parking rules.</li>
                <li>• Contagious illness.</li>
                <li>• Behaviour that endangers others (as per our Behaviour Policy).</li>
              </ul>
              <p className="text-gray-700">
                If suspension exceeds one month, either party may terminate the agreement with written notice.
              </p>
            </div>
          </div>

          {/* Section 16 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">16</span>
              <span>Termination of Agreement</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                A minimum of one month's written notice is required to terminate your child's place. Mini Moments Nursery 
                may terminate this agreement with immediate effect in cases of:
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• Breach of contract.</li>
                <li>• Non-payment of fees.</li>
                <li>• Any situation where continuation is not in the best interest of the nursery, your child, or others.</li>
              </ul>
            </div>
          </div>

          {/* Section 17 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">17</span>
              <span>Employment of Staff</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Parents/carers agree not to employ or engage any Mini Moments Nursery staff member who has cared for their 
                child during their time at nursery, either during the agreement or within six months after termination.
              </p>
              <p className="text-gray-700 mb-4">
                If a staff member is employed privately, a fee of 20% of the staff member's gross annual salary is payable 
                to cover recruitment costs.
              </p>
              <p className="text-gray-700">
                We do not sanction private arrangements made with staff during their non-working hours and are not liable 
                for any outcomes from such arrangements.
              </p>
            </div>
          </div>

          {/* Section 18 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">18</span>
              <span>General Information</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <ul className="text-gray-700 space-y-2">
                <li>• Communication from Mini Moments Nursery will be made via our nursery platform, text, or email. Please ensure your contact details are always up to date.</li>
                <li>• We are not responsible for personal items left at the nursery.</li>
                <li>• Insurance documentation (Employers Liability and Public Liability) is displayed at the nursery and available upon request.</li>
                <li>• This agreement is governed by English Law.</li>
              </ul>
            </div>
          </div>

          {/* Section 19 */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-gray-800 mb-4 flex items-center space-x-2">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">19</span>
              <span>Acceptance</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700">
                By accepting a place at Mini Moments Nursery, you confirm that you have read, understood, and agree to be 
                bound by these Terms & Conditions.
              </p>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-yellow-800 mb-2">IMPORTANT NOTE</h3>
                <p className="text-yellow-700">
                  Content inside these terms and conditions has been provided to optimize understanding. 
                  These terms normally contain information about specific policies and procedures, 
                  but this information has been summarized for clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 text-white rounded-lg p-6">
            <h2 className="font-display font-bold text-xl mb-4">
              Contact Information
            </h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">01277 715 261</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300 text-sm">enquiries@minimomentsnursery.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:col-span-2">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300 text-sm">102 High Street, Ingatestone, CM4 0BA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>These Terms & Conditions were last updated on June 2025.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NurseryTermsConditions;