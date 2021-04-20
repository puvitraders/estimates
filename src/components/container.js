import React from "react";
import "../static/styles/app.scss";
import AddItem from "./add_item";
import Aside from "./aside";
import Header from "./header";
import Products from "./products";

class Container extends React.Component {
  state = {
    items: [],
    quantity: 0,
    amount: 0.0,
    tax: 18
  };

  updateState = (s) => {
    this.setState(s);
  };

  render() {
    const { items, quantity, amount, tax } = this.state;

    return (
      <div className="container">
        <Header />
        <Aside tax={tax} updateTax={(tax) => this.updateState({ tax })} />
        <Products />
        {tax}
        <AddItem />
      </div>
    );
  }
}

export default Container;
