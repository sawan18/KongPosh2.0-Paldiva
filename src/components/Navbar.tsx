import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ShoppingBag, Heart, User, Menu } from 'lucide-react';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#E65D20]">Kashmiri Delights</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/menu" className="text-gray-700 hover:text-[#E65D20]">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#E65D20]">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#E65D20]">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-[#E65D20]" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E65D20] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            
            {user ? (
              <>
                <Link to="/favorites">
                  <Heart className="h-6 w-6 text-gray-700 hover:text-[#E65D20]" />
                </Link>
                <Link to="/profile">
                  <User className="h-6 w-6 text-gray-700 hover:text-[#E65D20]" />
                </Link>
              </>
            ) : (
              <Link to="/login" className="text-[#E65D20] hover:text-[#D14810]">
                Login
              </Link>
            )}

            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;