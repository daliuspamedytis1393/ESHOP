import React from "react";
import { Shop, Favorites, Cart } from "./pages";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { PageLayout } from "./components";
import { PacmanLoader } from 'react-spinners';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
      loading: false,
    };

    this.NAV_LINKS = ["shop", "Cart", "favorites"].map(link => (
      <Link  to={`/${link}`}>
        {link}
      </Link>
    ));
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://boiling-reaches-93648.herokuapp.com/food-shop/products")
      .then(response => response.json())
      .then(json => {
        const products = json.map(product => ({...product, isFavorite: false, cartCount: 0,}));
        this.setState({ products, loading: false });
      })
      .catch(() => this.setState({ error: "Something went wrong", loading: false }));
  }

  toggleFavourite = id => {
    this.setState(state =>({
      products: state.products.map(product =>{
        if (product.id === id) {
          return {...product, isFavorite: !product.isFavorite}

        }
        return product
      })
    }))
  }

  updateCardCount = (id, value) => {
    this.setState(state =>({
      products: state.products.map(product =>{
        if (product.id === id) {
          return {...product, cartCount: value}

        }
        return product
      })
    }))
  }


  renderShop=()=>{
    const {products} = this.state;
      return(<Shop products={products} toggleFavourite={this.toggleFavourite} updateCardCount={this.updateCardCount} />)
  };
  renderCart=()=>{
    const {products} = this.state;
      return(<Cart products={products.filter(product => product.cartCount > 0)}/>)
  };
  renderFavorites=()=>{
    const {products} = this.state;
      return(<Favorites products={products.filter(product => product.isFavorite)}
        toggleFavourite={this.toggleFavourite} updateCardCount={this.updateCardCount}/>);
  };

  render() {
    const { products, loading, error} = this.state;
    return (
      <Router>
      <PageLayout navLinks={this.NAV_LINKS}>
        {error && <span>{error}</span>}
        {loading && <PacmanLoader/>}

        <Route exact path="/shop" component={this.renderShop} />
        <Route path="/Cart" component={this.renderCart} />
        <Route path="/Favorites" component={this.renderFavorites} />
        <Redirect exact from="/" to="/shop" > </Redirect>
      </PageLayout>
      </Router>
    );
  }
}

export default App;
