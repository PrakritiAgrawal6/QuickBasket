import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

  const cartProducts = useSelector((state: any) => state?.cart?.cart);
  
  return (
    <header className='hdr-btn'>
        <button><Link to= '/login'>Login</Link></button>
        <button><Link to= '/products'>Products</Link></button>
        <button><Link to= '/about'>About</Link></button>
        <button><Link to= '/cart'>Cart({cartProducts.length})</Link></button>
        <button><Link to= '/seller'>Seller</Link></button>
    </header>
  )
}

export default Header;