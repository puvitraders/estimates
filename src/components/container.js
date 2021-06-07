import React, { useState } from "react";
import "../static/styles/app.scss";
import Company from "./company";
import Customer from "./customer";
import Products from "./products";
import C from "../static/content/app";
import { PRODUCT } from "../static/content/constants";
import Action from "./action";
import Summary from "./summary";

const Container = () => {
  const [items, setItems] = useState([]);
  const [tax, setTax] = useState(C.TAX_RATE);

  return (
    <div className="container">
      <header>
        <h2 className="text-center m-3">Estimate</h2>
      </header>

      <Company />

      <Customer />

      <Products items={items} updateItems={setItems} />

      <div className="mt-3">
        <button
          className="btn btn-link pt-no-print"
          onClick={setItems.bind(null, [...items, { ...PRODUCT }])}
        >
          + Add item
        </button>
      </div>

      <Summary items={items} tax={tax} />

      <div className="text-center mt-5 lead">
        <em className="h5">Thank you for your business!</em>
      </div>

      <div className="pt-bottom">&#160;</div>

      <Action tax={tax} setTax={setTax} />
    </div>
  );
};

export default Container;
