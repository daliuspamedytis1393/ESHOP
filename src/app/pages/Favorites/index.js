import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ProductCard, ProductsContainer } from "../../components";

function Favorites({ products, toggleFavorite, updateCardCount }) {
  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard
          {...product}
          toggleFavorite={toggleFavorite}
          updateCardCount={updateCardCount}
        />
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
  toggleFavorite: PropTypes.func.isRequired,
  updateCardCount: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  products: [],
};

function mapStateToProps(state) {
  return {
    products: state.products.filter(product => product.isFavorite),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: id =>
      dispatch({ type: "TOGGLE_FAVORITE_PRODUCT", payload: id }),
    updateCartCount: (id, count) =>
      dispatch({ type: "UPDATE_PRODUCT_CART_COUNT", payload: { id, count } }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
