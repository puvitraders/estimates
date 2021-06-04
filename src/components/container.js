import React, { useState } from "react";
import "../static/styles/app.scss";
// import Action from "./action";
import Company from "./company";
import Customer from "./customer";
import Products from "./products";
// import Summary from "./summary";
import C from "../static/content/app";
// import Modal from "./modal";
import ReactTooltip from "react-tooltip";

const Container = () => {
  const [items, setItems] = useState([]);
  const [tax, setTax] = useState(C.TAX_RATE);
  const [count, setCount] = useState(0);

  const bump = () => setCount(count + 1);

  return (
    <div className="container">
      <header>
        <h2 className="text-center m-3">Estimate</h2>
      </header>

      <Company />

      <Customer />

      <Products key={count} items={items} tax={tax} updateItems={setItems} />

      <div className="mt-3">
        <button
          className="btn btn-link pt-no-print"
          onClick={setItems.bind(null, [...items, {}])}
        >
          + Add item
        </button>
      </div>

      {/* <Summary items={items} tax={tax} /> */}

      <div className="pt-bottom">&#160;</div>

      <ReactTooltip key={count} />

      {/* <Action tax={tax} updateTax={(tax) => this.updateState({ tax })} /> */}
    </div>
  );
};

export default Container;
