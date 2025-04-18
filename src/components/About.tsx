import React from 'react';
import { Camera, Award, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative z-10">
              <img
                src="https://images.pexels.com/photos/3760824/pexels-photo-3760824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Photographer"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute top-8 -right-8 bottom-8 left-8 bg-gray-200 rounded-lg -z-0"></div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hi! I'm Kamzy, a professional photographer based in New York with over 8 years of experience capturing life's most precious moments. My passion for photography began when I first picked up a camera at age 16, and I've been honing my craft ever since.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              I believe every photo tells a story, and my goal is to document your unique narrative with authenticity and artistic vision. Whether it's your wedding day, a family milestone, or a professional portrait, I'm dedicated to creating images that you'll treasure for years to come.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                  <Camera className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Passion</h3>
                  <p className="text-gray-600">Dedicated to capturing authentic moments</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                  <Award className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Experience</h3>
                  <p className="text-gray-600">Over 8 years professional experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                  <Clock className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Timeliness</h3>
                  <p className="text-gray-600">Quick turnaround on all projects</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                  <Heart className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Dedication</h3>
                  <p className="text-gray-600">Personalized attention to every client</p>
                </div>
              </div>
            </div>
            
            <button className="bg-gray-900 text-white py-3 px-6 rounded-md font-medium transition-transform duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;