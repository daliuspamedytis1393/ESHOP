import React from 'react'
import PropTypes from 'prop-types'

function ProductCard({image, name, price, currency, id, isFavorite, toggleFavourite,
}) {

  return (
    <div className="card">
      <img src={image} alt={name}></img>
      <p className="name" key={id}>{name}</p>
      <p className="price"><b>price: </b>{price} {currency}</p>
      <button type='button'><span role='img' aria-label=''>🛒</span></button>
      <button onClick={() => toggleFavourite(id)}type='button'><span role='img' aria-label=''>{isFavorite ? "💚" : "⭐"}</span> </button>
    </div>

  );


}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      toggleFavourite: PropTypes.func.isRequired,
      })
)
};


export default ProductCard
