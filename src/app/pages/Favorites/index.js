import React from "react";
import PropTypes from "prop-types";
import { ProductCard, ProductsContainer } from "../../components"


function Favorites({products, toggleFavourite, updateCardCount}) {

  return (
     <ProductsContainer>
      {products.map(product => (
        <ProductCard {...product} toggleFavourite={toggleFavourite} updateCardCount={updateCardCount}/>
      ))}
    </ProductsContainer>
  );
}

Favorites.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,

  })

),
toggleFavourite: PropTypes.func.isRequired,
updateCardCount: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  products: [],
};


export default Favorites
