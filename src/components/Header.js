import React, {useState, useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction'
import {debounce} from 'lodash';

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.warn(result, '@@@redux data');
  const handleChange = (e) => {
    console.log(e.target.value, '@222');
    setSearchTerm(e.target.value)
  };

  const debounceSearch = useCallback(debounce(handleChange, 700),[]);

  useEffect(()=> {
    dispatch(productSearch(searchTerm));
  },[searchTerm])

  console.log(searchTerm, '@@@redux data');

  return (
    <div className='header'>
      <Link to='/'>
        <h1 className='logo'>HOME</h1>
      </Link>
      <div className='search-box'>
        <input name='search' type="text" onChange={debounceSearch} placeholder='Search Product' />
      </div>
      <Link to='/cart'>
        <div className='cart-div'>
          <span>{result.length}</span>
          <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' />
        </div>
      </Link>
    </div>
  )
}

export default Header