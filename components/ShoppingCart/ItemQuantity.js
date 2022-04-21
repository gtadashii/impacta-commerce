function ItemQuantity(props) {
  function buildQuantityEventChanged(increment) {
    return {
      product: props.product,
      newQty: props.product.qty + increment,
    };
  }

  function decrement() {
    props.onQuantityChanged(buildQuantityEventChanged(-1));
  }

  function increment() {
    props.onQuantityChanged(buildQuantityEventChanged(+1));
  }

  function handleChange(e) {
    props.onQuantityChanged(
      buildQuantityEventChanged(e.targe.value - props.product.qty)
    );
  }

  return (
    <div className='input-group mb-3'>
      <button
        className='btn btn-outline-secondary'
        type='button'
        onClicl={decrement}
      >
        -
      </button>
      <input
        type='number'
        className='form-control text-center'
        value={props.procuct.qty}
        onChange={handleChange}
      />
      <button
        className='btn btn-outline-secondary'
        type='button'
        onClicl={increment}
      >
        +
      </button>
    </div>
  );
}

export default ItemQuantity;
