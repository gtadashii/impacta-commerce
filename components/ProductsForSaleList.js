import { useEffect, useState } from 'react';
import Link from 'next/link';

function Installment(props) {

}

function ProductListItem(props) {
  const defaultProductImage = 'https://via.placeholder.com/150';

  return (
    <div className='d-flex position-relative border my-2'>
      <img src={defaultProductImage} className='flex-shrink-0 me-3' />
      <div>
        <Link href={`/products/${props.product.code}`}>
          <a className='stretched-link'>
            <h3 className='mt-0'>{props.product.title}</h3>
          </a>
        </Link>
        <h4>R$ {props.product.amount}</h4>
        <Installment installment={props.product.installments} />
      </div>
    </div>
  );
}

function ProductForSaleList() {
  
}

export default ProductForSaleList;
