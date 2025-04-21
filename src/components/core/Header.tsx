import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, InformationCircleIcon, TagIcon, UserGroupIcon } from '@heroicons/react/outline';

const Header: React.FC = () => {
  const cartProducts = useSelector((state: any) => state?.cart?.cart);

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
        <Link to="/login" className="text-white hover:text-gray-400 flex items-center">
          <UserIcon className="h-5 w-5 mr-1" /> Login
        </Link>
        <Link to="/products" className="text-white hover:text-gray-400 flex items-center">
          <TagIcon className="h-5 w-5 mr-1" /> Products
        </Link>
        <Link to="/about" className="text-white hover:text-gray-400 flex items-center">
          <InformationCircleIcon className="h-5 w-5 mr-1" /> About
        </Link>
        <Link to="/cart" className="text-white hover:text-gray-400 flex items-center">
          <ShoppingCartIcon className="h-5 w-5 mr-1" /> Cart ({cartProducts.length})
        </Link>
        <Link to="/seller" className="text-white hover:text-gray-400 flex items-center">
          <UserGroupIcon className="h-5 w-5 mr-1" /> Seller
        </Link>
      </div>
    </header>
  );
};

export default Header;
