import React, { useState } from "react";
import "../static/styles/app.scss";
import Company from "./company";
import Customer from "./customer";
import Products from "./products";
import C from "../static/content/app";
import ReactTooltip from "react-tooltip";
import crypto from "crypto";
import { PRODUCT } from "../static/content/constants";

const Container = () => {
  const [items, setItems] = useState([]);
  // const [tax, setTax] = useState(C.TAX_RATE);

  return (
    <div className="container">
      <header>
        <h2 className="text-center m-3">Estimate</h2>
      </header>

      <Company />

      <Customer />

      <Products
        key={crypto.randomBytes(5)}
        items={items}
        updateItems={setItems}
      />

      <div className="mt-3">
        <button
          className="btn btn-link pt-no-print"
          onClick={setItems.bind(null, [...items, { ...PRODUCT }])}
        >
          + Add item
        </button>
      </div>

      {/* <Summary items={items} tax={tax} /> */}

      <div className="pt-bottom">&#160;</div>

      <ReactTooltip key={crypto.randomBytes(6)} />

      {/* <Action tax={tax} updateTax={(tax) => this.updateState({ tax })} /> */}
    </div>
  );
};

export default Container;
