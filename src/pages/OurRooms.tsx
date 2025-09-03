import React from 'react';
import { Heart, Shield, Clock, Baby, Milk, Moon, Sun, Palette, Building, BookOpen, Music, Users, Zap, GraduationCap, Calculator, Globe, Target, Star } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const OurRooms: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Our Rooms
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Three beautiful spaces designed for every stage of your child's early years journey
          </p>
        </div>
      </section>

      {/* Rooms Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Age-Appropriate Learning Environments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each room is thoughtfully designed to meet the unique developmental needs of children 
              at different stages, providing the perfect environment for growth, learning, and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Tiny Treasures',
                age: '12 weeks - 2 years',
                description: 'A gentle, nurturing sanctuary for our youngest learners',
                image: 'https://images.pexels.com/photos/5435599/pexels-photo-5435599.jpeg?auto=compress&cs=tinysrgb&w=600',
                color: 'bg-purple-500',
                ratio: '1:3',
                features: ['Peaceful sleep area', 'Individual feeding schedules', 'Sensory exploration', 'Loving care']
              },
              {
                title: 'Little Explorers',
                age: '2 - 3 years',
                description: 'Active exploration space for curious toddlers',
                image: 'https://images.pexels.com/photos/8612914/pexels-photo-8612914.jpeg?auto=compress&cs=tinysrgb&w=600',
                color: 'bg-brand-gold',
                ratio: '1:4', 
                features: ['Creative play areas', 'Physical development', 'Social interaction', 'Language building']
              },
              {
                title: 'Bright Beginners',
                age: '3 - 5 years',
                description: 'School readiness hub for confident learners',
                image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=600',
                color: 'bg-purple-500',
                ratio: '1:8',
                features: ['Structured learning', 'School preparation', 'Independence skills', 'Academic foundations']
              }
            ].map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-5xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-3 group border border-purple-100"
              >
                <div className="h-64 bg-cover bg-center relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className={`${room.color} text-white px-4 py-2 rounded-4xl font-display font-semibold`}>
                      {room.age}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-4xl px-3 py-2">
                    <span className="text-brand-purple font-display font-semibold text-sm">{room.ratio} ratio</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl text-brand-purple mb-4">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiny Treasures Detailed Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Tiny Treasures (12 weeks - 2 years)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A home away from home for your precious little ones, where every need is met with love and care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-brand-purple">
                Gentle Beginnings
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our Tiny Treasures room provides the perfect sanctuary for your baby's earliest 
                  months. With our exceptional 1:3 staff-to-child ratio, your little one receives 
                  the individual attention they need to thrive.
                </p>
                <p>
                  We follow your baby's unique routine, maintaining familiar feeding, sleeping, 
                  and play patterns that help them feel secure and content in our care.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5435599/pexels-photo-5435599.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Peaceful babies room environment"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-6 rounded-4xl shadow-glow-gold">
                <Baby className="h-8 w-8 mx-auto mb-2" />
                <div className="text-center">
                  <div className="text-sm font-medium">1:3 Ratio</div>
                  <div className="text-sm">Personal Care</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Loving Care',
                description: 'Qualified practitioners who treat every baby with tenderness and individual attention.',
                color: 'bg-pink-100 text-pink-600'
              },
              {
                icon: Moon,
                title: 'Peaceful Sleep',
                description: 'Quiet, darkened sleep room with individual cots for restful naps.',
                color: 'bg-indigo-100 text-indigo-600'
              },
              {
                icon: Milk,
                title: 'Feeding Support',
                description: 'Flexible feeding schedules supporting breastfeeding and bottle feeding.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Sun,
                title: 'Sensory Play',
                description: 'Age-appropriate toys and activities to stimulate developing senses.',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                icon: Shield,
                title: 'Safe Environment',
                description: 'Secure, baby-proofed space with constant supervision.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Clock,
                title: 'Individual Routines',
                description: 'Following each baby\'s unique schedule for feeding, sleeping, and play.',
                color: 'bg-green-100 text-green-600'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${feature.color} rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Little Explorers Detailed Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Little Explorers (2 - 3 years)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where curiosity meets adventure and learning becomes play for our active toddlers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8612914/pexels-photo-8612914.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Active toddlers playing and learning"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-gold text-white p-6 rounded-4xl shadow-glow-gold">
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <div className="text-center">
                  <div className="text-sm font-medium">1:5 Ratio</div>
                  <div className="text-sm">Active Learning</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-brand-purple">
                Active Exploration Space
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our Little Explorers room is a vibrant, dynamic environment designed for little 
                  ones who are developing their independence and discovering the world around them.
                </p>
                <p>
                  With a 1:5 staff-to-child ratio, we provide the perfect balance of guidance 
                  and freedom, offering activities that challenge and delight while keeping 
                  safety as our top priority.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Creative Arts Corner',
                description: 'Painting, drawing, and messy play to develop creativity and fine motor skills.',
                color: 'bg-pink-100 text-pink-600'
              },
              {
                icon: Building,
                title: 'Construction Zone',
                description: 'Building blocks, puzzles, and manipulative toys for problem-solving skills.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: BookOpen,
                title: 'Story Time Area',
                description: 'Cozy reading corner with books, puppets, and storytelling activities.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: Music,
                title: 'Music & Movement',
                description: 'Instruments, dancing, and rhythm activities to develop coordination.',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                icon: Users,
                title: 'Role Play Kitchen',
                description: 'Pretend play area for developing social skills and imagination.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Zap,
                title: 'Physical Play Zone',
                description: 'Safe climbing, crawling, and active play for gross motor development.',
                color: 'bg-orange-100 text-orange-600'
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-4xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${area.color} rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bright Beginners Detailed Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Bright Beginners (3 - 5 years)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Preparing confident learners for their school journey ahead with comprehensive development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-brand-purple">
                School Readiness Hub
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our Bright Beginners room bridges the gap between nursery and primary school, 
                  ensuring your child feels confident and prepared for their next big adventure.
                </p>
                <p>
                  With our enhanced 1:8 staff-to-child ratio, we provide structured learning 
                  experiences while maintaining the play-based approach that makes learning joyful.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pre-school children engaged in learning activities"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-6 rounded-4xl shadow-glow-gold">
                <GraduationCap className="h-8 w-8 mx-auto mb-2" />
                <div className="text-center">
                  <div className="text-sm font-medium">1:8 Ratio</div>
                  <div className="text-sm">School Ready</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Phonics & Literacy',
                description: 'Letter sounds, early reading, and writing skills development.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Calculator,
                title: 'Mathematics',
                description: 'Numbers, counting, shapes, and problem-solving activities.',
                color: 'bg-gold-100 text-brand-gold'
              },
              {
                icon: Globe,
                title: 'Understanding the World',
                description: 'Science, geography, history, and cultural awareness.',
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Palette,
                title: 'Creative Arts',
                description: 'Art, music, drama, and imaginative expression.',
                color: 'bg-gold-100 text-brand-gold'
              }
            ].map((subject, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${subject.color} rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <subject.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3">
                  {subject.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Readiness Skills */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              School Readiness Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We focus on developing the complete range of skills your child needs 
              to thrive in their primary school environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Social & Emotional Skills',
                description: 'Learning to work with others, share, and manage emotions effectively.'
              },
              {
                icon: Target,
                title: 'Independence Skills',
                description: 'Building confidence in self-care and personal responsibility.'
              },
              {
                icon: BookOpen,
                title: 'Communication Skills',
                description: 'Developing clear speech, listening skills, and confidence in expression.'
              },
              {
                icon: Star,
                title: 'Learning Behaviors',
                description: 'Developing concentration, persistence, and positive attitudes to learning.'
              },
              {
                icon: Calculator,
                title: 'Academic Foundations',
                description: 'Building essential literacy and numeracy skills for formal learning.'
              },
              {
                icon: Globe,
                title: 'Physical Development',
                description: 'Fine and gross motor skills essential for school activities.'
              }
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-4xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="bg-white rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                  <skill.icon className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-purple to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              What We Provide
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Everything your child needs for a comfortable, happy day at nursery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'All meals and snacks',
              'Nappies and wipes',
              'Formula milk (if required)',
              'Bedding and comfort items',
              'Age-appropriate toys',
              'Learning materials',
              'Daily care sheets',
              'Individual attention',
              'Outdoor clothing',
              'Art supplies',
              'Educational resources',
              'Progress tracking'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-4xl p-4 text-center border border-white/20"
              >
                <p className="text-sm font-display font-medium">{item}</p>
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

export default OurRooms;