import {addToCart, emptyCart, removeFromCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import { productList } from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data, '@@@data');
  const product = {
    name: 'I phone',
    type: 'mobile',
    price: 1000,
    color: 'red'
  } 

  return (
    <div>
      <div>
      <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
      </div>
      <div>
      <button onClick={()=> dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      </div>
      <div>
      <button onClick={()=> dispatch(emptyCart(product))}>Empty Cart</button>
      </div>
      <div>
      <button onClick={()=> dispatch(productList())}>get Product List</button>
      </div>
    </div>
  );
}

export default Main;
