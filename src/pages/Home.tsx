import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] -mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80"
            alt="Kashmiri Cuisine"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Experience Authentic Kashmiri Cuisine
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover the rich flavors and aromatic spices of Kashmir, delivered
                right to your doorstep.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/menu?category=${category.id}`}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                First Order Discount
              </h3>
              <p className="text-gray-700 mb-6">
                Get 20% off on your first order with code: FIRST20
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center text-primary hover:text-primary-dark"
              >
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-secondary-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Family Feast
              </h3>
              <p className="text-gray-700 mb-6">
                Save 15% on family-size orders above $50
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center text-primary hover:text-primary-dark"
              >
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const categories = [
  {
    id: 'main-course',
    name: 'Main Course',
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80',
  },
  {
    id: 'breads',
    name: 'Breads',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fc47a13?auto=format&fit=crop&q=80',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1630182266697-65d3d3b47604?auto=format&fit=crop&q=80',
  },
];

export default Home;