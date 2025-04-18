import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Photographer in action"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Capture Your Perfect Moments
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
            Professional photography services to preserve your special memories with artistic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Link
              href="#portfolio"
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              View Portfolio
            </Link>
            <Link
              href="#contact"
              className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center group transition-transform duration-300 hover:scale-105"
            >
              Book a Session
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;