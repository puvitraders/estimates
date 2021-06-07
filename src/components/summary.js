import { useState } from "react";
import { QUANTITY, RATE } from "../static/content/constants";
import { EditableSpan } from "./atomic/editable";

const Summary = ({ items, tax }) => {
  const subTotal = items.reduce((t, i) => t + i[QUANTITY] * i[RATE], 0);
  const taxes = (tax / 100) * subTotal;

  const [shipping, setShipping] = useState(0.0);

  const updateShipping = (e) => {
    const rate = e.target.innerText;

    setShipping(
      new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$").test(parseFloat(rate))
        ? parseFloat(rate)
        : shipping
    );
  };

  const total = subTotal + taxes + shipping;

  return (
    <div className="pt-summary mt-3">
      <div className="row-col-3 offset-9">
        <div className="row-col-12 py-2 bg-light text-center border">
          Summary
        </div>
        <div className="row px-3">
          <div className="col-6 py-2 border-bottom">
            <strong>Subtotal</strong>
          </div>
          <div className="col-6 py-2 text-right border-bottom">
            &#8377;&#160;
            {subTotal.toFixed(2)}
          </div>
        </div>

        <div className="row px-3">
          <div className="col-6 py-2 border-bottom">
            <strong>Tax&#160;&#160;({tax}%)</strong>
          </div>
          <div className="col-6 py-2 text-right border-bottom">
            &#8377;&#160;
            {taxes.toFixed(2)}
          </div>
        </div>

        <div className="row px-3">
          <div className="col-6 py-2 border-bottom">
            <strong>Shipping</strong>
          </div>
          <div className="col-6 py-2 text-right border-bottom">
            &#8377;&#160;
            <EditableSpan
              content={shipping.toFixed(2)}
              changeHandler={updateShipping}
            />
          </div>
        </div>

        <div className="row px-3">
          <div className="col-6 py-2 border-bottom">
            <strong>Total</strong>
          </div>
          <div className="col-6 py-2 text-right border-bottom">
            &#8377;&#160;
            {total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
