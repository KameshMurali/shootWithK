import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  height: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Urban Portrait',
    category: 'Portrait',
    image: 'https://images.pexels.com/photos/2531158/pexels-photo-2531158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[400px]'
  },
  {
    id: 2,
    title: 'Wedding Ceremony',
    category: 'Wedding',
    image: 'https://images.pexels.com/photos/1244066/pexels-photo-1244066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[500px]'
  },
  {
    id: 3,
    title: 'Family Session',
    category: 'Family',
    image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[450px]'
  },
  {
    id: 4,
    title: 'Product Shoot',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[350px]'
  },
  {
    id: 5,
    title: 'Fashion Shoot',
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[550px]'
  },
  {
    id: 6,
    title: 'Engagement',
    category: 'Wedding',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[400px]'
  },
  {
    id: 7,
    title: 'Studio Portrait',
    category: 'Portrait',
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[500px]'
  },
  {
    id: 8,
    title: 'Family Outdoors',
    category: 'Family',
    image: 'https://images.pexels.com/photos/1266016/pexels-photo-1266016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    height: 'h-[450px]'
  }
];

const Portfolio: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of photographic work across various styles and occasions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${item.height}`}
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.category}</p>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox */}
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="relative max-w-5xl max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors duration-300"
                onClick={() => setSelectedItem(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="max-h-[80vh] mx-auto rounded"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;