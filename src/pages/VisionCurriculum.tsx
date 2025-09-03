import React from 'react';
import { BookOpen, Lightbulb, Users, Globe, Palette, Music, Play, Target, Brain, Bot as Lotus, Heart, Sparkles, Star, Award, CheckCircle } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const VisionCurriculum: React.FC = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Our Vision & Curriculum
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Nurturing young minds through mindful, play-based learning and holistic development
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-6">
              Vision of Our Nursery
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-5xl p-10 mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  At Mini Moments, our vision is to provide a nurturing, safe, and joyful environment where every child is equipped with the tools to lead a balanced, mindful, and fulfilling life. We dream of a world where children are not only academically prepared but also emotionally resilient and inwardly at peace, thanks to the practice of meditation and yoga.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We firmly believe that a strong foundation in early childhood is essential for building a brighter future. By introducing mindfulness practices from a young age, we aim to foster compassionate, self-aware, and confident individuals who can embrace life's challenges with grace, clarity, and a celebration of their unique differences.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-brand-purple">
                Research-Based Benefits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Research has shown that meditation and yoga help children in numerous ways, creating a strong foundation for lifelong success and wellbeing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Enhanced focus and concentration',
                  'Reduced stress and anxiety',
                  'Boosted physical health',
                  'Developed self-discipline and patience',
                  'Improved social skills',
                  'Supported cognitive development',
                  'Better sleep patterns',
                  'Emotional regulation skills'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-gold flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8364020/pexels-photo-8364020.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children practicing mindfulness and meditation"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-6 rounded-4xl shadow-glow-gold">
                <Lotus className="h-8 w-8 mx-auto mb-2" />
                <div className="text-center">
                  <div className="text-sm font-medium">Mindful</div>
                  <div className="text-sm">Leaders</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-purple to-purple-700 text-white rounded-5xl p-8">
              <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Our mission is to inspire a generation of mindful leaders—individuals who make thoughtful decisions, 
                build meaningful connections, and contribute positively to the world around them. At Mini Moments, 
                we are committed to shaping a future where every child thrives, both within themselves and in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Areas of Learning */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Nurturing Young Minds, One Step at a Time
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aligned with EYFS (Early Years Foundation Stage) guidelines, our nursery focuses on three primary areas of learning, 
              enhanced with mindfulness practices throughout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {[
              {
                icon: BookOpen,
                title: 'Communication and Language',
                description: 'We foster language development by providing resources and activities that encourage children to express themselves and enhance their communication skills.',
                activities: [
                  'Using Makaton and sign language for communication',
                  'Group singing and storytelling sessions',
                  'Discussing kindness and empathy during circle time',
                  'Using emotion flashcards to help children express their feelings',
                  'Engaging in various role-play scenarios to expand vocabulary'
                ],
                color: 'from-purple-100 to-purple-200'
              },
              {
                icon: Target,
                title: 'Physical Development',
                description: 'We support children\'s physical growth by providing activities that enhance gross and fine motor skills, strengthening their bodies, muscles, and coordination.',
                activities: [
                  'Daily children\'s yoga and meditation sessions',
                  'Outdoor playtime for running, climbing, and riding',
                  'Fine motor skill activities: threading, cutting, gluing, painting',
                  'Mindful movement and body awareness exercises',
                  'Balance and coordination activities'
                ],
                color: 'from-gold-100 to-gold-200'
              },
              {
                icon: Heart,
                title: 'Personal, Social, and Emotional Development (PSED)',
                description: 'We nurture self-confidence, emotional well-being, and a sense of belonging in society by engaging children in activities that promote social and emotional growth.',
                activities: [
                  'Breathing and calming exercises to manage emotions',
                  'Learning empathy through role-play (e.g., doctors and babies)',
                  'Understanding classroom golden rules such as no hitting and sharing',
                  'Sharing personal experiences during circle time',
                  'Access to a family book for discussing family with peers and teachers'
                ],
                color: 'from-purple-100 to-purple-200'
              }
            ].map((area, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${area.color} rounded-5xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <area.icon className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-purple mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-sm text-brand-purple mb-3">Key Activities:</h4>
                  {area.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Areas of Learning */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Extending Learning Through Specific Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building upon the three primary areas, we extend learning through four specific areas that 
              prepare children for their future educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Literacy',
                description: 'We encourage language development, vocabulary expansion, and comprehension skills through literacy-based activities.',
                activities: [
                  'Early writing skills, including tracing, drawing, mark-making',
                  'Access to a multicultural library',
                  'Mindfulness stories and group singing during circle time',
                  'Self-registration for name recognition practice',
                  'Weekly Read Write Inc. (RWI) phonics sessions',
                  'Phonics learning through playful activities and messy play'
                ],
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Brain,
                title: 'Mathematics',
                description: 'We integrate mathematics into daily routines, helping children develop their counting, problem-solving, and shape recognition skills.',
                activities: [
                  'Counting to 10 during yoga and meditation sessions',
                  'Number recognition through songs, puzzles, and activities',
                  'Learning about measurement through sensory play',
                  'Daily access to maths resources for shape recognition',
                  'Pattern recognition and mathematical thinking',
                  'Problem-solving through mindful exploration'
                ],
                color: 'bg-gold-100 text-brand-gold'
              },
              {
                icon: Globe,
                title: 'Understanding the World',
                description: 'We broaden children\'s knowledge and appreciation of diverse cultures, communities, and the world around them.',
                activities: [
                  'Celebrating different cultures and festivals',
                  'Daily yoga and meditation for mindfulness',
                  'Hands-on science experiments for older children',
                  'Regular outings to church, library, train station, post office',
                  'Welcoming community helpers for interactive learning',
                  'Environmental awareness and nature connection'
                ],
                color: 'bg-purple-100 text-brand-purple'
              },
              {
                icon: Palette,
                title: 'Expressive Arts and Design',
                description: 'We encourage creativity and emotional expression through various artistic and sensory activities.',
                activities: [
                  'Free play with playdough and clay',
                  'Dress-up, dance, and drama activities',
                  'Deep breathing exercises in yoga and meditation',
                  'Mandala art and sand art for focus and concentration',
                  'Mindful walks in the garden and community parks',
                  'Daily access to painting, gluing, crafting, and messy play'
                ],
                color: 'bg-gold-100 text-brand-gold'
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-5xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group border border-purple-100"
              >
                <div className={`${area.color} rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-display font-medium text-xs text-brand-gold mb-2">Activities Include:</h4>
                  {area.activities.slice(0, 3).map((activity, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-gray-600 leading-relaxed">{activity}</span>
                    </div>
                  ))}
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Through Mindful Play */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8617586/pexels-photo-8617586.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children engaged in mindful play and learning"
                className="rounded-5xl shadow-soft w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-brand-gold text-white p-6 rounded-4xl shadow-glow-gold">
                <Play className="h-8 w-8 mx-auto mb-2" />
                <div className="text-center">
                  <div className="text-sm font-medium">Mindful</div>
                  <div className="text-sm">Play</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple">
                Learning Through Mindful Play
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Play is at the heart of our curriculum, enhanced with mindfulness practices that deepen 
                  learning and emotional development. We believe that children learn best when they are 
                  actively engaged, present, and having fun in a mindful way.
                </p>
                <p>
                  Our experienced educators carefully plan activities that challenge and inspire 
                  children while incorporating breathing exercises, body awareness, and emotional 
                  regulation techniques. Every moment becomes an opportunity for mindful learning 
                  and emotional growth.
                </p>
                <p>
                  By teaching children to be present and aware during play, we help them develop 
                  focus, emotional intelligence, and a deeper connection to their learning experience.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-4xl p-4 text-center border border-purple-200">
                  <Music className="h-6 w-6 text-brand-purple mx-auto mb-2" />
                  <div className="text-sm font-display font-medium text-brand-purple">Mindful Music</div>
                </div>
                <div className="bg-gold-50 rounded-4xl p-4 text-center border border-gold-200">
                  <Palette className="h-6 w-6 text-brand-gold mx-auto mb-2" />
                  <div className="text-sm font-display font-medium text-brand-gold">Conscious Arts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Mindfulness Integration */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Daily Mindfulness Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mindfulness isn't just an activity - it's woven throughout our entire day, 
              helping children develop emotional regulation and present-moment awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lotus,
                title: 'Morning Circle',
                description: 'Starting each day with breathing exercises and intention setting.',
                color: 'from-purple-100 to-purple-200'
              },
              {
                icon: Heart,
                title: 'Mindful Eating',
                description: 'Encouraging children to slow down and appreciate the taste, texture, and smell of their food.',
                color: 'from-gold-100 to-gold-200'
              },
              {
                icon: Brain,
                title: 'Emotion Check-ins',
                description: 'Regular opportunities to identify and express feelings mindfully.',
                color: 'from-purple-100 to-purple-200'
              },
              {
                icon: Sparkles,
                title: 'Gratitude Practice',
                description: 'Ending each day by sharing what we\'re grateful for.',
                color: 'from-gold-100 to-gold-200'
              }
            ].map((practice, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${practice.color} rounded-5xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group text-center`}
              >
                <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <practice.icon className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-purple mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Progress */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-purple to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              Tracking Progress & Wellbeing
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              We carefully observe and document each child's learning journey and emotional development, 
              sharing regular updates with families and celebrating every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-5xl p-8 border border-white/20">
              <BookOpen className="h-10 w-10 text-brand-gold mb-4" />
              <h3 className="font-display font-semibold text-xl mb-3">Learning Journals</h3>
              <p className="text-purple-100 text-sm">
                Personal learning journals documenting each child's academic progress, emotional development, 
                and mindfulness journey with photos and observations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-5xl p-8 border border-white/20">
              <Users className="h-10 w-10 text-brand-gold mb-4" />
              <h3 className="font-display font-semibold text-xl mb-3">Parent Partnership</h3>
              <p className="text-purple-100 text-sm">
                Regular communication with families through daily updates, wellbeing reports, 
                and parent consultations including mindfulness tips for home.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-5xl p-8 border border-white/20">
              <Target className="h-10 w-10 text-brand-gold mb-4" />
              <h3 className="font-display font-semibold text-xl mb-3">Holistic Goals</h3>
              <p className="text-purple-100 text-sm">
                Personalized learning and wellbeing objectives tailored to each child's unique 
                needs, interests, and emotional development stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default VisionCurriculum;