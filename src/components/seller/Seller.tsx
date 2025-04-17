import React from 'react'
import { useNavigate } from 'react-router-dom';

const Seller: React.FC = () => {
  const navigate = useNavigate();

const redirect = () =>{
  navigate("/AddProducts");
}

  return (
    <>
    <h2>Seller</h2>
    <div className='seller'>
        <button type = 'submit' onClick={redirect}>Add Products</button>
        <button type = 'submit' onClick={()=>navigate('/AddCategories')}>Add Categories</button>
    </div>
    </>
  )
}

export default Seller;