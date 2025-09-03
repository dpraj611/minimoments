import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Award, ArrowRight, Baby, Palette, BookOpen, Shield, Clock, Phone, Sparkles, Quote, Bot as Lotus, Trees } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-purple via-purple-600 to-purple-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 text-brand-gold/30 animate-float">
          <Star className="h-8 w-8" />
        </div>
        <div className="absolute top-40 right-20 text-brand-gold/20 animate-bounce-gentle">
          <Sparkles className="h-12 w-12" />
        </div>
        <div className="absolute bottom-20 left-20 text-brand-gold/25 animate-pulse-slow">
          <Heart className="h-10 w-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight">
                  Mini Moments
                  <span className="block text-brand-gold animate-pulse">Nursery</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-purple-100 font-display font-medium">
                  Mindful beginnings, joyful growth
                </p>
                <p className="text-xl text-purple-200 max-w-2xl leading-relaxed">
                  Where every child's journey begins with mindfulness, joy, and mindful growth. 
                  Creating magical moments in a nurturing environment designed for your little ones.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-brand-gold hover:bg-gold-600 text-white px-10 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow-gold text-center"
                >
                  Contact Now
                </Link>
                <Link
                  to="/our-rooms"
                  className="border-3 border-white text-white hover:bg-white hover:text-brand-purple px-10 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  See Our Rooms
                </Link>
              </div>

              {/* Accreditation Logos */}
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-4xl p-4 mb-2">
                    <img 
                      src="/NDNA-member-logo-with-lozenge-for-coloured-backgro-1-2-300x149.png" 
                      alt="NDNA Member" 
                      className="h-8 w-auto mx-auto"
                    />
                  </div>
                  <p className="text-sm font-display font-medium text-purple-200">NDNA Member</p>
                </div>
               
              </div>
            </div>
            
            <div className="relative">
              {/* Hero Image */}
              <div className="relative rounded-5xl overflow-hidden shadow-glow">
                <img
                  src="https://images.pexels.com/photos/4609003/pexels-photo-4609003.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy children playing at Mini Moments Nursery"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/30 to-transparent"></div>
                
                {/* Floating stats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-4xl p-6 border border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="bg-brand-gold rounded-4xl p-3 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <Baby className="h-6 w-6 text-white" />
                        </div>
                        <p className="font-display font-semibold text-brand-purple text-sm">Ages 12wks-5yrs</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-brand-purple rounded-4xl p-3 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <p className="font-display font-semibold text-brand-purple text-sm">Small Groups</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-purple mb-6">
              Why Choose Mini Moments?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We nurture little hearts and minds through kids' yoga and mindful play, creating a calm, happy space for learning and discovery. Every moment is designed to spark confidence, kindness, and joyful growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'Your child\'s safety is our priority with secure facilities and qualified staff.',
                color: 'bg-purple-100 text-brand-purple',
                bgGradient: 'from-purple-50 to-purple-100'
              },
              {
                icon: BookOpen,
                title: 'Early Learning',
                description: 'Age-appropriate curriculum that sparks curiosity and builds foundation skills.',
                color: 'bg-gold-100 text-brand-gold',
                bgGradient: 'from-gold-50 to-gold-100'
              },
              {
                icon: Heart,
                title: 'Nurturing Care',
                description: 'Loving, patient caregivers who treat every child like their own.',
                color: 'bg-purple-100 text-brand-purple',
                bgGradient: 'from-purple-50 to-purple-100'
              },
              {
                icon: Palette,
                title: 'Creative Expression',
                description: 'Art, music, and imaginative play to develop creativity and confidence.',
                color: 'bg-gold-100 text-brand-gold',
                bgGradient: 'from-gold-50 to-gold-100'
              },
              {
                icon: Lotus,
                title: 'Yoga Room',
                description: 'A peaceful space where little minds stretch, breathe, and grow.',
                color: 'bg-purple-100 text-brand-purple',
                bgGradient: 'from-purple-50 to-purple-100'
              },
              {
                icon: Trees,
                title: 'Garden and Outdoor Space',
                description: 'Where little explorers connect with nature, joy, and mindful play.',
                color: 'bg-gold-100 text-brand-gold',
                bgGradient: 'from-gold-50 to-gold-100'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.bgGradient} rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-3 group border border-white/50`}
              >
                <div className={`${feature.color} rounded-4xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-purple mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-purple mb-6">
              Tour Our Rooms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each room is specially designed to provide the perfect environment for different age groups, 
              promoting growth, learning, and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Tiny Treasures',
                age: '12 weeks - 2 years',
                description: 'A calm, peaceful environment perfect for our youngest learners.',
                image: 'https://images.pexels.com/photos/5435599/pexels-photo-5435599.jpeg?auto=compress&cs=tinysrgb&w=600',
                link: '/our-rooms',
                color: 'bg-purple-500'
              },
              {
                title: 'Little Explorers',
                age: '2 - 3 years',
                description: 'Active exploration space designed for curious toddlers.',
                image: 'https://images.pexels.com/photos/8612914/pexels-photo-8612914.jpeg?auto=compress&cs=tinysrgb&w=600',
                link: '/our-rooms',
                color: 'bg-brand-gold'
              },
              {
                title: 'Bright Beginners',
                age: '3 - 5 years',
                description: 'School readiness activities in a structured learning environment.',
                image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=600',
                link: '/our-rooms',
                color: 'bg-purple-500'
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
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl text-brand-purple mb-4">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  <Link
                    to={room.link}
                    className="inline-flex items-center text-brand-purple hover:text-purple-700 font-display font-semibold text-lg group-hover:translate-x-2 transition-all duration-300"
                  >
                    Take a Tour
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-purple mb-6">
              What Parents & Professionals Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from the families and professionals who have experienced Dhara's exceptional care and dedication firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Rebecca Leaney',
                role: 'Nursery Owner & Former Manager',
                text: 'I have worked with Dhara for over 5 years as her manager and it has been lovely to watch her grow as a practitioner whilst undertaking her level 3 qualification. Dhara has always been an advocate for well being and mindfulness and would always be holding yoga sessions with the children and also helping me to arrange sound baths for our staff team. Dhara\'s love for children is clear and she loves to be around children of all ages. I know that with her love and passion for the children Mini Moments will be a success!',
                rating: 5
              },
              {
                name: 'Bozena and Greg',
                role: 'Parents of two children',
                text: 'Both of our children were lucky enough to have Dhara as their nursery teacher, and we honestly couldn\'t have wished for anyone better. She\'s so loving, patient and dedicated. She made such a difference in their early years, helping them grow in confidence and always encouraging them to be themselves. We\'re so grateful for everything she\'s done for our family!',
                rating: 5
              },
              {
                name: 'Krystian and Joanna Cabaj',
                role: 'Parents of two children',
                text: 'Dhara took wonderful care of our two children and did a truly outstanding job. She was kind, nurturing, and attentive to their individual needs, always helping them grow and develop age-appropriate skills through engaging activities. Both we as parents and our children absolutely loved her. Dhara was a beloved part of her previous nursery and is deeply missed!',
                rating: 5
              },
              {
                name: 'Reshmi Ravindran',
                role: 'Parent',
                text: 'It\'s hard to put into words just how grateful we are for the care, love, and dedication Dhara has shown our son during his time at nursery. Her patience, creativity, and genuine passion for child development were evident in everything she did—from fun, educational activities to the gentle way she guided the children through their day. It\'s rare to find someone who combines professionalism with such a personal, heartfelt touch, and we feel incredibly lucky to have had her in our lives.',
                rating: 5
              },
              {
                name: 'Judith and Alistair',
                role: 'Parents',
                text: 'Dhara has been looking after our child since he was a baby, all the way to pre-school. They played and read together and she has been a friendly familiar face, that our child has always been excited to see. Having her around has given us and our child great comfort, we have been lucky to have her be part of our child\'s development.',
                rating: 5
              },
              {
                name: 'Diane Dempsey',
                role: 'Nursery Practitioner',
                text: 'I have worked with Dhara for a long time. She is a happy and caring childcare professional with a lot of patience and a great connection with children. Dhara works well with parents, staff, and independently. She consistently meets each child\'s individual needs and is fantastic at what she does.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-white/50 relative"
              >
                <div className="absolute -top-4 -left-4 bg-brand-gold rounded-full p-3">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                <div className="mb-6">
                  <h4 className="font-display font-bold text-lg text-brand-purple mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 font-display text-sm">
                    {testimonial.role}
                  </p>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-purple to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 text-brand-gold/20 animate-wiggle">
          <Star className="h-16 w-16" />
        </div>
        <div className="absolute bottom-10 left-10 text-brand-gold/30 animate-bounce-gentle">
          <Sparkles className="h-12 w-12" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-2xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join our Mini Moments family and give your child the best possible start. 
            Contact us today to arrange a visit and see our wonderful facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-brand-gold hover:bg-gold-600 text-white px-10 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow-gold inline-flex items-center justify-center"
            >
              <Phone className="mr-3 h-6 w-6" />
              Book Your Visit
            </Link>
            <Link
              to="/gallery"
              className="border-3 border-white text-white hover:bg-white hover:text-brand-purple px-10 py-4 rounded-5xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              View Gallery
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;