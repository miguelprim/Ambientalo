import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      
      <Link class="navbar-logo" href="/">
      <img src="/logo/alo.png" ></img></Link>        

      <p className="contact">
      <Link href="/contact">CONTACT</Link>
      </p>    

      <p className="terms">
      <Link href="/terms">TERMS</Link>
      </p>     

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      
      

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar