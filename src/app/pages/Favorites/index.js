import React from "react";
import PropTypes from "prop-types";
import { ProductCard } from "../../components"


function Favorites({products, toggleFavourite}) {

  return (
    <div className='mainCard'>
      {products.map(product => (
        <ProductCard {...product} toggleFavourite={toggleFavourite}/>
      ))}
    </div>
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
};

Favorites.defaultProps = {
  products: [],
};


export default Favorites
