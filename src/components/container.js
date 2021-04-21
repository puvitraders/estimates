import React from "react";
import "../static/styles/app.scss";
import AddItem from "./add_item";
import Aside from "./aside";
import Header from "./header";
import Products from "./products";
import Summary from "./summary";

class Container extends React.Component {
  state = {
    items: [],
    tax: 18
  };

  count = 0;

  updateState = (s) => {
    this.setState(s);
  };

  render() {
    const { items, quantity, amount, tax } = this.state;

    return (
      <div className="container">
        <Header />
        <Aside tax={tax} updateTax={(tax) => this.updateState({ tax })} />
        <Products
          items={items}
          tax={tax}
          updateItems={(items) => this.updateState({ items })}
        />
        <AddItem
          key={++this.count}
          addNewItem={(item) => this.setState({ items: [...items, item] })}
        />
        <Summary items={items} tax={tax} />
      </div>
    );
  }
}

export default Container;
