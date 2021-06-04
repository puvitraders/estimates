import React, { useState } from "react";
import "../static/styles/app.scss";
import Action from "./action";
import AddItem from "./add_item";
import Company from "./company";
import Customer from "./customer";
import Products from "./products";
import Summary from "./summary";
import C from "../static/content/app";
import Modal from "./modal";

const Container = () => {
  const [items, setItems] = useState([]);
  const [tax, setTax] = useState(C.TAX_RATE);
  const [customer, setCustomer] = useState("");
  const [showModal, toggleModal] = useState(false);

  return (
    <div className="container">
      <header>
        <h2 className="text-center m-3">Estimate</h2>
      </header>

      {/* <Modal isOpen={true} /> */}

      <Company />

      <Customer customer={customer} setCustomer={setCustomer} />

      {/* <Products
        key={++this.count}
        items={items}
        tax={tax}
        updateItems={(items) => this.updateState({ items })}
      /> */}

      {/* <AddItem
        addNewItem={(item) => this.setState({ items: [...items, item] })}
      /> */}

      <Summary items={items} tax={tax} />

      <div className="pt-bottom">&#160;</div>

      {/* <Action tax={tax} updateTax={(tax) => this.updateState({ tax })} /> */}
    </div>
  );
};

export default Container;
