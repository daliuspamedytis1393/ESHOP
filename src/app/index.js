import React from "react";
import { Shop, Favorites, Cart } from "./pages";
import { PageLayout } from "./components";
import { PacmanLoader } from 'react-spinners';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
      loading: false,
      route: 'shop',
    };

    this.NAV_LINKS = ["shop", "Cart", "favorites"].map(link => (
      <button type="button" onClick={() => this.setState({route: link})}>
        {link}
      </button>
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
  renderRoute = () => {
    const {route, products} = this.state;

    switch (route) {
      case 'shop':
        return (<Shop products={products} toggleFavourite={this.toggleFavourite} updateCardCount={this.updateCardCount} />);
      case 'favorites':
        return (<Favorites products={products.filter(product => product.isFavorite)}
          toggleFavourite={this.toggleFavourite} updateCardCount={this.updateCardCount}/>);
      case 'Cart':
        return (<Cart products={products.filter(product => product.cartCount > 0)}/>);
      default:
        return (<Shop products={products} toggleFavourite={this.toggleFavourite} updateCardCount={this.updateCardCount} />)

    };
  }
  render() {
    const { products, loading, error} = this.state;
    return (
      <PageLayout navLinks={this.NAV_LINKS}>
        {error && <span>{error}</span>}
        {loading && <PacmanLoader/>}
        {this.renderRoute()}
      </PageLayout>
    );
  }
}

export default App;
