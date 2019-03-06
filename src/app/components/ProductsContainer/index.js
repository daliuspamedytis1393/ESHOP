import React from 'react';
import "./index.scss";
import PropTypes from 'prop-types';

function ProductsContainer({children, className}) {
  return (
    <div className={`mainCard ${className}`}>{children}</div>
  );
}

ProductsContainer.propTypes = {
  children: PropTypes.node.isRequired,

}


export default ProductsContainer;
