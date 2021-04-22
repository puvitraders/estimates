const Summary = ({ items, tax }) => {
  const subTotal = items.reduce((t, i) => t + i.quantity * i.price, 0);
  const taxes = (tax / 100) * subTotal;
  const total = subTotal + taxes;

  return (
    <div className="pt-summary mt-5">
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
