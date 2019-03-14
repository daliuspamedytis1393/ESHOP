import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function ProductCard({
  image,
  name,
  price,
  currency,
  id,
  isFavorite,
  toggleFavorite,
  cartCount,
  updateCartCount,
}) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p className="name" key={id}>
        {name}
      </p>
      <p className="price">
        <b>price: </b>
        {price} {currency}
      </p>

      <input
        type="number"
        min={0}
        onChange={e => updateCartCount(id, e.target.value)}
        value={cartCount}
      />
      <button type="button" onClick={() => toggleFavorite(id)}>
        <span role="img" aria-label="">
          {isFavorite ? "💚" : "⭐"}
        </span>
      </button>
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
      toggleFavorite: PropTypes.func.isRequired,
      updateCartCount: PropTypes.func.isRequired,
      cartCount: PropTypes.oneOf([PropTypes.number, PropTypes.string])
        .isRequired,
    })
  ),
};

export default ProductCard;
