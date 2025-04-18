import React from 'react';
import { Camera, Users, Heart, Image } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  pricing: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Portrait Sessions',
    description: 'Professional portrait photography to capture your personality and style.',
    icon: <Camera className="h-8 w-8 text-gray-900" />,
    pricing: 'From $250',
    features: [
      '1-hour session',
      'Multiple outfit changes',
      '10 edited digital images',
      'Online gallery',
      'Print release'
    ]
  },
  {
    id: 2,
    title: 'Wedding Photography',
    description: 'Comprehensive coverage of your special day with artistic direction.',
    icon: <Heart className="h-8 w-8 text-gray-900" />,
    pricing: 'From $1,800',
    features: [
      '8 hours of coverage',
      'Second photographer',
      'Engagement session',
      '300+ edited digital images',
      'Online gallery',
      'Wedding album design'
    ]
  },
  {
    id: 3,
    title: 'Family Sessions',
    description: 'Capture meaningful moments with your loved ones in natural settings.',
    icon: <Users className="h-8 w-8 text-gray-900" />,
    pricing: 'From $350',
    features: [
      '1.5-hour session',
      'Up to 6 family members',
      '15 edited digital images',
      'Online gallery',
      'Print release',
      'Location consultation'
    ]
  },
  {
    id: 4,
    title: 'Commercial Photography',
    description: 'High-quality product and brand photography for your business needs.',
    icon: <Image className="h-8 w-8 text-gray-900" />,
    pricing: 'From $500',
    features: [
      '3-hour session',
      'Product styling',
      '20 edited digital images',
      'Commercial usage rights',
      'Quick turnaround',
      'Brand consultation'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to capture your special moments with artistic excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 w-full bg-gray-900 text-white py-3 px-6 rounded-md font-medium transition-transform duration-300 hover:scale-105">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;