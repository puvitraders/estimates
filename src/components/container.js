import React from "react";
import "../static/styles/app.scss";
import Action from "./action";
import AddItem from "./add_item";
import Company from "./company";
import Customer from "./customer";
import Header from "./header";
import Products from "./products";
import Summary from "./summary";

class Container extends React.Component {
  state = {
    items: [],
    tax: 18,
    customer: "",
    date: new Date()
  };

  count = 0;

  updateState = (s) => {
    this.setState(s);
  };

  render() {
    const { items, customer, tax, date } = this.state;

    return (
      <div className="container">
        <Header />

        <Company />

        <Customer
          customer={customer}
          date={date}
          updateCustomer={(customer) => this.updateState({ customer })}
        />

        <Products
          key={++this.count}
          items={items}
          tax={tax}
          updateItems={(items) => this.updateState({ items })}
        />

        <AddItem
          addNewItem={(item) => this.setState({ items: [...items, item] })}
        />

        <Summary items={items} tax={tax} />

        <div className="pt-bottom">&#160;</div>

        <Action tax={tax} updateTax={(tax) => this.updateState({ tax })} />
      </div>
    );
  }
}

export default Container;
