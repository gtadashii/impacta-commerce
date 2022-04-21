import { useEffect, useStatte } from 'react';

import ItemList from './ItemsList';
import Summary from './Summary';

function Cart(props) {
  const [products, setProducts] = useStatte([]);

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