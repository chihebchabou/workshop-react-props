import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ prods }) => {
  console.log(prods);
  return (
    <div className="row">
      {prods.map((product, i) => (
        <ProductItem product={product} key={i}>
          <span className="badge bg-secondary">{product.id}</span>
        </ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
