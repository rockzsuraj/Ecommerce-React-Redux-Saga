import React from 'react';
import {useSelector} from 'react-redux';

function Header() {
    const result = useSelector((state) => state.cartData);
    console.warn(result, '@@@redux data');
  return (
    <div className='header'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png'/>
        </div>
    </div>
  )
}

export default Header