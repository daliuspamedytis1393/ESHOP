import React from "react";
import PropTypes from "prop-types";
import { ProductCard } from "../../components";
var FontAwesome = require('react-fontawesome');


function Shop({products, toggleFavourite}) {

  return (
    <div className='mainCard'>
      {products.map(product => (
        <ProductCard {...product} toggleFavourite={toggleFavourite}/>
      ))}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,

  })
),
toggleFavourite: PropTypes.func.isRequired,
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
