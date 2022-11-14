import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data, '@@@data');

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map(item => <div key={item.id} className='product-item'>
            <img src={item.photo} alt='' />
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Brand: {item.price}</div>
            <div>Price: {item.brand}</div>
            <div>Category: {item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            </div>
            <div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
