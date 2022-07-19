import React from 'react';
import ColorList from '../colors/ColorList';
import SizeList from '../sizes/SizeList';
import PropTypes from 'prop-types';

const ProductItem = ({
  product: { image, name, description, price, colors, sizes },
  title,
  children,
}) => {
  console.log(children);
  const handleClick = e => {
    e.preventDefault();
    alert(price);
  };

  return (
    <div className="col-md-4">
      <h3>
        {title} | {children}
      </h3>
      <div className="card mb-3">
        <img src={image} alt="" className="card-image-top" />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <p className="card-text text-center">
            <SizeList sizes={sizes} />
          </p>
          <p className="card-text text-center">
            <ColorList colors={colors} />
          </p>
          <p className="card-text text-center">{description}</p>
          <p className="card-text text-center">
            <a href="#!" className="card-link" onClick={handleClick}>
              price
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  title: PropTypes.string,
};

ProductItem.defaultProps = {
  title: 'Default Title',
};

export default ProductItem;
