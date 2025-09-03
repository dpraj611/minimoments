import React from 'react';
import { Award, Users, Heart, Star, Shield, Clock, Brain, Bot as Lotus, Target, BookOpen } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const AboutUs: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            About Mini Moments Nursery
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Where mindfulness meets early learning, creating strong foundations for lifelong growth
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple">
                Welcome to Mini Moments!
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Thank you for considering Mini Moments for your childcare needs. My name is 
                  <span className="font-semibold text-brand-purple"> Dhara Shah</span>, and I am the proud founder 
                  of this nurturing space dedicated to helping children grow, learn, and thrive.
                </p>
                <p>
                  With a background as a Certified Financial Analyst (CFA) and a Master's in Business 
                  Administration (MBA), I spent years in the corporate world. However, my true passion 
                  has always been working with children and supporting their development during the most 
                  formative years of their lives.
                </p>
                <p>
                  In 2015, I made the heartfelt decision to leave my corporate career behind and embark 
                  on a journey in childcare—a decision I have never looked back on. With nearly a decade 
                  of experience working in childcare across various settings, I have witnessed firsthand 
                  the transformative impact of mindfulness practices like meditation and yoga on children's development.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <img
                  src="/Dhara's Image.jpeg"
                  alt="Dhara Shah, Founder of Mini Moments Nursery"
                  className="rounded-5xl shadow-soft w-80 h-96 object-cover object-center"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-6 rounded-4xl shadow-glow-gold">
                  <div className="text-center">
                    <div className="text-2xl font-bold">9+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mindfulness Philosophy */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Our Mindfulness Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Research consistently highlights the benefits of mindfulness practices in fostering 
              emotional resilience, focus, and overall well-being in young children.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8364020/pexels-photo-8364020.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children practicing mindfulness and yoga"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-brand-purple text-white p-6 rounded-4xl shadow-glow">
                <Lotus className="h-8 w-8 mx-auto mb-2" />
                <div className="text-center">
                  <div className="text-sm font-medium">Mindful</div>
                  <div className="text-sm">Learning</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-brand-purple">
                Mindfulness at the Heart of Learning
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Inspired by the transformative power of mindfulness, I founded Mini Moments as a nursery 
                  that places mindfulness and mental health at the heart of the Early Years Foundation Stage 
                  (EYFS) curriculum.
                </p>
                <p>
                  By integrating meditation and yoga into daily routines, we aim to create a nurturing 
                  environment where children can build a strong foundation for lifelong emotional and 
                  cognitive growth. These practices are central to our unique approach, setting Mini Moments 
                  apart as a space where mindfulness is woven into every aspect of early learning.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Emotional Resilience',
                description: 'Building strong emotional foundations through mindful practices and self-awareness.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Target,
                title: 'Enhanced Focus',
                description: 'Developing concentration and attention skills through meditation and mindful activities.',
                color: 'bg-gold-100 text-brand-gold'
              },
              {
                icon: Lotus,
                title: 'Overall Wellbeing',
                description: 'Promoting mental health and happiness through yoga, breathing exercises, and mindfulness.',
                color: 'bg-purple-100 text-brand-purple'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className={`${benefit.color} rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-xl text-brand-purple mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Expertise */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Professional Qualifications & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dhara holds a comprehensive range of qualifications that enable her and the team 
              to provide exceptional care and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Early Years Leadership',
                description: 'Advanced certification in leading early childhood education programs.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Shield,
                title: 'Safeguarding',
                description: 'Comprehensive training in child protection and safeguarding practices.',
                color: 'bg-gold-100 text-brand-gold'
              },
              {
                icon: Heart,
                title: 'Special Educational Needs',
                description: 'Specialized training to support children with diverse learning needs.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Brain,
                title: 'Mental Health',
                description: 'Expertise in supporting children\'s emotional and mental wellbeing.',
                color: 'bg-gold-100 text-brand-gold'
              },
              {
                icon: Star,
                title: 'Neuroscience in Early Childhood',
                description: 'Understanding of brain development and learning in young children.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Award,
                title: 'CFA & MBA',
                description: 'Strong business and analytical background ensuring excellent management.',
                color: 'bg-gold-100 text-brand-gold'
              }
            ].map((qualification, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-4xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group text-center border border-purple-100"
              >
                <div className={`${qualification.color} rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <qualification.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3">
                  {qualification.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {qualification.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape the nurturing environment 
              we provide for your children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Love & Care',
                description: 'Every child is treated with unconditional love, respect, and individual attention.',
                color: 'bg-red-100 text-red-600'
              },
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Creating a secure environment where children can explore and learn without fear.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Star,
                title: 'Excellence',
                description: 'Striving for the highest standards in early childhood education and care.',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building strong partnerships with families and fostering a sense of belonging.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: Lotus,
                title: 'Mindfulness',
                description: 'Integrating mindful practices to support emotional and cognitive development.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: 'Providing consistent, dependable care that families can trust and rely upon.',
                color: 'bg-indigo-100 text-indigo-600'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className={`${value.color} rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-xl text-brand-purple mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-6">
              Our Promise to You
            </h2>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-5xl p-12 text-center">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                "For me, Mini Moments is not just a business; it is a passion. I believe that a strong 
                foundation is essential for building a successful future, and I am committed to providing 
                the highest standard of care and education to help your child flourish."
              </p>
              <p>
                "At Mini Moments, we understand the importance of choosing the right childcare for your family. 
                I know how challenging it can be to balance the demands of modern life while ensuring your 
                child receives the best possible start."
              </p>
              <p className="text-xl font-semibold text-brand-purple">
                "We are dedicated to providing a warm, supportive, and stimulating environment where your 
                child can grow into a confident and independent learner."
              </p>
            </div>
            <div className="mt-8">
              <p className="text-brand-purple font-display font-semibold text-lg">
                - Dhara Shah, Founder & Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Support */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team is made up of experienced and caring professionals who share Dhara's passion 
              for early childhood development and mindful learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-brand-purple">
                Supporting Your Family Journey
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We are here to support not only your child but also you as a parent, offering an 
                  open-door policy and a listening ear whenever you need it.
                </p>
                <p>
                  At Mini Moments, we take pride in offering nutritious meals, beautiful settings, 
                  and a team that is deeply committed to the growth and happiness of your child.
                </p>
                <p>
                  We have worked hard to establish ourselves as one of the most trusted nurseries 
                  in the area, and we are honoured to be part of your family's journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8617586/pexels-photo-8617586.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mini Moments team with children"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-purple to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            We work with industry-leading partners to ensure the highest standards of care, 
            nutrition, safety, and family communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.famly.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-4xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="bg-brand-gold rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Famly</h3>
              <p className="text-purple-100 text-sm mb-4">Our CRM Partner</p>
              <p className="text-purple-200 text-sm leading-relaxed">
                Connecting families with real-time updates, photos, and communication about their child's day
              </p>
            </a>
            <a
              href="https://zebedees.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-4xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="bg-brand-gold rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Zebedees</h3>
              <p className="text-purple-100 text-sm mb-4">Our Food Partner</p>
              <p className="text-purple-200 text-sm leading-relaxed">
                Providing fresh, nutritious, and delicious meals that support healthy growth and development
              </p>
            </a>
            <a
              href="https://www.citation.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-4xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="bg-brand-gold rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Citation</h3>
              <p className="text-purple-100 text-sm mb-4">Our Health & Safety Partner</p>
              <p className="text-purple-200 text-sm leading-relaxed">
                Ensuring the highest standards of health, safety, and compliance in all our operations
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default AboutUs;