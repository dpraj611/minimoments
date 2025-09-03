import React from 'react';
import { Heart, Star, Shield, Users, Sprout, Sun, Rainbow, Smile, Brain, Bot as Lotus, Target, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurEthos: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Our Ethos
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Nurturing the whole child through mindfulness, meditation, and yoga
          </p>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-6">
              Nurturing the Whole Child
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-5xl p-10 mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  At Mini Moments, we believe in nurturing the whole child—body, mind, and soul. Our mission is to create a supportive and enriching space where children can grow, learn, and thrive through the transformative practices of meditation and yoga. We recognize that emotional well-being, mindfulness, and physical health are the cornerstones of a child's development.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  By integrating yoga and meditation into our daily routines, we empower children to cultivate inner calm, focus, and emotional resilience from an early age. These practices help them develop self-awareness, compassion, and meaningful connections with others, fostering a peaceful and harmonious atmosphere for learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mindfulness Integration */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Mindfulness & Balance at the Heart of Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to providing a space where children not only excel academically but also develop mindfulness, self-regulation, and an appreciation for the present moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lotus,
                title: 'Daily Meditation',
                description: 'Age-appropriate meditation sessions that help children develop inner calm and focus.',
                color: 'bg-purple-100 text-brand-purple',
                practices: ['Breathing exercises', 'Mindful listening', 'Body awareness', 'Gratitude moments']
              },
              {
                icon: Brain,
                title: 'Yoga & Movement',
                description: 'Gentle yoga poses and mindful movement to connect body and mind.',
                color: 'bg-gold-100 text-brand-gold',
                practices: ['Animal poses', 'Stretching games', 'Balance activities', 'Relaxation time']
              },
              {
                icon: Heart,
                title: 'Emotional Resilience',
                description: 'Teaching children to recognize, understand, and manage their emotions mindfully.',
                color: 'bg-purple-100 text-brand-purple',
                practices: ['Feeling identification', 'Emotion regulation', 'Empathy building', 'Conflict resolution']
              },
              {
                icon: Target,
                title: 'Self-Regulation',
                description: 'Developing self-discipline and patience through mindful practices.',
                color: 'bg-gold-100 text-brand-gold',
                practices: ['Impulse control', 'Waiting practice', 'Mindful choices', 'Self-awareness']
              },
              {
                icon: Sun,
                title: 'Present Moment Awareness',
                description: 'Cultivating appreciation for the here and now through mindful activities.',
                color: 'bg-purple-100 text-brand-purple',
                practices: ['Mindful observation', 'Sensory awareness', 'Nature connection', 'Gratitude practice']
              },
              {
                icon: Sparkles,
                title: 'Creativity & Flexibility',
                description: 'Encouraging creative expression and adaptability through mindful exploration.',
                color: 'bg-gold-100 text-brand-gold',
                practices: ['Creative meditation', 'Flexible thinking', 'Artistic expression', 'Open-minded exploration']
              }
            ].map((practice, index) => (
              <div
                key={index}
                className="bg-white rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${practice.color} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <practice.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-xl text-brand-purple mb-3">
                  {practice.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {practice.description}
                </p>
                <div className="space-y-2">
                  {practice.practices.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Practice Philosophy */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple">
                Perfect Practice Makes Perfect
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  They say practice makes one perfect, but at Mini Moments, we believe that 
                  <span className="font-semibold text-brand-purple"> PERFECT PRACTICE makes one Perfect</span>.
                </p>
                <p>
                  Through our EYFS curriculum, enriched with the healing practices of yoga and meditation, 
                  we aim to lay the foundation for a lifetime of well-being, mindfulness, and emotional strength.
                </p>
                <p>
                  Our holistic approach encourages creativity, flexibility, and a deep sense of balance—both 
                  physically and emotionally. We guide children to develop not just academic skills, but 
                  life skills that will serve them throughout their journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8364020/pexels-photo-8364020.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children practicing mindfulness and meditation"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-brand-gold text-white p-6 rounded-4xl shadow-glow-gold">
                <Lotus className="h-8 w-8 mx-auto mb-2" />
                <div className="text-center">
                  <div className="text-sm font-medium">Perfect</div>
                  <div className="text-sm">Practice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Our Guiding Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These core values shape our daily interactions and create the foundation 
              of our nurturing, mindful environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Love & Compassion',
                description: 'Every interaction is guided by genuine care and understanding.',
                color: 'bg-red-100 text-red-600'
              },
              {
                icon: Brain,
                title: 'Mental Wellbeing',
                description: 'Prioritizing emotional health and psychological safety.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Star,
                title: 'Excellence',
                description: 'We strive for the highest standards in everything we do.',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                icon: Shield,
                title: 'Safety & Security',
                description: 'Creating a protective environment where children can thrive.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Users,
                title: 'Inclusion & Diversity',
                description: 'Celebrating uniqueness and embracing all families.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: Sprout,
                title: 'Growth & Development',
                description: 'Nurturing each child\'s individual journey of discovery.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Sun,
                title: 'Joy & Wonder',
                description: 'Filling each day with laughter, curiosity, and amazement.',
                color: 'bg-orange-100 text-orange-600'
              },
              {
                icon: Smile,
                title: 'Happiness & Wellbeing',
                description: 'Ensuring every child feels valued, confident, and content.',
                color: 'bg-indigo-100 text-indigo-600'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group text-center border border-purple-100"
              >
                <div className={`${value.color} rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-6">
              Our Environmental Commitment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe in teaching children to care for our planet from an early age, 
              incorporating sustainability and environmental mindfulness into our daily practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-5xl p-8 shadow-soft text-center">
              <div className="bg-green-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="font-display font-semibold text-xl text-brand-purple mb-4">
                Garden to Table
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Children help grow vegetables and herbs in our mindful garden, learning about healthy 
                eating and where food comes from through hands-on experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-5xl p-8 shadow-soft text-center">
              <div className="bg-blue-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Rainbow className="h-8 w-8" />
              </div>
              <h3 className="font-display font-semibold text-xl text-brand-purple mb-4">
                Recycling & Reusing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creative activities using recycled materials teach children about waste 
                reduction and environmental responsibility through mindful making.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-5xl p-8 shadow-soft text-center">
              <div className="bg-yellow-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Sun className="h-8 w-8" />
              </div>
              <h3 className="font-display font-semibold text-xl text-brand-purple mb-4">
                Nature Connection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Regular outdoor mindfulness sessions and forest school activities connect children 
                with the natural world and develop environmental awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-purple to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8">
            Our Promise to You
          </h2>
          <div className="space-y-6 text-lg text-purple-100 leading-relaxed">
            <p>
              We promise to treat your child as if they were our own, providing them with 
              the love, care, and mindful attention they deserve during these precious early years.
            </p>
            <p>
              We promise to create an environment where your child feels safe to explore, 
              question, create, and grow at their own pace, supported by mindfulness practices 
              that enhance their emotional and cognitive development.
            </p>
            <p>
              We promise to work in partnership with you, keeping you informed about your 
              child's progress and celebrating their achievements together.
            </p>
            <p className="text-xl font-medium text-brand-gold">
              Most importantly, we promise to make every day a joyful adventure filled 
              with learning, laughter, mindful moments, and unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gold-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-5xl p-10 shadow-glow border border-purple-100">
            <h2 className="font-display font-bold text-3xl text-brand-purple mb-4">
              Ready to Begin Your Child's Mindful Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Don't wait to give your child the gift of mindfulness and emotional resilience. 
              Spaces are limited and filling fast!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow inline-flex items-center justify-center"
              >
                <Phone className="mr-3 h-5 w-5" />
                Contact Us Today
              </Link>
              <Link
                to="/babies-room"
                className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Tour Our Rooms
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Call us now at <span className="font-semibold text-brand-purple">01234 567890</span> or book a visit online
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurEthos;