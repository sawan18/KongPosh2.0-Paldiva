import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { toggleFavorite } from '../store/slices/userSlice';

const Menu = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const dispatch = useDispatch();

  const filteredDishes = category
    ? dishes.filter((dish) => dish.category === category)
    : dishes;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
      
      {/* Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        <button
          className={`px-4 py-2 rounded-full ${
            !category
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => {
            const newSearchParams = new URLSearchParams();
            window.history.pushState({}, '', `?${newSearchParams}`);
          }}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              category === cat.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => {
              const newSearchParams = new URLSearchParams();
              newSearchParams.set('category', cat.id);
              window.history.pushState({}, '', `?${newSearchParams}`);
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => dispatch(toggleFavorite(dish.id))}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
                <span className="text-primary font-semibold">${dish.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Spice Level:</span>
                  <div className="flex">
                    {[...Array(dish.spiceLevel)].map((_, i) => (
                      <span
                        key={i}
                        className="h-2 w-2 rounded-full bg-red-500 mr-1"
                      />
                    ))}
                  </div>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        dish,
                        quantity: 1,
                      })
                    )
                  }
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  { id: 'main-course', name: 'Main Course' },
  { id: 'breads', name: 'Breads' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' },
];

const dishes = [
  {
    id: '1',
    name: 'Rogan Josh',
    description: 'Tender lamb cooked in aromatic Kashmiri spices',
    price: 18.99,
    category: 'main-course',
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80',
    spiceLevel: 2,
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Kashmiri Pulao',
    description: 'Fragrant rice with dried fruits and nuts',
    price: 14.99,
    category: 'main-course',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80',
    spiceLevel: 1,
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Sheermal',
    description: 'Traditional saffron-flavored flatbread',
    price: 4.99,
    category: 'breads',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fc47a13?auto=format&fit=crop&q=80',
    spiceLevel: 1,
    isAvailable: true,
  },
];

export default Menu;