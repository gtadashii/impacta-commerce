import Item from './Item';

function ItemsList(props) {

  function onQuatityChanged(ev) {
    props.onQuatityChanged(ev);
  }

  let rows = [];

  props.products.forEach((product, index) => {
    rows.push(
      <Item
        key={index}
        product={product}
        onQuatityChanged={onQuatityChanged}
      />
    );
  });

  return <div>{rows}</div>
}

export default ItemsList;