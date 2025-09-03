import React from 'react';
import { Shield, Heart, Users, Baby, Utensils, Smile, FileText, Moon, Stethoscope, GraduationCap, ArrowRight, ExternalLink } from 'lucide-react';

const CompanyPolicies: React.FC = () => {
  const policies = [
    {
      title: "Children's Well-being in the Nursery",
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      link: 'https://drive.google.com/file/d/1AWnN_PMn6aZnRUifRGWMgxITcHLuqWNf/view?usp=sharing'
    },
    {
      title: "General Data Protection Regulation (GDPR) Privacy Notice",
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      link: 'https://drive.google.com/file/d/1dy3JJHnLgwOd7UOrMQjSOZbFu1wbWPv4/view?usp=sharing'
    },
    {
      title: "Health and Safety Policy for Yoga and Sound Sessions",
      icon: Users,
      color: 'bg-purple-100 text-brand-purple',
      link: 'https://drive.google.com/file/d/1DBLSoSrlgiSsjhTyZG77LORoDLd5YOWK/view?usp=sharing'
    },
    {
      title: "Nappy Changing",
      icon: Baby,
      color: 'bg-pink-100 text-pink-600',
      link: 'https://drive.google.com/file/d/1zUBvJqOIIPMmNQFahFmErJcuWFTHyJWz/view?usp=sharing'
    },
    {
      title: "Nutrition and Mealtimes",
      icon: Utensils,
      color: 'bg-green-100 text-green-600',
      link: 'https://drive.google.com/file/d/14aCb_5X8ZcgB5-km1Y0YsGHm6l45nYzH/view?usp=sharing'
    },
    {
      title: "Promoting Positive Behaviour",
      icon: Smile,
      color: 'bg-yellow-100 text-yellow-600',
      link: 'https://drive.google.com/file/d/12O-p2j0hpUZ3X2NYQUYVRzXncNMD2yZG/view?usp=sharing'
    },
    {
      title: "Safeguarding",
      icon: Shield,
      color: 'bg-red-100 text-red-600',
      link: 'https://drive.google.com/file/d/1D6hh05014EZbsDpEn3T8e_varMRbhepp/view?usp=sharing'
    },
    {
      title: "Settling In",
      icon: Heart,
      color: 'bg-orange-100 text-orange-600',
      link: 'https://drive.google.com/file/d/1Q6dPkyB8IwCBuA-pgen_utgIXy4P034t/view?usp=sharing'
    },
    {
      title: "Sickness and Illness",
      icon: Stethoscope,
      color: 'bg-teal-100 text-teal-600',
      link: 'https://drive.google.com/file/d/1xWumVriGR4kXgYRK-wpE8wCc2KurqMSi/view?usp=sharing'
    },
    {
      title: "Sleep",
      icon: Moon,
      color: 'bg-indigo-100 text-indigo-600',
      link: 'https://drive.google.com/file/d/15-Dm3yT-L4l10ZNXStKez0WYdDbgI83i/view?usp=sharing'
    },
    {
      title: "Special Educational Needs and Disabilities (SEND)",
      icon: GraduationCap,
      color: 'bg-purple-100 text-brand-purple',
      link: 'https://drive.google.com/file/d/1NiDyU6TyItN_8UHtPX7TeZtDfj7VTyCX/view?usp=sharing'
    },
    {
      title: "Transitions",
      icon: ArrowRight,
      color: 'bg-cyan-100 text-cyan-600',
      link: 'https://drive.google.com/file/d/1gWnO74I-qBiXlr69tujJEJMka_WfWACy/view?usp=sharing'
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Company Policies
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Our comprehensive policies ensure the highest standards of care, safety, and wellbeing for all children
          </p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Our Policy Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These policies guide our daily operations and ensure we maintain the highest standards 
              of care, safety, and educational excellence for every child in our care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {policies.map((policy, index) => (
              <a
                key={index}
                href={policy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-4xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group border border-purple-100"
              >
                <div className={`${policy.color} rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <policy.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3 text-center leading-tight">
                  {policy.title}
                </h3>
                <div className="flex items-center justify-center space-x-2 text-gray-600 group-hover:text-brand-purple transition-colors">
                  <span className="text-sm font-medium">View Policy</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-5xl p-10 shadow-soft border border-purple-100">
            <div className="bg-brand-purple text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="font-display font-bold text-2xl text-brand-purple mb-4">
              Need More Information?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              If you require further information on our other company policies, please contact our nursery setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01277715261"
                className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-3 rounded-5xl font-display font-semibold transition-all duration-300 hover:scale-105"
              >
                Call: 01277 715 261
              </a>
              <a
                href="mailto:enquiries@minimomentsnursery.com"
                className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-3 rounded-5xl font-display font-semibold transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Commitment */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-purple to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-xl text-purple-100 leading-relaxed mb-8">
            These policies reflect our unwavering commitment to providing the highest quality care, 
            maintaining safety standards, and supporting the development and wellbeing of every child.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Safety First</h3>
              <p className="text-purple-100 text-sm">Comprehensive safety protocols in all areas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-6 border border-white/20">
              <Heart className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Child-Centered</h3>
              <p className="text-purple-100 text-sm">Every policy prioritizes children's wellbeing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-6 border border-white/20">
              <FileText className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Transparent</h3>
              <p className="text-purple-100 text-sm">Clear, accessible policies for all families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPolicies;