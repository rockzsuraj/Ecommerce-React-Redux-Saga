import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const price = cartData.length ? cartData.map(ele => ele.price) : [];
  const totalAmount = !!price ? price.reduce((curr, acc) => curr+acc) : 0;

  return (
    <div>
      <Link to='/'> Back to Product page</Link>
      <h1>Cart page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {
            cartData.map((item) => <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>)
          }
        </table>
        <div className='price-details'>
          <h2>Price Details</h2>
          <div className='adjust-price'><span>Amount: </span><span>{totalAmount}</span></div>
          <div className='adjust-price'><span>Discount: </span><span>{totalAmount/10}</span></div>
          <div className='adjust-price'><span>Tax: </span><span>{0}</span></div>
          <div className='adjust-price'><span>Total: </span><span>{totalAmount-(totalAmount/10)}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
