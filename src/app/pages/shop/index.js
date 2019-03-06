import React from "react";
import PropTypes from "prop-types";
import { ProductCard, ProductsContainer } from "../../components";
var FontAwesome = require('react-fontawesome');


function Shop({products, toggleFavourite, updateCardCount}) {

  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard {...product} toggleFavourite={toggleFavourite} updateCardCount={updateCardCount}/>
      ))}
    </ProductsContainer>
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
updateCardCount: PropTypes.func.isRequired,
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
