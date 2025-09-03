import React from 'react';
import { Camera, Heart, Star, Smile } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const Gallery: React.FC = () => {
  // Generate array of image paths from p1.jpeg to p54.jpeg
  const galleryImages = Array.from({ length: 54 }, (_, index) => ({
    id: index + 1,
    src: `/p${index + 1}.jpeg`,
    alt: `Mini Moments Nursery - Image ${index + 1}`
  }));

  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-purple-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Capturing precious moments and joyful memories at Mini Moments Nursery
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-purple mb-4">
              Moments That Matter
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every day at Mini Moments Nursery is filled with discovery, laughter, 
              and precious memories that we love to share with families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 text-brand-purple rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="font-display font-semibold text-xl text-brand-purple mb-3">
                Special Moments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We capture those fleeting moments of wonder, achievement, and joy 
                that make childhood so magical.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-100 text-brand-gold rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="font-display font-semibold text-xl text-brand-purple mb-3">
                Learning Adventures
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From first steps to first words, we document every milestone 
                and achievement in your child's development.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 text-brand-purple rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Smile className="h-10 w-10" />
              </div>
              <h3 className="font-display font-semibold text-xl text-brand-purple mb-3">
                Pure Joy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The smiles, giggles, and expressions of pure happiness that 
                remind us why we love what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-12 bg-gradient-to-br from-brand-purple to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl mb-4">
            Photography Policy
          </h2>
          <p className="text-purple-100 leading-relaxed">
            All photographs are taken with parental consent and are used solely for 
            nursery purposes. We respect your privacy and will never share images 
            without your explicit permission. If you have any concerns about photography, 
            please speak to a member of our team.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Gallery;