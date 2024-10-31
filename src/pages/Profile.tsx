import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, ShoppingBag, Heart } from 'lucide-react';
import { RootState } from '../store/store';
import { logout } from '../store/slices/userSlice';

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <User className="h-10 w-10" />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orders */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold ml-3">Recent Orders</h2>
            </div>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Order #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {order.items} items • ${order.total}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favorites */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold ml-3">Favorite Dishes</h2>
            </div>
            <div className="space-y-4">
              {favorites.map((dish) => (
                <div
                  key={dish.id}
                  className="flex items-center border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">{dish.name}</h3>
                    <p className="text-sm text-gray-600">${dish.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-4">
          <button className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg shadow-md hover:bg-gray-50 flex items-center justify-center">
            <Settings className="h-5 w-5 mr-2" />
            Account Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-red-50 text-red-600 py-3 px-4 rounded-lg hover:bg-red-100 flex items-center justify-center"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

const orders = [
  {
    id: '12345',
    date: 'March 15, 2024',
    items: 3,
    total: 45.97,
    status: 'Delivered',
  },
  {
    id: '12344',
    date: 'March 10, 2024',
    items: 2,
    total: 29.98,
    status: 'Processing',
  },
];

const favorites = [
  {
    id: '1',
    name: 'Rogan Josh',
    price: 18.99,
    image:
      'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Kashmiri Pulao',
    price: 14.99,
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80',
  },
];

export default Profile;