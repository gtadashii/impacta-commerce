import { useEffect, useState } from 'react';

import ItemList from './ItemsList';
import Summary from './Summary';
import { getCart, updateCart } from '../../api/api';

const FIXED_CART_CODE = 'fixed-cart-code';

function Cart(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(props.cart.products);
  }, []);

  function onQuatityChanged(ev) {
    for (const product of props.cart.products) {
      if (product.code === ev.product.code) {
        product.qty = ev.newQty;
        setProducts(props.cart.products.map((x) => x));
        break;
      }
    }
  }

  return (
    <div>
      <hr />
      <ItemList products={products} onQuatityChanged={onQuatityChanged} />
      <hr />
      <Summary product={products} />
    </div>
  )
}

export default Cart;