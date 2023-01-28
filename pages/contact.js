import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill, BsPhone } from 'react-icons/bs';


import { useStateContext } from '../context/StateContext';
import { TiChevronLeftOutline } from 'react-icons/ti';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
   
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsPhone />
        </p>
        <h2>+ 34 649 099 239</h2>
        <p className="email-msg">Llamadas en castellano</p>
        <br></br><br></br>
        <h2>+ 34 628 489 265</h2>
        <p className="email-msg">For calls in english language</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:triana.essence@gmail.com">
          triana.essence@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
        
        
      </div>
    </div>
  )
}
export default Success
