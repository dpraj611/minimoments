import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Shield, Heart, AlertTriangle, Baby, Users, CreditCard } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Settling In & First Days',
      icon: Heart,
      color: 'bg-purple-100 text-brand-purple',
      faqs: [
        {
          question: 'How do you help children settle in?',
          answer: 'We offer tailored settling-in sessions: First session (1 hour): Parents stay to complete paperwork while their child explores. Follow-up sessions (1.5–2 hours): Scheduled over two weeks, adjusted to your child\'s needs.'
        },
        {
          question: 'What happens on my child\'s first day?',
          answer: 'Parents may stay briefly or leave their child with our team—whichever feels right. You\'re welcome to call for updates, and our app lets you request photos/videos of their day. At pickup, a staff member will share details about their activities.'
        },
        {
          question: 'How long does settling in take?',
          answer: 'Every child adapts differently. We provide reassurance and cuddles, and most adjust faster than parents expect!'
        },
        {
          question: 'What should my child bring?',
          answer: 'Your child\'s key person will guide you during settling-in. Essentials may include: Nappies/wipes (if preferred), Formula/breast milk (if applicable), A change of clothes and comfort items (e.g., a blanket or toy).'
        }
      ]
    },
    {
      title: 'Daily Care & Routines',
      icon: Clock,
      color: 'bg-gold-100 text-brand-gold',
      faqs: [
        {
          question: 'Do I need to supply nappies?',
          answer: 'We provide nappies unless you prefer a specific brand. You may send a bulk supply or pack them daily.'
        },
        {
          question: 'Are children required to bring their own water or milk bottles?',
          answer: 'Yes, for hygiene purposes, we kindly request that preschoolers and toddlers bring their own water bottles. Infants should also have their own milk bottles to help maintain cleanliness and ensure each child uses their own items. Bottles will be washed and sterilised as needed, in accordance with appropriate hygiene practices.'
        },
        {
          question: 'Do children nap at nursery?',
          answer: 'Yes! We follow individual sleep routines discussed during settling-in.'
        },
        {
          question: 'Do you provide sun cream?',
          answer: 'We stock sun cream but welcome labelled personal bottles, especially for children with sensitive skin.'
        },
        {
          question: 'What should my child wear?',
          answer: 'Comfortable, washable clothing is best! We provide aprons, but messy play is encouraged (and often unavoidable). Children can also wear nursery uniform (Optional) which can be purchased from our uniform website.'
        }
      ]
    },
    {
      title: 'Health & Safety',
      icon: Shield,
      color: 'bg-purple-100 text-brand-purple',
      faqs: [
        {
          question: 'What if my child has an accident at nursery?',
          answer: 'All accidents are recorded and shared with you at pickup. For significant incidents, we\'ll contact you immediately. In emergencies, we prioritise your child\'s safety and update you promptly.'
        },
        {
          question: 'What if my child is injured at home?',
          answer: 'Please inform us on arrival. We\'ll document the injury to ensure safeguarding compliance.'
        },
        {
          question: 'How do you handle biting incidents?',
          answer: 'Biting, though common in early years, is taken seriously. We\'ll notify you if it occurs and, if persistent, involve our SEN/Behaviour Lead for support.'
        },
        {
          question: 'What if my child falls ill at nursery?',
          answer: 'We\'ll contact you to arrange pickup and advise on next steps. Our sickness policy aligns with Public Health England guidelines.'
        },
        {
          question: 'What\'s your medication policy?',
          answer: 'We only administer prescribed medications (with pharmacy labels) after a 24-hour home trial. Emergency medicines are stored onsite with parental consent.'
        },
        {
          question: 'How do you ensure child safety?',
          answer: 'Our Safeguarding Policy prioritises welfare. Staff are trained to identify and act on risks—view our policy for details.'
        }
      ]
    },
    {
      title: 'Staff & Operations',
      icon: Users,
      color: 'bg-gold-100 text-brand-gold',
      faqs: [
        {
          question: 'What are your staff-to-child ratios?',
          answer: '12 weeks–2 years: 1:3, 2–3 years: 1:5, 3+ years: 1:8'
        },
        {
          question: 'How will I know about my child\'s day?',
          answer: 'At pickup, staff will share updates on meals, naps, and activities. Our app also provides real-time observations.'
        },
        {
          question: 'What if I\'m late picking up my child?',
          answer: 'We kindly ask parents to notify us as soon as possible if delayed. To maintain legal staff-to-child ratios, a late fee of £20 will be charged for every 15-minute interval starting from 6:15 PM (e.g., 6:15, 6:30, 6:45, etc.) if a child is not collected at 6:00 p.m. This fee covers the additional operational costs associated with providing care beyond the nursery\'s normal hours.'
        }
      ]
    },
    {
      title: 'Food & Dietary Requirements',
      icon: Baby,
      color: 'bg-purple-100 text-brand-purple',
      faqs: [
        {
          question: 'Can you accommodate dietary needs?',
          answer: 'Absolutely! We collaborate with our caterer to tailor meals. Allergies are highlighted with red plates/cards in dining areas.'
        },
        {
          question: 'Where does your food come from?',
          answer: 'We partner with Zebedees for nutritious, allergy-aware meals, supplemented by fresh groceries from local suppliers.'
        }
      ]
    },
    {
      title: 'Fees & Funding',
      icon: CreditCard,
      color: 'bg-gold-100 text-brand-gold',
      faqs: [
        {
          question: 'Do you offer sibling discounts?',
          answer: 'Yes! A 10% discount applies to the invoice of the most recently enrolled sibling (or each of the two newest for three siblings).'
        },
        {
          question: 'Do you accept childcare vouchers?',
          answer: 'Yes! Notify our Finance Team of your voucher scheme. Details are on our Fees & Funding page.'
        },
        {
          question: 'Do you charge for bank holidays/sickness?',
          answer: 'Yes, standard fees apply as we pay staff and overheads. We close for 2 weeks at Christmas, which are fee-free.'
        }
      ]
    },
    {
      title: 'Feedback & Concerns',
      icon: AlertTriangle,
      color: 'bg-purple-100 text-brand-purple',
      faqs: [
        {
          question: 'How can I raise a concern?',
          answer: 'Speak directly to the manager or email us on dhara@minimomentsnursery.com. We address all feedback promptly and professionally.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const uniqueIndex = categoryIndex * 100 + faqIndex;
    setOpenFAQ(openFAQ === uniqueIndex ? null : uniqueIndex);
  };

  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Everything you need to know about Mini Moments Nursery
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div className={`${category.color} rounded-full p-3 w-12 h-12 flex items-center justify-center`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-brand-purple">
                    {category.title}
                  </h2>
                </div>

                {/* FAQs */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const uniqueIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openFAQ === uniqueIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-4xl shadow-soft hover:shadow-glow transition-all duration-300"
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 rounded-4xl"
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        >
                          <h3 className="font-display font-semibold text-lg text-brand-purple pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-brand-purple" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-brand-purple" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="pt-2 border-t border-purple-200">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-purple to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            We're here to help! Get in touch with our friendly team for personalized answers 
            to any questions about your child's care and early learning journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-6 border border-white/20">
              <HelpCircle className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-purple-100 text-sm">01277 715 261</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-6 border border-white/20">
              <Heart className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-purple-100 text-sm">dhara@minimomentsnursery.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-purple-100 text-sm">Book a tour of our facilities</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01277715261"
              className="bg-brand-gold hover:bg-gold-600 text-white px-8 py-3 rounded-5xl font-display font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow-gold"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-purple px-8 py-3 rounded-5xl font-display font-semibold transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Helpful Tips for New Parents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Starting nursery is a big step for both you and your child. Here are some 
              tips to make the transition as smooth as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Before Starting',
                tips: [
                  'Visit the nursery with your child beforehand',
                  'Talk positively about nursery at home',
                  'Practice short separations with family',
                  'Establish good sleep and eating routines'
                ]
              },
              {
                title: 'First Few Days',
                tips: [
                  'Expect some tears - this is completely normal',
                  'Keep goodbyes short and positive',
                  'Bring a comfort item from home',
                  'Trust our experienced staff to settle your child'
                ]
              },
              {
                title: 'Ongoing Support',
                tips: [
                  'Maintain open communication with staff',
                  'Read daily diaries and feedback',
                  'Attend parent events and activities',
                  'Celebrate your child\'s progress and achievements'
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-8 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <h3 className="font-display font-bold text-xl text-brand-purple mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default FAQs;