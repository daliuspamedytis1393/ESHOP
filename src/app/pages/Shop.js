import React from "react";
import PropTypes from "prop-types";
var FontAwesome = require('react-fontawesome');

function Shop({products, toggleFavourite}) {

  return (
    <div className='mainCard'>
      {products.map(product => (
        <div className="card">
          <img src={product.image} alt={product.name}></img>
          <p className="name" key={product.id}>{product.name}</p>
          <p className="price"><b>price: </b>{product.price} {product.currency}</p>
          <button type='button'><span role='img' aria-label=''>🛒</span></button>
          <button onClick={() => toggleFavourite(product.id)}type='button'><span role='img' aria-label=''>{product.isFavorite ? "💚" : "⭐"}</span> </button>
        </div>
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
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
