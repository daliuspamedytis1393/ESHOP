import React from "react";
import { Shop } from "./pages";
import { PageLayout } from "./components";
import { PacmanLoader } from 'react-spinners';

const NAV_LINKS = ["shop", "cart", "favorites"].map(link => (
  <button type="button" onClick={() => console.log(link)}>
    {link}
  </button>
));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://boiling-reaches-93648.herokuapp.com/food-shop/products")
      .then(response => response.json())
      .then(json => this.setState({ products: json, loading: false }))
      .catch(() => this.setState({ error: "Something went wrong", loading: false }));
  }

  render() {
    const { products, loading, error} = this.state;
    return (
      <PageLayout navLinks={NAV_LINKS}>
        {error && <span>{error}</span>}
        {loading && <PacmanLoader/>}

        <Shop products={products} />
      </PageLayout>
    );
  }
}

export default App;
