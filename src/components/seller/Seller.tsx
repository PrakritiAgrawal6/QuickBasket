import React from 'react';
import { useNavigate } from 'react-router-dom';

const Seller: React.FC = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/AddProducts");
  };

  return (
    <div className="flex flex-col mt-16 items-center justify-center">
      <h2 className="text-3xl font-bold mb-8">Seller</h2>
      <div className="flex space-x-10">
        <button
          type="submit"
          onClick={redirect}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Add Products
        </button>
        <button
          type="submit"
          onClick={() => navigate('/AddCategories')}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Add Categories
        </button>
      </div>
    </div>
  );
};

export default Seller;
